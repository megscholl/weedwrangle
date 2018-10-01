import React, { Component } from 'react'

//PHOTOGRAPHY

import Laurel1 from './laurel.PNG'
// import Wranglers from './Wranglers.PNG'
import GGC from './ggc.PNG'
import LaurelImg from './laurel.jpg'

import './StateLocations.css'


class Laurel extends Component {
    render() {

        return (
            <div>
                    <div className="ww-logo">
                        <img src={Laurel1} alt="Laurel Mississippi" width="60%"/>
                    </div>

                        
                    <img src={LaurelImg} alt="Laurel Downtown Garden" width="35%" className="lm-img-3" />
                    <div className="lm-main-content">
                    <h2>Laurel, Mississippi</h2>

                    <p>
                    Three major Historic District parks, Gardiner, Euclid and Mason, follow the Tallahala Creek which snakes its way through the city of Laurel. These parks were in an original plan designed by the Frederick Law Olmstead Landscape Architecture firm in New York. Olmstead, the son of the celebrated designer of Central Park, in New York, remarked that thesethree parks seemed to flow through the city as “a string of pearls.”
                    </p>
                    <h4>Euclid Park</h4>
                    <p>The land for Euclid Park, originally known as the Addison Addition, was donated to the city during 1921-1923. A newspaper article from 1989 states that T.G. McCullum donated the land, the second in Olmstead&#39;s &quot;string of pearls&#39;, to the city of Laurel. Around this same period, the Kirkland Fountain was bought in New Orleans and installed at the southern end of the park. It is said that the fountain came down the Mississippi River from New York to New Orleans.
                    </p>
                    <p> At an early date the Euclid Park Garden Club became caretakers of the park and worked with the city to maintain the grounds. In the fall of 1965, the Laurel Garden Club, a member club of The Garden Club of America, voted to take on the responsibility of promoting the beauty of the park and assume the work of maintenance. The women voted that each member would donate or raise $50 each to contribute to the care of the park. In 1966 the Laurel Garden Club hired Edith Henderson of Atlanta to add to the park landscape. Mrs. Henderson was known in Laurel through her landscape designs for the Laurel Court House and City Hall. That same year Laurel Garden Club member, Paula Watkins, took the fountain by vehicle to Robinson’s Foundry in Birmingham, Alabama for restoration.</p>
                    <p>After the devastation of the tree canopy in the aftermath of Hurricane Katrina the park is at this time in need of another renovation plan. In spite of this, the Laurel Garden Club, along with the City Of Laurel Parks and Recreation Department, continues to remain active in maintaining the historical value of the park. Since the hurricane the Laurel Garden Club, using funds donated by the Garden Club of America, installed an irrigation system and several Live Oaks have been added to the landscape.
                    </p>
                    </div>

            </div>
        )
    
    }
}

export default Laurel;