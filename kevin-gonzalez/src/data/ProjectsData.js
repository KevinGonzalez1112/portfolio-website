// Importing Images Required for the Projects Tech Stacks

import css from "../assets/images/tech-logos/css.svg";
import expo from "../assets/images/tech-logos/expo.svg";
import expocamera from "../assets/images/tech-logos/expo-camera.svg";
import googleapps from "../assets/images/tech-logos/google-apps-script.svg";    
import googlesheets from "../assets/images/tech-logos/google-sheets.svg";
import html from "../assets/images/tech-logos/html.svg";
import javascript from "../assets/images/tech-logos/javascript.svg";
import jupyter from "../assets/images/tech-logos/jupyter.svg";
import matplotlib from "../assets/images/tech-logos/matplotlib.svg";
import mysql from "../assets/images/tech-logos/mysql.svg";
import numpy from "../assets/images/tech-logos/numpy.svg";
import pandas from "../assets/images/tech-logos/pandas.svg";
import php from "../assets/images/tech-logos/php.svg";
import processing from "../assets/images/tech-logos/processing.svg";
import python from "../assets/images/tech-logos/python.svg";
import pywikibot from "../assets/images/tech-logos/pywikibot.svg";
import react from "../assets/images/tech-logos/react.svg";
import reactasyncstorage from "../assets/images/tech-logos/react-async-storage.svg";
import reactnative from "../assets/images/tech-logos/react-native.svg";
import scss from "../assets/images/tech-logos/scss.svg";
import scikitlearn from "../assets/images/tech-logos/scikit-learn.svg";
import swgohapi from "../assets/images/tech-logos/swgoh-api.svg";

// Personal Projects Data Objects Array 

const personalProjects =
[
    {
        title: "Portfolio Website",
        image: require("../assets/images/projects/personal-portfolio.jpg"),
        link: "https://kevingonzalez1112.github.io/portfolio-website/",
        technologies: 
            [
                { image: react, alt: "React" },
                { image: javascript, alt: "JavaScript" },
                { image: scss, alt: "SCSS" }
            ],
        description:
            `This portfolio was built using React and SCSS, showcasing my skills and projects. It features a 
            responsive design, smooth animations, and a user-friendly interface. The website highlights my experience, 
            education, and personal projects, providing visitors with an overview of my professional journey.`
    },
    {
        title: "SWGOH TRACKER", 
        image: require("../assets/images/projects/swgoh-tracker.jpg"),
        link: "https://docs.google.com/spreadsheets/d/1j7BHn0893u8NJYHkqLv4QTq-xzSQcQ3_BNtTDwDaCRE/edit?gid=0#gid=0",
        technologies: 
            [
                { image: googlesheets, alt: "Google Sheets" },
                { image: googleapps, alt: "Google Apps Script" },
                { image: swgohapi, alt: "SWGOH.gg API" }
            ],
        description: 
            `Used to Google Apps Script to retrieve data from the SWGOH.gg API and created a number of sheets
            where the user could track their progress on several of the metrics relative to the Star Wars Galaxy
            of Heroes mobile game. A detailed ReadME on how to use the application can be found on the first 
            sheet.`
    }
];

// University Projects Data Objects Array 

