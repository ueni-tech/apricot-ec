'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
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
  const slidesPerView = 1
  // ループモードが正しく機能するには、スライド数が slidesPerView * 2 以上必要
  const shouldLoop = slides.length >= slidesPerView * 2

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
          className={styles.slider01}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {slide.href ? (
                <Link href={slide.href}>
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    width={800}
                    height={600}
                    priority={index === 0}
                  />
                </Link>
              ) : (
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  width={800}
                  height={600}
                  priority={index === 0}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
