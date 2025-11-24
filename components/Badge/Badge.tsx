import styles from './Badge.module.scss'
import { BadgeType } from '@/types/Product'

type BadgeProps = {
  type: BadgeType
  text: string
  long?: boolean
}

export default function Badge({ type, text, long = false }: BadgeProps) {
  return (
    <div className={`${styles.badge} ${styles[type]} ${long ? styles.long : ''}`}>
      <p className={styles.badgeText}>{text}</p>
    </div>
  )
}
