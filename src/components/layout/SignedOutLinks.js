import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <NavLink to='/signup' className="nav-item">Sign Up</NavLink>
            <NavLink to='/signin' className="nav-item">Sign In</NavLink>
        </ul>
    )
}
export default SignedOutLinks;