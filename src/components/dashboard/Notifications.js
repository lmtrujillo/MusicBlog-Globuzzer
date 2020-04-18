import React from 'react';
import moment from 'moment';

const Notifications = (props) => {
    const {notifications} = props;
    return (
        <div className="notifications-section">
            <div className="card">
                <div className="card-content">
                    <span className="card-title"> Notifications </span>
                    <ul className="notifications">
                        { notifications && notifications.map(item => {
                            return (
                                <li key={item.id}>
                                    <span>{item.user}</span>
                                    <span>{item.content}</span>
                                    <div>
                                        {moment(item.time.toDate()).fromNow()}
                                    </div>
                                </li>
                            )
                        }) }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notifications;