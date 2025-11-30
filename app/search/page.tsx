import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import SearchContent from '@/components/SearchContent/SearchContent'
import SideMenu from '@/components/SideMenu/SideMenu'
import categoriesData from '@/data/categories.json'
import type { Category } from '@/types/Category'
import { notFound } from 'next/navigation'
import styles from './page.module.scss'

type Props = {
  searchParams: Promise<{
    category?: string
    subCategory?: string
  }>
}

export async function generateMetadata({ searchParams }: Props) {
  const params = await searchParams
  const categoryId = params.category || ''
  const subCategoryId = params.subCategory || ''

  const category = (categoriesData as Category[]).find((cat) => cat.id === categoryId)
  const categoryLabel = category?.label || categoryId
  const subCategory = category?.subCategories.find((sub) => sub.id === subCategoryId)
  const subCategoryLabel = subCategory?.label || subCategoryId

  const title = subCategoryLabel
    ? `${subCategoryLabel} | APRICOT アプリコット レディースファッション通販`
    : categoryLabel
      ? `${categoryLabel} | APRICOT アプリコット レディースファッション通販`
      : '商品検索 | APRICOT アプリコット レディースファッション通販'

  return {
    title,
    description: subCategoryLabel
      ? `${subCategoryLabel}の検索結果ページ`
      : categoryLabel
        ? `${categoryLabel}の検索結果ページ`
        : '商品検索結果ページ',
  }
}

export default async function SearchPage({ searchParams }: Props) {
  const params = await searchParams
  const categoryId = params.category || ''
  const subCategoryId = params.subCategory || ''

  // カテゴリIDからラベルを取得
  const category = (categoriesData as Category[]).find((cat) => cat.id === categoryId)

  // カテゴリーパラメータが存在するが、カテゴリーが見つからない場合はnotFound
  if (categoryId && !category) {
    notFound()
  }

  const categoryLabel = category?.label || categoryId

  // サブカテゴリIDからラベルを取得
  const subCategory = category?.subCategories.find((sub) => sub.id === subCategoryId)

  // サブカテゴリーパラメータが存在するが、サブカテゴリーが見つからない場合はnotFound
  if (subCategoryId && (!category || !subCategory)) {
    notFound()
  }

  const subCategoryLabel = subCategory?.label || subCategoryId

  const breadcrumbs = [
    { label: 'アプリコット', href: '/' },
    ...(categoryId ? [{ label: categoryLabel, href: '#' }] : []),
    ...(subCategoryId ? [{ label: subCategoryLabel, href: '#' }] : []),
  ]

  return (
    <div className={`${styles.searchpage} content_width`}>
      <Breadcrumbs items={breadcrumbs} variant="searchpage" />
      <div className="content_block">
        <SideMenu />
        <SearchContent />
      </div>
    </div>
  )
}
