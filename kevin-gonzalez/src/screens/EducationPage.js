// Importing Custom Components

import ScrollToTop from '../components/ScrollToTop';

import Timeline from '../components/Timeline';

// Importing Data Object Array

import { educationTimeline } from "../data/EducationLog";

// Importing Styling Files

import 'react-vertical-timeline-component/style.min.css';

import '../assets/styles/EducationPage.scss';

const EducationPage = () =>
{
    document.title = "Education History";

    return (
        <>
            <ScrollToTop />
        
            <div className = "timeline-container">
                <div className = "education-container">
                    <Timeline data = { educationTimeline } />
                </div>
            </div>
        </>
    )
}

export default EducationPage;
