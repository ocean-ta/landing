import Head from 'next/head'
import { Inter } from 'next/font/google'
import { HeaderComponent } from '@/components/header'
import { Main } from '@/components/main'
import styles from '@/styles/index.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ocean TA</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderComponent />
      <Main />
    </>
  )
}
