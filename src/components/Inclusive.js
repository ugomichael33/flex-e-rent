import React from 'react'
import gentleman from './assets/gentleman.png'

function Inclusive() {
  return (
    <div className='w-full mx-auto overflow-hidden '>
         <div className='all-inclusive lg:flex '>
              <div className='inclusive-container w-80 mx-auto mt-5 relative'>
                  <div className='hero-cover2 absolute'></div>
                  <img className='inclusive-image' src={gentleman} alt='' />
              </div>
              <div className='main-container'>
                  <h2 className='main-head text-xl ml-5 mt-16 w-80' id='inclusive-item'>
                      All-Inclusive Bill Living
                  </h2>
                  <p className='body-section ml-5 w-80' id='inclusive-section'>
                    When you join Flex+E+Rent membership, you have complete access to fully 
                    furnished and equipped homes with more benefits 
                    than you can think of. Show up, and start living.
                  </p>
                  <button className='main-button w-32 h-8 bg-[#000000] mt-2 ml-5 lg:ml-48' id='inclusive-button'>Learn More</button>
              </div>
          </div>
    </div>
  )
}

export default Inclusive