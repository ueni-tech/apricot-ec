import Link from 'next/link'
import styles from './ProductCard.module.scss'
import Image from 'next/image'
import Badge from '@/components/Badge/Badge'
import { ProductCardProps } from '@/types/Product'

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/items/&{product.id}`} className={styles.itemCardLink}>
      <div className={styles.itemCard}>
        <Image
          className={styles.itemCardImg}
          src={product.image}
          alt={product.name}
          width={188}
          height={250}
        />
        {product.badges?.map((badge, index) => (
          <Badge key={index} type={badge.type} text={badge.text} />
        ))}
        <p className={styles.itemCardName}>{product.name}</p>
        <p className={styles.itemCardPrice}>¥{product.price.toLocaleString()}</p>
        {product.discountPrice && (
          <p className={styles.itemCardDisPrice}>
            予約価格 ￥{product.discountPrice.toLocaleString()}
          </p>
        )}
      </div>
    </Link>
  )
}
