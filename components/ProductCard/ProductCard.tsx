import Link from 'next/link'
import styles from './ProductCard.module.scss'
import Image from 'next/image'
import Badge from '@/components/Badge/Badge'
import { ProductCardProps } from '@/types/Product'

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/items/${product.id}`} className={styles.item_card_link}>
      <div className={styles.item_card}>
        <Image
          className={styles.item_card_img}
          src={product.thumbnail}
          alt={product.name}
          width={188}
          height={250}
        />
        <div className={styles.item_card_badges_wrapper}>
          {product.badges?.map((badge, index) => (
            <Badge key={index} type={badge.type} text={badge.text} />
          ))}
        </div>
        <p className={styles.item_card_name}>{product.name}</p>
        <p className={styles.item_card_price}>¥{product.price.toLocaleString()}</p>
        {product.discountPrice && (
          <p className={styles.item_card_dis_price}>
            予約価格 ￥{product.discountPrice.toLocaleString()}
          </p>
        )}
      </div>
    </Link>
  )
}
