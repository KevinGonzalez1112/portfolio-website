// Importing Material UI Components

import SchoolIcon from '@mui/icons-material/School';

// Education Timeline Data Objects Array 

const educationTimeline = 
[
    {
        icon: <SchoolIcon />,
        title: "Meta Front-End Developer",
        provider: "Coursera",
        date: "January 2025 - Present",
        description: 
            `Currently working towards completing the Meta Front-End Developer Professional Certificate on Coursera, a 
            comprehensive program designed to build expertise in modern web development. Throughout the course, I have 
            gained hands-on experience in HTML, CSS, JavaScript, React, and UI/UX principles, equipping me with the skills 
            to create responsive and dynamic web applications.`
    },
    {
        icon: <SchoolIcon />,
        title: "MSc Software Engineering",
        provider: "Kingston University",
        date: "September 2022 - November 2023",
        description:
            `I hold a Master of Software Engineering from Kingston University, where I completed key modules in Software 
            Architecture and Programming Models, Software Quality Engineering, Agile Project Development, and Applied Data 
            Programming. For my dissertation, I developed a machine learning model that used metadata analysis to predict 
            Wikipedia article assessment grades. The model achieved an industry-standard level of performance, with exact 
            match accuracy and within-one-grade accuracy, demonstrating my ability to apply advanced techniques to real-world 
            problems.`
    },
    {
        icon: <SchoolIcon />,
        title: "BSc Computer Science",
        provider: "Kingston University",
        date: "September 2018 - June 2022",
        description:
            `I hold a Bachelor of Computer Science with Honours from Kingston University, where I graduated with a 
            First-Class grade. Throughout my studies, I focused on key modules such as Programming, Computer Systems, 
            Database-Driven Application Development, Mobile Application Development, Requirements Analysis and Design, 
            and Advanced Data Modelling. For my dissertation, I designed and implemented a prototype for the Gibraltar 
            DVLA Booking System, modernizing service delivery through an efficient online platform, which was validated 
            through user and system testing. I was also honored with the BCS, The Chartered Institute for IT Prize in 
            recognition of my academic achievements.`
    }
];

export { educationTimeline };