import React from 'react'
import './state-banners.css'
import './states.css'
import { Card, Image, Button } from 'semantic-ui-react'

// import { Link } from "react-router-dom"

// import Lookout from './tennessee/ww-lm.jpg'
import MuscleShoals from './images/muscle_shoals2.PNG'
import Host from './Project_Info.pdf'


// !!!!!!!!!!!! NEED TO TAKE OUT ALL MUSCLE SHOALS 


const Florida = () =>{
  return ( 
    
    <div>
        <div className="fl"> 

            <div className="fl-section-1">
                <h1 className="banner-pg-1">
                  Florida is full of beautiful, native wildlife.<br/> Join our cause to rid Florida's beautiful lands of exotic and invasive plants. 
                </h1> 



                <Button className="host-btn" href={Host} download="HostInformation">Sign up to host a Weed Wrangle event in your city!</Button>
            </div>



            <h1>Weed Wrangle Events and Locations in Florida</h1>
            <div className="location-cards">

                  <Card className="cards">
                    <Image src={MuscleShoals} alt="Jacksonville, FL" width="325px"/>
                  </Card>

                  <div className="muscle-shoals">
                  <h4 className="fl-h4">Jacksonville</h4>
                      
                      
                  </div>
                
            </div>

        </div>
    </div>
  )
}


export default Florida;