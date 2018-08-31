import React, { Component } from 'react'
import './Nav.css'
import logo from '../images/weedwrangle/ww_logo.png';

class Nav extends Component {
    render() {
        return (
            <div className="navbar">       
            
            <nav class="topnav">
                <a class="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <a href="#about">Press</a>
                <a href="#about">Social Media</a>
                <a href="#about">Resources</a>
            </nav>

            <header className="App-header">
                <img src={logo} className="App-logo" alt="Weed Wrangle logo" />
            </header>
            </div>
        );
    }
}

export default Nav;