'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import styles from './Header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import productTypesData from '@/data/productTypes.json'
import categoriesData from '@/data/categories.json'
import type { ProductType } from '@/types/ProductType'
import type { Category } from '@/types/Category'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openSubMenus, setOpenSubMenus] = useState<Record<number, boolean>>({})
  const pathname = usePathname()
  const productTypes = productTypesData as ProductType[]
  const categories = categoriesData as Category[]

  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.classList.add('open')
      document.body.style.overflow = 'hidden'
    } else {
      document.documentElement.classList.remove('open')
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  useEffect(() => {
    setIsMenuOpen(false)
    setOpenSubMenus({})
  }, [pathname])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleSubMenu = (index: number) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <header className={styles.header}>
      <div className={`${styles.header_inner} content_width`}>
        <button
          type="button"
          className={styles.humb_btn}
          onClick={toggleMenu}
          aria-label="メニューを開く"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className={styles.header_body}>
          <Link href="/" className={styles.header_link}>
            <h1 className={styles.site_title}>APRICOT</h1>
            <span className={styles.site_subtitle}>Elegance & Mignonne</span>
          </Link>
        </div>
        <div className={styles.header_menu}>
          <ul className={styles.header_list}>
            <li
              className={`${styles.header_list_item} ${styles.search_bar_wrapper} ${styles.search_bar_wrapper_pc}`}
            >
              <form action="#" className="form">
                <input className={styles.search_bar_input} type="text" placeholder="SEARCH" />
                <button className={styles.search_bar_btn}></button>
              </form>
            </li>
            <li
              className={`${styles.header_list_item} ${styles.search_bar_wrapper} ${styles.search_bar_wrapper_sp}`}
            >
              <form action="#" className="form">
                <Link href="#" className="searchBarBtn">
                  <Image
                    className={styles.search_bar_icon}
                    src="/img/top/magnifying-glass-icon.png"
                    alt="検索ボタン"
                    width={20}
                    height={20}
                  />
                </Link>
                <input className={styles.search_bar_input} type="text" placeholder="SEARCH" />
              </form>
            </li>
            <li className={`${styles.header_list_item} ${styles.user_icon_wrapper}`}>
              <Link href="#" className={styles.header_menu_link}>
                <Image
                  className="userIcon"
                  src="/img/top/user-solid.png"
                  alt="ユーザーアイコン"
                  width={20}
                  height={20}
                />
              </Link>
            </li>
            <li className={`${styles.header_list_item} ${styles.shopping_cart_icon_wrapper}`}>
              <Link href="#" className={styles.header_menu_link}>
                <Image
                  className="shoppingCartIcon"
                  src="/img/top/cart-shopping-solid.png"
                  alt="ショッピングカートアイコン"
                  width={20}
                  height={20}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <nav className={`${styles.humb_menu} ${isMenuOpen ? styles.open : ''}`}>
        <p className={styles.humb_menu_title}>商品タイプで探す</p>
        <ul className={styles.humb_menu_list}>
          {productTypes.map((item, index) => (
            <li key={index} className={styles.humb_menu_item}>
              <Link href="#" className={styles.humb_menu_link}>
                <span>{item.label}</span>
                <Image
                  src="/img/top/chevron-right-small.png"
                  alt=""
                  width={7}
                  height={13}
                  className={styles.humb_menu_chevron}
                />
              </Link>
            </li>
          ))}
        </ul>
        <p className={styles.humb_menu_title}>カテゴリから探す</p>
        <ul className={styles.humb_menu_list}>
          {categories.map((category, index) => (
            <li key={index} className={styles.humb_menu_item}>
              {category.subCategories ? (
                <>
                  <button
                    type="button"
                    className={`${styles.humb_menu_btn} ${openSubMenus[index] ? styles.active : ''}`}
                    onClick={() => toggleSubMenu(index)}
                  >
                    <span>{category.label}</span>
                    <Image
                      src="/img/top/chevron-down.png"
                      alt=""
                      width={7}
                      height={13}
                      className={styles.humb_menu_chevron}
                    />
                  </button>
                  <ul
                    className={`${styles.humb_sub_menu} ${openSubMenus[index] ? styles.open : ''}`}
                  >
                    {category.subCategories.map((subItem, subIndex) => (
                      <li key={subIndex} className={styles.humb_sub_menu_item}>
                        <Link href="#" className={styles.humb_sub_menu_link}>
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link href="#" className={styles.humb_menu_link}>
                  <span>{category.label}</span>
                  <Image
                    src="/img/top/chevron-right-small.png"
                    alt=""
                    width={7}
                    height={13}
                    className={styles.humb_menu_chevron}
                  />
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
