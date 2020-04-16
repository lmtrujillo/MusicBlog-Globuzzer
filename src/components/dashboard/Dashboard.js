import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

class Dashboard extends Component {
    render(){
        return(
            <div id="dashboard-container">
                <div id="row">
                    <div id="col-1">
                        <ProjectList/>
                    <div id="col-2">
                        <Notifications/>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;