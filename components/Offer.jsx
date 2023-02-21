import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Styles from '../styles/Offer.module.scss'
export default function Offer() {
  return (
    <div className={Styles.Offer}>
        <div className="container">
            <h2 className='fw-bold display-5 text-center'>What We Offer</h2>
            <div className="row text-center py-5">
                <div className="col-md-6 col-12 my-3 my-md-0">
                    <Image src='/img/azzam1.jpg' alt='melsion courses' width='400' height={381} />
                    <h5 className='my-md-4 my-2 fw-bold'>Adult ESL Online Courses</h5>
               <Link href="/">
               Know More & Enroll Now
                </Link>
                    <Link href='/' >Know More & Enroll Now (Arabic)</Link>
                </div>
                <div className="col-md-6 col-12 my-3 my-md-0">
                    <Image src='/img/azzam3.jpg' alt='melsion courses' width='400' height={381} />
                    <h5 className='my-md-4 my-2 fw-bold'>Kids & Teens ESL Online Courses</h5>
               <Link href="/">
                    Learn English with Us
                </Link>
                    <Link href='/' >Know More & Enroll Now (Arabic)</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
