import React from 'react'
import Head from 'next/head'
import Styles from "../styles/Catogries.module.scss"
import { BsFillEnvelopeOpenFill, BsPeopleFill } from 'react-icons/bs'
import Link from 'next/link'
export default function Catogries() {
    return (
        <>
            <Head>
                <title>Milson</title>
                <meta name="Melsion" content="this app for translation and english courcies" />
                <link rel="icon" href="/img/logo.jpg" />
            </Head>
            <div className={Styles.Catogries}>
                <nav className='d-flex align-items-center'>
                    <img alt='logo' className='mt-3 m-auto mx-md-5' src='/img/logo.jpg' width='160' height='100' />
                </nav>
                <h2 className='mt-3 text-center'>Open a Free Account</h2>
                <div className={Styles.ChooseCatogry}>
                    <div className={`col-md-5 col-11 ${Styles.box} ${Styles.firstbox}`}>
                        <Link href='/English'>
                            <a>
                                <div className='d-flex align-items-center justify-content-center ps-3'>
                                    <BsFillEnvelopeOpenFill />
                                    <div className='ps-4'>
                                        <h5>Join to English Department</h5>
                                        <p>Start Your Journey To learn English</p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className={`col-md-5 col-11 ${Styles.box} ${Styles.secondbox}`}>
                        <Link href='/Translation'>
                            <a>
                                <div className='d-flex align-items-center justify-content-center ps-3'>
                                    <BsPeopleFill />
                                    <div className='ps-4'>
                                        <h5>Join to Translation Department</h5>
                                        <p>Start a Localization Project With Just a Click</p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>

            </div>
        </>

    )
}
