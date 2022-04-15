import React from 'react'
import rectangle from './assets/Rectangle.png'

function Started() {
  return (
    <div className='w-full mx-auto'>
           <div className='body-container w-full h-[520px] mt-10 lg:h-[1000px]'>
            <h3 className='body-title ml-10 pt-5'>Getting Started is simple.</h3>
            <div className='started-grid grid grid-cols-2 gap-3 lg:grid-cols-3'>
                <div className=''>
                  <img className='w-16 h-16 ml-4 lg:w-[150px] lg:h-[150px]' src={rectangle} alt='' />
                  <h6 className='title ml-6'>Find your home</h6>
                  <p className='pink-section ml-6 mt-4'>Browse our bouquet of homes and choose your favorite space. See inside. Take a 3D digital tour. All without leaving your couch.</p>
                </div>
                <div>
                  <img className='w-16 h-16 ml-4 lg:w-[150px] lg:h-[150px]' src={rectangle} alt='' />
                  <h6 className='title ml-2'>Book a space</h6>
                  <p className='pink-section ml-2 mt-4'>Look through our available options and make your preferred selection.</p>
                </div>
                <div>
                  <img className='w-16 h-16 ml-4 lg:w-[150px] lg:h-[150px]' src={rectangle} alt='' />
                  <h6 className='title ml-6'>Pay and move-in</h6>
                  <p className='pink-section ml-6 mt-4'>Make payment and prepare to move into your new home</p>
                </div>
            </div>
            <div className='started-end mx-auto w-80 h-20 bg-[#FFFD5F] mt-8 rounded-2xl'>
                <div className='relative'>
                  <p className='main-tag text' id='tag'>Let Us Help You Save Money + Save Time + Stay Flexible</p>
                  <button className='main-button w-32 h-8 bg-[#000000] absolute mx-auto' id='button'>Get early access</button>
                </div>
            </div>
          </div>
    </div>
  )
}

export default Started