import React, { Component } from 'react';
import USAMap from "react-usa-map";
import './Map.css'
import { Redirect,
  //  NavLink, 
  //  Link
   } from "react-router-dom"

// // STATES FROM MAP
// import Tennessee from'./states/Tennessee'
import Louisiana from'./states/Louisiana'
// import Texas from'./states/Texas'
// import Oregon from'./states/Oregon'
// import Virginia from'./states/Virginia'
// import Mississippi from'./states/Mississippi'
 
/* credit for map goes to react-usa-map at https://www.npmjs.com/package/react-usa-map */



class Map extends Component {
  /* mandatory */
  mapHandler = (event) => {
    console.log("event target datasets: ", event.target.dataset.name);
  };

    statesCustomConfig = (event) => {
      return {
        "LA": {

          clickHandler: (event) => {return(<Redirect to="/la" component={Louisiana} exact></Redirect>)}
        }
      };
    };


  //   // THIS IS WHERE THE MANIPUATION OF THE MAP WILL TAKE PLACE //
  //   if(event.target.dataset.name === "LA") {

  //        return(
  //         <Link to='/la/' component={Louisiana} exact/>)
                    
       
  //   } else if(event.target.dataset.name === "MS") {

  //        console.log("YOU CHOSE MISSISSIPPI"); 
      
  //   } else if(event.target.dataset.name === "OR") {

  //        console.log("YOU CHOSE OREGON"); 

  //   } else if(event.target.dataset.name === "TN") {

  //        console.log("YOU CHOSE TENNESSEE"); 

  //   } else if(event.target.dataset.name === "TX") {

  //        console.log("YOU CHOSE TEXAS"); 

  //   }  else if(event.target.dataset.name === "VA") {

  //        console.log("YOU CHOSE VIRGINIA"); 
      

  //   } else if(console.log("error: state chosen does not partner with the weed wrangle yet"));
    
  // };
 
  render() {
    console.log("MAP HANDLER:", USAMap)
    return (
      <div className="Map">
        <h2>Find a Weed Wrangle Partner Location to Volunteer <br />and Learn More about Invasive Species in the US</h2>
        <USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} />
      </div>
    );
  }
}
 
export default Map;