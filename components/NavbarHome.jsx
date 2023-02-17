import React from 'react'
import Styles from "../styles/NavbarHome.module.scss"
import Link from 'next/link'
export default function NavbarHome() {
    return (
        <div className={`d-flex px-4 py-2 align-items-center justify-content-end ${Styles.NavbarHome}`}>
                <img
                    src="/img/logo.jpg"
                    height={50}
                    width={120}
                    alt="Picture of the author" />
            {/* <div className='d-md-flex d-none'>
                <ul>
                    <Link href='/'>About</Link>
                    <Link href='/'>Transltor</Link>
                    <Link href='/'>Support</Link>
                </ul>
            </div> */}
        </div>
    )
}
