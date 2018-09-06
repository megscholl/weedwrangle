import React from 'react'
import '../App.css';
import Nav from './Nav.js'
import Home from './Home.js'
import Footer from './Footer.js'

const Main = () =>{
  return ( 
    <div className="App">
      
      <Nav />
      <Home />
      <Footer />

   </div>
  )
}


export default Main;