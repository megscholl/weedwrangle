import React, { Component } from "react";
import Video from './Video.js'
// import Map from './Map.js'
import MainContent from './MainContent.js'


import TennesseeState from './TN.js'
import FloridaState from './FL.js'
import VirginiaState from './VA.js'
import TexasState from './TX.js'
import MississippiState from './MS.js'
import LouisianaState from './LA.js'
import OregonState from './OR.js'

import './states-gallery.css'


class Home extends Component {
    render() {
      return (
        <div>
  
         <h1 className="ww-h1">Weed Wrangle is a Volunteer-Led Invasive Plant Removal Initiative</h1>
         <Video />
         <MainContent />

        

        <div className="states-gallery">
        <h2>Find a Weed Wrangle Partner Location to Volunteer <br />and Learn More about Invasive Species in the US</h2>
        
            <TennesseeState className="states-cards" />
            <FloridaState className="states-cards" />
            <VirginiaState className="states-cards"/>
            <MississippiState className="states-cards"/>
            <TexasState className="states-cards"/>   
            <LouisianaState className="states-cards"/>  
            <OregonState className="states-cards"/>

        </div>
  
        </div>
      );
    }
  }
  
  export default Home;