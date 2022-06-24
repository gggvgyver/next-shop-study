import React from 'react'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>next-shop-study | 220622</title>
        <meta name="description" content="학습용 next js 쇼핑몰" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>헤더</header>
      <main>{children}</main>
      <footer>푸더</footer>
    </>
  )
}
