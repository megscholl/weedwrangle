import React from 'react'
import './About.css'

import Glen from './GlenLeven.jpg'
import Ladies from './IMG_1028.JPG'
import Image from './IMG_129.jpg'


const Press = () =>{
  return ( 
    
    <div>
    <h1>PRESS</h1>

    <div className="images">
      <img src={Glen} alt="Glen Leven" width="500px"/>
      <img src={Ladies} alt="Ladies" width="444.5px" className="middle-img"/>
      <img src={Image} alt="Weed Wrangle Sign" width="500px"/>
    </div>

    </div>
  )
}


export default Press;