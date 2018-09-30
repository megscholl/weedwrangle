import React from 'react'

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

import Host from './Project_Info.pdf'



const Oregon = () =>{
  return ( 
    
    <div>
        <div className="tn"> 

            <div className="tn-section-1">
                <h1 className="banner-pg-1">
                  Oregon is full of beautiful, native wildlife.<br/> Join our cause to rid Oregon's beautiful lands of invasive plants. 
                </h1> 



                <Button className="host-btn" href={Host} download="HostInformation">Sign up to host a Weed Wrangle event in your city!</Button>
            </div>



            <h1>Weed Wrangle Events and Locations in Oregon</h1>
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

        </div>
      
    </div>
  )
}


export default Oregon;