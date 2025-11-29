import Image from "next/image";
import styles from "./NewStyling.module.scss"
import Link from "next/link";


export default function NewStyling() {
  return (
    <div className={`contentBlock_content ${styles.newStyling}`}>
      <div className="sectionTitle_wapper">
        <h3 className="sectionTitle">NEW STYLING</h3>
        <span className="sectionSubtitle">新着コーデ</span>
      </div>
      <div className={`${styles.newStyling_itemsWrapper} items_wrapper`}>
        <Link href="#" className={styles.stylingCard}>
          <Image className={styles.stylingCard_img} src="/img/top/styling_yuna.jpg" alt="styling_yuna" width={188} height={243} />
          <div className={styles.stylingCard_body}>
            <Image className={`${styles.stylingCard_face} face_yuna`} src="/img/top/face_yuna.png" alt="face_yuna" width={36} height={36} />
            <div className={styles.stylingCard_descWrapper}>
              <p className={styles.stylingCard_desc}>yuna</p>
              <p className={styles.stylingCard_desc}>163cm</p>
            </div>
          </div>
        </Link>
        <Link href="#" className={styles.stylingCard}>
          <Image className={styles.stylingCard_img} src="/img/top/styling_Mao.jpg" alt="styling_Mao" width={188} height={243} />
          <div className={styles.stylingCard_body}>
            <Image className={`${styles.stylingCard_face} face_Mao`} src="/img/top/face_Mao.png" alt="face_Mao" width={36} height={36} />
            <div className={styles.stylingCard_descWrapper}>
              <p className={styles.stylingCard_desc}>Mao</p>
              <p className={styles.stylingCard_desc}>165cm</p>
            </div>
          </div>
        </Link>
        <Link href="#" className={styles.stylingCard}>
          <Image className={styles.stylingCard_img} src="/img/top/styling_Akari.jpg" alt="styling_Akari" width={188} height={243} />
          <div className={styles.stylingCard_body}>
            <Image className={`${styles.stylingCard_face} face_Akari`} src="/img/top/face_Akari.png" alt="face_Akari" width={36} height={36} />
            <div className={styles.stylingCard_descWrapper}>
              <p className={styles.stylingCard_desc}>Akari</p>
              <p className={styles.stylingCard_desc}>158cm</p>
            </div>
          </div>
        </Link>
        <Link href="#" className={styles.stylingCard}>
          <Image className={styles.stylingCard_img} src="/img/top/styling_Risa.jpg" alt="styling_Risa" width={188} height={243} />
          <div className={styles.stylingCard_body}>
            <Image className={`${styles.stylingCard_face} face_Risa`} src="/img/top/face_Risa.png" alt="face_Risa" width={36} height={36} />
            <div className={styles.stylingCard_descWrapper}>
              <p className={styles.stylingCard_desc}>Risa</p>
              <p className={styles.stylingCard_desc}>155cm</p>
            </div>
          </div>
        </Link>
      </div>
      <Link className="viewMore_btn" href="#">
        <p className="viewMore">view more</p>
        <Image className="viewMore_chevron" src="/img/top/chevron-right-solid.png" alt="" width={8} height={14} />
      </Link>
    </div>
  )
}
