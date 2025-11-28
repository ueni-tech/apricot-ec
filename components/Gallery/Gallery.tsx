'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs, Navigation, EffectFade } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/thumbs'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import styles from './Gallery.module.scss'

type GalleryProps = {
  images: string[]
  alt?: string
}

export default function Gallery({ images, alt = '商品画像' }: GalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

  const mainSlidesPerView = 1
  const thumbsSlidesPerView = 9
  // ループモードが正しく機能するには、スライド数が slidesPerView * 2 以上必要
  const mainShouldLoop = images.length >= mainSlidesPerView * 2
  const thumbsShouldLoop = images.length >= thumbsSlidesPerView * 2

  return (
    <div className={styles.gallery_wrapper}>
      <Swiper
        modules={[Thumbs, Navigation, EffectFade]}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        navigation={{
          nextEl: `.${styles.swiper_next}`,
          prevEl: `.${styles.swiper_prev}`,
        }}
        loop={mainShouldLoop}
        effect="fade"
        className={styles.gallery}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt={`${alt} ${index + 1}`}
              width={560}
              height={750}
              priority={index === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        slidesPerView={thumbsSlidesPerView}
        spaceBetween={10}
        loop={thumbsShouldLoop}
        watchSlidesProgress={true}
        className={styles.choice_btn}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image src={image} alt={`${alt} サムネイル ${index + 1}`} width={93} height={125} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.swiper_prev}></div>
      <div className={styles.swiper_next}></div>
    </div>
  )
}
