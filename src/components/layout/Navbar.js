import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) =>{
    console.log(state);
    return {

    }
}
export default connect(mapStateToProps)(NavBar);