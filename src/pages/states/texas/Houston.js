import React, { Component } from 'react'

//PHOTOGRAPHY
import HoustonLogo from './houston-logo.PNG'
import Dig from './houston-digging.PNG'
import Ladies from './houston-ladies.PNG'
import Weeds from './houston-weeds.PNG'

import Parks from './houston-parks.jpeg'
import Board from './houston-parks2.png'
import Students from './houston-students.png'

import './StateLocations.css'


class Houston extends Component {
    render() {

        return (
            <div>
                    <div className="ww-logo"><img src={HoustonLogo} alt="Houston Weed Wrangle Logo" width="60%"/></div>

                    
                    
                    <img src={Weeds} alt="Lookout Mountain Kids Posing with Invasives" width="450px" className="lm-img-1"/>
                    <div className="lm-main-content">
                        <h2>Garden Club of Houston</h2>
                        <p>The Garden Club of Houston’s mission is to complete a one-day volunteer Weed Wrangle® at White Oak Park. The Park sits on the banks of White Oak Bayou, which begins northwest of FM1960 and runs all the way to downtown where it joins Buffalo Bayou. Within the city limits, the Bayou is an uninterrupted green space and part of the Bayou Greenway 2020 Project.</p>
                        <p>Our partners for the day include Houston Parks and Recreation, Houston Parks Board and Student Conservation Association. Our goals for the day include collaborating with our partners to remove invasive species such as elephant ear, lantern vine, giant ragweed and tallow trees, plant native species and educate the volunteers so that the leave with a better understanding of why native species are so important for habitat.</p>
                    </div>

                
                    <h4 className="lm-h4-hs">Organizational Partners:</h4>
                    <div className="hs-gallery">

                        <img src={Parks} alt="Lula" width="15%" className="" />
                        <img src={Board} alt="City of Lookout Mountain" width="10%" className="" />
                        <img src={Students} alt="Fairyland Club of Lookout Mountain" width="20%" className="" />
                    
                    </div>

            </div>
        )
    
    }
}

export default Houston;