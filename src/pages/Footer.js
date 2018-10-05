import React, { Component } from "react";
// import GCA from '../images/weedwrangle/GCA-Logo.png'
import './Footer.css'

// LINKS
import Host from '../images/Project_Info.pdf'


class Footer extends Component {
    render() {
      return (
        <div className="footer">
        <h1 className="footer-h1">WEED WRANGLE<sup className="reg">&reg;</sup></h1>

          <ul className="footer-links">
            <li><a href={Host} title="Become a Weed Wrangle Event Host" alt="Host a Weed Wrangle Event in Your City" target="_blank">Sign up to host a Weed Wrangle&reg; in Your City</a></li>
            <hr className="hr" />
            <li><a href="http://www.instagram.com/weedwrangle" alt="Weed Wrangle Instagram" title="Weed Wrangle Instagram" >Follow Us on Instagram</a></li>
            <hr className="hr" />
            <li><a href="mailto:info@weedwrangle.org" alt="Email us" title="email us">Email us for more information</a></li>
          </ul>

          <div className="design">
          Website Design and Development by <a href="mailto:redhood.dev.design@gmail.com">Redhood Designs<sup className="copy">&copy;</sup></a>
          </div>

        </div>
     )
    }
}

export default Footer;