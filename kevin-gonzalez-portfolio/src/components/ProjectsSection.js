// Importing UI Components

import { Heading, VStack } from "@chakra-ui/react";

// Importing Custom Components

import FullScreenSection from "./FullScreenSection";
import ProjectCardRight from "./ProjectCardRight";
import ProjectCardLeft from "./ProjectCardLeft";

// importing Required Images

import wikipediaResults from "../images/wikipedia-table.png";
import gibraltarDVLA from "../images/gibraltar-dvla.png"
import jobseekerCvPortal from "../images/jobseeker-cv-portal.png";

const ProjectsSection = () => 
{
    return (
        <FullScreenSection>
            <VStack
                marginTop = "12.5vh"
            >
                <Heading
                    paddingTop = "5vh"
                    paddingBottom = "5vh"
                >
                    PROJECTS 
                </Heading>
                <ProjectCardRight 
                    name = "Wikipedia Metadata Project" 
                    image = { wikipediaResults } 
                    description = 
                    {[
                        `
                        Wikipedia is widely known as one of the most significant sources of encyclopedic information on the internet today. 
                        The quality of the information contained within each of the articles on their website is often a topic of debate due 
                        to the approach used for the collection of this information. This is because Wikipedia operates through a crowdsourcing 
                        model where anyone with access to a page is free to make edits as they please. In an attempt to combat this issue, a 
                        set of grades was introduced by the WikiProjects team, a set of quality reviewers decided upon by Wikipedia to assign 
                        a quantifiable score to each article. 
                        `,
                        `
                        These grades are used to determine the quality of a large number of articles, and there have been several projects over 
                        the years that have attempted to predict which of these grades an article will achieve through the use of metadata data 
                        collection and training of machine learning algorithms. This project proposed a new solution to this problem through the 
                        use of the K-Nearest Neighbour algorithm, a series of exploratory data analysis techniques and the metadata that was collected 
                        on each of the articles selected. Five experiments were carried out based on these factors, with the project culminating in a 
                        47.917% accuracy score and a within-one-grade accuracy score of 78.125% being achieved, the second metric producing a reasonably 
                        high prediction score indicating promising predictive capabilities. 
                        `
                    ]}
                />
                <ProjectCardLeft 
                    name = "Gibraltar DVLA System" 
                    image = { gibraltarDVLA } 
                    description = 
                    {[
                        `
                        The overall goal of the project was to help solve a clear issue that was observed at the time where the 
                        residents of Gibraltar aged seventeen and older, with no court-related driving bans or medical problems 
                        that would disqualify them from driving, were finding it difficult to make use of the services offered 
                        at the Gibraltar Department of Motor Vehicles and Transport. These services consist of things such as 
                        the booking of driving tests and the renewal of expired licenses. These issues occurred as a result of 
                        large queues at the office building being used for this purpose and the awkward opening times of the 
                        previously mentioned office. These factors made it difficult for potential customers working 9 to 5 jobs or 
                        jobs with a similar schedule to get a booking in a time slot that works for them. While the department 
                        building is also closed on weekends, further working against solving this issue for the target demographic.
                        `,
                        `
                        The proposal that was carried forward aimed to also provide benefits for the department staff. As they also 
                        faced problems with the outdated system they use daily, therefore the project also aimed to improve the quality of 
                        their work lives when dealing with customers. To make all this possible a responsive, user-friendly front-end was 
                        designed and implemented alongside database-driven functionality. Finally, once these tasks had been completed 
                        comprehensive user and system testing was used to validate performance and usability.
                        `
                    ]}
                />
                <ProjectCardRight 
                    name = "Jobseeker CV Portal"
                    image = { jobseekerCvPortal } 
                    description = 
                    {[
                        `
                        This project led to the creation of a portal aimed at both jobseekers and recruiters who are looking for candidates 
                        that meet specific requirements. The goal was to provide a platform where users could create accounts and access a 
                        variety of features based on the type of account they registered for. On the jobseeker side, users needed to be able 
                        to input their personal details, qualifications, work experience, and any relevant skills for the field they wish to 
                        work in. These details would then be visible to recruiters, but would also allow for the ability to generate a styled 
                        CV document with a single click. On the recruiter side, they needed to be able to search for candidates who had created 
                        accounts and met their criteria, allowing them to contact these candidates for further steps.
                        `,
                        `
                        As this work was carried out as part of a University brief, it was essential to produce a number of supporting technical 
                        documents alongside the source code. To ensure quality and thoroughness, I created an SQA (Software Quality Assurance) plan, 
                        a software testing plan, and a unit testing document. These documents were reviewed and approved prior to submission, with 
                        the SQA plan covering the overall testing strategy, and the unit testing document providing detailed test cases to verify 
                        the functionality of individual components.
                        `
                    ]}
                />
            </VStack>
        </FullScreenSection>
    )
}

export default ProjectsSection;


 
