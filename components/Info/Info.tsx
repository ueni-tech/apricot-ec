import Image from 'next/image'
import styles from './Info.module.scss'
import Link from 'next/link'

export default function Info() {
  return (
    <div className={styles.info}>
      <div className={`${styles.info_inner} contentWidth`}>
        <div className="section_title_wapper">
          <h2 className={styles.info_title}>INFORMATION</h2>
          <span className={styles.info_subtitle}>お知らせ</span>
        </div>
        <ul className={styles.info_list}>
          <li className={styles.info_list_item}>
            <Link href="#" className={styles.info_link}>
              <div className={styles.info_body}>
                <time dateTime="2022-06-15" className={styles.info_date}>
                  2022/06/15
                </time>
                <p className={styles.info_text}>2022 Summer Season COLLECTION　特集</p>
              </div>
              <Image
                src="/img/top/chevron-right-solid.png"
                alt=""
                className={styles.info_chevron}
                width={8}
                height={13}
              />
            </Link>
          </li>
          <li className={styles.info_list_item}>
            <Link href="#" className={styles.info_link}>
              <div className={styles.info_body}>
                <time dateTime="2022-06-10" className={styles.info_date}>
                  2022/06/10
                </time>
                <p className={styles.info_text}>T-shirt Collection　特集</p>
              </div>
              <Image
                src="/img/top/chevron-right-solid.png"
                alt=""
                className={styles.info_chevron}
                width={8}
                height={13}
              />
            </Link>
          </li>
          <li className={styles.info_list_item}>
            <Link href="#" className={styles.info_link}>
              <div className={styles.info_body}>
                <time dateTime="2022-06-01" className={styles.info_date}>
                  2022/06/01
                </time>
                <p className={styles.info_text}>サイトオープンしました</p>
              </div>
              <Image
                src="/img/top/chevron-right-solid.png"
                alt=""
                className={styles.info_chevron}
                width={8}
                height={13}
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
