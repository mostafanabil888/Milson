import React from 'react'
import NavBar from '../components/Navbar'
import Asked from '../components/Asked'
import GetTranslation from '../components/GetTranslation'
import HowWorks from '../components/HowWorks'
import Subscribe from '../components/Subscribe'
import WhyMilson from '../components/WhyMilson'
import Footer from '../components/Footer'
import FooterLinks from '../components/FooterLinks'
import GetinTouch from "../components/GetinTouch"
import Head from 'next/head'
export default function Translation() {
  return (
    <>
      <Head>
        <title>Milson</title>
        <meta name="Melsion" content="this app for translation and english courcies" />
        <link rel="icon" href="/img/logo.jpg" />
      </Head>
      <div>
        <NavBar />
        <GetTranslation />
        <WhyMilson />
        <HowWorks />
        <Asked />
        <GetinTouch />
        <FooterLinks />
        <Subscribe />
        <Footer />
      </div>
    </>
  )
}
