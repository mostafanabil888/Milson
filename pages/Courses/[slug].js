import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/details.module.scss'
import { api } from '../../axios/api';
export default function datails() {
  const [course , setCourse] = useState()
  const router = useRouter()
  const  {slug}  = router.query
  const getCourseByName = async () => {
    const {data} = await api.get(`/course/${slug}`)
    setCourse(data)
  }
  useEffect(() => {
    if(! slug) return
   getCourseByName()
  } , [slug])
 
  return (
        <div className={styles.datails}>
          <div className='container'>
            <div className='row'>
                <div className='bg-dark p-0 col-md-6 col-12'>
                  <img src={course?.image} alt={course?.name}/>
                </div>
                <div className='col-md-6 d-flex align-items-center justify-content-center
                  col-12 p-3'> 
                  <div>
                  <h5>COURSE DETAIL</h5>
                  <h2>{course?.name}</h2>
                  <p>{course?.description}</p>
                  <h3>Price : {course?.price}</h3>
                  <h4>Category : {course?.slug}</h4>
                  </div>

                </div>
            </div>
          </div>
        </div>
        
    )
}