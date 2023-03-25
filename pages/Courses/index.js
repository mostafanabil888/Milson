import React, { useState,useEffect } from 'react'
import { api } from '../../axios/api';
import NavbarHome from '../../components/NavbarHome';
import Shop from '../../components/Shop';

export default function Courses({courses}) {
    return(
        <div>
            <NavbarHome />
            <Shop courses={courses.data}/>
        </div>
    )
  }

export async function getStaticProps() {
    const {data : datacourses} = await api.get("/courses")
    return {
      props: {
        courses:datacourses,
      },
    }
  }