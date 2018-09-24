import React from 'react'
import Footer from '../Footer.js'
import './states.css'

import Honeysuckle from './honeysuckle.png'
import Ivy from './ivy.png'

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



        </div>
      
      <Footer className="tn-footer"/>

    </div>
  )
}


export default Tennessee;