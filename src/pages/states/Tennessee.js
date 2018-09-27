import React from 'react'
import Footer from '../Footer.js'
import './states.css'
import { Card, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom"

//      IMAGES
import Honeysuckle from './honeysuckle.png'
import Ivy from './ivy.png'
// import Nashville from './tennessee/nashville.PNG'
// import Memphis from './tennessee/memphis.PNG'
// import Chattanooga from './tennessee/chatt.PNG' 

import Lookout from './tennessee/ww-lm.jpg'
import OakRidge from './tennessee/ww-oakridge.png'
import Sewanee from './tennessee/ww-sewanee.jpg'
import WhiteHouse from './tennessee/ww-whitehouse.jpg'
import TVA from './tennessee/ww-tva.jpg'
import TSP from './tennessee/tspna.jpg'


const Tennessee = () =>{
  return ( 
    <div>
        <div className="tn">
          <h1>Tennessee is full of beautiful, native wildlife.</h1>  

            <div className="tn-section-1">
                <p className="tn-pg-1">However, many invasive plants are taking over the spaces where native plants and species should thrive. Join our cause to rid Tennessee's beautiful lands of invasive plants. 
                </p>
            </div>

            <div className="invasive-img">
                <img src={Ivy} alt="English Ivy" className="ivy"/>
                <img src={Honeysuckle} alt="honeysuckle" className="honeysuckle"/>
            </div>

            <h4><Link to="">Interested in Joining the Cause? Sign up<br /> to host a Weed Wrangle event in your city!</Link></h4>



            <h3>Weed Wrangle Events and Locations in Tennessee</h3>
            <div className="location-cards">

                <Card className="cards">
                  <Image src={Lookout} alt="Lookout Mountain, TN" width="325px"/>
                  
                </Card>
              
                <br />

                <Card className="cards">
                  <Image src={OakRidge} alt="Oak Ridge, TN" width="325px"/>
                  
                </Card>

                <br />

                <Card className="cards">
                  <Image src={Sewanee} alt="Sewanee, TN" width="325px"/>
                  
                </Card>

        </div>
        <div className="location-cards">

            <Card className="cards">
              <Image src={WhiteHouse} alt="White House, TN" width="325px"/>
           
            </Card>
          
            <br />

            <Card className="cards">
              <Image src={TVA} alt="Tennessee Valley Authority" width="320px"/>
              
            </Card>

            <br />

            <Card className="cards">
              <Image src={TSP} alt="Tennessee State Parks and Natural Areas" width="320px"/>
              
            </Card>

          
    </div>
        </div>
      
      <Footer className="tn-footer"/>

    </div>
  )
}


export default Tennessee;