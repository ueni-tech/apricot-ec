'use client'

import { useState } from 'react'
import styles from './CategoryNav.module.scss'
import Image from 'next/image'
import Link from 'next/link'

type CategoryItem = {
  label: string
  href: string
  subItems?: CategoryItem[]
}

type CategoryNavProps = {
  productTypes: CategoryItem[]
  categories: CategoryItem[]
}

export default function CategoryNav({ productTypes, categories }: CategoryNavProps) {
  const [openCategories, setOpenCategories] = useState<Record<number, boolean>>({})

  const toggleCattegory = (index: number) => {
    setOpenCategories((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <nav className={styles.side_menu}>
      <p className={styles.side_menu_title}>商品タイプで探す</p>
      <ul className={styles.side_menu_list}>
        {productTypes.map((item, index) => (
          <li key={index} className={styles.side_menu_item}>
            <Link href={item.href} className={styles.side_menu_link}>
              <span>{item.label}</span>
              <Image
                src="/img/top/chevron-right-solid.png"
                alt=""
                width={7}
                height={13}
                className={styles.side_menu_chevron}
              />
            </Link>
          </li>
        ))}
      </ul>
      <p className={styles.side_menu_title}>カテゴリから探す</p>
      <ul className={styles.side_menu_list}>
        {categories.map((category, index) => (
          <li key={index} className={`${styles.side_menu_item} ${styles.has_sub}`}>
            <Link
              href={category.href}
              className={styles.side_menu_link}
              onClick={() => category.subItems && toggleCattegory(index)}
            >
              <span>{category.label}</span>
              <Image
                src="/img/top/chevron-right-solid.png"
                alt=""
                width={7}
                height={13}
                className={styles.side_menu_chevron}
              />
            </Link>
            {category.subItems && (
              <ul className={`${styles.sub_menu} ${openCategories[index] ? styles.open : ''}`}>
                {category.subItems.map((subItem, subIndex) => (
                  <li key={subIndex} className={styles.sub_menu_item}>
                    <Link href={subItem.href} className={styles.sub_menu_link}>
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
