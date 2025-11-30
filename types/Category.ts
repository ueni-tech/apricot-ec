export interface SubCategory {
  id: string
  label: string
  href: string
}

export interface Category {
  id: string
  label: string
  href: string
  subCategories: SubCategory[]
}

