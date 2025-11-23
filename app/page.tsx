import MainVisual from '@/app/components/MainVisual/MainVisual'
import Info from './components/Info/Info'
import ContentBlock from './components/ContentBlock/ContentBlock'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.toppage}>
      <MainVisual />
      <Info />
      <ContentBlock />
    </div>
  )
}
