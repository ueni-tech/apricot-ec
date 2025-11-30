import Link from 'next/link'
import styles from './Breadcrumbs.module.scss'

type BreadcrumbItem = {
  label: string
  href: string | null
}

type BreadcrumbsProps = {
  items: BreadcrumbItem[]
  variant?: 'itempage' | 'searchpage'
}

export default function Breadcrumbs({ items, variant = 'itempage' }: BreadcrumbsProps) {
  const breadcrumbsClassName = `${styles.breadcrumbs} ${styles[variant] || ''}`.trim()

  return (
    <nav className={breadcrumbsClassName}>
      <ol className={styles.breadcrumbsList}>
        {items.map((item, index) => (
          <li key={index} className={styles.breadcrumbsItem}>
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
