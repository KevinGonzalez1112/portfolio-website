/*
    Creating a Custom Component that will be used to populate the technologies section for 
    each section and create the illusion of an "infinite" scrolling bar. This will be made 
    possible using the data objects passed in through props and a helper function to duplicate 
    the array the required number of times.
*/

const repeatArray = (array, times) => Array(times).fill(array).flat();

const InfiniteScroll = (props) =>
{
    return (
        <div className = "project-tech-icons-container">
            <div className = "project-tech-icons">
                {
                    repeatArray(props.technologies, props.repeat).map((item, index) => (
                        <div className = "project-tech-icon" key = { index }>
                            <img src = { item.image } alt = { item.alt } />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default InfiniteScroll;