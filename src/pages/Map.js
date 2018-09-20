import React, { Component } from 'react';
import USAMap from "react-usa-map";
import './Map.css'
// import { Link } from "react-router-dom"
 
/* credit for map goes to react-usa-map at https://www.npmjs.com/package/react-usa-map */

class Map extends Component {
  /* mandatory */
  mapHandler = (event) => {
    console.log("event target datasets: ", event.target.dataset.name);


    // THIS IS WHERE THE MANIPUATION OF THE MAP WILL TAKE PLACE //
    if(event.target.dataset.name === "LA") {
      // element.setAttribute("alt","Louisiana");

         console.log("YOU CHOSE LOUISIANA"); 

            
       
    } else if(event.target.dataset.name === "MS") {

         console.log("YOU CHOSE MISSISSIPPI"); 
      
    } else if(event.target.dataset.name === "OR") {

         console.log("YOU CHOSE OREGON"); 

    } else if(event.target.dataset.name === "TN") {

         console.log("YOU CHOSE TENNESSEE"); 

    } else if(event.target.dataset.name === "TX") {

         console.log("YOU CHOSE TEXAS"); 

    }  else if(event.target.dataset.name === "VA") {

         console.log("YOU CHOSE VIRGINIA"); 
      

    } else if(console.log("error: state chosen does not partner with the weed wrangle yet"));
    
  };
 
  render() {
    return (
      <div className="Map">
        <h2>Find a Weed Wrangle Partner Location to Volunteer <br />and Learn More about Invasive Species in the US</h2>
        <USAMap onClick={this.mapHandler} />
      </div>
    );
  }
}
 
export default Map;