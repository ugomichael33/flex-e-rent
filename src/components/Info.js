import React from 'react'
import CarouselSlide from './Carousel'

function Info() {
  return (
    <div className='w-full mx-auto'>
        <div className='w-full mx-auto'>
            <h2 className='main-head text-xl ml-5 mt-8 w-80'>Looking for smart savings or discounts on rent?</h2>
            <h5 className='minor ml-5 w-72 mt-5'>Improve your financial life by saving money on rent for your long-term stay. Say goodbye to expensive upfront expenses, and save 5% off on rent from the 4th month onwards on long-term stays</h5>
        </div>
        <CarouselSlide />
        <div className='main-access mx-auto w-80 h-20 bg-[#FFFD5F] mt-8 rounded-2xl lg:mt-32 w-full'>
          <div className='relative'>
            <p className='main-tag '>Let Us Help You Save Money + Save Time + Stay Flexible</p>
            <button className='main-button w-32 h-8 bg-[#000000] absolute mx-auto' id='info-button'>Get early access</button>
          </div>
        </div>
    </div>
  )
}

export default Info