// Importing Custom Components

import ScrollToTop from '../components/ScrollToTop';

import ProjectsGrid from '../components/ProjectsGrid';

// Importing Data Object Arrays

import { personalProjects, universityProjects } from "../data/ProjectsData";

// Importing Styling Files

import '../assets/styles/ProjectsPage.scss';

const ProjectsPage = () =>
{
    document.title = "Projects";

    return ( 
        <>
            <ScrollToTop />
        
            <div className = "projects-container">

                <h1>Personal Projects</h1>

                <ProjectsGrid data = { personalProjects } />

                <h1>Notable University Projects</h1>

                <ProjectsGrid data = { universityProjects } />

            </div>
        </>
    )
}

export default ProjectsPage;