import React from 'react'
import Link from 'next/link'
import styles from '../styles/SignUp.module.scss'
import { useState } from 'react'
import { useRouter } from 'next/router'
export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setConfirmPassword] = useState('')
  const router = useRouter()
  const handleSubmit = async (event) => {
    event.preventDefault()

    // Add validation to ensure user enters valid data
    if (name === '' || email === '' || password === '' || password_confirmation === '') {
      alert('Please fill out all fields')
      return
    }

    if (password !== password_confirmation) {
      alert('Passwords do not match')
      return
    }

    // Send request to external API to store user data and authenticate user
    const response = await fetch('https://milsonn.com/api/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password,password_confirmation }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response.ok) {
      // Redirect to home page
      router.push('/')
    } else {
      alert('An error occurred while signing up')
    }
  }

  return (
    <div className={styles.SignUp}>
      <div className='d-flex align-items-center justify-content-md-end justify-content-center p-2 p-md-3'>
        <img
          src="/img/logo.jpg"
          height={100}
          width={150}
          alt="Picture of the author" />
      </div>
      <div className={`d-flex align-items-center justify-content-center ${styles.formbox}`}>
        <form onSubmit={handleSubmit} className='col-md-6 col-12'>
          <h2>Create an account</h2>
          <p className='my-4'>Let us take care of your localization needs.</p>
          <input type="text" placeholder='name'  value={name}
          onChange={(event) => setName(event.target.value)}/>
          <input type="email" placeholder='email'  value={email}
          onChange={(event) => setEmail(event.target.value)}/>
          <input type="password" placeholder='password' value={password}
          onChange={(event) => setPassword(event.target.value)}/>
          <input type="password" placeholder='confirm' value={password_confirmation}
          onChange={(event) => setConfirmPassword(event.target.value)}/>
          <p>I agree to the  Terms and Conditions</p>
          <div className={`text-light ${styles.btn}`}>
            {/* <Link href='/Catogries'>Sign Up</Link> */}
            <button type="submit">Submit</button>
          </div>
          <span>Already signed up?</span>
          <Link href='/'>log iin now</Link>
        </form>
      </div>
    </div>
  )
}
