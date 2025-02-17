// Importing UI Components

import { Heading, HStack, VStack } from "@chakra-ui/react";

// Importing Custom Components

import FullScreenSection from "./FullScreenSection";
import EducationEntry from "./EducationEntry";
import ExperienceEntry from "./ExperienceEntry";

const ExperienceSection = () => 
{
    return (
        <FullScreenSection
            overflowY = "hidden"
        >
            <HStack
                spacing = {0}
            >
                <VStack
                    height = "100vh"
                    width = "45vw"
                    marginTop = "25vh"
                >
                    <Heading
                        paddingBottom = "10vh"
                    >
                        EDUCATION
                    </Heading>
                    <EducationEntry 
                        dateRange = "December 2024 - Present"
                        provider = "Coursera"
                        title = "Meta Front-End Developer"
                        description = 
                        {
                            `I am currently pursuing a Front-End Developer Professional Certificate from Meta, where I am gaining hands-on experience in 
                            building responsive, user-friendly websites using HTML, CSS, and JavaScript. The course is enhancing my skills in front-end 
                            development frameworks, version control with Git, and modern development practices, preparing me to build dynamic and efficient 
                            web applications.`
                        }
                    />
                    <EducationEntry 
                        dateRange = "November 2023 - January 2024"
                        provider = "Coursera"
                        title = "Google Data Analytics"
                        description =
                        {
                            `I have completed the Google Data Analytics Professional Certificate, where I developed a strong foundation in data analysis, 
                            including skills in data cleaning, visualization, and statistical analysis using tools like Excel, SQL, and R. The course equipped 
                            me with the ability to transform complex data into actionable insights and make data-driven decisions, preparing me for roles in 
                            data analytics.`
                        }
                    />
                    <EducationEntry 
                        dateRange = "September 2022 - November 2023"
                        provider = "Kingston University"
                        title = "MSc Software Engineering"
                        description =
                        {
                            `I hold a Master of Software Engineering from Kingston University, where I completed key modules in Software Architecture 
                            and Programming Models, Software Quality Engineering, Agile Project Development, and Applied Data Programming. For my 
                            dissertation, I developed a machine learning model that used metadata analysis to predict Wikipedia article assessment 
                            grades. The model achieved an industry-standard level of performance, with exact match accuracy and within-one-grade accuracy, 
                            demonstrating my ability to apply advanced techniques to real-world problems.`
                        }
                    />
                    <EducationEntry 
                        dateRange = "September 2018 - June 2022"
                        provider = "Kingston University"
                        title = "BSc Computer Science"
                        description = 
                        {
                            `I hold a Bachelor of Computer Science with Honours from Kingston University, where I graduated with a First-Class 
                            grade. Throughout my studies, I focused on key modules such as Programming, Computer Systems, Database-Driven Application 
                            Development, Mobile Application Development, Requirements Analysis and Design, and Advanced Data Modelling. For my 
                            dissertation, I designed and implemented a prototype for the Gibraltar DVLA Booking System, modernizing service delivery 
                            through an efficient online platform, which was validated through user and system testing. I was also honored with the BCS, 
                            The Chartered Institute for IT Prize in recognition of my academic achievements.`
                        }
                    />
                </VStack>
                <VStack
                    height = "100vh"
                    width = "45vw"
                    marginTop = "25vh"
                >
                    <Heading
                        paddingBottom = "10vh"
                    >
                        EXPERIENCE
                    </Heading>
                    <ExperienceEntry 
                        dateRange = "February 2024 - Present"
                        company = "Self-Employed"
                        title = "Freelance Developer"
                        description = 
                        {
                            `I was able to continue working on a Wikipedia Article Classification project post University, 
                            where I used Python and machine learning models to predict Wikipedia article grades based on metadata, 
                            achieving high accuracy. This project was carried out in collaboration with a member of staff at Kingston University, 
                            providing valuable real-world experience. Additionally, I have leveraged platforms like Upwork and freelancer.com 
                            to secure projects that kept me up to date with industry trends while continually refining my programming skills 
                            and adapting to new challenges.`
                        }
                    />
                    <ExperienceEntry 
                        dateRange = "September 2022 - April 2023"
                        company = "Kingston University"
                        title = "Academic Mentor"
                        description = 
                        {
                            `During my time as a mentor, I guided 2nd- and 3rd-year BSc Computer Science students through their 
                            Mobile Application Development and Programming II modules, helping them to master both intermediate 
                            and advanced coding concepts. I provided detailed technical feedback through comprehensive code reviews, 
                            emphasizing optimization, debugging, and the importance of writing clean code. In addition to mentoring, 
                            I played an active role in overseeing scheduled lab sessions, where we worked on real-world mobile 
                            development scenarios, covering essential topics such as software design patterns, architecture, and 
                            UI/UX best practices. By introducing students to agile development methodologies, version control with 
                            Git, and code refactoring techniques, I helped drive measurable improvements in their projects, fostering 
                            both their technical and collaborative skills.`
                        }
                    />
                    <ExperienceEntry 
                        dateRange = "June 2019 - August 2019"
                        company = "HM Government of Gibraltar"
                        title = "Tax Office Intern"
                        description = 
                        {
                            `In this role, I developed strong data management skills by inputting and analyzing financial 
                            data within Excel spreadsheets, conducting tax calculations, and verifying them for accuracy. I collaborated 
                            closely with local businesses to collect and review P8 tax forms, identifying and correcting any errors before 
                            data entry into the government tax system. This experience helped me enhance my attention to detail and analytical 
                            abilities, as I meticulously reviewed and validated data to ensure its integrity. Through this work, I gained 
                            a solid understanding of data compliance with regulatory standards, which is critical for accurate reporting 
                            and informed decision-making. Additionally, I acquired valuable experience handling large datasets, detecting 
                            errors, and maintaining high standards of accuracy—skills that are essential for success in any Data related role.`
                        }
                    />
                </VStack>
            </HStack>
        </FullScreenSection>
    )
};

export default ExperienceSection;
    