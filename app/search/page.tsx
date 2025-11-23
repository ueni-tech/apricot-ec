import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'
import SearchContent from '../components/SearchContent/SearchContent'
import SideMenu from '../components/SideMenu/SideMenu'
import styles from './page.module.scss'

export const metadata = {
  title: 'カットソー | APRICOT アプリコット レディースファッション通販',
  description: 'カットソーの検索結果ページ',
}

export default function SearchPage() {
  const breadcrumbs = [
    { label: 'アプリコット', href: '/' },
    { label: 'トップス', href: '/search' },
    { label: 'カットソー', href: null },
  ]

  return (
    <div className={`${styles.searchpage} contentWidth`}>
      <Breadcrumbs items={breadcrumbs} />
      <div className="contentBlock">
        <SideMenu />
        <SearchContent />
      </div>
    </div>
  )
}
