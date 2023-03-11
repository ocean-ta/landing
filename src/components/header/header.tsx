import { Inter } from 'next/font/google'
import Image from 'next/image'
import Ukraine from './assets/ua.png'
import Link from 'next/link'

import styles from './header.module.scss'

const inter = Inter({ subsets: ['latin'] })

export function HeaderComponent() {
  return (
    <>
      <header className={`${inter.className} ${styles.header}`}>
        <div className={styles.wrapper}>
          <nav className={styles.headerNav}>
            <ul>
              <li>
                <Image
                  className={styles.ukraine}
                  src={Ukraine}
                  alt="UA"
                  width={100}
                  placeholder="blur"
                />
              </li>
              <li>
                <Link href="/">Переваги</Link>
              </li>
              <li>
                <Link href="/">Ціна</Link>
              </li>
              <li>
                <Link href="/">Оплата</Link>
              </li>
              <li>
                <Link href="/">Про Нас</Link>
              </li>
              <li>
                <Link href="/">Контакти</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
