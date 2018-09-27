import React from 'react'
import Footer from '../Footer.js'
import './states.css'
import { Card, Image } from 'semantic-ui-react'


import Honeysuckle from './honeysuckle.png'
import Ivy from './ivy.png'
import Nashville from './tennessee/nashville.PNG'
import Memphis from './tennessee/memphis.PNG'
import Chattanooga from './tennessee/chatt.PNG' 

const Tennessee = () =>{
  return ( 
    <div>
        <div className="tn">
          <h1>Tennessee</h1>  

            <div className="tn-section-1">
                <p className="tn-pg-1">However, many invasive plants are taking over the spaces where native plants and species should thrive. Join our cause to rid Tennessee's beautiful lands of invasive plants. 
                </p>
            </div>

            <div className="invasive-img">
                <img src={Ivy} alt="English Ivy" className="ivy"/>
                <img src={Honeysuckle} alt="honeysuckle" className="honeysuckle"/>
            </div>

            <h4>Interested in Joining the Cause? Sign up<br /> to host a Weed Wrangle event in your city!</h4>



            <h3>Weed Wrangle Events and Locations in Tennessee</h3>
            <div className="location-cards">

                <Card className="cards">
                  <Image src={Nashville} alt="Nashville, TN" width="60%"/>
                  <Card.Content>
                    <Card.Header>Nashville</Card.Header>
                  </Card.Content>
                </Card>
              
                <br />

                <Card className="cards">
                  <Image src={Memphis} alt="Nashville, TN" width="60%"/>
                  <Card.Content>
                    <Card.Header>Memphis</Card.Header>
                  </Card.Content>
                </Card>

                <br />

                <Card className="cards">
                  <Image src={Chattanooga} alt="Nashville, TN" width="60%"/>
                  <Card.Content>
                    <Card.Header>Chattanooga</Card.Header>
                  </Card.Content>
                </Card>

        </div>
        <div className="location-cards">

            <Card className="cards">
              <Image src={Nashville} alt="Nashville, TN" width="60%"/>
              <Card.Content>
                <Card.Header>Nashville</Card.Header>
              </Card.Content>
            </Card>
          
            <br />

            <Card className="cards">
              <Image src={Memphis} alt="Nashville, TN" width="60%"/>
              <Card.Content>
                <Card.Header>Memphis</Card.Header>
              </Card.Content>
            </Card>

            <br />

            <Card className="cards">
              <Image src={Chattanooga} alt="Nashville, TN" width="60%"/>
              <Card.Content>
                <Card.Header>Chattanooga</Card.Header>
              </Card.Content>
            </Card>

    </div>
    <div className="location-cards">

        <Card className="cards">
          <Image src={Nashville} alt="Nashville, TN" width="60%"/>
          <Card.Content>
            <Card.Header>Nashville</Card.Header>
          </Card.Content>
        </Card>
      
        <br />

        <Card className="cards">
          <Image src={Memphis} alt="Nashville, TN" width="60%"/>
          <Card.Content>
            <Card.Header>Memphis</Card.Header>
          </Card.Content>
        </Card>

        <br />

        <Card className="cards">
          <Image src={Chattanooga} alt="Nashville, TN" width="60%"/>
          <Card.Content>
            <Card.Header>Chattanooga</Card.Header>
          </Card.Content>
        </Card>

</div>
        </div>
      
      <Footer className="tn-footer"/>

    </div>
  )
}


export default Tennessee;