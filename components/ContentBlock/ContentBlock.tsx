import styles from '@/components/ContentBlock/ContentBlock.module.scss'
import { ReactNode } from 'react'
import CategoryNav from '@/components/CategoryNav/CategoryNav'
import categoriesData from '@/data/categories.json'
import productTypesData from '@/data/productTypes.json'
import type { Category } from '@/types/Category'
import type { ProductType } from '@/types/ProductType'


type ContentBlockProps = {
  children: ReactNode
}

export default function ContentBlock({ children }: ContentBlockProps) {
  return (
    <div className={`${styles.content_block} content_width`}>
      <CategoryNav productTypes={productTypesData as ProductType[]} categories={categoriesData as Category[]} />
      <div className={styles.content_block_main}>
        {children}
      </div>
    </div>
  )
}
