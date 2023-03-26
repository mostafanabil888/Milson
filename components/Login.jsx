import React from 'react'
import Styles from '/styles/Login.module.scss'
import Form from 'react-bootstrap/Form';
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();
  async function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Please enter your email and password');
      return;
    }
    try {
      const response = await axios.post('https://milsonn.com/api/login', { email,password });
      if (response.status === 200 && response.data.hasRegistered) {
        // Set a session ID cookie and redirect to home page
      
        router.push('/test');
      } else {
        setErrorMessage('Invalid email or password');
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className={Styles.SignUpBox}>

    <Form onSubmit={handleLogin} className='text-center d-flex align-items-center  p-3 justify-content-center'>
        <div className='col-12 col-md-7'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Group>

        <div className={Styles.btn}>
        {errorMessage && <div>{errorMessage}</div>}
      <button type="submit">Login</button>
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
