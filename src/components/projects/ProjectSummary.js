import React from 'react';

const ProjectSummary = ({project}) =>{
        return(

        <div className="card">
            <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>Posted by Luis Mario</p>
            <p className="date">April 16th 2020</p>
            </div>
        </div>
            
        )
}

export default ProjectSummary;