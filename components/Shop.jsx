import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Styles from '../styles/Shop.module.scss'
export default function Shop({ courses }) {

  return (
    <div className={Styles.shop}>
      <div className="container">
        <div className="text-center">
          <h6>OUR COURSES</h6>
          <h1 className='mb-5 mt-3'>Explore Our <span>COURSES</span></h1>
        </div>
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          {
            courses.map((course) => {
              return (
                <div className='col-md-6 p-3 col-lg-4 col-12' key={course.id}>
                  <div className="cards">
                  <img className='col-12' alt={course.name} src={course.image}  height={187} />
                  <div className={`p-3 ${Styles.card}`}>
                    <h5>{course.name}</h5>
                    <p className='my-3'>{course.description}</p>
                    <Link className='p-4' href={`Courses/${course.slug}`}>details</Link>
                  </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
