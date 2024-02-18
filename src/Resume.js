import React, { useRef } from 'react'
import generatePDF from "react-to-pdf";
import './App.css';
import { Icon } from '@iconify/react';


const Resume = () => {


    const resumeRef = useRef()
    return (
        <div >
            <div ref={resumeRef}>

            <div style={{fontSize: "20px"}} className='m-5' >
                <div>
                    <div>
                        <h1 className='m-0'> OPALEYE BOLUWATIFE EZEKIEL</h1>
                        <p >Full Stack Developer</p>
                    </div>
                    <div style={{ alignItems: "center" }} className='d-flex justify-content-between m-0'>
                        <div>
                            <p style={{ alignItems: "center" }} className='d-flex m-0'><span><Icon icon="ic:round-phone" width="25px" height="25px" /></span>
                                <span className='ml-2'> 08077198333</span> </p>
                            <p style={{ alignItems: "center" }} className='d-flex m-0'><span><Icon icon="mdi:whatsapp" width="25px" height="25px" /></span>
                                <span className='ml-2'>07012301293</span></p>
                            <p style={{ alignItems: "center" }} className='d-flex m-0'><span><Icon icon="mdi:location" width="25px" height="25px" /></span>
                                <span className='ml-2'>Lagos, Nigeria.</span></p>
                        </div>
                        <div>
                            <p style={{ alignItems: "center" }} className='d-flex'><span><Icon icon="iconamoon:email-thin" width="30px" height="30px" />
                            </span><span className='ml-2'>ezekielcoolb@gmail.com</span> </p>
                        </div>
                        <div>
                            <p style={{ alignItems: "center" }} className='d-flex'><span><Icon icon="ph:link-thin" width="30px" height="30px" />
                            </span> <span className='ml-2'> github.com/Ezekielcoolb</span></p>
                        </div>
                    </div>
                </div>
                <div className='d-flex mt-4'>
                    <div className='mr-4' style={{ width: "55%" }}>
                        <div>
                            <h4 style={{ borderBottom: "4px solid black" }}>SUMMARY</h4>
                            <p>Dynamic, results-oriented and adaptable Full Stack Software Engineer with a proven track record of success across
                                diverse projects and industries. Proficient in a wide range of technologies including JavaScript, React, Ruby, Node.js, Express.js,
                                MongoDb, Python. Adept at collaborating with cross-functional teams to translate business requirements into scalable, efficient, and
                                user-friendly applications. Passionate about staying updated with emerging technologies and leveraging them to drive continuous improvement.
                                Strong problem-solving abilities and a collaborative mindset enable effective teamwork and streamlined project delivery.
                                Proven track record of delivering high-quality code on time and within budget. Excited about the opportunity to leverage my expertise to
                                contribute to the success and growth of your reputable company.</p>
                        </div>
                        <div>
                            <h4 style={{ borderBottom: "4px solid black" }}>EXPERIENCE</h4>
                            <div>
                                <h6>Senior Full Stack Developer</h6>
                                <i style={{ opacity: "0.7", fontWeight: "bold" }}>Divine Blossom </i>
                                <p style={{ alignItems: "center" }} className='d-flex flex-row'>

                                    <span style={{ alignItems: "center" }} className='d-flex mr-4'>
                                        <span className='mr-2'>

                                            <Icon icon="simple-line-icons:calender" width="10px" height="10px" />
                                        </span> 2023-present
                                    </span>
                                    <span style={{ alignItems: "center" }} className='d-flex '>
                                        <span className='mr-1'>

                                            <Icon icon="humbleicons:location" width="20px" height="20px" />
                                        </span> Ogun State, Nigeria.
                                    </span>


                                </p>
                                <ul className='m-4'>
                                    <li>Spearheaded the development of end-to-end web applications, contributing expertise in both front-end and back-end technologies.</li>
                                    <li>Led the design and implementation of responsive user interfaces, ensuring an optimal user experience across various devices.</li>
                                    <li>Collaborated closely with cross-functional teams, including designers and product managers, to translate business requirements into technical solutions.</li>
                                    <li>Utilized  JavaScript, React, Node.js, Express.js and MongoDb to architect and develop robust and scalable applications.</li>

                                    <li>Actively participated in code reviews, identifying opportunities for improvement and ensuring code quality and best practices.</li>
                                    <li>Conducted thorough testing procedures, including unit testing and integration testing, to deliver high-quality and bug-free software.</li>

                                </ul>
                            </div>
                            <div>
                                <h6>Full Stack Developer</h6>
                                <i style={{ opacity: "0.7", fontWeight: "bold" }}>F.O.Z Engineering Ventures</i>
                                <p style={{ alignItems: "center" }} className='d-flex flex-row'>

                                    <span style={{ alignItems: "center" }} className='d-flex mr-4'>
                                        <span className='mr-2'>

                                            <Icon icon="simple-line-icons:calender" width="10px" height="10px" />
                                        </span> 2022-2024
                                    </span>
                                    <span style={{ alignItems: "center" }} className='d-flex '>
                                        <span className='mr-1'>

                                            <Icon icon="humbleicons:location" width="20px" height="20px" />
                                        </span> Lagos State, Nigeria.
                                    </span>


                                </p>
                                <ul className='m-4'>
                                    <li>Played a pivotal role in the development lifecycle of web applications, demonstrating proficiency in both front-end and back-end technologies.</li>
                                    <li>Collaborated closely with project stakeholders to gather requirements, analyze user needs, and translate them into technical specifications.</li>
                                    <li>Engineered relational databases and implemented data models to efficiently manage and store application data.</li>
                                    <li>Designed and implemented responsive user interfaces, ensuring an optimal user experience across various devices and screen sizes.</li>
                                    <li>Successfully delivered a fully developed functional site for the company on time and within scope, showcasing a track record of meeting project objectives and client requirements.</li>
                                </ul>
                            </div>
                            <div>
                                <h6>Back End Remote Intern</h6>
                                <i style={{ opacity: "0.7", fontWeight: "bold" }}>100 Dev Agency </i>
                                <p style={{ alignItems: "center" }} className='d-flex flex-row'>

                                    <span style={{ alignItems: "center" }} className='d-flex mr-4'>
                                        <span className='mr-2'>

                                            <Icon icon="simple-line-icons:calender" width="10px" height="10px" />
                                        </span> 2021-2022
                                    </span>
                                    <span style={{ alignItems: "center" }} className='d-flex '>
                                        <span className='mr-1'>

                                            <Icon icon="humbleicons:location" width="20px" height="20px" />
                                        </span> Los Angeles, United State.
                                    </span>


                                </p>
                                <ul className='m-4'>
                                    <li>Actively contributed to back-end development tasks under the guidance of senior developers,
                                        gaining hands-on experience with industry-standard technologies and practices.</li>
                                    <li>Assisted in the design, development, and implementation of server-side logic and databases to support web applications and services.</li>
                                    <li>Participated in the maintenance and optimization of existing back-end systems, troubleshooting issues and implementing enhancements to improve performance
                                        and scalability.</li>
                                    <li>Demonstrated strong problem-solving abilities and attention to detail in resolving technical challenges and implementing efficient solutions.</li>
                                    <li>Communicated effectively with team members and supervisors, providing regular updates on progress and actively participating in team meetings and discussions.</li>
                                </ul>
                            </div> <br /> <br />
                            <div className='mt-4'>
                                <h6>Assistant Manager</h6>
                                <i style={{ opacity: "0.7", fontWeight: "bold" }}>Divine Blossom Group of Schools </i>
                                <p style={{ alignItems: "center" }} className='d-flex flex-row'>

                                    <span style={{ alignItems: "center" }} className='d-flex mr-4'>
                                        <span className='mr-2'>

                                            <Icon icon="simple-line-icons:calender" width="10px" height="10px" />
                                        </span> 2020-2022
                                    </span>
                                    <span style={{ alignItems: "center" }} className='d-flex '>
                                        <span className='mr-1'>

                                            <Icon icon="humbleicons:location" width="20px" height="20px" />
                                        </span> Ogun State, Nigeria.
                                    </span>


                                </p>
                                <ul className='m-4'>
                                    <li>Played a key role in supporting the overall management and operations,
                                        contributing to the delivery of high-quality education and administrative services.</li>
                                    <li>Collaborated with department heads and faculty members to ensure alignment with school policies, curriculum standards, and educational objectives.</li>
                                    <li>Facilitated communication and coordination between different departments and stakeholders, fostering a collaborative and supportive work environment.</li>
                                    <li>Acted as a liaison between the school management, parents, and external partners, addressing inquiries, resolving issues, and maintaining positive relationships.</li>
                                    <li>Provided leadership and guidance to staff members, fostering professional development, motivation, and performance excellence.</li>
                                    <li>Implemented policies and procedures to promote safety, security, and well-being within the school premises, prioritizing the welfare of students, staff, and visitors.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='ml-5' style={{ width: "40%" }}>

                        <div>
                            <h4 style={{ borderBottom: "4px solid black" }}>SKILLS</h4>
                            <div>
                                <p style={{ opacity: "0.7", fontWeight: "bold" }}>Client Side</p>
                                <p className='d-flex justify-content-between'>
                                    <span style={{ borderBottom: "1px solid grey", fontWeight: "bold" }}>HTML</span>
                                    <span style={{ borderBottom: "1px solid grey", fontWeight: "bold" }}>CSS</span>
                                    <span style={{ borderBottom: "1px solid grey", fontWeight: "bold" }}>JavaScript</span>
                                    <span style={{ borderBottom: "1px solid grey", fontWeight: "bold" }}>React</span>
                                </p>
                                <p className='d-flex justify-content-between'>

                                    <span style={{ borderBottom: "1px solid grey", fontWeight: "bold" }}>Redux</span>
                                    <span style={{ borderBottom: "1px solid grey", fontWeight: "bold" }}>Bootstrap</span>
                                    <span style={{ borderBottom: "1px solid grey", fontWeight: "bold" }}>Backbone</span>
                                    <span style={{ borderBottom: "1px solid grey", fontWeight: "bold" }}>Tailwind</span>
                                </p>
                            </div>
                            <div className='mt-5'>
                                <p style={{ opacity: "0.7", fontWeight: "bold" }}>Server Side</p>
                                <p className='d-flex justify-content-between'>
                                    <span style={{ borderBottom: "1px solid grey", fontWeight: "bold" }}>Node.js</span>
                                    <span style={{ borderBottom: "1px solid grey", fontWeight: "bold" }}>Express.js</span>
                                    <span style={{ borderBottom: "1px solid grey", fontWeight: "bold" }}>Python</span>
                                    <span style={{ borderBottom: "1px solid grey", fontWeight: "bold" }}>MongoDB</span>

                                </p>
                            </div>
                            <div className='mt-5'>
                                <p style={{ opacity: "0.7", fontWeight: "bold" }}>Development and Operation</p>
                                <p className='d-flex justify-content-between'>
                                    <span style={{ borderBottom: "1px solid grey", fontWeight: "bold" }}>Git/GitHub/GitLab</span>

                                </p>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h4 style={{ borderBottom: "4px solid black" }}>EDUCATION</h4>
                            <p style={{ fontWeight: "bold" }}>Bsc in Biochemistry</p>
                            <p className='m-0' style={{ fontWeight: "bold", opacity: "0.8" }}>Olabisi Onabanjo University</p>
                            <p style={{ alignItems: "center" }} className='d-flex flex-row m-0'>

                                <span style={{ alignItems: "center" }} className='d-flex mr-4'>
                                    <span className='mr-2'>

                                        <Icon icon="simple-line-icons:calender" width="10px" height="10px" />
                                    </span> 2014-2018
                                </span>
                                <span style={{ alignItems: "center" }} className='d-flex m-0'>
                                    <span className='mr-1'>

                                        <Icon icon="humbleicons:location" width="20px" height="20px" />
                                    </span> Ogun State, Nigeria.
                                </span>


                            </p>
                        </div>
                        <div className='mt-5'>
                            <h4 style={{ borderBottom: "4px solid black" }}>PROJECTS</h4>
                            <div>
                                <h6 style={{ fontWeight: "bold", opacity: "0.8" }}>School Management System Website</h6>
                                <p ><span style={{ fontWeight: "bold" }}>Description:</span> <br />
                                    Developed a comprehensive school management system website that streamlines administrative tasks, enhances communication,
                                    and facilitates student-teacher interaction.</p>
                                <p><span style={{ fontWeight: "bold" }}>Key Features:</span>
                                    <ul>
                                        <li><span style={{ fontWeight: "bold" }}>Admin Panel:</span> Implemented an intuitive admin dashboard allowing administrators to register students and teachers,
                                            manage user accounts, and oversee financial transactions.</li>
                                        <li><span style={{ fontWeight: "bold" }}>Payment Gateway Integration: </span>Integrated secure payment gateways to enable online fee payments, ensuring convenience
                                            and transparency for parents and guardians.</li>
                                        <li><span style={{ fontWeight: "bold" }}>Teacher Tools: </span>Designed functionalities for teachers to create and distribute assignments, conduct examinations,
                                            and provide feedback to students within the platform.</li>
                                        <li><span style={{ fontWeight: "bold" }}>Student Portal: </span>Developed a student portal enabling students to access educational resources, submit assignments,
                                            make presentations, and view/download report cards.</li>
                                        

                                    </ul>
                                </p>
                                <p ><span style={{ fontWeight: "bold" }}>Technologies used:</span><br />
                                    JavaScript, React, Node.js, Express.js, MongoDB, Bootstrap</p>
                            </div>
                            <div>
                                <h6 style={{ fontWeight: "bold", opacity: "0.8" }}>Engineering Marvel Hub</h6>
                                <p><span>Description:</span>
                                    <ul>
                                        <li>Conceptualized and realized the vibrant "Engineering Marvel Hub," an immersive digital site spotlighting the company's engineering triumphs.</li>
                                        <li>Crafted an engaging user interface inviting clients into an experiential journey through the company's diverse projects, from thermal insulation
                                            to innovative roofing solutions.</li>
                                        <li>Introduced an interactive product gallery, offering clients an unparalleled opportunity to explore and inquire about different panels and roofing materials.</li>
                                        <li>Pioneered an intuitive booking and ordering system, empowering clients to seamlessly schedule appointments and make purchases with confidence.</li>
                                        <li>Implemented cutting-edge technologies such as HTML/CSS, JavaScript, React, Node.js and MongoDB for a modern and intuitive user interface.</li>
                                    </ul>
                                </p>

                            </div>
                        </div> <br /> <br />
                        <div>
                            <h4 style={{ borderBottom: "4px solid black" }}>STRENGTHS</h4>
                            <p><span style={{ fontWeight: "bold" }}>Communication</span><br />
                                Verbal and written communication, Active Listening, Interpersonal Skills
                            </p>
                            <p><span style={{ fontWeight: "bold" }}>Problem-Solving</span><br />
                                Critical Thinking, Analytical Skills, Creative Problem-Solving
                            </p>
                            <p><span style={{ fontWeight: "bold" }}>Teamwork and Collaboration</span><br />
                                Collaboration, Team Building, Conflict Resolution, Leadership
                            </p>
                            <p><span style={{ fontWeight: "bold" }}>Time Management and Organization</span><br />
                                Prioritization, Time Management, Multitasking
                            </p>
                            <p><span style={{ fontWeight: "bold" }}>Adaptability and Learning</span><br />
                                Adaptability, Adaptability, Openness to Feedback, Resilience
                            </p>
                            <p><span style={{ fontWeight: "bold" }}>Customer Focus</span><br />
                                Customer Service, Client Relationship Management, Understanding Customer Needs
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <button className="btn btn-info btn-block" style={{ width: "50%" }} onClick={() => {
                generatePDF(resumeRef, { filename: "resume.pdf" })
            }}>Download Resume</button>
        </div>
    )
}

export default Resume