import React, { Component } from 'react';
import USAMap from "react-usa-map";
import './Map.css'
 
/* credit for map goes to react-usa-map at https://www.npmjs.com/package/react-usa-map */

class Map extends Component {
  /* mandatory */
  mapHandler = (event) => {
    console.log("event target datasets: ", event.target.dataset.name);


    // THIS IS WHERE THE MANIPUATION OF THE MAP WILL TAKE PLACE //
    if(event.target.dataset.name === "MA") {
      alert("YOU CHOSE MASS"); 
    } else(alert("nope"))
    
  };
 
  render() {
    return (
      <div className="App">
        <USAMap onClick={this.mapHandler} />
      </div>
    );
  }
}
 
export default Map;