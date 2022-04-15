import React from 'react'
import lady from './assets/lady.png'  

function Furnished() {
  return (
    <div>
        <div>
            <div>
              <h2 className='main-head text-xl ml-5 mt-14 w-80'>An unfurnished apartment can cost you nearly 45% of total cost of rent in upfront expenses</h2>
            </div>
            <div className='w-full mx-auto'>
              <div className='main-started'>
                <div>
                  <h2 className='main-head text-xl ml-5 mt-16 w-80 lg:w-10' id='main-target'>Furnished living re-imagined</h2>
                  <p className='body-section ml-5 w-80' id='body-target'>Rent a furnished long-term rental at great rates with the option to purchase the 
                    furniture at any point in time if you decide to do so - the longer you stay, the 
                    lower the purchase price.
                  </p> 
                  <p className='body-section ml-5 w-80' id='body-point'>Discover the ease of having a turnkey home ready for you tomorrow
                    Live asset-light, so you're move-in (& move-out) ready at a moment/’s notice.
                  </p>
                  <p className='body-section ml-5 w-80' id='body-track'>Enjoy month-to-month flexibility & ability to extend lease as needed.
                    Live in a new city/neighborhood like never before: move between buildings & neighborhoods 
                    whenever you need a change
                  </p>
                  <button className='main-button w-32 h-8 bg-[#000000] mt-2 ml-5 lg:ml-[200px] lg:mt-40' id='furnished-button'>Get Started</button>
                </div>
                <div className='main-image w-80 mx-auto mt-5 lg:mt-16'>
                  <img id='main-img' src={lady} alt='' />
                </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Furnished