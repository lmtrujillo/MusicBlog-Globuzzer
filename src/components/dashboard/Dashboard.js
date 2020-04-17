import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render(){
       // console.log(this.props);
       const { projects } = this.props;
        return(
            <div id="dashboard-container">
                <div id="row">
                    <div id="col-1">
                        <ProjectList projects={projects}/>
                    <div id="col-2">
                        <Notifications/>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStatesToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

export default connect(mapStatesToProps)(Dashboard)