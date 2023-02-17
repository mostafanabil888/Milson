import React from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'
export default function Navbar() {
  return (
    <div className={styles.Navbar}>
      <nav className="navbar navbar-expand-lg"><img src="/img/logo.jpg" height={80} width={170} alt="Picture of the author" />
        <button className={`navbar-toggler ${styles.NavIcon}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse  ${styles.collapse}`} id="navbarSupportedContent">
          <ul className={`navbar-nav me-auto mb-2  mb-lg-0 ${styles.nav}`}>
            <li className="nav-item mt-4 mt-lg-0">
              <Link className="nav-link" aria-current="page" href="/">English</Link>
            </li>
            <li className="nav-item mt-4 mt-lg-0">
              <Link className="nav-link" aria-current="page" href="/">translators</Link>
            </li>
            <li className="nav-item mt-4 mt-lg-0">
              <Link className="nav-link" href="/">About us</Link>
            </li>
            <li className="nav-item mt-4 mt-lg-0">
              <Link className="nav-link" href="/">contact us</Link>
            </li>
            <li className="nav-item mt-4 mt-lg-0 d-inline d-lg-none">
              <Link className="nav-link" href="/">Log Out</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
