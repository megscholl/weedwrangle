import React from 'react'
import './state-banners.css'
import './states.css'
import { Button, Card, Image } from 'semantic-ui-react'

// IMAGES 
import Alexandria from './virginia/alexandria.PNG'
import Host from './Project_Info.pdf'
         
import Wranglers from './virginia/wranglers.PNG'


// !!!!!!!!!!!! NEED TO TAKE OUT ALL MUSCLE SHOALS 


const Virginia = () =>{
  return ( 
    
    <div>
    <div className="fl-section-1">
          <h1 className="banner-pg-1">
            Texas is full of beautiful, native wildlife.<br/> Join our cause to rid Texas's beautiful lands of exotic and invasive plants. 
          </h1> 

          <Button className="host-btn" href={Host} download="HostInformation">Sign up to host a Weed Wrangle event in your city!</Button>
    </div>
          
           <h1>Weed Wrangle Events and Locations in Virgina</h1>
          <div className="location-cards"> 
            <Card className="single-locations">
              <Image src={Alexandria} alt="State Botanical Garden of Georgia" width="375px"/>
            </Card>
          </div>
             
    </div>

  )
}


export default Virginia;