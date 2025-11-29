import MainVisual from '@/components/MainVisual/MainVisual'
import Info from '@/components/Info/Info'
import styles from './page.module.scss'
import PickupSlider from '@/components/PickupSlider/PickupSlider'
import ContentBlock from "@/components/ContentBlock/ContentBlock"

const mainVisualSlides = [
  {
    image: '/img/top/mv_2022SS.jpg',
    alt: '2022年 サマーシーズン コレクション',
    href: '#',
  },
  {
    image: '/img/top/mv_Tshirt.jpg',
    alt: 'Tシャツ コレクション',
    href: '#',
  },
  {
    image: '/img/top/mv_dress.jpg',
    alt: 'ドレス コレクション',
    href: '#',
  },
]

const pickupSlides = [
  {
    image: '/img/top/banner_01.jpg',
    alt: '2022年 サマーシーズン コレクション',
    href: '#',
  },
  {
    image: '/img/top/banner_02.jpg',
    alt: 'デニムパンツ6選',
    href: '#',
  },
  {
    image: '/img/top/banner_01.jpg',
    alt: '2022年 サマーシーズン コレクション',
    href: '#',
  },
  {
    image: '/img/top/banner_02.jpg',
    alt: 'デニムパンツ6選',
    href: '#',
  },
]

export default function Home() {
  return (
    <div className="toppage">
      <MainVisual slides={mainVisualSlides} />
      <Info />
      <ContentBlock>
        <p>hello</p>
        <div className="content_block_content">
          <PickupSlider slides={pickupSlides} />
        </div>
      </ContentBlock >
    </div >
  )
}
