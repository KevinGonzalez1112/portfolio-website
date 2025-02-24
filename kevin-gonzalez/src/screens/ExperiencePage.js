// Importing Material UI Components

import WorkIcon from '@mui/icons-material/Work';

// Importing CustomComponents

import 
{ 
    VerticalTimeline, 
    VerticalTimelineElement 
}  
from 'react-vertical-timeline-component';

// Importing Styling Files

import 'react-vertical-timeline-component/style.min.css';

import '../assets/styles/ExperiencePage.scss';

const ExperiencePage = () =>
{
    return (
        <div className = "timeline-container">
            <div className = "experience-container">
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className = "vertical-timeline-element--work"
                        contentStyle = {{ background: 'white', color: 'rgb(39, 40, 34)' }}
                        contentArrowStyle = {{ borderRight: '7px solid  white' }}
                        date = "February 2024 - present"
                        iconStyle = {{ background: '#5000ca', color: '#FFFFFF' }}
                        icon = { <WorkIcon />}
                    >
                        <h3 className = "vertical-timeline-element-title">Freelance Developer</h3>
                        <h4 className = "vertical-timeline-element-subtitle">Self-Employed</h4>
                        <p>
                            I was able to continue working on a Wikipedia Article Classification project post University, 
                            where I used Python and machine learning models to predict Wikipedia article grades based on metadata, 
                            achieving high accuracy. This project was carried out in collaboration with a member of staff at Kingston University, 
                            providing valuable real-world experience. Additionally, I have leveraged platforms like Upwork and freelancer.com 
                            to secure projects that kept me up to date with industry trends while continually refining my programming skills 
                            and adapting to new challenges.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className = "vertical-timeline-element--work"
                        contentStyle = {{ background: 'white', color: 'rgb(39, 40, 34)' }}
                        contentArrowStyle = {{ borderRight: '7px solid  white' }}
                        date = "September 2022 - April 2023"
                        iconStyle = {{ background: '#5000ca', color: '#FFFFFF' }}
                        icon = { <WorkIcon />}
                    >
                        <h3 className = "vertical-timeline-element-title">Academic Mentor</h3>
                        <h4 className = "vertical-timeline-element-subtitle">Kingston University</h4>
                        <p>
                            During my time as a mentor, I guided 2nd- and 3rd-year BSc Computer Science students through their 
                            Mobile Application Development and Programming II modules, helping them to master both intermediate 
                            and advanced coding concepts. I provided detailed technical feedback through comprehensive code reviews, 
                            emphasizing optimization, debugging, and the importance of writing clean code. In addition to mentoring, 
                            I played an active role in overseeing scheduled lab sessions, where we worked on real-world mobile 
                            development scenarios, covering essential topics such as software design patterns, architecture, and 
                            UI/UX best practices. By introducing students to agile development methodologies, version control with 
                            Git, and code refactoring techniques, I helped drive measurable improvements in their projects, fostering 
                            both their technical and collaborative skills.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className = "vertical-timeline-element--work"
                        contentStyle = {{ background: 'white', color: 'rgb(39, 40, 34)' }}
                        contentArrowStyle = {{ borderRight: '7px solid  white' }}
                        date = "June 2019 - August 2019"
                        iconStyle = {{ background: '#5000ca', color: '#FFFFFF' }}
                        icon = { <WorkIcon />}
                    >
                        <h3 className = "vertical-timeline-element-title">Tax Office Intern</h3>
                        <h4 className = "vertical-timeline-element-subtitle">HM Government of Gibraltar</h4>
                        <p>
                            In this role, I developed strong data management skills by inputting and analyzing financial 
                            data within Excel spreadsheets, conducting tax calculations, and verifying them for accuracy. I collaborated 
                            closely with local businesses to collect and review P8 tax forms, identifying and correcting any errors before 
                            data entry into the government tax system. This experience helped me enhance my attention to detail and analytical 
                            abilities, as I meticulously reviewed and validated data to ensure its integrity. Through this work, I gained 
                            a solid understanding of data compliance with regulatory standards, which is critical for accurate reporting 
                            and informed decision-making. Additionally, I acquired valuable experience handling large datasets, detecting 
                            errors, and maintaining high standards of accuracy - skills that are essential for success in any tech related role.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default ExperiencePage;
