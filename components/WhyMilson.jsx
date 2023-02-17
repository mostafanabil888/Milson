import React from 'react'
import Styles from '../styles/WhyMilson.module.scss'
export default function WhyMilson() {
  return (
    <div className={`my-5 px-md-5 px-4 ${Styles.WhyMilson}`}>
            <h2 className='text-center mb-3 mb-md-5'>Why choose Milson</h2>
            <div className="row align-items-center justify-content-center py-3 mb-md-5 mb-3">
                <div className={`col-12 col-md-4 px-0 px-md-2 ${Styles.box}`}>
                   <div>
                   <h3>Get started in minutes</h3>
                   <p>BLEND’s translation wizard and custom integrations make it easy to 
                    upload your content in any format.</p>
                   </div>
                </div>
                <div className={`col-12 col-md-4 px-0 px-md-2 ${Styles.box}`}>
                   <div>
                   <h3>Fully-vetted translators</h3>
                   <p>We work with top professionals to ensure your website is flawless and fully in line with your brand’s
                     voice and tone.</p>
                   </div>
                </div>
              
                <div className={`col-12 col-md-4 px-0 px-md-2 ${Styles.box}`}>
                   <div>
                   <h3>24/7 translation support</h3>
                   <p>Our website localization experts are here to assist you, so you get the highest quality website translation services.</p>
                   </div>
                </div>
              
              
            </div>
            <div className='text-center'>
                <span>Calculate Quote</span>
        </div>
    </div>
  )
}
