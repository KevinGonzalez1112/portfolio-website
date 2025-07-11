// Importing Material UI Components

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Importing Custom Components

import ScrollToTop from '../components/ScrollToTop';

// Importing Styling Files

import '../assets/styles/HomePage.scss';

const HomePage = () =>
{
    document.title = "Home Page";
    
    return (
        <>
            <ScrollToTop />

            <div className = "container">
                <div className = "about-me">
                    <div className = "profile-image">
                        <img src = { require("../assets/images/other/profile-pic.png") } alt = "Avatar" />
                    </div>
                    <div className = "content">
                        <div className = "social-icons">
                            <a href = "mailto: kevingonz1112@gmail.com"> 
                                <EmailIcon className = "svg-icon" /> 
                            </a>
                            <a href = "https://github.com/KevinGonzalez1112"> 
                                <GitHubIcon className = "svg-icon" /> 
                            </a>
                            <a href = "https://www.linkedin.com/in/kevingonzalez1112/"> 
                                <LinkedInIcon className = "svg-icon" /> 
                            </a>
                        </div>
                        <h1>Kevin Gonzalez</h1>
                        <p>Junior Software Engineer</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;