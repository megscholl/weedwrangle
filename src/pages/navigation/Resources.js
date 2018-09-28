import React from 'react'
import './Resources.css'

const Resources = () =>{
  return ( 
    <div>

        <h1>Educational Resources & FAQ</h1>
        
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
                <li className="ul-li">What are some common invasive plants?</li>
                <li className="ul-li">What are some common invasive plants?</li>
            </ul>

        </div>
    </div>
  )
}


export default Resources;