import React from 'react';
import moment from 'moment'

const ProjectSummary = ({project}) =>{
        return(

        <div className="card">
            <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
            <p className="date">{moment(project.createdAt.toDate().toString()).calendar()}</p>
            </div>
        </div>
            
        )
}

export default ProjectSummary;