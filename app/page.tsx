import MainVisual from '@/components/MainVisual/MainVisual'
import Info from '@/components/Info/Info'
import ContentBlock from '@/components/ContentBlock/ContentBlock'
import styles from './page.module.scss'

export default function Home() {
  return (
    <div className={styles.toppage}>
      <MainVisual />
      <Info />
      <ContentBlock />
    </div>
  )
}
