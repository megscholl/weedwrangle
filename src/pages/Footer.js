import React, { Component } from "react";
import GCA from '../images/weedwrangle/GCA-Logo.png'
import './Footer.css'

class Footer extends Component {
    render() {
      return (
        <div>
            <footer className="footer">


                <p className="footer-p1">The Weed Wrangle&reg; started by The Garden Club of Nashville in 2015, expanded to the Knoxville Garden Club, Garden Club of Lookout Mountain, Memphis Garden Club, The Little Garden Club of Memphis, and The Garden Club of Jackson, MS in 2016. All clubs are members of The Garden Club of America and participants in the GCA Partners for Plants program.
                <img src={GCA} alt="Garden Club of America" className="gca-image"/>
                </p>
            </footer>
        </div>
     )
    }
}

export default Footer;