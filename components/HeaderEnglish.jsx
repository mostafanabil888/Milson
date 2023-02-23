import React from 'react'
import Styles from '../styles/HeaderEnglish.module.scss'
export default function HeaderEnglish() {
  return (
    <div className={Styles.HeaderEnglish}>
        {/* <img className='m-3 ms-md-5' src='/img/logo.jpg' alt='logo' width='125' height='100' /> */}
        <div className="text-center p-md-3 p-2">
            <h1 className='display-md-1 display-3'>Immerse Yourself with English!</h1>
            <p className='display-6 my-5'>Well-trained teachers from around the world to make learning easy for you at home.</p>
        </div>
    </div>
  )
}
