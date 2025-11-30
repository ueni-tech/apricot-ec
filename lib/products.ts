import productsData from '@/data/products.json'
import { Product } from '@/types/Product'

// 全商品を取得
export function getAllProducts(): Product[] {
  return productsData as Product[]
}

// IDで商品を取得
export function getProduct(id: string): Product | undefined {
  return getAllProducts().find((product) => product.id === id)
}

// 新着商品を取得
export function getNewProducts(limit?: number): Product[] {
  const newProducts = getAllProducts()
    .filter((product) => product.isNew)
    .sort((a, b) => {
      return parseInt(b.id) - parseInt(a.id)
    })

  return limit ? newProducts.slice(0, limit) : newProducts
}

// 人気商品を取得
export function getPopularProducts(limit?: number): Product[] {
  const popularProducts = getAllProducts()
    .filter((product) => product.isPopular)
    .sort((a, b) => {
      return a.price - b.price
    })

  return limit ? popularProducts.slice(0, limit) : popularProducts
}

// 再入荷商品を取得
export function getRestockProducts(limit?: number): Product[] {
  const restockProducts = getAllProducts()
    .filter((product) => product.isRestock)
    .sort((a, b) => {
      return parseInt(b.id) - parseInt(a.id)
    })

  return limit ? restockProducts.slice(0, limit) : restockProducts
}
