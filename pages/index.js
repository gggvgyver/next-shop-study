import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>next-shop-study | 220622</title>
        <meta name="description" content="학습용 next js 쇼핑몰" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold underline">
        tailwind css 적용되는것을 확인했음
      </h1>
    </div>
  )
}
