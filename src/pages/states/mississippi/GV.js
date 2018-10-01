import React, { Component } from 'react'

//PHOTOGRAPHY

import Greenville1 from './greenville.PNG'
// import Wranglers from './Wranglers.PNG'
import GGC from './ggc.PNG'

import './StateLocations.css'


class Greenville extends Component {
    render() {

        return (
            <div>
                    <div className="ww-logo">
                    <img src={Greenville1} alt="Greenville Mississippi" width="60%"/></div>

                    
                    <img src={GGC} alt="Greenville Garden Club" width="25%" className="lm-img-1" />
                    <div className="lm-main-content">
                        <h2>Greenville Cypress Preserve<br />
                        A Natural Treasure in the Mississippi Delta</h2>
                        <p>
                         In the 1930s the Greenville Garden Club, the oldest garden club in the state, began efforts to save this area of natural beauty from planned urban development. Club projects raised money that paid for the purchase of the site, and in 1940, the Greenville Garden Club purchased the site for $3,176.00. </p>
                        
                        <p>
                        The preserve was maintained by the garden club from 1940 until 2002, when the club gave a conservation easement to the Greenville Cypress Preserve Trust and turned management over to a Board of Trustees. The Greenville Cypress Preserve Trust is a 501(C(3) organization dedicated to the development and maintenance of the preserve property. </p>
                         
                        <p>In 2002 the Greenville Garden Club conducted a gala for the benefit of the Greenville Cypress Preserve Trust. This highly successful event known as &quot;Save the Brake&quot; netted over $45,000.00 that was donated to the Trust to develop and maintain the preserve.</p>
                         
                        <p>Generous donations and numerous grants enable the Trust to continue its planned development of the site and enhance the significance of the preserve to our Mississippi Delta area through educational projects and activities.</p>
                         
                        <p>The preserve continues to grow in popularity among area residents. Since the completion of the boardwalks and trails, numerous visitors can be seen walking or jogging the trails as a part of their daily exercise routine. </p>
                         
                        <p>It has become a favorite spot for local and visiting photographers and birders alike, and the addition of the benches and the observation deck enhances the preserve as a place to relax and enjoy the natural beauty of the area.</p>

                    </div>

                    

                    




            </div>
        )
    
    }
}

export default Greenville;