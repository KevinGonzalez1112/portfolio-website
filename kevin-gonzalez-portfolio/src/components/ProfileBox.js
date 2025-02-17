// Importing UI Components

import { Box, Heading, Image, Text } from "@chakra-ui/react";

// Importing Font Awesome Icon Libraries

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// Importing Custom Components

import LogoBar from "./LogoBar";

// Importing Required Images 

import BoxTexture from "../images/box-texture.png"
import ProfilePic from "../images/profile-pic.png";

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
    }
]

const ProfileBox = () =>
{
    return (
        <Box
            display = "flex"
            flexDirection = "column"
            alignItems = "center"
            backgroundImage = {BoxTexture}
            textAlign = "center"
            color = "#00BCD4" 
            minHeight = {["auto", "75vh"]}
            maxWidth = {["90%", "90%", "90%", "25%"]}
            marginTop = {10}
            marginLeft = {["auto", "auto", "auto", "2vw"]}
            marginRight = {["auto", "auto", "auto", "2vw"]}
            borderRadius = "5%"
        >
            <Box
                margin = {10}
            >
                <Image 
                    src = {ProfilePic} 
                    borderRadius = "20%"
                />
            </Box>
            <Box
            >
                <Heading
                    paddingTop = "5%"
                >
                    Kevin Gonzalez
                </Heading>
                <Text
                    padding = "5% 10% 5% 10%"
                    fontWeight = "bold"
                >
                    Passionate about crafting innovative and efficient 
                    software solutions, I am an aspiring software engineer 
                    eager to turn ideas into reality through clean code, 
                    problem-solving, and continuous learning.
                </Text>
            </Box>
            <Box
                marginBottom = {5}
            >
                <LogoBar data = {socials} />
            </Box>
        </Box>
    )
}

export default ProfileBox;