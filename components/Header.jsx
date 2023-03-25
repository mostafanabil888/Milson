import React from 'react'
import Styles from "../styles/Header.module.scss"

import Footer from "../components/Footer"
import Link from 'next/link';
import { BsFillPersonFill } from 'react-icons/bs'
import Login from './Login';
export default function Header() {
    return (
        <header className={Styles.header}>
            <div className='w-100'>
                    <div className={Styles.SignInBox}>
                       <Link href='/Register'>
                       <a>
                       <div className="d-flex align-items-center  p-3">
                        <BsFillPersonFill  />
                         <span className='mx-3'> Sign In</span>
                        </div>
                       </a>
                       </Link>
                    </div>
                   <Login />
                    <Footer />
                </div>
        </header>
    )
}
