import React from 'react'
import Footer from '../Footer.js'
import '../Footer.css'
import './About.css'

import Glen from './GlenLeven.jpg'
import Ladies from './IMG_1028.JPG'
import Image from './IMG_129.jpg'


const Contact = () =>{
  return ( 
    
    <div>
    <h1>CONTACT</h1>


    <div className="images">
      <img src={Glen} alt="Glen Leven" width="500px"/>
      <img src={Ladies} alt="Ladies" width="444.5px" className="middle-img"/>
      <img src={Image} alt="Image" width="500px"/>
    </div>



    <Footer />
    </div>
  )
}


export default Contact;