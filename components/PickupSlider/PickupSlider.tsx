'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Link from 'next/link'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from './PickupSlider.module.scss'

type Slide = {
  image: string
  alt: string
  href?: string
}

type PickupSliderProps = {
  slides: Slide[]
}

export default function PickupSlider({ slides }: PickupSliderProps) {
  const slidesPerView = 2
  // ループモードが正しく機能するには、スライド数が slidesPerView * 2 以上必要
  const shouldLoop = slides.length >= slidesPerView * 2

  return (
    <div className={`${styles.swiper_block} items_wrapper`}>
      <Swiper
        modules={[Navigation]}
        slidesPerView={slidesPerView}
        spaceBetween={20}
        loop={shouldLoop}
        speed={1300}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className={styles.slider02}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {slide.href ? (
              <Link href={slide.href}>
                <Image src={slide.image} alt={slide.alt} width={400} height={300} />
              </Link>
            ) : (
              <Image src={slide.image} alt={slide.alt} width={400} height={300} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  )
}
