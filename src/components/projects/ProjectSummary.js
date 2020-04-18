import React from 'react';
import moment from 'moment'

const ProjectSummary = ({project}) =>{
        return(

        <div className="card project">
            <span className="card-title">{project.title}</span>
            <p className="card-authors">Posted by {project.authorFirstName} {project.authorLastName}</p>
            <p className="date">{moment(project.createdAt.toDate().toString()).calendar()}</p>
        </div>
            
        )
}

export default ProjectSummary;