import React from 'react'
import styles from '../styles/GetinTouch.module.scss'
export default function GetinTouch() {
    return (
        <div className={styles.GetinTouch}>
            <div className="row p-5">
                <div className="col-12 col-md-4 col-lg-6">
                    <h3 className='fs-1'>Get in Touch</h3>
                    <p> Looking to natively embed your presence in new world markets? Speak with a representative today to discuss the perfect BLEND of localization services.</p>
                </div>
                <div className="col-12 col-md-8 col-lg-6">
                   <div className="row mb-3">
                   <div className='col-12 col-md-6'>
                    <label htmlFor="First name">First name</label>
                    <input className='' type="text" name="" id="" />
                    </div>
                   <div className='col-12 col-md-6'>
                   <label htmlFor="Last name">Last name</label>
                    <input type="text" name="Last" id="Last" />
                   </div>
                   </div>
                   <div className='my-4'>
                   <label htmlFor="First name">Corporate Email</label>
                    <input  type="email" name="Email" id="Email" />
                   </div>
                    <p>By submitting this form, you agree to Milson's Privacy Policy and Terms and Conditions.</p>

                    <span>continue</span>
                </div>
            </div>
        </div>
    )
}
