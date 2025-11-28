import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import ItemDetail from '@/components/ItemDetail/ItemDetail'
import Recommend from '@/components/Recommend/Recommend'
import { getProduct } from '@/lib/products'
import { notFound } from 'next/navigation'
import styles from './page.module.scss'

type Props = {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: Props) {
  // const product = await getProduct(params.id)
  const product = {
    id: '136321',
    name: 'クラッシュカットジャガード半袖カットソー',
    price: 1980,
    discountPrice: null,
    category: 'トップス',
    subCategory: 'カットソー',
    images: [
      '/img/item/136321_k1.jpg',
      '/img/item/136321_fit2.jpg',
      '/img/item/136321_fit6.jpg',
      '/img/item/136321_fit5.jpg',
      '/img/item/136321_fit3.jpg',
      '/img/item/136321_sl19.jpg',
      '/img/item/136321_sl18.jpg',
      '/img/item/136321_sl20.jpg',
      '/img/item/136321_s.gif',
    ],
    thumbnail: '/img/top/136321_k1.jpg',
    badges: [
      { type: 'new', text: 'New' },
      { type: 'arrived', text: '入荷済み' },
    ],
    colors: [
      {
        name: 'ホワイト',
        image: '/img/item/itemColor_white.jpg',
        sizes: ['S', 'M', 'L'],
        stock: { S: true, M: true, L: true },
      },
      {
        name: 'オレンジ',
        image: '/img/item/itemColor_orange.jpg',
        sizes: ['S', 'M', 'L'],
        stock: { S: true, M: true, L: true },
      },
      {
        name: 'ブルー',
        image: '/img/item/itemColor_blue.jpg',
        sizes: ['S', 'M', 'L'],
        stock: { S: true, M: true, L: true },
      },
      {
        name: 'ブラック',
        image: '/img/item/itemColor_black.jpg',
        sizes: ['S', 'M', 'L'],
        stock: { S: true, M: true, L: true },
      },
    ],
    description:
      'トレンドのカットジャガード生地を採用した半袖Tシャツ。やや短めの丈感で、ハイウエストのボトムやスカートをバランスよく合わせていただけます。',
    details: {
      productNumber: '1234567',
      origin: 'China',
      material: 'ポリエステル95％、ポリウレタン5％',
      sizes: {
        S: {
          length: 43,
          width: 44,
          shoulder: 35,
          sleeve: 21,
        },
        M: {
          length: 45,
          width: 46,
          shoulder: 36,
          sleeve: 22,
        },
        L: {
          length: 47,
          width: 48,
          shoulder: 37,
          sleeve: 23,
        },
      },
    },
    tags: ['トップス', 'カットソー', '半袖', '入荷済み', '新着'],
    point: 19,
    isNew: true,
    isPopular: false,
    isRestock: false,
    stockStatus: 'arrived',
  }

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
  // const product = await getProduct(params.id)
  const product = {
    id: '136321',
    name: 'クラッシュカットジャガード半袖カットソー',
    price: 1980,
    discountPrice: null,
    category: 'トップス',
    subCategory: 'カットソー',
    images: [
      '/img/item/136321_k1.jpg',
      '/img/item/136321_fit2.jpg',
      '/img/item/136321_fit6.jpg',
      '/img/item/136321_fit5.jpg',
      '/img/item/136321_fit3.jpg',
      '/img/item/136321_sl19.jpg',
      '/img/item/136321_sl18.jpg',
      '/img/item/136321_sl20.jpg',
      '/img/item/136321_s.gif',
    ],
    thumbnail: '/img/top/136321_k1.jpg',
    badges: [
      { type: 'new', text: 'New' },
      { type: 'arrived', text: '入荷済み' },
    ],
    colors: [
      {
        name: 'ホワイト',
        image: '/img/item/itemColor_white.jpg',
        sizes: ['S', 'M', 'L'],
        stock: { S: true, M: true, L: true },
      },
      {
        name: 'オレンジ',
        image: '/img/item/itemColor_orange.jpg',
        sizes: ['S', 'M', 'L'],
        stock: { S: true, M: true, L: true },
      },
      {
        name: 'ブルー',
        image: '/img/item/itemColor_blue.jpg',
        sizes: ['S', 'M', 'L'],
        stock: { S: true, M: true, L: true },
      },
      {
        name: 'ブラック',
        image: '/img/item/itemColor_black.jpg',
        sizes: ['S', 'M', 'L'],
        stock: { S: true, M: true, L: true },
      },
    ],
    description:
      'トレンドのカットジャガード生地を採用した半袖Tシャツ。やや短めの丈感で、ハイウエストのボトムやスカートをバランスよく合わせていただけます。',
    details: {
      productNumber: '1234567',
      origin: 'China',
      material: 'ポリエステル95％、ポリウレタン5％',
      sizes: {
        S: {
          length: 43,
          width: 44,
          shoulder: 35,
          sleeve: 21,
        },
        M: {
          length: 45,
          width: 46,
          shoulder: 36,
          sleeve: 22,
        },
        L: {
          length: 47,
          width: 48,
          shoulder: 37,
          sleeve: 23,
        },
      },
    },
    tags: ['トップス', 'カットソー', '半袖', '入荷済み', '新着'],
    point: 19,
    isNew: true,
    isPopular: false,
    isRestock: false,
    stockStatus: 'arrived',
  }

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
      <Breadcrumbs items={breadcrumbs} />
      <ItemDetail product={product} />
      <Recommend productId={product.id} />
    </div>
  )
}
