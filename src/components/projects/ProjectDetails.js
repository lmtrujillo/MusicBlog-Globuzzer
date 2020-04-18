import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const ProjectDetails = (props) => {
    const { project, auth } = props;
    if (!auth.uid) return <Redirect to='/signin' />
    if (project) {
        return(
        <div className="card detail">
            <p id="card-title-d">{ project.title }</p>
            <p className="card-artist">{ project.artist}</p>
            <p className="card-rating"> { project.rating }</p>
            <p className="card-text"> { project.review }</p>
            <p className="card-author"> Posted by { project.authorFirstName } { project.authorLastName }</p>
            <p className="card-author">{moment(project.createdAt.toDate().toString()).calendar()}</p>
        </div>
        )
    }else{
        return (
            <div className="card detail">
                <p>Loading project..</p>
            </div>
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    return{
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectDetails)
