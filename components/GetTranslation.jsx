import React, { useState } from 'react'
import Styles from '../styles/GetTranslation.module.scss'
import axios from 'axios'
import { AiOutlineArrowRight } from 'react-icons/ai'
export default function GetTranslation() {
    const [t_to, sett_to] = useState('')
    const [word_count, setword_count] = useState('')
    const [file, setfile] = useState('')
    const [t_from, sett_from] = useState('')
    // const [phone, setphone] = useState('')
    // const router = useRouter()
  const handleSubmit = async (event) => {
    event.preventDefault()

    // Add validation to ensure user enters valid data
    if (t_to === '' || word_count === '' || file === '' || t_from === '') {
      alert('Please fill out all fields')
      return
    }   
    const response = await fetch('https://milsonn.com/api/user/translate/store', {
      method: 'POST',
      body: JSON.stringify({ t_to, word_count, file,t_from }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (response.ok) {
      // Redirect to home page
    //   router.push('/')
    alert('done')
    } else {
      alert('An error occurred while signing up')
    }
  }
  function handleImageUpload(event) {
    const formData = new FormData();
    formData.append('image', event.target.files[0]);
  
    fetch('https://milsonn.com/api/user/translate/store', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      // Display the uploaded image in your React application
      const imageUrl = data.imageUrl;
      // ...
    });
  }
    return (
        <div className={Styles.GetTranslation}>
            <div className="d-flex flex-wrap  align-items-center p-md-5 p-1   justify-content-around">
                <form   onSubmit={handleSubmit} className="traslationbox  col-md-8 col-12" encType="multipart/form-data">
                    <h1 className='text-center text-md-start'>
                        Get a quote for your translation project
                    </h1>
                    <div className="row my-3">
                        <div className='col-lg-6 col-12'>
                            <label htmlFor="Translation From">Translation from</label>
                            <select  value={t_from}
                            onChange={(event) => sett_from(event.target.value)}>
                                 <option>Select Language</option>
                                <option>Arabic</option>
                                <option>English</option>
                            </select>
                        </div>
                        <div className='col-lg-6 col-12'>
                            <label htmlFor="Translation To">Translation To</label>
                            <select onChange={(event) => sett_to(event.target.value)} 
                             value={t_to}>
                                <option>Select Language</option>
                                <option>English</option>
                                <option>Arabic</option>
                                
                            </select>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className='col-lg-6 col-12'>
                            <label htmlFor="Translation from">Upload File</label>
                            <input type="File" onClick={handleImageUpload}
                                  value={file}
                                  onChange={(event) => setfile(event.target.value)} />

                        </div>
                        <div className='col-lg-6 col-12'>
                            <label htmlFor="Translation from">Word count</label>
                            <input type="number" value={word_count}
                                  onChange={(event) => setword_count(event.target.value)} placeholder='1000' />
                        </div>
                        <button >submit</button>
                    </div>
                    <div className="d-flex align-items-center mt-4 mb-5 justify-content-center">
                        <div onClick={(e) => submit(e)} className={Styles.btn}>
                            <span>Calculate Quote</span>
                            <AiOutlineArrowRight />
                        </div>

                    </div>
                    <h6 className='mb-4'>Want To get a quote based on your Files? Upload them To our wizard.</h6>
                    <p>Have a large complex project?
                        Talk To us To get a quote that is right for you.</p>

                </form>
                <div className="px-4 col-md-4 d-none d-lg-flex">
                    <img src='/img/header' />
                </div>

            </div>
        </div>
    )
}
