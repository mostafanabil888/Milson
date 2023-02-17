import React from 'react'
import Styles  from '../styles/Subscribe.module.scss'
import {BsFacebook,BsInstagram,BsTwitter,BsLinkedin} from 'react-icons/bs'
export default function Subscribe() {
  return (
    <div className={Styles.Subscribe}>
        <div className="d-flex flex-wrap container py-4 align-items-center justify-content-center">
              <div className="d-lg-flex col-lg-4 col-12 align-items-center d-none   align-items-center">
              <img src='/img/logo.jpg' width={150} />
               <p className=''>Milson, formerly One Hour Translation, is an end-to-end localization services provider, empowering brands to establish 
                a native presence in fundamentally different markets, worldwide.</p>
            </div>
            <div className="col-12 text-center  mb-3 mb-lg-0 col-lg-4">
                    <input type='email' className={Styles.email} placeholder='Email'/>
                    <input type='submit' value="Subscribe" className={Styles.submit} />
            </div>
            <div className="text-center col-lg-4 col-12">
                    <BsFacebook/>
                    <BsInstagram />
                    <BsTwitter />
                    <BsLinkedin />
              </div>
        </div>
    </div>
  )
}
