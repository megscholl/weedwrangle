import React, { Component } from 'react';
import USAMap from "react-usa-map";
import './Map.css'
import { 
  //  NavLink, 
   Link
   } from "react-router-dom"

// // STATES FROM MAP
// import Tennessee from'./pages/states/Tennessee'
// import Louisiana from'./pages/states/Louisiana'
// import Texas from'./pages/states/Texas'
// import Oregon from'./pages/states/Oregon'
// import Virginia from'./pages/states/Virginia'
// import Mississippi from'./pages/states/Mississippi'
// import Florida from './pages/states/Florida'


// <Route path="/tn" component={Tennessee} exact/>
// <Route path="/la" component={Louisiana} exact/>
// <Route path="/tx" component={Texas} exact/>
// <Route path="/or" component={Oregon} exact />
// <Route path="/va" component={Virginia} exact />
// <Route path="/ms" component={Mississippi} exact />
// <Route path="/fl" component={Florida} exact />
 
/* credit for map goes to react-usa-map at https://www.npmjs.com/package/react-usa-map */



class Map extends Component {
  /* mandatory */
  mapHandler = (event) => {
    event.preventDefault();
    console.log("event target datasets: ", event.target.dataset.name);
  };

    statesCustomConfig = (event) => {
      return {
        "LA": {
          clickHandler: (event) => {return(<Link to='/la' exact />)}
        },
        "TN": {
          clickHandler: (event) => {return(<Link to="/tn" exact />)}
        },
        "OR": {
          clickHandler: (event) => {return(<Link to="/or" exact />)}
        },
        "TX": {
          clickHandler: (event) => {return(<Link to="/tx" exact />)}
        },
        "MS": {
          clickHandler: (event) => {return(<Link to="/ms" exact />)}
        },
        "VA": {
          clickHandler: (event) => {return(<Link to="/va" exact />)}
        },
        "FL": {
          clickHandler: (event) => {return(<Link to="/fl" exact />)}
        }
      };
    };

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