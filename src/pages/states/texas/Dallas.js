import React, { Component } from 'react'

//PHOTOGRAPHY
import DallasLogo from './dallas-logo.PNG'
import Yellow from './yellow-dallas.PNG'
import Groundwork from './groundwork.png'
import GC from './dallas-gc.PNG'
import Ladies from './ladies-dallas.PNG'
import Wranglers from './Wranglers.PNG'


import './StateLocations.css'


class Dallas extends Component {
    render() {

        return (
            <div>
                    <div className="ww-logo"><img src={DallasLogo} alt="Dallas Mountain" width="60%"/></div>

                    
                    <img src={Yellow} alt="Yellow Flowers in Dallas" width="25%" className="lm-img-1" />
                    <div className="lm-main-content">

                        <h2>MD Anderson's Pocket Prairie Park</h2>
                        <h4>October 19, 2018</h4>
                        <p>
                        
                        The 1.7 acre MD Anderson urban pocket prairie is part of Katy Prairie Conservancy Prairie Builders Schools  & Parks (PBSP) program, designed to empower KPC’s partners to build and use pocket prairies on school  campuses and public parks. KPC provides technical guidance in restoration and education, funding, and even interpretive training to partnering institutions. PBSP has helped to bring prairies back to more than 25 school campuses in five school districts, Hermann Park, and Buffalo Bayou Park, in addition to MD Anderson.  On any given day, you can see people on the MD Anderson Pocket Prairie simply sitting and taking in their surroundings or walking around the well-groomed trail in this urban oasis.</p>

                        <p>According to Jaime González, Katy Prairie Conservancy Community Conservation Director, “The MD Anderson Pocket Prairie is a stellar example of the value of an urban pocket prairie, a gem that provides much-needed mental relaxation to physicians, nurses, caregivers, families and patients challenged by cancer care. You can hear the gentle hum of crickets and see migratory birds bounding in and out of the grasses, while spotting monarch butterflies alighting on colorful Texas wildflowers, sipping nectar that will help fuel their journey to México. We appreciate the recognition of H-GAC for our efforts.”

                        </p>
                    </div>

                    
                    <img src={Groundwork} alt="Groundwork Dallas"  width="40%" className="lm-img-2" />
                    <div className="lm-main-content-left">
                        
                        <h2>Ground Work Dallas</h2>
                        <p>Groundwork Dallas is dedicated to improving the natural surroundings of the Dallas and beyond. We work closely with area citizens, like-minded organizations, and the city to help realize a vision of a safer, cleaner, and healthier environment. A healthy urban forest is essential for maintaining the quality of air and water in the Dallas metroplex.</p>
                        <p>The mission of Groundwork Dallas is to regenerate, sustain, and improve the Dallas Elm Fork Greenbelt and Great Trinity Forest by developing community-based partnerships that educate and empower people, businesses, and organizations to promote environmental stewardship. Everyone deserves a green, healthy, and resilient environment. Members will continue to work with nature on this project, recognizing the potential for further flooding.</p>

                        </div>

                        
                        <img src={GC} alt="Groundwork Dallas"  width="20%" className="lm-img-5" />
                    <div className="lm-main-content">
       
                        <h2>Garden Club of Dallas</h2>
                        <p>Founders Garden Club of Dallas was founded in 1938 by a group of 50 horticulturally-minded ladies of the Dallas Garden Club. They were elected into the Garden Club of America in 1940.  Founders Garden Club of Dallas embraces this mission. Over the years, longtime associations with the Dallas Historical Society’s Hall of State and the Dallas County Heritage Society, Texas Discovery Gardens, Aldredge House, Dallas Heritage Village, Dallas Arboretum and Botanic Center, Trinity River Audubon Center, and other Dallas “greening” projects have flourished.</p>
                         
                        <p>Today, new members as well as fourth generation members continue in our charter member’s vision to conserve, protect , preserve, educate, beautify, and serve as Dallas’ civic leaders for a more beautiful and sustainable world for tomorrow...</p>

                    </div>

            </div>
        )
    
    }
}

export default Dallas;