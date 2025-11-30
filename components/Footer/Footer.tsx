'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.scss'

type FooterSection = {
  title: string
  links: Array<{
    label: string
    href: string
  }>
}

const footerSections: FooterSection[] = [
  {
    title: 'おすすめコンテンツ',
    links: [
      { label: 'スタッフスタイリング', href: '#' },
      { label: '新着アイテム', href: '#' },
      { label: 'アイテムランキング', href: '#' },
      { label: '再入荷アイテム', href: '#' },
    ],
  },
  {
    title: 'お買い物メニュー',
    links: [
      { label: '新規会員登録', href: '#' },
      { label: 'ログイン', href: '#' },
      { label: 'お気に入り', href: '#' },
      { label: '閲覧履歴', href: '#' },
      { label: 'ショッピングカート', href: '#' },
      { label: 'ショッピングガイド', href: '#' },
      { label: 'お問い合わせ', href: '#' },
      { label: 'プライバシーポリシー', href: '#' },
      { label: '特定商取引法に基づく表記', href: '#' },
      { label: '会社概要', href: '#' },
    ],
  },
]

const snsLinks = [
  { icon: 'fa-brands fa-facebook-square', label: 'FACEBOOK', href: '#' },
  { icon: 'fa-brands fa-instagram-square', label: 'INSTAGRAM', href: '#' },
  { icon: 'fa-brands fa-x-twitter', label: 'X', href: '#' },
  { icon: 'fa-brands fa-line', label: 'LINE', href: '#' },
]

export default function Footer() {
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({})
  const toggleSection = (index: number) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_inner}>
        {footerSections.map((section, index) => (
          <div key={index} className={styles.footer_content}>
            <p
              className={`${styles.footer_title} ${styles.has_sub} ${openSections[index] ? styles.active : ''}`}
              onClick={() => toggleSection(index)}
            >
              <span>{section.title}</span>
              <Image
                src="/img/top/chevron-down.png"
                alt=""
                className={styles.footer_chevron}
                width={12}
                height={12}
              />
            </p>
            <ul className={`${styles.footer_list} ${openSections[index] ? styles.active : ''}`}>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className={styles.footer_Item}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className={`${styles.footer_content} ${styles.footer_content_sns}`}>
          <p className={styles.footer_title}>OFFICIAL SNS</p>
          <ul className={styles.footer_list}>
            {snsLinks.map((sns, index) => (
              <li key={index} className={`${styles.footer_Item} ${styles.footer_ItemEN}`}>
                <Link href={sns.href} className={styles.sns_link}>
                  <i className={sns.icon}></i>
                  <span>{sns.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <small className={styles.copyright}>copyright © 2025 APRICOT Inc. All Right Researved</small>
    </footer>
  )
}
