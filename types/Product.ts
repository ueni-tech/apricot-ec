export type BadgeType = 'new' | 'popular' | 're' | 'discount' | 'scheduled' | 'arrived'

export type ProductBadge = {
  type: BadgeType
  text: string
}

export type Product = {
  id: string
  name: string
  price: number
  discountPrice?: number
  image: string
  badges?: ProductBadge[]
  category?: string
  subCategory?: string
  description?: string
}

export type ProductCardProps = {
  product: Product
}
