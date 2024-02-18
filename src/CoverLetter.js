import React, { useRef } from 'react'
import generatePDF from "react-to-pdf";
import './App.css';
// import { Icon } from '@iconify/react';

const Cover = () => {

    const coverRef = useRef()
    return(
        <div className='p-4'>
            <div ref={coverRef}>
                <div style={{fontSize: "25px", textAlign: "justify"}} className='m-5'> 
                <br /> <br />
                    <h5>Dear Hiring Manager, </h5>
                    <p>I am writing to express my interest in the Full Stack Developer position at ypur company, as advertised. 
                        With a strong background in both front-end and back-end development, along with a passion for creating innovative solutions, 
                        I am excited about the opportunity to contribute to your team and drive success at your company.</p>
                        <p>
                        Throughout my years of experience in the software development industry, I have honed my skills in a diverse range of 
                        technologies, including but not limited to JavaScript, React, Node.js, Python, MongoDB, Express.js and various other frameworks and tools. 
                        I have successfully delivered numerous projects, ranging from responsive web applications to complex database management systems, 
                        all while adhering to best practices and industry standards.
                        </p>
                        <p>
                        One aspect of my career that I take particular pride in is my ability to collaborate effectively with cross-functional teams. 
                        Whether it's working closely with designers to ensure a seamless user experience or partnering with project managers to translate 
                        business requirements into technical solutions, I understand the importance of teamwork in achieving project success. 
                        My communication skills, adaptability, and problem-solving abilities have consistently enabled me to thrive in fast-paced and 
                        dynamic environments.
                        </p>
                        <p>
                        I am deeply passionate about staying updated with emerging technologies and continuously expanding my knowledge base. 
                        I am eager to leverage my expertise to contribute to the ongoing growth and innovation at your company, tackling new challenges and 
                        driving impactful solutions.
                        </p>
                        <p>
                        Thank you for considering my application. I am enthusiastic about the opportunity to discuss how my skills and experiences align 
                        with the needs of your team. Please find my resume attached for your review. I am available for an interview at your earliest 
                        convenience and can be reached at 08077198333 or via email at ezekielcoolb@gmail.com.
                        </p>
                        <p>Yours faithfully,</p> <br />
                        <p>Opaleye Boluwatife Ezekiel.</p>
                </div>
            </div>
            <button className="btn btn-info btn-block" style={{ width: "50%" }} onClick={() => {
                generatePDF(coverRef, { filename: "cover-letter.pdf" })
            }}>Download Cover Letter</button>
        </div>
    )
}
export default Cover