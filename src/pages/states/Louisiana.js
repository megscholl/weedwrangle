import React from 'react'
import './states.css'
import { Card, Image, Button } from 'semantic-ui-react'

// import { Link } from "react-router-dom"

//      IMAGES
import Ladies from './louisiana/neworleans.PNG'
import Orleans from './louisiana/nola.jpg'
import Wranglers from './louisiana/wranglers.PNG'
import Wranglers2 from './louisiana/wranglers2.PNG'
import Wranglers3 from './louisiana/Wranglers3.PNG'

import Host from './Project_Info.pdf'


const Lousiana = () =>{
  return ( 
        
    <div>
        <div className="fl"> 

            <div className="fl-section-1">
                <h1 className="banner-pg-1">
                  Louisiana is full of beautiful, native wildlife.<br/> Join our cause to rid Louisiana's beautiful lands of exotic and invasive plants. 
                </h1> 



                <Button className="host-btn" href={Host} download="HostInformation">Sign up to host a Weed Wrangle event in your city!</Button>
            </div>



            <h1>Weed Wrangle Events and Locations in Louisiana</h1>
            <div className="location-cards">

                  <Card className="single-locations">
                    <Image src={Orleans} alt="New Orleans Weed Wrangle" width="325px"/>
                  </Card>

                  <div className="muscle-shoals">
                  <h4 className="fl-h4">The New Orleans Town Gardners, New Orleans, Louisiana</h4>
                  <p>
                  The New Orleans Town Gardeners is partnering with Grow Dat Youth Farm in City Park New Orleans to remove invasive plants from a portion of their land, much of which is trails through woods. After the invasives are removed, we will replant with native plants, which our club has propagated. We will also be partnering with the Audubon Louisiana, New Orleans chapter, as Grow Dat is located in a birding corridor. <strong>Grow Dat</strong> nurtures a diverse group of young leaders through the meaningful work of growing food. They produce 20,000 pounds of fresh produce each year which they then sell at local farmers markets and road side stands through out the city. 
                  </p> <br />
                  <p>The New Orleans Town Gardeners mission is to complete a GCA P4P project in New Orleans which combines the goals of a P4P project, those of our club and of Weed Wrangle®-New Orleans, to promote healthy plants and inform youth in our city to be guardians of our natural world now and in the future.                  
                  </p>
                      
                  </div>
            </div>

            
            <div className="images-la">
                <img src={Ladies} alt="Ladies in New Orleans removing invasive plants for the Weed Wrangle event" width="350px"/>
                <img src={Wranglers3} alt="People in New Orleans removing invasive plants for the Weed Wrangle event" width="200px"/>
                <img src={Wranglers} alt="People in New Orleans removing invasive plants for the Weed Wrangle event" width="350px"/>
                <img src={Wranglers2} alt="People in New Orleans removing invasive plants for the Weed Wrangle event" width="350px"/>
            </div>

        </div>
    </div>
  )
}


export default Lousiana;