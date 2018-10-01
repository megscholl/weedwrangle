import React from 'react'
import './state-banners.css'
import './states.css'
import { Card, Image, Button } from 'semantic-ui-react'

// import { Link } from "react-router-dom"

// import Lookout from './tennessee/ww-lm.jpg'
import INresults from './indiana/results.jpg'
import Host from './Project_Info.pdf'
import Loosestrife from './indiana/purple-loosestrife.jpg'
import Yellow from './indiana/yellow.jpg'
import IndianaImage from './indiana/indiana.PNG'


const Indiana = () =>{
  return ( 
    
    <div>
        <div className="fl"> 

            <div className="in-section-1">
                <h1 className="banner-pg-1">
                  Indiana is full of beautiful, native wildlife.<br/> Join our cause to rid Indiana's beautiful lands of invasive plants. 
                </h1> 



                <Button className="host-btn" href={Host} download="HostInformation">Sign up to host a Weed Wrangle event in your city!</Button>
            </div>



            <h1>Weed Wrangle Events and Locations in Indiana</h1>
            <div className="location-cards">

                  <Card className="single-locations">
                    <Image src={INresults} alt="Indiana" width="325px"/>
                  </Card>

                  <div className="each-state-locations">
                  <h4 className="fl-h4">Dunn's Woods - Bloomington, IN</h4>
                      <p>Urban woodlands supply habitat for resident and migratory birds and many other animals, and provide aesthetic enjoyment, biological carbon sinks, air and water purification, and numerous other ecological services. Yet urban woodlands tend to be small, fragmented, and close to conventionally landscaped yards, making them especially vulnerable to degradation from exotic invasive plants. Indeed, ~85% of woody invasive species come from the landscaping trade. The urban woodlands in Bloomington, Indiana are heavily invaded by such invasive plants, with correspondingly low biodiversity of native plant species and reduced habitat diversity for the native insects, birds, and other species that have coevolved with native plant species.</p>
                      
                  </div>
                
            </div>

            <div className="location-cards">

                  <Card className="single-locations">
                    <Image src={Loosestrife} alt="Indiana" width="325px"/>
                  </Card>

                  <div className="each-state-locations">
                  <h4 className="fl-h4">Johnson County Park</h4>
                
                      <p>Approximately 5 miles of wooded hiking trails and open fields totaling 561
                      acres of park land. This location is located at 2949 E. North St. Nineveh, IN 46164. To volunteer: Email Megan Bowman at <a href="mailto:mbowman@co.johnson.in.us">mbowman@co.johnson.in.us</a></p>
                      
                  </div>
                
            </div>

            <div className="location-cards">

                  <Card className="single-locations">
                    <Image src={Yellow} alt="Indiana" width="325px"/>
                  </Card>

                  <div className="each-state-locations">
                  <h4 className="fl-h4">Mary Grey Bird Sanctuary</h4>
                      <p>The Society utilizes the Mary Gray Bird Sanctuary to collaborate with regional colleges and universities to conduct biological research concerning flora and fauna in Indiana and their intricate relationships. The property has also been utilized for school groups, college classes
                      and summer outdoor educational programs for area youth. Collaboration with local non-profit and service organizations also promotes the mission of the Indiana Audubon Society by sponsoring meeting space at Mary Gray.</p>
                      
                  </div>
                
            </div>

            

            <div className="location-cards">

                  <Card className="single-locations">
                    <Image src={IndianaImage} alt="Indiana" width="325px"/>
                  </Card>

                  <div className="each-state-locations">
                  <h4 className="fl-h4">Mosquito Creek</h4>
                      <p>The Harrison County Glades - which include Buena Vista Glade, Teeple Glade, Mosquito Creek (1,025 Acres) and Klinstiver Glade - are nestled in the wooded bluffs and ridges of Southern Indiana. This natural community is defined by the limestone bedrock that underpins the entire area and occasionally erupts onto the surface at the glades, splintered by freezing and thawing. These openings are often filled with sun, but lack on soil and water making it difficult for trees to take root and survive. However some of Indiana&#39;s oldest trees, well over a century in age but only a foot thick, can be found where the forest meets the glade.</p>
                      
                  </div>
                
            </div>

            

            <div className="location-cards">

                  <Card className="single-locations">
                    <Image src={Yellow} alt="Indiana" width="325px"/>
                  </Card>

                  <div className="each-state-locations">
                  <h4 className="fl-h4">Nature Conservancy Blue River</h4>
                      <p>Blue River’s cool, spring-fed waters drop in elevation from the western slope of the Knobs in Floyd and Clark Counties to its confluence with the Ohio River in Crawford County. The Blue’s watershed encompasses portions of seven southern Indiana counties and is defined by the
                      abundant limestone here. This limestone not only forms the caves that feed Blue River, but also supports the diversity of plant life found in the Blue River basin. Rare species such as Short’s Goldenrod, French’s Shooting Star, Appalachian Bugbane and Crested Coralroot Orchids are just a few of the special plants that this landscape supports. The state endangered Allegheny woodrat also lives in the rocks and ridges of the Blue River.</p>
                      
                  </div>
                
            </div>

            

            <div className="location-cards">

                  <Card className="single-locations">
                    <Image src={INresults} alt="Indiana" width="325px"/>
                  </Card>

                  <div className="each-state-locations">
                  <h4 className="fl-h4">Weed Wrangle®-Indiana Pioneer Mother&#39;s Memorial Forest, Orange County, Indiana</h4>
                  <p>The Pioneer Mothers Memorial Forest is an 88-acre oak-hickory forest located in Orange County, Indiana, near Paoli. Identified as a surviving fragment of virgin Central Hardwood forest, a woodland type that largely vanished in the 1800s, it is a National Natural Landmark within the Hoosier National Forest. The old-growth woodlot is characterized by mature stands of white ash, white oak, tuliptree, and black walnut. The United States Forest Service (USFS) has measured several of these trees at 60 feet to the first limb and 50 inches in diameter at breast height. As many of these trees were harvested in pioneer times for firewood or construction timber, the Pioneer Mothers Memorial Forest was a valuable relic by the time it was set aside for conservation in 1944.</p>
                  <p>The Forest Service credits preservation of the mature woodlot to the Cox family. The land was patented in 1816 by Joseph Cox. Unlike most other timbered lands of southern Indiana, the Cox family never harvested the forest during the 124-year duration of family ownership. Upon the death of the last Cox owner in 1940, a preservation effort led to support for purchase of the land by the Forest Service. The USFS continues to manage the parcel for research and recreation purposes. Studies of the forest tract have uncovered a Native American bottomland village area with archeological remains dating to approximately 1380 CE. A 1.3-mile hiking trail is open to the public.</p><br />
                  <span>
                  To Volunteer contact: Michael Wilhite, <a href="mailto:michael.Wilhite@in.nacdnet.net">michael.Wilhite@in.nacdnet.net</a></span>
                  </div>
                
            </div>

            

            <div className="location-cards">

                  <Card className="single-locations">
                    <Image src={Loosestrife} alt="Indiana" width="325px"/>
                  </Card>

                  <div className="each-state-locations">
                  <h4 className="fl-h4">Weed Wrangle®-Indiana Pyramid Mound Park</h4>
                  <p>Come help be a good steward at this county park that is listed on the National Register of Historic Places! We will continue removing the nasty invasive Asian Bush Honeysuckle from the property. This will also be our group&#39;s Weed Wrangle®-Indiana event. Please wear clothes you are willing to work in and bring your own gloves. There will also be refreshments for participants. If you’ve ever wanted to visit Pyramid Mound, now is the time. We’ve cleaned up the area and repaired the road on the property. We will keep the gate closed to keep out unwanted motorized vehicles but foot traffic is welcome. There is a walking trail that leads up the mound, which is believed to be a Native American archaeological site. There’s no entrance fee, but as the sign says take only photos, leave only footprints. Pyramid Mound is located on Ramsey Road between Main and Willow streets. Pyramid Mound is listed on the National Register of Historic Places.</p>
                  <span>To Volunteer contact: Will Drews <a href="mailto:willem.Drews@in.nacdnet.net">willem.Drews@in.nacdnet.net</a></span>
                      
                  </div>
                
            </div>

            <a className="join-link-2" href={Host} download="HostInformation">Sign up to host a Weed Wrangle event in your city!</a>
              
        </div>
    </div>
  )
}


export default Indiana;