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
      <div className={`${styles.header_inner} contentWidth`}>
        <button
          type="button"
          className={styles.humbBtn}
          onClick={toggleMenu}
          aria-label="メニューを開く"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className={styles.header_body}>
          <Link href="/" className={styles.header_link}>
            <h1 className={styles.siteTitle}>APRICOT</h1>
            <span className={styles.siteSubtitle}>Elegance & Mignonne</span>
          </Link>
        </div>
        <div className={styles.header_menu}>
          <ul className={styles.header_list}>
            <li
              className={`${styles.header_listItem} ${styles.searchBar_wrapper} ${styles.searchBar_wrapperPc}`}
            >
              <form action="#" className="form">
                <input className={styles.searchBar_input} type="text" placeholder="SEARCH" />
                <button className={styles.searchBar_btn}></button>
              </form>
            </li>
            <li
              className={`${styles.header_listItem} ${styles.searchBar_wrapper} ${styles.searchBar_wrapperSp}`}
            >
              <form action="#" className="form">
                <Link href="#" className="searchBar_btn">
                  <Image
                    className={styles.searchBarIcon}
                    src="/img/top/magnifying-glass-icon.png"
                    alt="検索ボタン"
                    width={20}
                    height={20}
                  />
                </Link>
                <input className={styles.searchBar_input} type="text" placeholder="SEARCH" />
              </form>
            </li>
            <li className={`${styles.header_listItem} ${styles.userIconWrapper}`}>
              <Link href="#" className={styles.headerMenu_link}>
                <Image
                  className="userIcon"
                  src="/img/top/user-solid.png"
                  alt="ユーザーアイコン"
                  width={20}
                  height={20}
                />
              </Link>
            </li>
            <li className={`${styles.header_listItem} ${styles.shoppingCartIconWrapper}`}>
              <Link href="#" className={styles.headerMenu_link}>
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
      <nav className={styles.humbMenu}>{/* ハンバーガーメニューのコンテンツ */}</nav>
    </header>
  )
}
