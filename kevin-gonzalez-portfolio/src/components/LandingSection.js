// Importing UI Components

import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";

// Importing Font Awesome Icon Libraries

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faKaggle } from "@fortawesome/free-brands-svg-icons";

// Importing Custom Components

import FullScreenSection from "./FullScreenSection";
import LogoBar from "./LogoBar";

const socials = 
[
    {
        icon: faEnvelope,
        link: "mailto: kevingonz1112@gmail.com",
        label: "Email"
    },
    {
        icon: faGithub,
        link: "https://github.com/KevinGonzalez1112",
        label: "GitHub"
    },
    {
        icon: faLinkedin,
        link: "https://www.linkedin.com/in/kevingonzalez1112/",
        label: "LinkedIn"
    },
    {
        icon: faKaggle,
        link: "https://www.kaggle.com/kevingonz1112",
        label: "Kaggle"
    }
]

const LandingSection = () => 
{
    return (
        <FullScreenSection>
            <HStack
                spacing = {0}
            >
                <VStack
                    justifyContent = "center"
                    height = "100vh"
                    width = "50vw"
                    color = "#ffffff"
                >
                    <Heading
                        paddingBottom = {10}
                    >
                        Welcome to my Portfolio!
                    </Heading>
                    <Text
                        textAlign = "center"
                        paddingLeft = "7vw"
                        paddingRight = "5vw"
                    >
                        I am an aspiring Software Engineer with a passion 
                        for crafting innovative and efficient software solutions. 
                        I am eager to turn ideas into reality through clean code, 
                        problem-solving, and continuous learning.
                    </Text>
                </VStack>
                <VStack
                    height = "100vh"
                    width = "50vw"
                    justifyContent = "space-between"
                >  
                    <Box flexGrow = {1} />
                    <LogoBar data = { socials } />
                </VStack>
            </HStack>
        </FullScreenSection>
    )
};

export default LandingSection;
