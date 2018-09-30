import React from 'react'
import './states.css'
import { Card, Image, Button } from 'semantic-ui-react'

import { Link } from "react-router-dom"

//      IMAGES
// import Honeysuckle from './honeysuckle.png'
// import Ivy from './ivy.png'
// import Nashville from './tennessee/nashville.PNG'
// import Memphis from './tennessee/memphis.PNG'
// import Chattanooga from './tennessee/chatt.PNG' 

import Lookout from './tennessee/ww-lm.jpg'
import OakRidge from './tennessee/ww-oakridge.png'
import Sewanee from './tennessee/ww-sewanee.jpg'
import WhiteHouse from './tennessee/ww-whitehouse.jpg'
import TVA from './tennessee/ww-tva.jpg'
import TSP from './tennessee/tspna.jpg'

import Host from './Project_Info.pdf'

const Tennessee = () =>{
  return ( 
    <div>
        <div className="tn"> 

            <div className="tn-section-1">
                <h1 className="tn-pg-1">
                  Tennessee is full of beautiful, native wildlife.<br/> Join our cause to rid Tennessee's beautiful lands of invasive plants. 
                </h1> 



                <Button className="host-btn" href={Host} download="HostInformation">Sign up to host a Weed Wrangle event in your city!</Button>
            </div>



            <h1>Weed Wrangle Events and Locations in Tennessee</h1>
            <div className="location-cards">

                <Link to="./tn/lookout">
                  <Card className="cards">
                    <Image src={Lookout} alt="Lookout Mountain, TN" width="325px"/>
                    
                  </Card>
                </Link>
                
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
      

    </div>
  )
}


export default Tennessee;