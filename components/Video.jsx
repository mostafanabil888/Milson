import React from 'react'
import ReactPlayer from 'react-player/youtube'
import styles from '../styles/Video.module.scss'
export default function Video() {
  return (
    <div className='container py-5'>
      <div className="d-flex align-items-center justify-content-center">
        <ReactPlayer  url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
      </div>
      <p className='my-5 fw-bold'>Monglish Academy UK was founded as an opportunity that lights the way for learners, to experience other cultures through language,
        by enabling them to study English easily, pl</p>
      <p className='fw-bold'>The academy has prepared various courses to serve its client is goals, whether related to language proficiency, career advancement or career development. Monglish is amongst the leading ESL schools thanks to its exclusive Mongi-Immerse methodology,
        used in teaching courses by handpicked experts.</p>
    </div>
  )
}
