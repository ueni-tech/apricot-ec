'use client'

import { useEffect, useRef, useCallback } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import styles from './MainVisual.module.scss'

type Slide = {
  image: string
  alt: string
  href?: string
}

type MainVisualProps = {
  slides: Slide[]
}

export default function MainVisual({ slides }: MainVisualProps) {
  const swiperRef = useRef<SwiperType | null>(null)
  const pathname = usePathname()
  const updateTimerRef = useRef<NodeJS.Timeout | null>(null)
  const loadedImagesRef = useRef<Set<number>>(new Set())
  const slidesPerView = 1
  // ループモードが正しく機能するには、スライド数が slidesPerView * 2 以上必要
  const shouldLoop = slides.length >= slidesPerView * 2

  // Swiperを安全に更新する関数
  const updateSwiper = useCallback(() => {
    if (updateTimerRef.current) {
      clearTimeout(updateTimerRef.current)
    }
    updateTimerRef.current = setTimeout(() => {
      if (swiperRef.current && !swiperRef.current.destroyed) {
        swiperRef.current.updateSize()
        swiperRef.current.updateSlides()
        swiperRef.current.updateAutoHeight()
      }
    }, 50)
  }, [])

  // ページ遷移後にSwiperを更新
  useEffect(() => {
    loadedImagesRef.current.clear()
    return () => {
      if (updateTimerRef.current) {
        clearTimeout(updateTimerRef.current)
      }
    }
  }, [pathname])

  // Swiperインスタンスが設定された後に更新
  useEffect(() => {
    if (swiperRef.current && !swiperRef.current.destroyed) {
      updateSwiper()
    }
  }, [updateSwiper])

  // 画像読み込み後にSwiperを更新（各画像で一度だけ）
  const handleImageLoad = useCallback((index: number) => {
    if (!loadedImagesRef.current.has(index)) {
      loadedImagesRef.current.add(index)
      // 画像読み込み後は即座に更新
      if (swiperRef.current && !swiperRef.current.destroyed) {
        swiperRef.current.updateAutoHeight()
      }
    }
  }, [])

  // Swiper初期化後に更新
  const handleSwiperInit = useCallback(() => {
    updateSwiper()
  }, [updateSwiper])

  return (
    <div className={styles.main_visual}>
      <div className={`${styles.main_visual_inner} content_width`}>
        <div className={styles.main_visual_body}>
          <p className={styles.main_visual_title}>APRICOT</p>
          <p className={styles.main_visual_subtitle}>
            Elegance
            <br />&<br />
            Mignonne
          </p>
        </div>
        <Swiper
          modules={[Pagination, Autoplay]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          onInit={handleSwiperInit}
          pagination={{
            clickable: true,
            type: 'bullets',
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={shouldLoop}
          speed={1300}
          autoHeight={true}
          className={styles.slider01}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <div className={styles.image_wrapper}>
                {slide.href ? (
                  <Link href={slide.href} className={styles.image_link}>
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      width={1150}
                      height={600}
                      priority={index === 0}
                      onLoad={() => handleImageLoad(index)}
                      className={styles.image}
                    />
                  </Link>
                ) : (
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    width={1150}
                    height={600}
                    priority={index === 0}
                    onLoad={() => handleImageLoad(index)}
                    className={styles.image}
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
