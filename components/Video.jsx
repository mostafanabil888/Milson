import React from 'react'
import ReactPlayer from 'react-player/youtube'
import styles from '../styles/Video.module.scss'
export default function Video() {
  return (
    <div className='container py-5'>
      <div className="d-flex align-items-center justify-content-center">
        {/* <ReactPlayer  url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /> */}
      </div>
      <p className='my-5  fw-bold '>Milson Academy applies the best world-class educational pedagogy, namely the immersion approach towards language acquisition. Now, wherever you are, we can reach you to make your dream of learning English true.</p>
      <p className='fw-bold'>Milson Academy applies the best world-class educational pedagogy, namely the immersion approach towards language acquisition. Now, wherever you are, we can reach you to make your dream of learning English true.
The academy offers a plethora of courses tailored to serve its clients goals, as it customizes its courses content to the individual needs of the learner. Milson is expanding rapidly with great strides into the educational marketplace, thanks to its well-established experience in teaching language.</p>
    </div>
  )
}
