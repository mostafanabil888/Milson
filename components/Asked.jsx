import React, { useState } from 'react'
import Styles from "../styles/Asked.module.scss"
import { AiOutlinePlus } from "react-icons/ai"
import Accordion from 'react-bootstrap/Accordion';
export default function Asked() {
    const [Data] = useState(
        [
            {
                id: 1,
                title: "How is the price calculated?",
                body : "The cost of translation services ranges depending on your project’s word count, as well as the languages and industry expertise required for your project. For pricing, submit your file to get a quote within one working day."

            },
            {
                id: 2,
                title: "Do you have different pricing levels?",
                body : "The cost of translation services ranges depending on your project’s word count, as well as the languages and industry expertise required for your project. You can calculate the cost of your online translation by heading to our online translation Wizard. Our prices are highly competitive."

            },
            {
                id: 3,
                title: "What if I cannot find the languages that I need?",
                body : "No worries, we can probably still provide you with the language service you are looking for. Please contact our support team (support@getblend.com) and specify the needed languages."
            },
            {
                id: 4,
                title: "How much time does it take for the content to be translated?",
                body : "We do our best to complete all translations within 1-2 business days. Once you open a project, you will receive a more accurate time estimate at checkout based on your word count, language pair, and translator expertise. "
            }
        ]
    )
    return (
        <div className={Styles.Asked}>
            <div className="container">
                <h2 className='text-center mb-5'>Frequently asked questions</h2>
                {
                    Data.map((qes) => {
                        return (
                            <Accordion   key={qes.id} eventKey="0">
                                <Accordion.Item className={Styles.accordion} eventKey="0">
                                    <Accordion.Header className={Styles.accordionheader}><h2>{qes.title}</h2></Accordion.Header>
                                    <Accordion.Body className={Styles.AccordionBody}>
                                      <p>
                                      {qes.body}
                                      </p>
                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>
                        )
                    })
                }
            </div>
        </div>
    )
}
