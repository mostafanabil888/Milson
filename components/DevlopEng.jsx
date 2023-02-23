import React from 'react'
import Styles from '../styles/DevlopEng.module.scss'
import Image from 'next/image'
export default function DevlopEng() {
    return (
        <div className={Styles.DevlopEng}>
            <img src="/img/devlop.png" alt="keyboard" />
            <div className="container py-lg-5 py-2">
                <div className="row py-lg-5 py-2 ">
                    <div className="col-lg-6 col-12">
                        <h2 className='display-6 fw-bold'>Want to learn English the right way?</h2>
                        <p>
                        We have overcome the two obstacles preventing learners making use of their English courses. First, our courses are affordable. Second, the number of teaching ours we provide is matchless.
                        </p>
                    </div>
                    <div className="col-lg-6 col-12">
                        <h3 className=' fw-bold'>MILSON is Your Right Niche When:</h3>
                        <ul>
                            <li>You need to learn English but unable to afford the cost of face-to-face courses.
                            </li>
                            <li>You have tried other face-to-face course, but did not benefit from them.
                            </li>
                            <li>You do not have plenty of time for face-to-face courses.
                            </li>
                            <li>	You want to acquire a native-like accent and fluency in English.
                            </li>
                            <li>You only want to do the effort that would really help.
                            </li>
                            <li>	You need to be followed-up after each session.
                            </li>
                        </ul>
                    </div>
                </div>
               <div className={Styles.vission}>
               <div className="row align-items-center justify-content-center  p-2 ">
                    <div className="col-lg-6 col-12">
                        <h2 className='display-2 fw-bold'>MILSON Vision.</h2>
                        <p>At Milson we are on the path to become the best digital academy, one that provides a professional experience in teaching English, to those learners aspiring to enhance their linguistic potential. Our desire to expand globally is being realized through innovating teaching methods, based on international standards, and applying them by a team of experts comprised of native English speakers and Arabs.</p>
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
