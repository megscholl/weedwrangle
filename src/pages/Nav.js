import React, { Component } from 'react'
import { NavLink, Link } from "react-router-dom"
import './Nav.css'
import logo from '../images/weedwrangle/ww_logo.png';
// import Sticky from 'semantic-ui-react'


// TO ADD IN ONCE READY

// <NavLink to="/press">Press</NavLink>
// <NavLink to="/about">About</NavLink>
// <NavLink to="/contact">Contact</NavLink>


class Nav extends Component {
    render() {
        return (
            <div className="navbar">     
            
            <header className="App-header">
                <Link to="/"><img src={logo} className="App-logo" alt="Weed Wrangle logo" /></Link>
            </header>

            
            <nav class="topnav">
            
                <NavLink to="/">Home</NavLink>
                
                <NavLink to="/resources">Resources</NavLink>
                
                <NavLink to="/calendar">Calendar</NavLink>
                
            </nav>

            </div>
        );
    }
}

export default Nav;