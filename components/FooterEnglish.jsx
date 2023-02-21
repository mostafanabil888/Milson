import React from 'react'
import styles from '../styles/FooterEnglish.module.scss'
export default function FooterEnglish() {
    return (
        <footer className={styles.Footer}>
            <div className="container text-center">
                <img src='/img/payment.png' alt='payment' width='300' />
                <ul className='fw-bold mt-4'>
                    <li>MONGLISH ACADEMY UK</li>
                    <li>Registered in England & Wales- Company Number 14083316</li>
                    <li>71–75 Shelton Street, Covent Garden, West End London, WC2H 9JQ, UK</li>
                </ul>
                <ul>
                    <li>Monglish Academy UK

                    </li>
                    <li>Customer Service Contact Information

                    </li>
                    <li>Phone +44.20.388.507.66

                    </li>
                    <li>Email info@monglish.academy</li>
                </ul>
                <ul>
                    <li>All online courses are sold in the following currencies </li>
                    <li>(according to the payment currency shown under each course)</li>
                    <li>SAR (Saudi Riyal)  - EGP (Egyptian Pounds)</li>
                    <li>USD (United States Dollar) - AED (United Arab Emirates Dirham)</li>
                </ul>
               <p>We accept Cambridge International English
                 & Linguaskill Certificates for Admission 
                 (From A2 up to C2/ General & Business)</p>
                 <p>Our Teachers hold Cambridge International 
                    English Certificates (TKT/CELTA/ICELT/DELTA)</p>
                    <span>Home</span>
                    <span>About</span>
                    <span>Features</span>
                    <span>Enroll (English)</span>
                    <span>Enroll (Arabic)</span>
                    <span>Careers</span>
                    <span>Contact & Follow Us</span>               
                <h5 className='mt-4'>©2022 Monglish Academy UK</h5>
            </div>
        </footer>
    )
}
    