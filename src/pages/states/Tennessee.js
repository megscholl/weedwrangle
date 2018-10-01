import React from 'react'
import './states.css'
import { Card, Image, Button } from 'semantic-ui-react'

import { Link } from "react-router-dom"

//      IMAGES
// import Honeysuckle from './honeysuckle.png'
// import Ivy from './ivy.png'
// import Nashville from './tennessee/nashville.PNG'
// import Memphis from './tennessee/memphis.PNG'
// import Chattanooga from './tennessee/chatt.PNG' 

import Lookout from './tennessee/lookout_mountain/ww-lm.jpg'
import OakRidge from './tennessee/oakridge/ww-oakridge.png'
import Sewanee from './tennessee/sewanee/ww-sewanee.jpg'
import WhiteHouse from './tennessee/whitehouse/ww-whitehouse.jpg'
import TVA from './tennessee/TSP_TVA/ww-tva.jpg'
import TSP from './tennessee/TSP_TVA/tspna.jpg'
import Chattanooga from './tennessee/chattanooga/logo.PNG'
import Cookeville from './tennessee/cookeville/logo.PNG'
import Knoxville from './tennessee/knoxville/logo.PNG'
import Conservancy from '/tennessee/conservancy/logo.PNG'
import Monteagle from './tennessee/conservancy/logo.PNG'
import Nashville from './tennessee/nashville/logo.PNG'

import Host from './Project_Info.pdf'

const Tennessee = () =>{
  return ( 
    <div>
        <div className="tn"> 

            <div className="tn-section-1">
                <h1 className="banner-pg-1">
                  Tennessee is full of beautiful, native wildlife.<br/> Join our cause to rid Tennessee's beautiful lands of invasive plants. 
                </h1> 



                <Button className="host-btn" href={Host} download="HostInformation">Sign up to host a Weed Wrangle event in your city!</Button>
            </div>



            <h1>Weed Wrangle Events and Locations in Tennessee</h1>
            <div className="location-cards">


                <Link to="./tn/chattanooga">
                  <Card className="cards">
                    <Image src={Chattanooga} alt="Chattanooga, TN" width="325px"/>
                  </Card>
                </Link>
              
                <br />

                <Link to="./tn/cookeville">
                  <Card className="cards">
                    <Image src={Cookeville} alt="Cookeville, TN" width="320px"/>
                  </Card>
                </Link>
    
                <br />

                <Link to="./tn/knoxville">
                  <Card className="cards">
                    <Image src={Knoxville} alt="Knoxville, TN" width="320px"/>
                  </Card>
                </Link>
    
            </div>
            <div className="location-cards">

                <Link to="./tn/conservancy">
                  <Card className="cards">
                    <Image src={Conservancy} alt="Lookout Mountain, TN" width="325px"/>
                    
                  </Card>
                </Link>
                
                <br />

                <Link to="tn/monteagle">
                  <Card className="cards">
                    <Image src={Monteagle} alt="Oak Ridge, TN" width="325px"/>
                  </Card>
                </Link>

                <br />


                <Link to="tn/nashville">
                  <Card className="cards">
                    <Image src={Nashville} alt="Sewanee, TN" width="325px"/>
                  </Card>
                </Link>

        </div>
        <div className="location-cards">

            <Link to="./tn/lookout">
              <Card className="cards">
                <Image src={Lookout} alt="Lookout Mountain, TN" width="325px"/>
                
              </Card>
            </Link>
            
            <br />

            <Link to="tn/oakridge">
              <Card className="cards">
                <Image src={OakRidge} alt="Oak Ridge, TN" width="325px"/>
              </Card>
            </Link>

            <br />


            <Link to="tn/sewanee">
              <Card className="cards">
                <Image src={Sewanee} alt="Sewanee, TN" width="325px"/>
              </Card>
            </Link>

    </div>
        <div className="location-cards">


                <Link to="tn/whitehouse">
                  <Card className="cards">
                    <Image src={WhiteHouse} alt="White House, TN" width="325px"/>
                  </Card>
                </Link>
          
                <br />

                <Link to="tn/tva">
                  <Card className="cards">
                    <Image src={TVA} alt="Tennessee Valley Authority" width="320px"/>
                  </Card>
                </Link>

                <br />

                <Link to="tn/tsp">
                  <Card className="cards">
                    <Image src={TSP} alt="Tennessee State Parks and Natural Areas" width="320px"/>
                  </Card>
                </Link>

        </div>


      </div>
      

    </div>
  )
}


export default Tennessee;