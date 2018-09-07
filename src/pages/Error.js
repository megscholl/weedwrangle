import React from 'react'
import Error404 from '../images/404.gif'
import './Error.css'

const Error = () =>{
  return ( 
    <div className="error-page">
      <img src={Error404} alt="404 gif page not found" className="error-404"/>
    </div>
  )
}


export default Error;