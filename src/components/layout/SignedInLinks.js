import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <NavLink to='/create' className="nav-item">New Review</NavLink>
            <a className="nav-item" onClick={props.signOut}>Log Out</a>
            <NavLink to='/' className="nav-item is-name">{props.profile.initials}</NavLink>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps)(SignedInLinks);