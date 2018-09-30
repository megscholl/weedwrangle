import React from 'react'
import './state-banners.css'
import './states.css'
import { Card, Image, Button } from 'semantic-ui-react'

// import { Link } from "react-router-dom"

// import Lookout from './tennessee/ww-lm.jpg'
import MuscleShoals from './alabama/muscle_shoals2.PNG'
import Host from './Project_Info.pdf'


const Alabama = () =>{
  return ( 
    
    <div>
        <div className="fl"> 

            <div className="al-section-1">
                <h1 className="banner-pg-1">
                  Alabama is full of beautiful, native wildlife.<br/> Join our cause to rid Alabama's beautiful lands of invasive plants. 
                </h1> 



                <Button className="host-btn" href={Host} download="HostInformation">Sign up to host a Weed Wrangle event in your city!</Button>
            </div>



            <h1>Weed Wrangle Events and Locations in Alabama</h1>
            <div className="location-cards">

                  <Card className="single-locations">
                    <Image src={MuscleShoals} alt="Muscle SHoals" width="325px"/>
                  </Card>

                  <div className="each-state-locations">
                  <h4 className="fl-h4">Muscle Shoals</h4>
                      <p>The Whitey Hall Memorial Native Plant Garden on the TVA Muscle Shoals Reservation provides a great example of native plant species and their beauty. The site has undergone trail improvements since 2015 and the garden is maintained through the help of volunteers from the Shoals Wildflower Society and members of the community. This location serves as an educational opportunity to learn more about native plants and the importance of keeping invasive plant species out of the garden. Native species found there include Dutchman’s breeches, trilliums, mayapple, false and true rue anemone, toothwort, columbine, phacelia and wild geranium. Native wildflowers, shrubs and trees of all varieties include labels on many of the plant species, so visitors can learn plant identification as they walk the trail.</p>
                      <p>The Whitey Hall Hall Memorial Native Garden Trail is an easy 0.31 trail found on the TVA Muscle Shoals Reservation. To get there, take TVA Muscle Shoals Reservation Road in Muscle Shoals, Alabama, between Hwy. 43 (Hatch Boulevard) and Wilson Dam.</p> <br /><span><strong>Trail rating:</strong> Easy. <strong>Coordinates:</strong> 34.78248458610, -87.65657903440</span>
                      
                  </div>
                
            </div>

        </div>
    </div>
  )
}


export default Alabama;