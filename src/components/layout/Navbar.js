import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const NavBar = () => {
    return (
        <nav>
            <div id="mainNav">
                <Link to= '/'>Marioplan</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
}
export default NavBar;