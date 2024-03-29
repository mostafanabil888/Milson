import React, { useEffect, useState } from 'react'
import Styles from '../styles/GetTranslation.module.scss'
// import axios from 'axios'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useRouter } from 'next/router'
export default function GetTranslation() {
    const [t_to, sett_to] = useState('')
    const [word_count, setword_count] = useState('')
    const [file, setfile] = useState('')
    const [t_from, sett_from] = useState('')
    const router = useRouter();
    useEffect(()=>{
      if(localStorage.getItem("token") === null)
      {
        router.push('/')
      }
    })
  function handleImageUpload(event) {
    const formData = new FormData();
    const token = JSON.stringify(localStorage.getItem("token"))
    console.log(token)
    formData.append('image', event.target.files[0]);
    fetch('https://milsonn.com/api/user/translate/store', {
      method: 'POST',
      headers:{
        "Content-Type" : "application/json",
        "Authorization":`Bearer ${localStorage.getItem("token")}`
      },
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      const imageUrl = data.imageUrl;
  
    });
  }
  const [formData,setFormData] = useState({
    t_to:'',
    t_from:'',
    word_count:'',
    file:'',
    phone:''
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      file,
    });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append('t_to', formData.t_to);
    data.append('t_from', formData.t_from);
    data.append('word_count', formData.word_count);
    data.append('phone', formData.phone);
    data.append('file', formData.file);
    try {
      const response = await fetch('https://milsonn.com/api/user/translate/store', {
        method: 'POST',
        body: data, 
        headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }  
      });
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };
    return (
        <div  className={Styles.GetTranslation}>
            <div className="d-flex flex-wrap  align-items-center p-md-5 p-1   justify-content-around">
                <form onSubmit={handleSubmit} className="traslationbox  col-md-8 col-12" encType="multipart/form-data">
                    <h1 className='text-center text-md-start'>
                        Get a quote for your translation project
                    </h1>
                    <div className="row my-3">
                        <div className='col-lg-6 col-12'>
                            <label htmlFor="Translation From">Translation from</label>
                            <select name='t_from' value={formData.t_from} onChange={handleInputChange}>
                                 <option>Select Language</option>
                                <option>Arabic</option>
                                <option>English</option>
                            </select>
                        </div>
                        <div className='col-lg-6 col-12'>
                            <label htmlFor="Translation To">Translation To</label>
                            <select name='t_to' value={formData.t_to} onChange={handleInputChange}>
                                <option>Select Language</option>
                                <option>English</option>
                                <option>Arabic</option>
                                
                            </select>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className='col-lg-6 col-12'>
                            <label htmlFor="Translation from">Upload File</label>
                            <input name='file' type="File" onChange={handleFileChange} />

                        </div>
                        <div className='col-lg-6 col-12'>
                            <label htmlFor="Translation from">Word count</label>
                            <input type="number" name='word_count' value={formData.word_count} onChange={handleInputChange} placeholder='1000' />
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