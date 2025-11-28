import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import ItemDetail from '@/components/ItemDetail/ItemDetail'
import Recommend from '@/components/Recommend/Recommend'
import { getProduct } from '@/lib/products'
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

  const breadcrumbs = [
    { label: 'アプリコット', href: '/' },
    { label: product.category, href: '/search' },
    { label: product.subCategory, href: '/search' },
    { label: product.name, href: null },
  ]

  return (
    <div className={`${styles.itempage} content_width`}>
      {/* <Breadcrumbs items={breadcrumbs} /> */}
      <ItemDetail product={product} />
      {/* <Recommend productId={product.id} /> */}
    </div>
  )
}
