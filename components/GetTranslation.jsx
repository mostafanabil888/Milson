import React from 'react'
import Styles from '../styles/GetTranslation.module.scss'
import { AiOutlineArrowRight } from 'react-icons/ai'
export default function GetTranslation() {
    return (
        <div className={Styles.GetTranslation}>
              <div className="d-flex flex-wrap  align-items-center p-md-5 p-1   justify-content-around">
            <div className="traslationbox  col-md-8 col-12">
                <h1 className='text-center text-md-start'>
                    Get a quote for your translation project
                </h1>
                <div className="row my-3">
                    <div className='col-lg-6 col-12'>
                        <label htmlFor="Translation from">Translation from</label>
                        <select>
                            <option>Arabic</option>
                            <option>English</option>
                            <option>Turkish</option>
                            <option>French</option>
                            <option>German</option>
                        </select>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <label htmlFor="Translation from">Translation to</label>
                        <select>
                            <option>English</option>
                            <option>Arabic</option>
                            <option>Turkish</option>
                            <option>French</option>
                            <option>German</option>
                        </select>
                    </div>
                </div>
                <div className="row my-3">
                    <div className='col-lg-6 col-12'>
                        <label htmlFor="Translation from">Upload File</label>
                        <input type="file"
       id="avatar" name="avatar" />

                    </div>
                    <div className='col-lg-6 col-12'>
                        <label htmlFor="Translation from">Word count</label>
                        <input type="text" name="" id="" placeholder='1000' />
                    </div>
                </div>
                <div className="d-flex align-items-center mt-4 mb-5 justify-content-center">
                <div className={Styles.btn}>
                    <span>Calculate Quote</span>
                    <AiOutlineArrowRight />
                </div>
                
                </div>
                <h6 className='mb-4'>Want to get a quote based on your files? Upload them to our wizard.</h6>
                <p>Have a large complex project? 
                    Talk to us to get a quote that is right for you.</p>
              
            </div>
            <div className="px-4 col-md-4 d-none d-lg-flex">
                <img src='/img/header' />
            </div>

       </div>
        </div>
    )
}
