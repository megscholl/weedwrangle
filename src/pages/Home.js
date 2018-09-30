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

import AlabamaState from './AL.js'
import IndianaState from './IN.js'
import GeorgiaState from './GA.js'

import './states-gallery.css'


class Home extends Component {
    render() {
      return (
        <div>
  
         <h1 className="ww-h1">Weed Wrangle is a Volunteer-Led Invasive Plant Removal Initiative</h1>
         <Video />
         <MainContent />

        

        <div>
        <h2 className="find-a-ww-h2">Find a Weed Wrangle Partner Location to Volunteer <br />and Learn More about Invasive Species in the US</h2>
        
            <div className="states-gallery">
                      <AlabamaState className="states-cards" />
                      <FloridaState className="states-cards" />
                      <GeorgiaState className="states-cards" />
                      <IndianaState className="states-cards" />
                      <LouisianaState className="states-cards"/> 
                      <MississippiState className="states-cards"/>
                      <OregonState className="states-cards"/> 
                      <TennesseeState className="states-cards" />
                      <TexasState className="states-cards"/>   
                      <VirginiaState className="states-cards"/>
            </div>

        </div>
  
        </div>
      );
    }
  }
  
  export default Home;