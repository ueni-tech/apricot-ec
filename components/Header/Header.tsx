'use client'
import { useState } from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
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
          <Link href="#" className={styles.header_link}>
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
      <nav className={styles.humb_menu}>{/* ハンバーガーメニューのコンテンツ */}</nav>
    </header>
  )
}
