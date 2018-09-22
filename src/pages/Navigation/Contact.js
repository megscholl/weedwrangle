import React from 'react'
import Footer from '../Footer.js'
import '../Footer.css'
import './About.css'

import Glen from './glen5.jpg'
import Owls from './owlshill.jpg'
import Zoo from './zoo.jpeg'


const Contact = () =>{
  return ( 
    
    <div>
    <h1>CONTACT</h1>


    <div className="images">
      <img src={Glen} alt="Glen Leven" width="500px"/>
      <img src={Owls} alt="Ladies" width="444.5px"/>
      <img src={Zoo} alt="Weed Wrangle Sign" width="500px"/>
    </div>



    <Footer />
    </div>
  )
}


export default Contact;