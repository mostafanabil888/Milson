import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
export default function index() {
  return (
    <>
     <Head>
        <title>Milson</title>
        <meta name="Melsion" content="this app for translation and english courcies" />
        <link rel="icon" href="/img/logo.jpg" />
      </Head>
     <Header />
    </>
  )
}
