import React from "react"
import styles from "../styles/HowWorks.module.scss"
import Image from "next/image"
export default function HowWorks() {
  return (
    <div className={styles.HowWorks}>
        <h2>How it works</h2>
        <div className="d-flex flex-wrap align-items-center justify-content-center   container">
            <div className="col-12 px-2  col-lg-4">
              <div className={styles.box}>
                <span>1</span>
                <Image alt="let" src="/Image/let1.svg" width="60" height="37"/>
                <div className="px-lg-3 p-2 my-4">
                <h3>Choose your language  upload your project</h3>
                <p>Upload your files in any format or use one of our integrations.</p>
                </div>
              </div>
            </div>
            <div className="col-12 px-2 col-lg-4">
              <div className={styles.box}>
                <span>2</span>
                <Image alt="let" src="/Image/let2.svg" width="60" height="37"/>
                <div className="px-lg-3 p-2 my-4">
                <h3>submit your project and Get a quote</h3>
                <p>We will assign it to the best translator right away.</p>
                </div>
              </div>
            </div>
            <div className="col-12 py-2 col-lg-4">
              <div className={styles.box}>
                <span>3</span>
                <Image alt="let" src="/Image/let3.svg" width="60" height="37"/>
                <div className="px-lg-3 p-2 my-4">
                <h3>Get your ready-to-use project back quickly</h3>
                <p>Provide direct feedback until you are satisfied.</p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
