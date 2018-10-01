import React from 'react'

import { Button } from 'semantic-ui-react'

//      IMAGES
import Logo from './oregon/logo.PNG'
import Bottle from './oregon/bottle.PNG'

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

            <div>
                    <div className="ww-logo">
                        <img src={Logo} alt="Laurel Mississippi" width="60%"/>
                    </div>

                        
                    <img src={Bottle} alt="Laurel Garden Club" width="25%" className="lm-img-1" />
                    <div className="lm-main-content">
                    <h2>Grants Pass, Oregon</h2>

                    <p>
                    Weed Wrangle - Grants Pass is a single day event focused on caring for our public lands by removing invasive plants. We will continue our work from last year, targeting the removal of Scotch broom, dyer's woad, and garlic mustard at Griffin Park and the neighboring BLM land. 
                    </p>
                    <h4>Meet at the Griffin Park Shelter at 8:30 am to register and join the fun!</h4>
                    <p>Earn 4 volunteer hours toward an annual park pass and enjoy a meal from 1:00-2:00 in appreciation for a job well done! County Park Day-Use Fee will be waived for participants. Tools will be provided. Bring gloves and wear long sleeves, pants, and work boots.
                    </p>
                    </div>

            </div>

        </div>
      
    </div>
  )
}


export default Oregon;