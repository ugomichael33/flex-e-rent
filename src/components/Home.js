import React from 'react'
import hero from './assets/hero.png'

function Home() {
  return (
    <div className='w-full mx-auto'>
       <div className='relative w-full'>
            <div className='h-[60px] lg:h-[116px]'></div>
            <h4 className='hero-title text-base absolute'>Avoid a yearly lease on an unfurnished apartment</h4>
            <h6 className='hero-small absolute'>Give your customers the freedom to split payments. while you get paid in full and upfront.</h6>
            <button className='hero-button absolute w-24 h-8 bg-white'>Get Started for Free</button>
            <div className='hero-cover'></div>
            <img className='w-full object-cover object-center mx-auto ' src={hero} alt='' />
        </div> 
    </div>
  )
}

export default Home