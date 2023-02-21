import React from 'react'
import Link from 'next/link'
import styles from '../styles/SignUp.module.scss'
export default function SignUp({ prop, Url }) {
  return (
    <div className={styles.SignUp}>
      <div className='d-flex align-items-center justify-content-md-end justify-content-center p-2 p-md-3'>
        <img
          src="/img/logo.jpg"
          height={100}
          width={150}
          alt="Picture of the author" />
      </div>
      <h5>{prop}</h5>
      <div className={`d-flex align-items-center justify-content-center ${styles.formbox}`}>
        <form className='col-md-6 col-12'>
          <h2>Create an account</h2>
          <p className='my-4'>Let us take care of your localization needs.</p>
          <input type="text" placeholder='name' />
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
          <input type="password" placeholder='confirm' />
          <p>I agree to the  Terms and Conditions</p>
          <div className={`text-light ${styles.btn}`}>
            <Link href='/Translation'>Sign Up</Link>
          </div>
          <span>Already signed up?</span>
          <Link href={`/${Url}`}>log iin now</Link>
        </form>
      </div>
    </div>
  )
}
