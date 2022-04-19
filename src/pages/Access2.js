import React from 'react'

function Access2() {
  return (
    <div className='w-full mx-auto'>
            <div>
              <h2 className='main-head text-xl ml-5 mt-16 w-80 lg:mb-24'>Get early Access</h2>
              <div className='grid grid-cols-1 gap-4 ml-5 mt-5 lg:grid-cols-2'>
                <input className='access-input' placeholder='Firstname'/>
                <input className='access-input' placeholder='Lastname'/>
                <input className='access-input' placeholder='Email'/>
                <input className='access-input' placeholder='Phone No'/>
              </div>
              <p className='input-section mx-auto mt-4'>By submitting this form, I agree to receive emails, telephone calls, promotional offers, marketing materials and other communications from Flexerent
(including its subsidiaries, affiliates, agents, and assigns) (“Flexerent”) about its products and services. I understand that I can withdraw my authorization at any time. 
I also understand that my information will not be shared with any other parties outside of Flexerent.
              </p>
              <button className='access-button w-32 h-8 bg-[#000000] text-white text-sm rounded-lg ml-28 font-[Sen] mt-3'>Submit</button>
            </div>
    </div>
  )
}

export default Access2