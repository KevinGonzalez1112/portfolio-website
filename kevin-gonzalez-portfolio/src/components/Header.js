// Importing Font Awesome Icon Libraries

import { faHouse, faFolder, faGraduationCap, faBriefcase, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

// Importing Custom Components 

import LogoBar from "./LogoBar";

const sections = 
[
    {
        icon: faHouse,
        link: "#/homepage",
        label: "Home"
    },
    {
        icon: faFolder,
        link: "#/projects",
        label: "Projects"
    },
    {
        icon: faGraduationCap,
        link: "#/education",
        label: "Education"
    },
    {
        icon: faBriefcase,
        link: "#/experience",
        label: "Experience"
    },
    {
        icon: faScrewdriverWrench,
        link: "#/tools",
        label: "Tools"
    }
]

const Header = () =>
{
    return (
        <nav>
            <LogoBar data = {sections}/>
        </nav>
    )
}

export default Header;