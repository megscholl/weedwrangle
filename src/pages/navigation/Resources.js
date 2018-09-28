import React from 'react'
import './Resources.css'

import WW from './IMG_129.jpg'

const Resources = () =>{
  return ( 
    <div>

        <h1>Educational Resources & FAQ</h1>

        <img src={WW} alt="Images" width="40%" className="resource-img"/>
        
        <div  className="FAQ-page">
            <ul>
                <li className="ul-li">What are some common invasive plants?</li>
                    <ul className="li-li">
                        <li>Japanese Honeysuckle</li>
                        <li>Chinese Privet</li>
                        <li>Purple Loosestrife</li>
                        <li>Japanese Barberry</li>
                        <li>Common Ivy / English Ivy</li>
                        <li>Kudzu</li>
                    </ul>
                <li className="ul-li">Where can I get involved?</li>
                    <ul className="li-li">
                        <li>Florida</li>
                        <li>Indiana</li>
                        <li>Louisiana</li>
                        <li>Mississippi</li>
                        <li>Oregon</li>
                        <li>Tennessee</li>
                        <li>Texas</li>
                        <li>Virginia</li>
                    </ul>
                <li className="ul-li">What are best practices for getting rid of invasive plants?</li>
                    <p className="li-p">The best way to get rid of invasive plants is in the late winter to early spring, when the native plants have not quite bloomed yet. You will notice a lot of green invasive plants blooming; <strong>the best practice for ridding your space of invasive plants is pulling or digging it out by the roots.</strong> This way, it is more difficult for them to grow back.</p>
            </ul>

        </div>
    </div>
  )
}


export default Resources;