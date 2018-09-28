import React, { Component } from 'react'

//PHOTOGRAPHY
import LM from './ww-lm.jpg'
import Lula from './lula.png'
import City from './City.png'
import Fairyland from './Fairyland.jpg'
import Conservancy from './Conservancy.png'
import Golf from './Golfclub.png'


import './StateLocations.css'


class Lookout extends Component {
    render() {

        return (
            <div>
                    <div className="ww-logo"><img src={LM} alt="Lookout Mountain" width="60%"/></div>

                    <div>

                    <img src={Lula} alt="Lula" width="" className="" />
                    <img src={City} alt="City of Lookout Mountain" width="" className="" />
                    <img src={Fairyland} alt="Fairyland Club of Lookout Mountain" width="" className="" />
                    <img src={Conservancy} alt="Lookout Mountain Conservancy" width="" className="" />
                    <img src={Golf} alt="Golf Club of Lookout Mountain" width="" className="" />
                    

                    </div>

            </div>
        )
    
    }
}

export default Lookout;