import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    render(){
       const { projects, auth, notifications } = this.props;
       if (!auth.uid) return <Redirect to='/signin' />
        return(
            <div className="container">
                <div className="cont col-1">
                    <ProjectList projects={projects}/>
                </div>
                <div className="cont col-2">
                    <Notifications notifications={notifications}/>
                </div>
            </div>
        )
    }
}

const mapStatesToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStatesToProps),
    firestoreConnect([
        { collection: 'projects', limit: 10, orderBy: ['createdAt', 'desc']  },
        { collection: 'notifications', limit: 4, orderBy: ['time', 'desc'] }
    ])
)(Dashboard)