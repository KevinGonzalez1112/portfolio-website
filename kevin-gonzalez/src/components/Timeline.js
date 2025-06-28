/*
    Creating a Custom Component that will be used to populate the timelines for both types of 
    experience (Academic and Work). This will be made possible using the data objects passed in 
    through props and the react-vertical-timeline-component library.
*/

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

const Timeline = (props) =>
{
    return (
        <VerticalTimeline>
            {
                props.data.map((item, index) => (
                    <VerticalTimelineElement
                        className = "vertical-timeline-element--work"
                        contentStyle = {{ background: 'white', color: 'rgb(39, 40, 34)' }}
                        contentArrowStyle = {{ borderRight: '7px solid  white' }}
                        date = { item.date }
                        iconStyle = {{ background: '#5000ca', color: '#FFFFFF' }}
                        icon = { item.icon }
                        key = { index }
                    >
                        <h3 className = "vertical-timeline-element-title"> { item.title } </h3>
                        <h4 className = "vertical-timeline-element-subtitle"> { item.provider } </h4>
                        <p> { item.description } </p>
                    </VerticalTimelineElement>
                ))
            } 
        </VerticalTimeline>
    )
}

export default Timeline;