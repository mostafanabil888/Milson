import Image from 'next/image'
import React from 'react'
import Styles from '../styles/Goals.module.scss'
export default function Goals() {
    return (
        <div className={Styles.Goals}>
            <div className="container">
                <div className={`row p-4 ${Styles.box}`}>
                    <div className="col-12 col-md-6">
                        <Image src='/img/Azzam4.jpg' alt='melsion goals' width='460' height='460' />
                    </div>
                    <div className="col-12 col-md-6 mt-md-0 mt-3">
                        <h2 className='display-2 fw-bold'>Milson Goals.</h2>
                        <p className='mt-2'>At Milson Academy we aim to achieve excellence and enhance performance
                            at teaching various levels of learners, by offering professional and diverse
                            programs, that suits the desire of each learner.</p>
                        <p>We also strive to save learners time and money, by focusing on the goals they wish to achieve, and by setting them up with flexible schedule to enjoy their online courses, through interactive and live sessions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
