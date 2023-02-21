import React from 'react'
import Styles from '../styles/DevlopEng.module.scss'
import Link from 'next/link'
import Image from 'next/image'
export default function DevlopEng() {
    return (
        <div className={Styles.DevlopEng}>
            <img src="/img/devlop.png" alt="keyboard" />
            <div className="container py-lg-5 py-2">
                <div className="row py-lg-5 py-2 ">
                    <div className="col-lg-6 col-12">
                        <h2 className='display-6 fw-bold'>Want to develop your English fast and easy</h2>
                        <p>
                            Teaming up with an experienced tutor, like ours at Monglish, allows you to easily improve your language so you can achieve more on a professional and a personal level.
                        </p>
                    </div>
                    <div className="col-lg-6 col-12">
                        <h3 className=' fw-bold'>Monglish is Your Best Fit When:</h3>
                        <ul>
                            <li>You need to feel encouraged more.
                            </li>
                            <li>You are constantly in need of motivation.
                            </li>
                            <li>You work so much that you donot have time to learn.
                            </li>
                            <li>You feel tired of doing repetitive homework tasks.
                            </li>
                            <li>You only want to do the effort that would really help.
                            </li>
                            <li>You want to focus more on growing your speaking skills.
                            </li>
                            <li>You want to keep doing the learning tasks that you love.
                            </li>
                            <li>You need help but can not afford the cost of face-to-face courses.
                            </li>
                        </ul>
                    </div>
                </div>
               <div className="d-flex align-items-center justify-content-center">
               <Link href="/">
                    Learn English with Us
                </Link>
               </div>
               <div className={Styles.vission}>
               <div className="row align-items-center justify-content-center  p-2 ">
                    <div className="col-lg-6 col-12">
                        <h2 className='display-2 fw-bold'>Monglish Vision.</h2>
                        <p>At Monglish we are on the path to become the best digital academy, one that provides a professional experience in teaching English, to those learners aspiring to enhance their linguistic potential. Our desire to expand globally is being realized through innovating teaching methods, based on international standards, and applying them by a team of experts comprised of native English speakers and Arabs.</p>
                    </div>
                    <div className="col-lg-6 col-12">
                        <Image width='525' height='525'  src='/img/azzam3.jpg' alt='vission' />
                    </div>
                </div>
               </div>
            </div>
        </div>
    )
}
