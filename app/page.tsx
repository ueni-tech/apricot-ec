import MainVisual from '@/components/MainVisual/MainVisual'
import Info from '@/components/Info/Info'
import ContentBlock from '@/components/ContentBlock/ContentBlock'
import styles from './page.module.scss'

const slides = [
  { image: '/img/top/mv_2022SS.jpg', alt: '2022 Summer Season Collection', href: '#' },
  { image: '/img/top/mv_dress.jpg', alt: 'Dress Collection', href: '#' },
  { image: '/img/top/mv_Tshirt.jpg', alt: 'Tshirt Collection', href: '#' },
]

export default function Home() {
  return (
    <div className={styles.toppage}>
      <MainVisual slides={slides} />
      <Info />
      <ContentBlock />
    </div>
  )
}
