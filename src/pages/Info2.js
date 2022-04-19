import React from 'react'
import CarouselSlide from '../components/Carousel'

function Info2() {
  return (
     <div className='w-full mx-auto'>
        <div className='w-full mx-auto'>
            <h2 className='main-head text-xl ml-5 mt-8 w-80'>Flex+E+Rent is the perfect tenant. 
                We pay you every month for up to 3 years, guaranteed.
            </h2>
            <h5 className='minor ml-5 w-72 mt-14' id='info-section'>Flex+E+Rent offers an exciting opportunity for owners looking to maximize their rental income while attracting desirable and vetted tenant.</h5>
        </div>
        <CarouselSlide />
        <div className='main-access mx-auto w-80 h-20 bg-[#FFFD5F] mt-8 rounded-2xl lg:mt-32 w-full'>
          <div className='relative'>
            <p className='main-tag '>Looking to rent out your unfurnished property?</p>
            <button className='main-button w-32 h-8 bg-[#000000] absolute mx-auto' id='info-button'>Get in touch</button>
          </div>
        </div>
    </div>
  )
}

export default Info2