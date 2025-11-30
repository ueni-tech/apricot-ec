'use client'

import { Product } from '@/types/Product'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from './ItemDetail.module.scss'
import Gallery from "../Gallery/Gallery"
import Badge from "../Badge/Badge"

type ItemDetailProps = {
  product: Product
}

export default function ItemDetail({ product }: ItemDetailProps) {
  const [activeTab, setActiveTab] = useState<'tab01' | 'tab02'>('tab01')
  const displayPrice = product.discountPrice ?? product.price
  const formattedPrice = displayPrice.toLocaleString('ja-JP')
  const formattedDiscountPrice = product.discountPrice ? product.price.toLocaleString('ja-JP') : null

  // サイズテーブルのヘッダーを動的に生成
  const sizeKeys = product.details.sizes ? Object.keys(product.details.sizes) : []
  const firstSize = sizeKeys.length > 0 ? product.details.sizes[sizeKeys[0]] : null
  const sizeHeaders = firstSize ? Object.keys(firstSize) : []

  // サイズヘッダーの日本語マッピング
  const sizeHeaderMap: Record<string, string> = {
    length: '着丈(cm)',
    width: '身幅(cm)',
    shoulder: '肩幅(cm)',
    sleeve: '袖丈(cm)',
    waist: 'ウエスト(cm)',
    hem: '裾幅(cm)',
    hip: 'ヒップ(cm)',
    inseam: '股上(cm)',
  }

  return (
    <div className="item_detail">
      <div className={styles.item_detail_left_content}>
        <Gallery images={product.images} alt={product.name} />
        <div className={styles.item_detail_descriptionSp}>
          <header className={styles.item_detail_header}>
            <div className={styles.item_detail_badges}>
              {product.badges.map((badge) => (
                <Badge key={badge.type} type={badge.type} text={badge.text} />
              ))}
            </div>
            <h2 className={styles.item_detail_name}>{product.name}</h2>
          </header>
          <p className={`${styles.item_detail_price} ${product.discountPrice ? styles.item_detail_price_discount : ''}`}>
            {product.discountPrice && (
              <span className={styles.item_detail_price_original}>¥{formattedDiscountPrice}</span>
            )}
            <span className={styles.item_detail_price_current}>¥{formattedPrice}</span><span className={styles.item_detail_price_tax}>(税込)</span>
          </p>
          <p className={styles.item_detailPoint}><Image className={styles.item_detail_point_icon} src="/img/item/icon_point.png"
            alt="ポイントアイコン" width={20} height={20} />{product.point}ポイント獲得</p>
          <div className={styles.item_detail_sns_shareWrapper}>
            <p className={styles.item_detail_sns_share}>
              <Image className={styles.item_detail_sns_share_icon} src="/img/item/icon_share.png" alt="共有アイコン" width={20} height={20} />
            </p>
            <ul className={styles.item_detail_sns_shareList}>
              <li className={styles.item_detail_sns_shareItem}><Link href="#" className="sns_link"><i
                className="fa-brands fa-facebook-square"></i></Link></li>
              <li className={styles.item_detail_sns_shareItem}><Link href="#" className="sns_link"><i
                className="fa-brands fa-instagram-square"></i></Link></li>
              <li className={styles.item_detail_sns_shareItem}><Link href="#" className="sns_link"><i
                className="fa-brands fa-twitter-square"></i></Link></li>
              <li className={styles.item_detail_sns_shareItem}><Link href="#" className="sns_link"><i
                className="fa-brands fa-line"></i></Link></li>
            </ul>
          </div>
        </div>
        <div className={styles.item_tag_block}>
          <p className={styles.item_tag_title}>アイテムタグ</p>
          <div className={styles.item_tagWrapper}>
            {product.tags.map((tag) => (
              <Link key={tag} href="#" className={styles.item_tagItem}>#{tag}</Link>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.item_detail_right_content}>
        <div className={styles.item_detail_descriptionPc}>
          <header className={styles.item_detail_header}>
            {product.badges.map((badge) => (
              <Badge key={badge.type} type={badge.type} text={badge.text} />
            ))}
            <h2 className={styles.item_detail_name}>{product.name}</h2>
          </header>
          <p className={`${styles.item_detail_price} ${product.discountPrice ? styles.item_detail_price_discount : ''}`}>
            {product.discountPrice && (
              <span className={styles.item_detail_price_original}>¥{formattedDiscountPrice}</span>
            )}
            <span className={styles.item_detail_price_current}>¥{formattedPrice}</span><span className={styles.item_detail_price_tax}>(税込)</span>
          </p>
          <p className={styles.item_detailPoint}><Image className={styles.item_detail_point_icon} src="/img/item/icon_point.png"
            alt="ポイントアイコン" width={20} height={20} />{product.point}ポイント獲得</p>
          <div className={styles.item_detail_sns_shareWrapper}>
            <p className={styles.item_detail_sns_share}>
              <Image className={styles.item_detail_sns_share_icon} src="/img/item/icon_share.png" alt="共有アイコン" width={20} height={20} />
            </p>
            <ul className={styles.item_detail_sns_shareList}>
              <li className={styles.item_detail_sns_shareItem}><Link href="#" className="sns_link"><i
                className="fa-brands fa-facebook-square"></i></Link></li>
              <li className={styles.item_detail_sns_shareItem}><Link href="#" className="sns_link"><i
                className="fa-brands fa-instagram-square"></i></Link></li>
              <li className={styles.item_detail_sns_shareItem}><Link href="#" className="sns_link"><i
                className="fa-brands fa-twitter-square"></i></Link></li>
              <li className={styles.item_detail_sns_shareItem}><Link href="#" className="sns_link"><i
                className="fa-brands fa-line"></i></Link></li>
            </ul>
          </div>
        </div>
        <div className={styles.cart_item_container}>
          {product.colors.map((color) => (
            <dl key={color.name} className={styles.cart_itemList}>
              <dt className={styles.cart_itemColor}>
                <Image className="cartItem_colorImg" src={color.image}
                  alt={color.name} width={50} height={50} />
              </dt>
              <dd className={styles.cart_item_action}>
                <div className={styles.size_color}>
                  <p className={styles.size_colorColor}>{color.name}</p>
                  <div className="selectbox_wrapper">
                    <select name="size" className={styles.size_colorSize}>
                      {color.sizes.map((size) => (
                        <option key={size} value={size.toLowerCase()}>
                          {size} - {color.stock[size] ? '在庫あり' : '在庫なし'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <Link className={styles.cart_btn} href="#"><span>カートに入れる</span></Link>
              </dd>
            </dl>
          ))}
        </div>
        <div className={styles.item_info}>
          <div className={styles.item_tab_menu}>
            <ul className={styles.item_tab_menuList}>
              <li className={styles.item_tab_menu_btn}>
                <button
                  onClick={() => setActiveTab('tab01')}
                  className={`${styles.item_tab_menu_link} ${styles.tab_itemintro} ${activeTab === 'tab01' ? styles.tab_active : ''}`}
                >
                  アイテム紹介
                </button>
              </li>
              <li className={styles.item_tab_menu_btn}>
                <button
                  onClick={() => setActiveTab('tab02')}
                  className={`${styles.item_tab_menu_link} ${styles.tab_itemsize} ${activeTab === 'tab02' ? styles.tab_active : ''}`}
                >
                  素材・サイズ等
                </button>
              </li>
            </ul>
          </div>
          <div className={styles.item_tab_content}>
            {activeTab === 'tab01' && (
              <div id="tab01" className={styles.item_tab_description}>
                <p className={styles.item_description}>
                  {product.description.split('。').filter(s => s.trim()).map((sentence, index, array) => (
                    <span key={index}>
                      {sentence.trim()}{index < array.length - 1 ? '。' : ''}
                      {index < array.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            )}
            {activeTab === 'tab02' && (
              <div id="tab02" className={styles.item_tab_description}>
                <table className={`table ${styles.table_item_detail}`}>
                  <caption className="table_caption">アイテム詳細</caption>
                  <tbody>
                    <tr>
                      <th>商品番号</th>
                      <td>{product.details.productNumber}</td>
                    </tr>
                    <tr>
                      <th>商品名</th>
                      <td>{product.name}</td>
                    </tr>
                    <tr>
                      <th>原産国</th>
                      <td>{product.details.origin}</td>
                    </tr>
                    <tr>
                      <th>素材</th>
                      <td>{product.details.material}</td>
                    </tr>
                  </tbody>
                </table>
                {sizeKeys.length > 0 && (
                  <table className={`table ${styles.table_itemSize}`}>
                    <caption className="table_caption">アイテムサイズ</caption>
                    <thead>
                      <tr>
                        <th>サイズ</th>
                        {sizeHeaders.map((header) => (
                          <th key={header}>{sizeHeaderMap[header] || header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {sizeKeys.map((size) => (
                        <tr key={size}>
                          <td>{size}</td>
                          {sizeHeaders.map((header) => (
                            <td key={header}>{(product.details.sizes[size] as unknown as Record<string, number>)[header]}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
