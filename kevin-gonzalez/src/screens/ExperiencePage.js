// Importing Custom Components

import ScrollToTop from '../components/ScrollToTop';

import Timeline from '../components/Timeline';

// Importing Data Object Array

import { experienceTimeline } from "../data/ExperienceLog";

// Importing Styling Files

import 'react-vertical-timeline-component/style.min.css';

import '../assets/styles/ExperiencePage.scss';

const ExperiencePage = () =>
{
    document.title = "Work Experience";

    return (
        <>
            <ScrollToTop />
            
            <div className = "timeline-container">
                <div className = "experience-container">
                    <Timeline data = { experienceTimeline } />
                </div>
            </div>
        </>
    )
}

export default ExperiencePage;
