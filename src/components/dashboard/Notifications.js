import React from 'react';
import moment from 'moment';

const Notifications = (props) => {
    const {notifications} = props;
    return (
        <div className="card notification">
            <span className="card-title"> Notifications </span>
            <ul className="notifications">
                { notifications && notifications.map(item => {
                    return (
                        <p key={item.id}>
                        <span className="notification-name">{item.user} </span>
                        <span>{item.content}</span>
                        <div>
                            {moment(item.time.toDate()).fromNow()}
                        </div>
                        </p>
                    )
                }) }
            </ul>
        </div>
    )
}

export default Notifications;