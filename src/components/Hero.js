import React from 'react'
import Home from './Home'
import Info from './Info'
import Furnished from './Furnished'
import Inclusive from './Inclusive'
import Reason from './Reason'
import Started from './Started'
import Living from './Living'
import Access from './Access'
import Footer from './Footer'


function Hero() {
  return (
      <div className='mx-auto w-full '>
        <Home />
        <Info />
        <Furnished />
        <Inclusive /> 
        <Reason />
        <Started />
        <Living />
        <Access />
        <Footer />
        
      </div>
  )
}

export default Hero