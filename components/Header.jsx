import React from 'react'
import Styles from "../styles/Header.module.scss"
import Form from 'react-bootstrap/Form';
import Footer from "../components/Footer"
import Link from 'next/link';
import { BsFillPersonFill } from 'react-icons/bs'
export default function Header() {
    return (
        <header className={Styles.header}>
            <div className='d-flex align-items-center   p-md-3 p-1'>
                <div className='col-12'>
                    <div className={Styles.SignInBox}>
                       <Link href='/Catogries'>
                       <a>
                       <div className="d-flex align-items-center  p-3">
                        <BsFillPersonFill  />
                         <span className='mx-3'> Sign In</span>
                        </div>
                       </a>
                       </Link>
                    </div>
                    <div className={Styles.SignUpBox}>
                        <Form className='text-center d-flex align-items-center  p-3 justify-content-center'>
                            <div className='col-12 col-md-7'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <input type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <input type="password" placeholder="Password" />
                            </Form.Group>

                            <div className={Styles.btn}>
                                <Link href='/Translation'>Sign In</Link>
                            </div>
                           <div className={Styles.RegisterBox}>
                            <span>Dont have an account?</span>
                            <Link href="/Catogries" className='mt-1 m-md-0'>Register</Link>
                           </div>
                            </div>
                        </Form>
                    </div>
                    <Footer />
                </div>
            </div>
        </header>
    )
}
