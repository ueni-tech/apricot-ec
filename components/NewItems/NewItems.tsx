import Image from "next/image";
import Link from "next/link";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./NewItems.module.scss";

const products = [
  {
    "id": "136321",
    "name": "クラッシュカットジャガード半袖カットソー",
    "price": 1980,
    "discountPrice": null,
    "category": "トップス",
    "subCategory": "カットソー",
    "images": [
      "/img/item/136321_k1.jpg",
      "/img/item/136321_fit2.jpg",
      "/img/item/136321_fit6.jpg",
      "/img/item/136321_fit5.jpg",
      "/img/item/136321_fit3.jpg",
      "/img/item/136321_sl19.jpg",
      "/img/item/136321_sl18.jpg",
      "/img/item/136321_sl20.jpg",
      "/img/item/136321_s.gif"
    ],
    "thumbnail": "/img/top/136321_k1.jpg",
    "badges": [
      { "type": "new", "text": "New" },
      { "type": "arrived", "text": "入荷済み" }
    ],
    "colors": [
      {
        "name": "ホワイト",
        "image": "/img/item/itemColor_white.jpg",
        "sizes": ["S", "M", "L"],
        "stock": { "S": true, "M": true, "L": true }
      },
      {
        "name": "オレンジ",
        "image": "/img/item/itemColor_orange.jpg",
        "sizes": ["S", "M", "L"],
        "stock": { "S": true, "M": true, "L": true }
      },
      {
        "name": "ブルー",
        "image": "/img/item/itemColor_blue.jpg",
        "sizes": ["S", "M", "L"],
        "stock": { "S": true, "M": true, "L": true }
      },
      {
        "name": "ブラック",
        "image": "/img/item/itemColor_black.jpg",
        "sizes": ["S", "M", "L"],
        "stock": { "S": true, "M": true, "L": true }
      }
    ],
    "description": "トレンドのカットジャガード生地を採用した半袖Tシャツ。やや短めの丈感で、ハイウエストのボトムやスカートをバランスよく合わせていただけます。",
    "details": {
      "productNumber": "1234567",
      "origin": "China",
      "material": "ポリエステル95％、ポリウレタン5％",
      "sizes": {
        "S": {
          "length": 43,
          "width": 44,
          "shoulder": 35,
          "sleeve": 21
        },
        "M": {
          "length": 45,
          "width": 46,
          "shoulder": 36,
          "sleeve": 22
        },
        "L": {
          "length": 47,
          "width": 48,
          "shoulder": 37,
          "sleeve": 23
        }
      }
    },
    "tags": ["トップス", "カットソー", "半袖", "入荷済み", "新着"],
    "point": 19,
    "isNew": true,
    "isPopular": false,
    "isRestock": false,
    "stockStatus": "arrived"
  },
  {
    "id": "134729",
    "name": "ストライプスパイラルナロースカート",
    "price": 3490,
    "discountPrice": null,
    "category": "ボトムス",
    "subCategory": "スカート",
    "images": ["/img/top/134729_k1.jpg"],
    "thumbnail": "/img/top/134729_k1.jpg",
    "badges": [
      { "type": "new", "text": "New" },
      { "type": "arrived", "text": "入荷済み" }
    ],
    "colors": [],
    "description": "",
    "details": {},
    "tags": ["ボトムス", "スカート", "入荷済み", "新着"],
    "point": 0,
    "isNew": true,
    "isPopular": false,
    "isRestock": false,
    "stockStatus": "arrived"
  },
  {
    "id": "136336",
    "name": "シアーストライプぺプラムブラウス",
    "price": 3490,
    "discountPrice": 3149,
    "category": "トップス",
    "subCategory": "シャツ・ブラウス",
    "images": ["/img/top/136336_k1.jpg"],
    "thumbnail": "/img/top/136336_k1.jpg",
    "badges": [
      { "type": "new", "text": "New" },
      { "type": "discount", "text": "10% OFF" },
      { "type": "scheduled", "text": "6/20入荷" }
    ],
    "colors": [],
    "description": "",
    "details": {},
    "tags": ["トップス", "シャツ・ブラウス", "新着"],
    "point": 0,
    "isNew": true,
    "isPopular": false,
    "isRestock": false,
    "stockStatus": "scheduled"
  },
  {
    "id": "136322",
    "name": "クラッシュカットジャガードマーメイドスカート",
    "price": 3490,
    "discountPrice": 3149,
    "category": "ボトムス",
    "subCategory": "スカート",
    "images": ["/img/top/136322_k1.jpg"],
    "thumbnail": "/img/top/136322_k1.jpg",
    "badges": [
      { "type": "new", "text": "New" },
      { "type": "discount", "text": "10% OFF" },
      { "type": "scheduled", "text": "6/20入荷" }
    ],
    "colors": [],
    "description": "",
    "details": {},
    "tags": ["ボトムス", "スカート", "新着"],
    "point": 0,
    "isNew": true,
    "isPopular": false,
    "isRestock": false,
    "stockStatus": "scheduled"
  },
  {
    "id": "136161",
    "name": "USAコットン天竺フロッキーロゴTシャツ",
    "price": 2499,
    "discountPrice": null,
    "category": "トップス",
    "subCategory": "Tシャツ",
    "images": ["/img/top/136161_k1.jpg"],
    "thumbnail": "/img/top/136161_k1.jpg",
    "badges": [
      { "type": "new", "text": "New" },
      { "type": "arrived", "text": "入荷済み" }
    ],
    "colors": [],
    "description": "",
    "details": {},
    "tags": ["トップス", "Tシャツ", "入荷済み", "新着"],
    "point": 0,
    "isNew": true,
    "isPopular": false,
    "isRestock": false,
    "stockStatus": "arrived"
  },
]
export default function NewItems() {
  return (
    <div className={`contentBlock_content newItems ${styles.newItems}`}>
      <div className="sectionTitle_wapper">
        <h3 className="sectionTitle">NEW ITEMS</h3>
        <span className="sectionSubtitle">新着アイテム</span>
      </div>
      <div className={`${styles.newItems_itemsWrapper} items_wrapper`}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Link className={`${styles.viewMore_btn} viewMore_btn`} href="#">
        <p className={`${styles.viewMore} viewMore`}>view more</p>
        <Image className={`${styles.viewMore_chevron} viewMore_chevron`} src="/img/top/chevron-right-solid.png" alt="chevron-right-solid" width={8} height={14} />
      </Link>
    </div>
  )
}
