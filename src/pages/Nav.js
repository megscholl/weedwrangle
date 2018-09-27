import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import './Nav.css'
import logo from '../images/weedwrangle/ww_logo.png';

class Nav extends Component {
    render() {
        return (
            <div className="navbar">     
            
            <nav class="topnav">
            
                <NavLink to="/">Home</NavLink>

                <NavLink to="/about">About</NavLink>
                
                <NavLink to="/contact">Contact</NavLink>
                
                <NavLink to="/press">Press</NavLink>
                
                <NavLink to="/resources">Resources</NavLink>
                
                <NavLink to="/calendar">Calendar</NavLink>
                
            </nav>

            <header className="App-header">
                <img src={logo} className="App-logo" alt="Weed Wrangle logo" />
            </header>
            </div>
        );
    }
}

export default Nav;