import React from 'react'

import './About.css'

import Glen from './GlenLeven.jpg'
import Ladies from './IMG_1028.JPG'
import Image from './IMG_129.jpg'

const About = () =>{
  return ( 
    <div>
    <h1>ABOUT US</h1>
    <div className="images">
      <img src={Glen} alt="Glen Leven" width="500px"/>
      <img src={Ladies} alt="Ladies" width="444.5px" className="middle-img"/>
      <img src={Image} alt="Weed Wrangle Sign" width="500px"/>
    </div>

    <div className="about-para">
        <h3>The Garden Club of America</h3>
          <p className="about-para">The purpose of The Garden Club of America is to stimulate the knowledge and love of gardening, to share the advantages of association by means of educational meetings, conferences, correspondence and publications, and to restore, improve and protect the quality of the environment through educational programs and action in the fields of conservation and civic improvement.</p>

        <h3>Partners for Plants</h3>

          <p className="about-para">Partners for Plants is a joint program of The Garden Club of America's Conservation and Horticulture Committees to monitor and conserve rare plants, restore native habitats and remove invasive weeds on federal, state and local public lands. Partners for Plants volunteers have partnered with land agencies to conserve a variety of natural open spaces throughout the United States. Since the program's beginning in 1992, there have been over 475 projects nationwide.</p>

          <p className="about-para">Coordinated by a GCA member, each Partners for Plants project is as unique as the group undertaking the task. Volunteers work with professional botanists and land managers who supervise activities and share their knowledge and expertise. Projects can involve inventorying, mapping, monitoring, propagating, and transplanting endangered plants. Requiring a time commitment ranging from days to weeks or even years, each project serves as a catalyst for accomplishing important endangered plant work that in many cases could not have been accomplished otherwise.</p>

        <h3>The Garden Club of Nashville</h3>
          <p className="about-para">The The Garden Club of Nashville, organized April 30, 1928, became a member of The Garden Club of America in 1932. The object is to promote interest in gardens, their design, culture and management, and to cooperate in the protection of wild flowers, native plants, trees, birds and in the interest of civic afairs. As a member club of The Garden Club of America, it is also our purpose to cooperate with the goals of The Garden Club of America.</p>
              
    </div>

    </div>
  )
}


export default About;