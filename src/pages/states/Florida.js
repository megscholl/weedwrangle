import React from 'react'
import './state-banners.css'
import './states.css'
import { Card, Image, Button } from 'semantic-ui-react'

// import { Link } from "react-router-dom"

// import Lookout from './tennessee/ww-lm.jpg'
import MuscleShoals from './images/muscle_shoals2.PNG'
import Host from './Project_Info.pdf'


// !!!!!!!!!!!! NEED TO TAKE OUT ALL MUSCLE SHOALS 


const Florida = () =>{
  return ( 
    
    <div>
        <div className="fl"> 

            <div className="fl-section-1">
                <h1 className="banner-pg-1">
                  Florida is full of beautiful, native wildlife.<br/> Join our cause to rid Florida's beautiful lands of exotic and invasive plants. 
                </h1> 



                <Button className="host-btn" href={Host} download="HostInformation">Sign up to host a Weed Wrangle event in your city!</Button>
            </div>



            <h1>Weed Wrangle Events and Locations in Florida</h1>
            <div className="location-cards">

                  <Card className="cards">
                    <Image src={MuscleShoals} alt="Jacksonville, FL" width="325px"/>
                  </Card>

                  <div className="muscle-shoals">
                  <h4 className="fl-h4"> Walter Jones Historical Park</h4>
                  <p>Major William Webb purchased 31.2 acres on the St. Johns River in Mandarin in 1875. He built a home, barn, and 1,000-foot dock extending into the St. Johns River. Major Webb cultivated oranges,  potatoes, tomatoes, cucumbers, strawberries and beans. The farm produce was shipped north on steamships that regularly stopped in Mandarin. Walter Jones, proprietor of the Mandarin Store and Post Office, moved his family to the homestead in the early 1900s and his family members occupied the property until 1992. The City of Jacksonville acquired 10 acres of Major Webb’s original homestead from the descendants of Walter Jones in 1994 for the purpose of creating the city’s first historical park.</p>
                  <p>The Mandarin Museum &amp; Historical Society operates the park facilities under a contract with the city. The park opened to the public in August 2000 and is today home to the Mandarin Museum, the St. Joseph’s Mission Schoolhouse for African-American Children, and other historical structures, including the 1875 Webb Farmhouse, the 1876 barn, the Losco Winery, and the Wheeler Sawmill. Following restoration, the Webb Farmhouse opened for public tours in August 2002. The Mandarin Museum &amp; Historical Society has furnished the house to reflect family life during the late 1890s and early 1900s. Mandarin now is a small section of the City of Jacksonville, Florida, but its natural beauty, parks and historic buildings draw visitors from around the world.</p>
                      
                  </div>
                
            </div>

        </div>
    </div>
  )
}


export default Florida;