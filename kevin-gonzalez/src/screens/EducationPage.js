// Importing Material UI Components

import SchoolIcon from '@mui/icons-material/School';

// Importing CustomComponents

import 
{ 
    VerticalTimeline, 
    VerticalTimelineElement 
}  
from 'react-vertical-timeline-component';

// Importing Styling Files

import 'react-vertical-timeline-component/style.min.css';

import '../assets/styles/EducationPage.scss';

const EducationPage = () =>
{
    return (
        <div className = "container">
            <div className = "education-container">
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className = "vertical-timeline-element--work"
                        contentStyle = {{ background: 'white', color: 'rgb(39, 40, 34)' }}
                        contentArrowStyle = {{ borderRight: '7px solid  white' }}
                        date = "December 2024 - Present"
                        iconStyle = {{ background: '#5000ca', color: '#FFFFFF' }}
                        icon = { <SchoolIcon />}
                    >
                        <h3 className = "vertical-timeline-element-title">Meta Front-End Developer</h3>
                        <h4 className = "vertical-timeline-element-subtitle">Coursera</h4>
                        <p>
                            Currently working towards completing the Meta Front-End Developer Professional Certificate on 
                            Coursera, a comprehensive program designed to build expertise in modern web development. Throughout 
                            the course, I have gained hands-on experience in HTML, CSS, JavaScript, React, and UI/UX principles, 
                            equipping me with the skills to create responsive and dynamic web applications.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className = "vertical-timeline-element--work"
                        contentStyle = {{ background: 'white', color: 'rgb(39, 40, 34)' }}
                        contentArrowStyle = {{ borderRight: '7px solid  white' }}
                        date = "September 2022 - November 2023"
                        iconStyle = {{ background: '#5000ca', color: '#FFFFFF' }}
                        icon = { <SchoolIcon />}
                    >
                        <h3 className = "vertical-timeline-element-title">MSc Software Engineering</h3>
                        <h4 className = "vertical-timeline-element-subtitle">Kingston University</h4>
                        <p>
                            I hold a Master of Software Engineering from Kingston University, where I completed key modules in Software 
                            Architecture and Programming Models, Software Quality Engineering, Agile Project Development, and Applied Data 
                            Programming. For my dissertation, I developed a machine learning model that used metadata analysis to predict 
                            Wikipedia article assessment grades. The model achieved an industry-standard level of performance, with exact 
                            match accuracy and within-one-grade accuracy, demonstrating my ability to apply advanced techniques to real-world 
                            problems.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className = "vertical-timeline-element--work"
                        contentStyle = {{ background: 'white', color: 'rgb(39, 40, 34)' }}
                        contentArrowStyle = {{ borderRight: '7px solid  white' }}
                        date = "September 2018 - June 2022"
                        iconStyle = {{ background: '#5000ca', color: '#FFFFFF' }}
                        icon = { <SchoolIcon />}
                    >
                        <h3 className = "vertical-timeline-element-title">BSc Computer Science</h3>
                        <h4 className = "vertical-timeline-element-subtitle">Kingston University</h4>
                        <p>
                            I hold a Bachelor of Computer Science with Honours from Kingston University, where I graduated with a 
                            First-Class grade. Throughout my studies, I focused on key modules such as Programming, Computer Systems, 
                            Database-Driven Application Development, Mobile Application Development, Requirements Analysis and Design, 
                            and Advanced Data Modelling. For my dissertation, I designed and implemented a prototype for the Gibraltar 
                            DVLA Booking System, modernizing service delivery through an efficient online platform, which was validated 
                            through user and system testing. I was also honored with the BCS, The Chartered Institute for IT Prize in 
                            recognition of my academic achievements.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default EducationPage;