import React from 'react'
import './states.css'
import { Card, Image, Button } from 'semantic-ui-react'

import { Link } from "react-router-dom"

// IMAGES
import Laurel from './mississippi/laurel.PNG'
import Jackson from './mississippi/jackson.PNG'
import Greenville from './mississippi/greenville.PNG'
// import Greenville2 from './mississippi/greenville2.PNG'
// import Wranglers from './mississippi/Wranglers.PNG'

import Host from './Project_Info.pdf'


const Mississippi = () =>{
  return ( 
    <div>
        <div className="tn"> 

            <div className="tn-section-1">
                <h1 className="banner-pg-1">
                  Mississippi is full of beautiful, native wildlife.<br/> Join our cause to rid Mississippi's beautiful lands of invasive plants. 
                </h1> 



                <Button className="host-btn" href={Host} download="HostInformation">Sign up to host a Weed Wrangle event in your city!</Button>
            </div>



            <h1>Weed Wrangle Events and Locations in Mississippi</h1>
            <div className="location-cards">

                <Link to="./ms/greenville">
                  <Card className="cards">
                    <Image src={Greenville} alt="Lookout Mountain, TN" width="325px"/>
                    
                  </Card>
                </Link>
                
                <br />

                <Link to="./ms/jackson">
                <Card className="cards">
                  <Image src={Jackson} alt="Oak Ridge, TN" width="325px"/>
                  
                </Card>
                </Link>

                <br />

                <Link to="./ms/laurel">
                <Card className="cards">
                  <Image src={Laurel} alt="Sewanee, TN" width="325px"/>
                  
                </Card>
                </Link>

        </div>

        </div>
      

    </div>
  )
}


export default Mississippi;