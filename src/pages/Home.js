import React, { Component } from "react";
import Nav from './Nav.js'
import Video from './Video.js'
import Map from './Map.js'
import MainContent from './MainContent.js'

class Home extends Component {
    render() {
      return (
        <div>
  
         <Nav />
         <Video />
         <MainContent />
         <Map />
  
        </div>
      );
    }
  }
  
  export default Home;