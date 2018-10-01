import React from 'react'
import './states.css'
import { Card, Image, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

// import { Link } from "react-router-dom"

//      IMAGES
import Dallas from './texas/dallas-logo.PNG'
import Houston from './texas/houston-logo.PNG'


import Host from './Project_Info.pdf'


const Texas = () =>{
  return ( 
    <div>
        <div className="fl"> 

            <div className="fl-section-1">
                <h1 className="banner-pg-1">
                  Texas is full of beautiful, native wildlife.<br/> Join our cause to rid Texas's beautiful lands of exotic and invasive plants. 
                </h1> 



                <Button className="host-btn" href={Host} download="HostInformation">Sign up to host a Weed Wrangle event in your city!</Button>
            </div>



            <h1>Weed Wrangle Events and Locations in Texas</h1>
            <div className="location-cards">

            <Link to="./tx/dallas">
              <Card className="cards">
                <Image src={Dallas} alt="Weed Wrangle Dallas Texas" width="325px"/>
                
              </Card>
            </Link>
            <Link to="./tx/houston">
              <Card className="cards">
                <Image src={Houston} alt="Weed Wrangle Houston Texas" width="340px"/>
                
              </Card>
            </Link>


            </div>

        </div>
    </div>
  )
}


export default Texas;