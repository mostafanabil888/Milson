import React from 'react'
import Head from 'next/head'
import NavBar from '../components/Navbar'
import HeaderEnglish from '../components/HeaderEnglish'
import DevlopEng from '../components/DevlopEng'
import Comment from '../components/comment'
import Goals from '../components/Goals'
import Offer from '../components/Offer'
import Video from '../components/Video'
import FooterEnglish from '../components/FooterEnglish'
export default function English() {
  return (
    <>
    <Head>
        <title>Milson</title>
        <meta name="Melsion" content="this app for translation and english courcies" />
        <link rel="icon" href="/img/logo.jpg" />
      </Head>
    <div>
        <NavBar/>
        <HeaderEnglish />
        <Video />
        <DevlopEng />
        <Comment />
        <Goals />
        <Offer />
        <FooterEnglish />
    </div>
    </>
  )
}
