// Importing Styling Files

import '../assets/styles/ProjectsPage.scss';

// Importing Images for Personal Projects

import swgohTracker from "../assets/images/swgoh-tracker.jpg"

// Importing Images for University Projects

import wikipedia from "../assets/images/wikipedia-project.jpg"
import gibraltarDvla from "../assets/images/gibraltar-dvla.jpg"
import diaryApp from "../assets/images/diary-app.jpg"
import jobseekerCv from "../assets/images/jobseeker-cv.jpg"
import abcBanking from "../assets/images/abc-banking.jpg"

const personalProjects =
[
    {
        title: "SWGOH TRACKER", 
        image: swgohTracker,
        link: "https://docs.google.com/spreadsheets/d/1j7BHn0893u8NJYHkqLv4QTq-xzSQcQ3_BNtTDwDaCRE/edit?gid=0#gid=0",
        description: 
            `Used to Google Apps Script to retrieve data from the SWGOH.gg API and created a number of sheets
            where the user could track their progress on several of the metrics relative to the Star Wars Galaxy
            of Heroes mobile game. A detailed ReadME on how to use the application can be found on the first 
            sheet.`
    }
]

const universityProjects =
[
    {
        title: "Wikipedia Content Assessment",
        image: wikipedia,
        link: "https://github.com/KevinGonzalez1112/K1840988-Dissertation-Repo",
        description:
            `Wikipedia's crowd-sourced model raises concerns about article quality, leading to a grading system by WikiProjects 
            to assess content. Various projects have aimed to predict these grades using machine learning. This project explored 
            a new approach with the K-Nearest Neighbors algorithm and metadata analysis, conducting five experiments. The model 
            achieved 47.92% accuracy and 78.13% within-one-grade accuracy, demonstrating promising predictive potential.`
    },
    {
        title: "Gibraltar DVLA System Prototype",
        image: gibraltarDvla,
        link: "https://github.com/KevinGonzalez1112/KingstonFinalYearProjectCodeUpload",
        description: 
            `This prototype was created as part of my BSc Computer Science degree dissertation project, the main aim 
            of the project was the following: 'To reduce the amount of time wasted by lost forms and the current inefficient 
            work systems in the Gibraltar department of motor vehicles and transport'. It was created using a combination of 
            HTML, CSS and JavaScript for the front-end and a combination of PHP and SQL for the backend database connection and 
            associated tasks.`
    },
    {
        title: "School Diary Application",
        image: diaryApp,
        link: "https://github.com/KevinGonzalez1112/School-Reading-Diary-Mobile-App",
        description: 
            `A diary application created for the fictional Kingston Primary School where in the scenario we were 
            requested to create an application that would aim to assist parents/guardians in keeping track of their 
            child's reading progress. This was built in React Native and used the AsyncStorage library to ensure the 
            saved logs persisted between uses.`
    },
    {
        title: "ABC Banking Application",
        image: abcBanking,
        link: "https://github.com/KevinGonzalez1112/ABC-Banking-Group",
        description:
            `A fully functional banking application prototype that allows users to deposit, withdraw, transfer funds, set up direct debits, 
            view transaction history, and generate bank statements. Built using HTML, CSS, JavaScript, PHP, and SQL, the app ensures secure 
            transactions and an intuitive user experience for managing finances efficiently.`
    },
    {
        title: "Jobseekers CV Portal",
        image: jobseekerCv,
        link: "https://github.com/KevinGonzalez1112/CI7260-Group-Project",
        description: 
            `This project resulted in the creation of a job portal for jobseekers and recruiters. The aim was to allow Jobseekers to 
            create accounts, input personal details, qualifications, and skills, so they could then generate a styled CV with just one 
            click. Recruiters then also could search for candidates matching their criteria based on the jobseeker accounts created and 
            contact them directly. This application was built using using a combination of HTML, CSS and JavaScript for the front-end 
            and a combination of PHP and SQL for the backend database connection and associated tasks.`
    }
]

const ProjectsPage = () =>
{
    return ( 
        <div className = "projects-container">
        
            <h1>Personal Projects</h1>
        
            <div className = "projects-grid">
            
                {
                    personalProjects.map((item, index) => (

                        <div className = "project" key = { index }>
                            <a
                                href = { item.link }
                            >
                                <img 
                                    src = { item.image } 
                                    alt = { item.title }
                                    className = "zoom" 
                                />
                            </a>
                            <a
                                href = { item.link }
                            >
                                <h2>{ item.title }</h2>
                            </a>
                            <p>
                                { item.description }
                            </p>
                        </div>

                    ))
                }

            </div>

            <h1>University Projects</h1>

            <div className = "projects-grid">
            
                {
                    universityProjects.map((item, index) => (

                        <div className = "project" key = { index }>
                            <a
                               href = { item.link }
                            >
                                <img 
                                    src = { item.image } 
                                    alt = { item.title }
                                    className = "zoom" 
                                />
                            </a>
                            <a
                                href = { item.link }
                            >
                                <h2>{ item.title }</h2>
                            </a>
                            <p>
                                { item.description }
                            </p>
                        </div>

                    ))
                }

            </div>

        </div>
    )
}

export default ProjectsPage;