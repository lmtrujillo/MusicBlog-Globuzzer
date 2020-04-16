import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container project-details">
            <div className="card">
                <div className="content">
                    <span className="card-title">Project Ttile - {id}</span>
                    <p>Lorem ipsum.</p>
                </div>
                <div className="card-action">
                    <div> Posted by Luis Mario</div>
                    <div> April 16th</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