const universityProjects =
[
    {
        title: "Wikipedia Content Assessment",
        image: require("../assets/images/projects/wikipedia-project.jpg"),
        link: "https://github.com/KevinGonzalez1112/K1840988-Dissertation-Repo",
        technologies: 
            [
                { image: python, alt: "Python" },
                { image: jupyter, alt: "Jupyter Notebook" },
                { image: numpy, alt: "NumPy" },
                { image: pandas, alt: "Pandas" },   
                { image: matplotlib, alt: "Matplotlib" },
                { image: scikitlearn, alt: "Scikit-learn" },
                { image: pywikibot, alt: "Pywikibot" }
            ],
        description:
            `This project was undertaken as part of my MSc Software Engineering degree dissertation project. I chose this topic as
            Wikipedia's crowd-sourced model raises concerns about article quality, leading to a grading system by WikiProjects 
            to assess content. Various projects have aimed to predict these grades using machine learning. This project explored 
            a new approach with the K-Nearest Neighbors algorithm and metadata analysis, conducting five experiments. The model 
            achieved 47.92% accuracy and 78.13% within-one-grade accuracy, demonstrating promising predictive potential.`
    },
    {
        title: "Gibraltar DVLA System Prototype",
        image: require("../assets/images/projects/gibraltar-dvla.jpg"),
        link: "https://github.com/KevinGonzalez1112/KingstonFinalYearProjectCodeUpload",
        technologies: 
            [
                { image: html, alt: "HTML" },
                { image: css, alt: "CSS" },
                { image: javascript, alt: "JavaScript" },
                { image: php, alt: "PHP" },
                { image: mysql, alt: "MySQL" }
            ],
        description: 
            `This prototype was created as part of my BSc Computer Science degree dissertation project, the main aim 
            of the project was the following: 'To reduce the amount of time wasted by lost forms and the current inefficient 
            work systems in the Gibraltar department of motor vehicles and transport'. It was created using a combination of 
            HTML, CSS and JavaScript for the front-end and a combination of PHP and SQL for the backend database connection and 
            associated tasks.`
    },
    {
        title: "School Diary Application",
        image: require("../assets/images/projects/diary-app.jpg"),
        link: "https://github.com/KevinGonzalez1112/School-Reading-Diary-Mobile-App",
        technologies: 
            [
                { image: reactnative, alt: "React Native" },
                { image: expo, alt: "Expo" },
                { image: reactasyncstorage, alt: "React Async Storage" },
                { image: expocamera, alt: "Expo Camera" }
            ],
        description: 
            `A diary application created for the fictional Kingston Primary School where in the scenario we were 
            requested to create an application that would aim to assist parents/guardians in keeping track of their 
            child's reading progress. This was built in React Native and used the AsyncStorage library to ensure the 
            saved logs persisted between uses. While the Expo Camera library was used to allow the user to take pictures 
            of the books they were reading and save them to the diary.`
    },
    {
        title: "Boids Processing",
        image: require("../assets/images/projects/boids.jpg"),
        link: "https://github.com/KevinGonzalez1112/Processing-Boids",
        technologies: 
            [
                { image: processing, alt: "Processing" }
            ],
        description:
            `Developed an interactive Boids Flocking Simulation using the Processing environment to explore emergent behavior in artificial 
            life. This project models the natural movement of flocks, such as birds or fish schools, using Craig Reynolds’ Boids algorithm. The 
            logic set up for this interactive environment made image colour detection and edge detection possible in these set up simulations. As
            well as having multiple controls implemented so the user could change the behaviour of the Boids and Flocks.`
    },
    {
        title: "ABC Banking Application",
        image: require("../assets/images/projects/abc-banking.jpg"),
        link: "https://github.com/KevinGonzalez1112/ABC-Banking-Group",
        technologies: 
            [
                { image: html, alt: "HTML" },
                { image: css, alt: "CSS" },
                { image: javascript, alt: "JavaScript" },
                { image: php, alt: "PHP" },
                { image: mysql, alt: "MySQL" }
            ],
        description:
            `A fully functional banking application prototype that allows users to deposit, withdraw, transfer funds, set up direct debits, 
            view transaction history, and generate bank statements. Built using HTML, CSS, JavaScript, PHP, and SQL, the app ensures secure 
            transactions and an intuitive user experience for managing finances efficiently.`
    },
    {
        title: "Jobseekers CV Portal",
        image: require("../assets/images/projects/jobseeker-cv.jpg"),
        link: "https://github.com/KevinGonzalez1112/CI7260-Group-Project",
        technologies: 
            [
                { image: html, alt: "HTML" },
                { image: css, alt: "CSS" },
                { image: javascript, alt: "JavaScript" },
                { image: php, alt: "PHP" },
                { image: mysql, alt: "MySQL" }
            ],
        description: 
            `This project resulted in the creation of a job portal for jobseekers and recruiters. The aim was to allow Jobseekers to 
            create accounts, input personal details, qualifications, and skills, so they could then generate a styled CV with just one 
            click. Recruiters then also could search for candidates matching their criteria based on the jobseeker accounts created and 
            contact them directly. This application was built using using a combination of HTML, CSS and JavaScript for the front-end 
            and a combination of PHP and SQL for the backend database connection and associated tasks.`
    }
];

export { personalProjects, universityProjects };