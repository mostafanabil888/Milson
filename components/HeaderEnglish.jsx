import Link from 'next/link'
import React from 'react'
import Styles from '../styles/HeaderEnglish.module.scss'
export default function HeaderEnglish() {
  return (
    <div className={Styles.HeaderEnglish}>
        {/* <img className='m-3 ms-md-5' src='/img/logo.jpg' alt='logo' width='125' height='100' /> */}
        <div className="text-center p-md-3 p-2">
            <h1 className='display-md-1 display-3'>Your Way to Fluency!</h1>
            <p className='display-6 my-5'>Excel with your English language skills and 10X your results with online learning today!</p>
            <Link href='/' >Explore Our Services</Link>
        </div>
    </div>
  )
}
