import { Inter } from 'next/font/google'
import Link from 'next/link'

import styles from './header.module.scss'

const inter = Inter({ subsets: ['latin'] })

export function HeaderComponent() {
  return (
    <>
      <header className={inter.className}>
        <nav className={styles.headerNav}>
          <ul>
            <li>
              <Link href="/">Description</Link>
            </li>
            <li>
              <Link href="/">Team</Link>
            </li>
            <li>
              <div className={styles.logo}>
                <h1>OCEAN TA</h1>
                <h6>Ocean Trading Analytics</h6>
              </div>
            </li>
            <li>
              <Link href="/">Pricing</Link>
            </li>
            <li>
              <Link href="/">Reports</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
