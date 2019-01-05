import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Nav.css';

class Nav extends Component {

    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" id="brand" href="#">PickupPal</a>
                    </div>
                    <div className="navbar-right">
                    <Link to="/"><i className="fas fa-home"></i></Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;