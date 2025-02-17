// Importing UI Components

import { Box, HStack, Heading, Text } from "@chakra-ui/react";

// Importing Font Awesome Icon Libraries

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import 
{ 
    faHtml5, 
    faCss3Alt, 
    faJs, 
    faPhp, 
    faPython, 
    faReact, 
    faMarkdown, 
} 
from "@fortawesome/free-brands-svg-icons";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Importing Custom Components

import TechStackLogos from "./TechLogo";

const techLanguages = 
[
    {
        icon: faCss3Alt,
        name: "CSS"
    },
    {
        icon: faHtml5,
        name: "HTML"
    },
    {
        icon: faJs,
        name: "JavaScript"
    },
    {
        icon: faMarkdown,
        name: "Markdown"
    },
    {
        icon: faPhp,
        name: "PHP"
    },
    {
        icon: faPython,
        name: "Python"
    }
]

const techFrameworks = 
[
    {
        icon: faReact,
        name: "React.js"
    }, 
    {
        icon: faReact,
        name: "React Context Api"
    },
    {
        icon: faReact,
        name: "React Native"
    }
]

const AboutMe = () =>
{
    return (
        <Box
            width = "70%"
            height = "75vh"
            marginRight = "2vw"
            color = "#00BCD4"
        >
            <Heading
                paddingLeft = {10}
            >
              About Me
            </Heading>
            <Text
                paddingLeft = {10}
                paddingBottom = {5}
                paddingTop = {5}
                marginRight = {40}
            >
                I am an aspiring Software Engineer with a strong academic background and 
                a passion for continuous learning and growth in the tech industry. So far 
                my tech journey has seen me achieve a First-Class BSc in Computer Science 
                and a Distinction-level MSc in Software Engineering from Kingston University, 
                where I built a solid foundation in programming, problem-solving, and software 
                development.
            </Text>
            <Text
                paddingLeft = {10}
                paddingBottom = {5}
                marginRight = {40}
            >
                I'm currently expanding my skill set by pursuing a Front-End Development 
                Professional Certificate from Meta, with a strong focus on React.js and enhancing 
                my front-end expertise. Passionate about learning and growth, I'm always eager 
                to collaborate on exciting projects, explore new technologies, and push my limits 
                as a developer. Feel free to check out my repositories, where I showcase my projects 
                and contributions!
            </Text>
            <Heading
                paddingLeft = {10}
                paddingBottom = {5}
            >
                Tech Stack
            </Heading>
            <Heading
                paddingLeft = {10}
                paddingBottom = {5}
            >
                Programming Languages
            </Heading>
            <TechStackLogos data = {techLanguages} />
            <Heading
                paddingLeft = {10}
                paddingBottom = {5}
                paddingTop = {5}
            >
                Frameworks, Platforms & Libraries
            </Heading>
            <TechStackLogos data = {techFrameworks} />
            <a href = "#">
                <HStack
                    paddingLeft = {10}
                    paddingTop = {5}
                >
                    <Text>
                        My Projects
                    </Text>
                    <FontAwesomeIcon icon = {faArrowRight} size = "1x" />
                </HStack>
            </a>
        </Box>
    )
}

export default AboutMe;
            