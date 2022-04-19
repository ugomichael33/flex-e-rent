import React from 'react'
import engine from '../components/assets/engine.svg'
import cushion from '../components//assets/cushion.svg'
import assessment from '../components/assets/assessment.svg'
import second from '../components/assets/second.svg'
import list from '../components/assets/list.svg'


function Started2() {
  return (
    <div className='w-full mx-auto h-[1000px] lg:h-[2500px]'>
           <div className='body-container w-full h-[620px] lg:h-[1000px] lg:mt-40'>
            <h3 className='body-title ml-10 pt-5'>How to get started</h3>
            <div className='started-grid grid grid-cols-2 gap-3 lg:grid-cols-4'>
                <div className=''>
                  <img className='w-16 h-16 ml-4 lg:w-[100px] lg:h-[100px] lg:mb-10' src={engine} alt='' />
                  <h6 className='title ml-6  mt-3'>Send in a request</h6>
                  <p className='pink-section ml-6 mt-4'>Tell us about your property, we’ll crunch the numbers and send a personalized offer that optimizes your rental income. Your work is done -- leave the rest to us.</p>
                </div>
                <div>
                  <img className='w-16 h-16 ml-4 lg:w-[100px] lg:h-[100px] lg:mb-10' src={assessment} alt='' />
                  <h6 className='title ml-2 mt-3'>Schedule assessment</h6>
                  <p className='pink-section ml-2 mt-4'>We’ll reach out to answer any questions and schedule an assessment to finalize your offer.</p>
                </div>
                <div>
                  <img className='w-16 h-16 ml-4 lg:w-[100px] lg:h-[100px] lg:mb-10' src={cushion} alt='' />
                  <h6 className='title ml-6 mt-3'>We design & furnish your space</h6>
                  <p className='pink-section ml-6 mt-4'>Our design team equips your unit with premium furniture, equipment, and accessories needed to make your property a perfect fit for our highly-screened residents.</p>
                </div>
                <div>
                  <img className='w-16 h-16 ml-4 lg:w-[100px] lg:h-[100px] lg:mb-10' src={list} alt='' />
                  <h6 className='title ml-6 mt-3'>List  property in the marketplace</h6>
                  <p className='pink-section ml-6 mt-4'>We execute our professional proprietary leasing process and show your property 24/7 days a week</p>
                </div>
            </div>
            <div className='started-end mx-auto w-80 h-20 bg-[#FFFD5F] mt-8 rounded-2xl'>
                <div className='relative'>
                  <p className='main-tag text mt-28' id='tag'>Learn how to maximize your rental income</p>
                  <button className='main-button w-32 h-8 bg-[#000000] absolute mx-auto' id='button'>Get in touch</button>
                </div>
            </div>
            <div className='mt-10 w-full relative'>
              <div className='cover absolute'></div>
              <img className='started2-img lg:mt-40' src={second} alt='' />
            </div>
          </div>
          
    </div>
  )
}

export default Started2