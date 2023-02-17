import React, { useState } from 'react'

export default function FooterLinks() {
    const [data] = useState([
        {
            id: 1,
            title: "Website Translation",
            first: "Website Translation ",
            second: "Legal Translations ",
            third: "Marketing Translation ",
            fourth: "Technical Translation ",
            fivth: "Financial Translation "
        },
        {
            id: 2,
            title: "Localization Services",
            first: "App Localization",
            second: "Multilingual Helpdesk",
            third: "Fast Translation ",
            fourth: "Content Localization ",
            fivth: "Software Localization "
        },

        {
            id: 3,
            title: "Voice Services",
            first: "Voice-Over Recording",
            second: "Voice-Over Recording",
            third: "xIVR & Contact ",
            fourth: "eLearning & Talent",
            fivth: "AI & Synthetic Voice"
        },
        {
            id: 4,
            title: " Company",
            first: " About Us",
            second: "Contact us ",
            third: "Events",
            fourth: "Careers",
            fivth: "Become a Translator"
        }
    ])
    return (
        <div className='p-5' style={{ background: "black" }}>
            <div className=" align-items-center row justify-content-between" style={{ cursor: "pointer" }}>
                {data.map((item) => {
                    return (
                        <div key={item.id} className='text-light col-12  text-center text-lg-start col-md-6 col-lg-3'>
                           <div>
                           <h4 className='fs-5'>{item.title}</h4>
                            <ul style={{ listStyle: "none" }} className='mt-2 list-style-none fs-6'>
                                <li>{item.first}</li>
                                <li>{item.second}</li>
                                <li>{item.third}</li>
                                <li>{item.fourth}</li>
                                <li>{item.fivth}</li>
                            </ul>
                           </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
