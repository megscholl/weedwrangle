import React, { Component } from 'react'
import './Nav.css'
import logo from '../images/weedwrangle/ww_logo.png';

class Nav extends Component {
    render() {
        return (
            <div className="navbar">            
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            </div>
        );
    }
}

export default Nav;