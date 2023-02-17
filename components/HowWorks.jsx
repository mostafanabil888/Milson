import React from 'react'
import styles from '../styles/HowWorks.module.scss'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { MdOutlinePeopleOutline } from 'react-icons/md'
import { BsFillEnvelopeOpenFill } from 'react-icons/bs'
export default function HowWorks() {
  return (
    <div className={styles.HowWorks}>
        <h2>How it works</h2>
        <div className="d-flex flex-wrap align-items-center justify-content-center   container">
            <div className="col-12 px-2  col-lg-4">
              <div className={styles.box}>
                <span>1</span>
                <img src='/img/let1.svg' width='60' height='37'/>
                <div className="px-lg-3 p-2 my-4">
                <h3>Choose your language  upload your project</h3>
                <p>Upload your files in any format or use one of our integrations.</p>
                </div>
              </div>
            </div>
            <div className="col-12 px-2 col-lg-4">
              <div className={styles.box}>
                <span>2</span>
                <img src='/img/let2.svg' width='60' height='37'/>
                <div className="px-lg-3 p-2 my-4">
                <h3>Get a quote and submit your projectt</h3>
                <p>We'll assign it to the best translator right away.</p>
                </div>
              </div>
            </div>
            <div className="col-12 py-2 col-lg-4">
              <div className={styles.box}>
                <span>3</span>
                <img src='/img/let3.svg' width='60' height='37'/>
                <div className="px-lg-3 p-2 my-4">
                <h3>Get your ready-to-use project back quickly</h3>
                <p>Provide direct feedback until you’re satisfied.</p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
