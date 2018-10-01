import React, { Component } from 'react'

//PHOTOGRAPHY
import LM from './ww-lm.jpg'
import Lula from './lula.png'
import City from './City.png'
import Fairyland from './Fairyland.jpg'
import Conservancy from './Conservancy.png'
import Golf from './Golfclub.png'
import NPS from './nps.png'

import ParkCleanup from './parkcleanup.jpg'
import Signs from './lm-signs.PNG'
import Working from './working.PNG'
import Folks from './folks.PNG'


import './StateLocations.css'


class Lookout extends Component {
    render() {

        return (
            <div>
                    <div className="ww-logo"><img src={LM} alt="Lookout Mountain" width="60%"/></div>

                    
                    <img src={ParkCleanup} alt="Women posing while removing invasive plants" width="25%" className="lm-img-1" />
                    <div className="lm-main-content">
                    <h4>Fighting the Battle…..?</h4>

                    <p>No, The Garden Club of Lookout Mountain is not recreating the Battle Above the Clouds, but launching a battle against invasive plants on our Mountain and in the City of Chattanooga. Our battle is called: Weed Wrangle 2017. This is a state-wide project involving Memphis, Nashville, Knoxville and the City of Lookout Mountain. The Garden Club of Lookout Mountain is enthusiastically joining this ambitious effort as they partner with The Garden Club of America’s Partners for Plants program and Invasive Plant Control, Inc. to combat non-native plants. With the removal of invasive plants it is hopeful that our native plants will flourish.</p>
                    
                    <p>The Garden Club of Lookout Mountain is working with the National Park Service at Chickamauga and Chattanooga National Military Park to help volunteers from across our area to identify and eradicate the non-native plants threatening our communities. The Lookout Mountain Conservancy, Lula Lake Land Trust, The Fairyland Club, The Lookout Mountain Golf Club and the Towns of Lookout Mountain Tennessee and Georgia, along with area schools will gather from TBD at historic Point Park to develop a plan to stem the proliferation of these plants. The above organizations will take the knowledge they acquire TBD and begin their own “Battle of the Plants.”</p>
                    
                    <p>Point Park is a unit of Chickamauga and Chattanooga National Military Park located atop Lookout Mountain. We are helping to celebrate the National Park Service’s centennial with a work day beginning at Point Park. Our area is being slowly consumed by Kudzu, honeysuckle vine, bush honeysuckle, euonymus fortune and privet. The Garden Club of Lookout Mountain along with volunteers will be addressing these plants by identifying and working toward removing them from designated areas both in and outside the park.</p>
                    
                    <h4>Are You Ready to Fight…?</h4>
                    
                    <p>If you are interested in preserving the natural beauty of our area please plan to attend our work day on TBD. Make plans now to gather at Point Park on Lookout Mountain. We will have a brief safety program presented by the Park Rangers and we will have knowledgeable volunteers to direct your efforts. Bring your clippers and a keen eye.</p>

                    </div>

                    
                    <div className="images">
                        <img src={Working} alt="Lookout Mountain Ladies Pulling Weeds" width="500px"/>
                        <img src={Signs} alt="Lookout Mountain Signs" width="500px"/>
                        <img src={Folks} alt="Lookout Mountain Kids Posing with Invasives" width="500px"/>
                    </div>
                    


                    <h4 className="lm-h4">Organizational Partners:</h4>
                    <div className="lm-gallery">

                        <img src={Lula} alt="Lula" width="8%" className="" />
                        <img src={City} alt="City of Lookout Mountain" width="5%" className="" />
                        <img src={Fairyland} alt="Fairyland Club of Lookout Mountain" width="8%" className="" />
                        <img src={Conservancy} alt="Lookout Mountain Conservancy" width="5%" className="" />
                        <img src={Golf} alt="Golf Club of Lookout Mountain" width="5%" className="" />
                        <img src={NPS} alt="National Park Service" width="4.8%" />
                    

                    </div>

            </div>
        )
    
    }
}

export default Lookout;