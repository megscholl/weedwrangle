import React from 'react'
import './states.css'
import { Card, Image, Button } from 'semantic-ui-react'

// import { Link } from "react-router-dom"

//      IMAGES
import Botanical from './georgia/botanical.jpg'
import NE from './georgia/NE.png'
import ALT from './georgia/alt.png'

import Host from './Project_Info.pdf'

const Georgia = () =>{
  return ( 
    <div>
        <div className="tn"> 

            <div className="tn-section-1">
                <h1 className="banner-pg-1">
                  Georgia is full of beautiful, native wildlife.<br/> Join our cause to rid Georgia's beautiful lands of invasive plants. 
                </h1> 



                <Button className="host-btn" href={Host} download="HostInformation">Sign up to host a Weed Wrangle event in your city!</Button>
            </div>



            <h1>Weed Wrangle Events and Locations in Georgia</h1>
            <div className="location-cards">

                
                  <Card className="single-locations">
                    <Image src={Botanical} alt="State Botanical Garden of Georgia" width="375px"/>
                    
                  </Card>
                
                <br />

                <Card className="single-locations">
                  <Image src={NE} alt="Oak Ridge, TN" width="280px"/>
                  
                </Card>

                <br />

                <Card className="single-locations">
                  <Image src={ALT} alt="Sewanee, TN" width="280px"/>
                  
                </Card>

            </div>
        </div>
      

    </div>
  )
}


export default Georgia;