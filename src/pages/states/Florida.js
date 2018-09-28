import React from 'react'
import './states-fl.css'
import { Card, Image, Button } from 'semantic-ui-react'

// import { Link } from "react-router-dom"

// import Lookout from './tennessee/ww-lm.jpg'
import MuscleShoals from './images/muscle_shoals2.PNG'
import Host from 'C:/Users/prett/Redhood.Designs/weed-wrangle/src/images/Project_Info.pdf'




const Florida = () =>{
  return ( 
    
    <div>
        <div className="fl"> 

            <div className="fl-section-1">
                <h1 className="fl-pg-1">
                  Florida is full of beautiful, native wildlife.<br/> Join our cause to rid Tennessee's beautiful lands of exotic and invasive plants. 
                </h1> 



                <div className="button-div"><Button download="HostInfo">Sign up to host a Weed Wrangle event in your city!</Button></div>
            </div>



            <h1>Weed Wrangle Events and Locations in Florida</h1>
            <div className="location-cards">

                  <Card className="cards">
                    <Image src={MuscleShoals} alt="Muscle Shoals, fl" width="325px"/>
                  </Card>

                  <div className="muscle-shoals">
                  <h4 className="fl-h4">Muscle Shoals at Whitey Hall Memorial Native Plant Garden</h4>
                      <p>The Whitey Hall Memorial Native Plant Garden on the TVA Muscle Shoals Reservation provides a great example of native plant species and their beauty. The site has undergone trail improvements since 2015 and the garden is maintained through the help of volunteers from the Shoals Wildflower Society and members of the community.</p>
                      <br />
                      <p> This location serves as an educational opportunity to learn more about native plants and the importance of keeping invasive plant species out of the garden. Native species found there include Dutchman’s breeches, trilliums, mayapple, false and true rue anemone, toothwort, columbine, phacelia and wild geranium. Native wildflowers, shrubs and trees of all varieties include labels on many of the plant species, so visitors can learn plant identification as they walk the trail.</p>
                      
                  </div>
                
            </div>

        </div>
    </div>
  )
}


export default Florida;