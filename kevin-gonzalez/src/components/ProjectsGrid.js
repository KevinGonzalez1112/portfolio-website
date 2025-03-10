/*
    Creating a Custom Component that will be used to populate the grid for both sections 
    (Personal and University). This will be made possible using the data objects passed in 
    through props.
*/

const ProjectsGrid = (props) =>
{
    return (
        <div className = "projects-grid">
            {
                props.data.map((item, index) => (

                    <div className = "project" key = { index }>

                        <a href = { item.link }>
                            <img src = { item.image } alt = { item.title } className = "zoom" />
                        </a>

                        <a href = { item.link }>
                            <h2> { item.title } </h2>
                        </a>

                        <p>
                            { item.description }
                        </p>

                    </div>
                ))
            }
        </div>
    )
}

export default ProjectsGrid;