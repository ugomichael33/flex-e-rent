import React from 'react'
import hero2 from '../components/assets/hero2.svg'

function HomePage() {
  return (
     <div className='w-full mx-auto'>
       <div className='relative w-full'>
            <div className='h-[60px] lg:h-[116px]'></div>
            <h4 className='hero-title text-base absolute'>Maximize your rental income + let us handle the rest</h4>
            <h6 className='hero-small absolute'>Partner with us and we'll do the heavy lifting. Get your property leased and earn monthly guaranteed rent</h6>
            <button className='hero-button absolute w-24 h-8 bg-white'>Get Started for Free</button>
            <div className='hero-cover ml-[210px] mt-24'></div>
            <img className='w-full object-cover object-center mx-auto ' src={hero2} alt='' />
        </div> 
    </div>
  )
}

export default HomePage