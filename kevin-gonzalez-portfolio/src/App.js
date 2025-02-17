import { ChakraProvider, Box, HStack } from "@chakra-ui/react";

import SideBar from "./components/SideBar";

import LandingSection from "./components/LandingSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";

import Header from "./components/Header";

import ProfileBox from "./components/ProfileBox";

import AboutMe from "./components/AboutMe"

import MainTexture from "./images/main-texture.png"

import TechLogo from "./components/TechLogo";

function App() 
{
  return (
    <ChakraProvider>
      <main>
        <SideBar />
        <LandingSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
    </ChakraProvider>
  );
}

export default App;
