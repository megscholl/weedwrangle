import React, { Component } from "react";
import Video from './Video.js'
import Map from './Map.js'
import MainContent from './MainContent.js'
// import States from './States'

class Home extends Component {
    render() {
      return (
        <div>
  
         <h1 className="ww-h1">Weed Wrangle is a Volunteer-Led Invasive Plant Removal Initiative</h1>
         <Video />
         <MainContent />
         <Map />
         
  
        </div>
      );
    }
  }
  
  export default Home;