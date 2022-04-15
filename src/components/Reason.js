import React from 'react'
import home from './assets/home.png'

function Reason() {
  return (
    <div className='w-full mx-auto'>
          <div>
            <h2 className='main-head text-xl ml-5 mt-16 w-80'>Why choose Flex-e-rent?</h2>
            <p className='section ml-5 w-80'>Urban + Safe + Comfortable + Move-in-ready homes.</p>
          </div>
          <div className='reason ml-5 mt-5 grid grid-cols-2 gap-3 lg:grid-cols-3'>
            <div>
              <img className='grid-image w-6 h-6' src={home} alt='' />
              <h3 className='grid-title mt-3'>Proximity to workspace.</h3>
              <p className='grid-section'>A wide selection of sanitized living spaces that are closer to your workspace for hassle-free living.</p>
            </div>
            <div>
              <img className='grid-image w-6 h-6 ' src={home} alt='' />
              <h3 className='grid-title mt-3'>Giving back</h3>
              <p className='grid-section'>Every time you pay rent, Flex+E+Rent buys a meal for someone in need.</p>
            </div>
            <div>
              <img className='grid-image w-6 h-6 mt-5 lg:mt-0' src={home} alt='' />
              <h3 className='grid-title mt-3'>Security</h3>
              <p className='grid-section'>Enjoy high security in any of our homes. You are safe under our watch.</p>
            </div>
            <div>
              <img className='grid-image w-6 h-6 mt-4' src={home} alt='' />
              <h3 className='grid-title mt-3'>Value-Added Services</h3>
              <p className='grid-section'>Save time and energy for activities you care about.  Sign up for food services, laundry, and additional housecleaning.</p>
            </div>
            <div>
              <img className='grid-image w-6 h-6 mt-5' src={home} alt='' />
              <h3 className='grid-title mt-3'>Rent rewards</h3>
              <p className='grid-section'>Receive Flex Coins every rent day to spend on unique rewards.</p>
            </div>
            <div>
              <img className='grid-image w-6 h-6 mt-5' src={home} alt='' />
              <h3 className='grid-title mt-3'>Free credit building</h3>
              <p className='grid-section'>Our free credit reporting engine submits your on-time rent payments to our credit bureau partner</p>
            </div>
            <div>
              <img className='grid-image w-6 h-6 mt-5' src={home} alt='' />
              <h3 className='grid-title mt-3'>Co-sharing option</h3>
              <p className='grid-section'>Choose between our private spaces, or living in affordable shared spaces with verified housemates.</p>
            </div>
            <div>
              <img className='grid-image w-6 h-6 mt-5' src={home} alt='' />
              <h3 className='grid-title mt-3'>Virtual inspection</h3>
              <p className='grid-section'>Save time and emissions by taking a 3D virtual tour from the comfort of your couch anywhere.</p>
            </div>
            <div>
              <img className='grid-image w-6 h-6 mt-5' src={home} alt='' />
              <h3 className='grid-title mt-3'>Flexible Payment</h3>
              <p className='grid-section'>Subscribe to any of our flexible payment plans & pay your rent with ease.</p>
            </div> 
          </div>
    </div>
  )
}

export default Reason