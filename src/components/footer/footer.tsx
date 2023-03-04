import { Inter } from 'next/font/google'
import Link from 'next/link'

import styles from './footer.module.scss'

const inter = Inter({ subsets: ['latin'] })

export function FooterComponent() {
  return (
    <>
      <footer className={`${inter.className} ${styles.wrapper}`}>
        <div className={styles.footerContent}>
          <div className={styles.copyright}>&#169; 2023 All Rights Reserved</div>
          <a href='https://t.me/Ocean_TA'>Telegram</a>
          <a href='https://t.me/ocean_ta_chat'>Telegram чат</a>
          <a href='https://www.youtube.com/channel/UCh-SeaDzQ8Uc1F-pBwJO4_w'>Youtube</a>
          <a href='https://www.instagram.com/ocean__ta'>Instagram</a>
          <a href='https://twitter.com/ocean__ta'>Twitter</a>
          <a href='mailto:ocean.trading.analytics@gmail.com'>Gmail</a>
        </div>
      </footer>
    </>
  )
}
