export type BadgeType = 'new' | 'popular' | 're' | 'discount' | 'scheduled' | 'arrived'

export type StockStatus = 'arrived' | 'scheduled' | 'out_of_stock'

export interface Badge {
  type: BadgeType
  text: string
}

export interface Color {
  name: string
  image: string
  sizes: string[]
  stock: Record<string, boolean>
}

export interface SizeDetail {
  length: number
  width: number
  shoulder: number
  sleeve: number
}

export interface ProductDetails {
  productNumber: string
  origin: string
  material: string
  sizes: Record<string, SizeDetail>
}

export interface Product {
  id: string
  name: string
  price: number
  discountPrice: number | null
  category: string
  subCategory: string
  images: string[]
  thumbnail: string
  badges: Badge[]
  colors: Color[]
  description: string
  details: ProductDetails
  tags: string[]
  point: number
  isNew: boolean
  isPopular: boolean
  isRestock: boolean
  stockStatus: StockStatus
}

export type ProductCardProps = {
  product: {
    id: string
    name: string
    price: number
    discountPrice?: number | null
    thumbnail: string
    badges?: Badge[]
  }
}
