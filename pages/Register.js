import Head from 'next/head'
import React from 'react'
import SignUp from '../components/SignUp'
export default function Register() {
  return (
    <>
     <Head>
        <title>Milson</title>
        <meta name="Melsion" content="this app for translation and english courcies" />
        <link rel="icon" href="/img/logo.jpg" />
      </Head>
        <SignUp />
    </>
  )
}
