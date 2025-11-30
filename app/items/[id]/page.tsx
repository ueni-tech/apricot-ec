import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import ItemDetail from '@/components/ItemDetail/ItemDetail'
import Recommend from '@/components/Recommend/Recommend'
import categoriesData from '@/data/categories.json'
import { getProduct } from '@/lib/products'
import type { Category } from '@/types/Category'
import { notFound } from 'next/navigation'
import styles from './page.module.scss'

type Props = {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params
  const product = await getProduct(id)

  if (!product) {
    return {
      title: '商品がみつかりません | アプリコット レディースファッション通販',
    }
  }

  return {
    title: `${product.name} | アプリコット レディースファッション通販`,
    description: product.description,
  }
}

export default async function ItemPage({ params }: Props) {
  const { id } = await params
  const product = await getProduct(id)

  if (!product) {
    notFound()
  }

  // カテゴリラベルからIDを取得
  const category = (categoriesData as Category[]).find((cat) => cat.label === product.category)
  const categoryId = category?.id || ''
  const subCategory = category?.subCategories.find((sub) => sub.label === product.subCategory)
  const subCategoryId = subCategory?.id || ''

  const breadcrumbs = [
    { label: 'アプリコット', href: '/' },
    ...(categoryId ? [{ label: product.category, href: '#' }] : [{ label: product.category, href: '#' }]),
    ...(subCategoryId ? [{ label: product.subCategory, href: '#' }] : [{ label: product.subCategory, href: '#' }]),
    { label: product.name, href: null },
  ]

  return (
    <div className={`${styles.itempage} content_width`}>
      <Breadcrumbs items={breadcrumbs} variant="itempage" />
      <ItemDetail product={product} />
      {/* <Recommend productId={product.id} /> */}
    </div>
  )
}
