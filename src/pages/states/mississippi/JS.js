import React, { Component } from 'react'

//PHOTOGRAPHY

import Jackson1 from './jackson.PNG'
// import Wranglers from './Wranglers.PNG'
import Ladies from './ladies.PNG'

import './StateLocations.css'


class Jackson extends Component {
    render() {

        return (
            <div>
                    <div className="ww-logo">
                        <img src={Jackson1} alt="Jackson Mississippi" width="60%"/>
                    </div>

                        
                    <img src={Ladies} alt="Jackson Garden Club" width="35%" className="lm-img-4" />
                    <div className="lm-main-content">
                    <h2>Garden Club of Jackson, Mississippi</h2>
                            <p>Mississippi landscapes are encountering growing threats from some non-native plants. Invasive plants introduced in this region decades ago for agricultural or landscaping purposes are now a serious concern for our parks, our public green spaces and our own backyards Along with a warming climate and longer growing seasons, experts warn this city’s beautiful native trees, plants and wildlife are losing the fight against these aggressive plants, vines, trees and insects. These non-indigenous plants and insects consume nutrients, disrupt the ecological balance and disfigure the outdoor world where Mississippians hike, bike, have picnics and just enjoy. While some invasive plants are quite beautiful with colorful flowers and pleasing scents, they are still quietly lethal to native species If left unchecked, future generations of native plants might never glimpse the forest floor as alien growth shrouds the sun and takes nutrients away from our native trees and plants.</p>

                            <p>The Garden Club of Jackson, Weed Wrangle&reg;-Jackson, project was designed to remove an invasive tree species at LeFleur’s Bluff State Park in Jackson, MS.  Over 100 volunteers worked to remove hundreds of tallow trees which have surrounded Mayes Lake.  These trees now obstruct the view and the use of the lake.  This project focused on a campground area at the park.  Unfortunately there are thousands more trees to remove - those will be tacked at future Weed Wrangle®-Jackson events.</p>
                    </div>

            </div>
        )
    
    }
}

export default Jackson;