'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import ProductCard from '@/components/ProductCard/ProductCard'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from './RecommendSlider.module.scss'

type Product = {
  id: string
  name: string
  price: number
  discountPrice?: number
  image: string
  badges?: Array<{
    type: 'new' | 'popular' | 're' | 'discount' | 'scheduled' | 'arrived'
    text: string
  }>
}

type RecommendSliderProps = {
  products: Product[]
}

export default function RecommendSlider({ products }: RecommendSliderProps) {
  const slidesPerView = 2
  // ループモードが正しく機能するには、スライド数が slidesPerView * 2 以上必要
  const shouldLoop = products.length >= slidesPerView * 2
  return (
    <div className={styles.swiper_block}>
      <Swiper
        modules={[Navigation]}
        slidesPerView={5}
        spaceBetween={10}
        loop={shouldLoop}
        speed={800}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className={styles.slider03}
        breakpoints={{
          960: {
            slidesPerView: 5,
          },
          640: {
            slidesPerView: 3,
          },
          0: {
            slidesPerView: 2,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  )
}
