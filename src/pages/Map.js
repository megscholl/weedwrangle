import React, { Component } from 'react';
import USAMap from "react-usa-map";
import './Map.css'
 
/* credit for map goes to react-usa-map at https://www.npmjs.com/package/react-usa-map */

class Map extends Component {
  /* mandatory */
  mapHandler = (event) => {
    console.log("event target datasets: ", event.target.dataset.name);


    // THIS IS WHERE THE MANIPUATION OF THE MAP WILL TAKE PLACE //
    if(event.target.dataset.name === "AL") {
      alert("YOU CHOSE ALABAMA"); 
    } else if(event.target.dataset.name === "AK") {
      alert("YOU CHOSE ALASKA"); 
    } else if(event.target.dataset.name === "AZ") {
      alert("YOU CHOSE ARIZONA"); 
    } else if(event.target.dataset.name === "CA") {
      alert("YOU CHOSE CALIFORNIA"); 
    } else if(event.target.dataset.name === "CO") {
      alert("YOU CHOSE COLORADO"); 
    } else if(event.target.dataset.name === "CT") {
      alert("YOU CHOSE CONNECTICUT"); 
    } else if(event.target.dataset.name === "DE") {
      alert("YOU CHOSE DELAWARE"); 
    } else if(event.target.dataset.name === "FL") {
      alert("YOU CHOSE FLORIDA"); 
    } else if(event.target.dataset.name === "GA") {
      alert("YOU CHOSE GEORGIA"); 
    } else if(event.target.dataset.name === "HI") {
      alert("YOU CHOSE HAWAII"); 
    } else if(event.target.dataset.name === "ID") {
      alert("YOU CHOSE IDAHO"); 
    } else if(event.target.dataset.name === "IL") {
      alert("YOU CHOSE ILLINOIS"); 
    } else if(event.target.dataset.name === "IN") {
      alert("YOU CHOSE INDIANA"); 
    } else if(event.target.dataset.name === "IA") {
      alert("YOU CHOSE IOWA"); 
    } else if(event.target.dataset.name === "KS") {
      alert("YOU CHOSE KANSAS"); 
    } else if(event.target.dataset.name === "KY") {
      alert("YOU CHOSE KENTUCKY"); 
    } else if(event.target.dataset.name === "LA") {
      alert("YOU CHOSE LOUISIANA"); 
    } else if(event.target.dataset.name === "ME") {
      alert("YOU CHOSE MAINE"); 
    } else if(event.target.dataset.name === "MD") {
      alert("YOU CHOSE MARYLAND"); 
    } else if(event.target.dataset.name === "MA") {
      alert("YOU CHOSE MASSACHUSETTS"); 
    } else if(event.target.dataset.name === "MI") {
      alert("YOU CHOSE MICHIGAN"); 
    } else if(event.target.dataset.name === "MN") {
      alert("YOU CHOSE MINNESOTA"); 
    } else if(event.target.dataset.name === "MS") {
      alert("YOU CHOSE MISSISSIPPI"); 
    } else if(event.target.dataset.name === "MO") {
      alert("YOU CHOSE MISSOURI"); 
    } else if(event.target.dataset.name === "MT") {
      alert("YOU CHOSE MONTANA"); 
    } else if(event.target.dataset.name === "NE") {
      alert("YOU CHOSE NEBRASKA"); 
    } else if(event.target.dataset.name === "NV") {
      alert("YOU CHOSE NEVADA"); 
    } else if(event.target.dataset.name === "NH") {
      alert("YOU CHOSE NEW HAMPSHIRE"); 
    } else if(event.target.dataset.name === "NJ") {
      alert("YOU CHOSE NEW JERSEY"); 
    } else if(event.target.dataset.name === "NM") {
      alert("YOU CHOSE NEW MEXICO"); 
    } else if(event.target.dataset.name === "NY") {
      alert("YOU CHOSE NEW YORK"); 
    } else if(event.target.dataset.name === "NC") {
      alert("YOU CHOSE NORTH CAROLINA"); 
    } else if(event.target.dataset.name === "ND") {
      alert("YOU CHOSE NORTH DAKOTA"); 
    } else if(event.target.dataset.name === "OH") {
      alert("YOU CHOSE OHIO"); 
    } else if(event.target.dataset.name === "OK") {
      alert("YOU CHOSE OKLAHOMA"); 
    } else if(event.target.dataset.name === "OR") {
      alert("YOU CHOSE OREGON"); 
    } else if(event.target.dataset.name === "PA") {
      alert("YOU CHOSE PENNSYLVANIA"); 
    } else if(event.target.dataset.name === "RI") {
      alert("YOU CHOSE RHODE ISLAND"); 
    } else if(event.target.dataset.name === "SC") {
      alert("YOU CHOSE SOUTH CAROLINA"); 
    } else if(event.target.dataset.name === "SD") {
      alert("YOU CHOSE SOUTH DAKOTA"); 
    } else if(event.target.dataset.name === "TN") {
      alert("YOU CHOSE TENNESSEE"); 
    } else if(event.target.dataset.name === "TX") {
      alert("YOU CHOSE TEXAS"); 
    } else if(event.target.dataset.name === "UT") {
      alert("YOU CHOSE UTAH"); 
    } else if(event.target.dataset.name === "VT") {
      alert("YOU CHOSE VERMONT"); 
    } else if(event.target.dataset.name === "VA") {
      alert("YOU CHOSE VIRGINIA"); 
    } else if(event.target.dataset.name === "WA") {
      alert("YOU CHOSE WASHINGTON"); 
    } else if(event.target.dataset.name === "WV") {
      alert("YOU CHOSE WEST VIRGINIA"); 
    } else if(event.target.dataset.name === "WI") {
      alert("YOU CHOSE WISCONSIN"); 
    } else if(event.target.dataset.name === "WY") {
      alert("YOU CHOSE WYOMING"); 
  } else if(alert("nope"));
    
  };
 
  render() {
    return (
      <div className="App">
        <h2>Find a Weed Wrangle Partner Location to Volunteer <br />and Learn More about Invasive Species in the US</h2>
        <USAMap onClick={this.mapHandler} />
      </div>
    );
  }
}
 
export default Map;