import styles from '@/components/ContentBlock/ContentBlock.module.scss'
import { ReactNode } from 'react'

type ContentBlockProps = {
  children: ReactNode
}

export default function ContentBlock({ children }: ContentBlockProps) {
  return <div className={styles.content_block}>{children}</div>
}
