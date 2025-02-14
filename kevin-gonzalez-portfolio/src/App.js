import { ChakraProvider, Box, HStack, Heading, Text } from "@chakra-ui/react";

import Header from "./components/Header";

import ProfileBox from "./components/ProfileBox";

function App() 
{
  return (
    <ChakraProvider>
      <main>
        <Header />
        <HStack>
          <ProfileBox />
          <Box
            width = "70%"
            height = "75vh"
            backgroundColor= "#333333"
            color = "#00BCD4" 
            marginRight = "2vw"
          >
            <Heading>About Me</Heading>
            <Text>
              I am an aspiring Software Engineer with a strong academic background and 
              a passion for continuous learning and growth in the tech industry. So far 
              my tech journey has seen me achieve a First-Class BSc in Computer Science 
              and a Distinction-level MSc in Software Engineering from Kingston University, 
              where I built a solid foundation in programming, problem-solving, and software 
              development.
            </Text>
            <Text>
              I'm currently expanding my skill set by pursuing a Front-End Development 
              Professional Certificate from Meta, with a strong focus on React.js and enhancing 
              my front-end expertise. Passionate about learning and growth, I'm always eager 
              to collaborate on exciting projects, explore new technologies, and push my limits 
              as a developer. Feel free to check out my repositories, where I showcase my projects 
              and contributions!
            </Text>
          </Box>
        </HStack>
      </main>
    </ChakraProvider>
  );
}

export default App;
