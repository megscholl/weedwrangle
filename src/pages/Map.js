import React, { Component } from 'react';
import USAMap from "react-usa-map";
import './Map.css'
 
/* credit for map goes to react-usa-map at https://www.npmjs.com/package/react-usa-map */

class Map extends Component {
  /* mandatory */
  mapHandler = (event) => {
    alert(event.target.dataset.name);
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