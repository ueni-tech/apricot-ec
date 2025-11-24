'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import Link from 'next/link'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import styles from './Slider.module.scss'

type Slide = {
  image: string
  alt: string
  href?: string
}

type SliderProps = {
  slides: Slide[]
  variant?: 'main' | 'pickup' | 'recommend'
  autoplay?: boolean
  navigation?: boolean
}

export default function Slider({
  slides,
  variant = 'main',
  autoplay = false,
  navigation = false,
}: SliderProps) {
  const swiperConfig = {
    modules: [Pagination, Navigation, Autoplay],
    spaceBetween: variant === 'pickup' ? 20 : 10,
    slidesPerView: variant === 'pickup' ? 2 : variant === 'recommend' ? 5 : 1,
    loop: true,
    speed: variant === 'main' ? 1300 : 800,
    autoplay: autoplay ? { delay: 5000, disableOnInteraction: false } : false,
    pagination: variant === 'main' ? { clickable: true } : false,
    navigation: navigation
      ? { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
      : false,
  }

  return (
    <div className={`${styles.swiperBlock} ${styles[variant]}`}>
      <Swiper {...swiperConfig} className={styles.slider}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {slide.href ? (
              <Link href={slide.href}>
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  width={variant === 'main' ? 800 : 400}
                  height={variant === 'main' ? 600 : 300}
                />
              </Link>
            ) : (
              <Image
                src={slide.image}
                alt={slide.alt}
                width={variant === 'main' ? 800 : 400}
                height={variant === 'main' ? 600 : 300}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {navigation && (
        <>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </>
      )}
    </div>
  )
}
