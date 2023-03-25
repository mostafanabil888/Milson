import React from 'react'
import Styles from '/styles/Login.module.scss'
import Form from 'react-bootstrap/Form';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
export default function Login() {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
    // const handlemail = (e) => {
    //     setemail(e.target.value)
    // }
    // const handlpassword = (e) => {
    //     setpassword(e.target.value)
    // }
    // const handlesubmit = () => {
    //     e.preventDefault();
        
    // }
    // console.log(password);
    const handleSubmit = async (event) => {
        event.preventDefault()
    
        // Send request to external API to check user's email and password
        const response = await fetch('https://milsonn.com/api/login', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
    
        if (response.ok) {
          // Authenticate user and redirect to home page
          const data = await response.json()
          localStorage.setItem('token', data.token)
          router.push('/Catogries')
        } else {
          alert('Invalid email or password')
        }
      }
  return (
    <div className={Styles.SignUpBox}>
    <Form onSubmit={handleSubmit} className='text-center d-flex align-items-center  p-3 justify-content-center'>
        <div className='col-12 col-md-7'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <input onChange={(event) => setEmail(event.target.value)} value={email} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <input onChange={(event) => setPassword(event.target.value)}   value={password} type="password" placeholder="Password" />
        </Form.Group>

        <div className={Styles.btn}>
            <button type='submit'>submit</button>
            {/* <Link href='/Catogries'>Sign In</Link> */}
            
        </div>
       <div className={Styles.RegisterBox}>
        <span>Do not have an account?</span>
        <Link href="/Register" className='mt-1 m-md-0'>Register</Link>
       </div>
        </div>
    </Form>
</div>
  )
}
