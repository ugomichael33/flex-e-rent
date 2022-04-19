import React from 'react'
import renovated from '../components/assets/renovated.svg'
import studio from '../components/assets/studio.svg'

function Apartments() {
  return (
    <div className='w-full mx-auto'>
        <h2 className='main-head text-xl ml-5 mt-8 w-80'>Does your property qualify?</h2>
        <h5 className='minor ml-5 w-72 mt-3' id='apartment' >We’re looking to bring on top-quality, unfurnished apartments or buildings in the areas named below that fit the following criteria </h5>
        <div className='flex flex-col mt-5 lg:grid lg:grid-cols-2 lg:gap-1'>
            <div className='flex flex-col'>
                <img className='apart w-[320px] h-[250px]  mx-auto lg:w-[675px] lg:h-[500px]'  src={renovated} alt='' />
                <p className='apartment-tag  mx-auto '>Newly-built or recently renovated apartment</p>
            </div>
            <div className='flex flex-col'>
                <img className='apart mt-5 w-[320px] h-[250px]  mx-auto  lg:w-[700px] lg:h-[500px]' src={studio} alt='' />
                <p className='apartment-tag  mx-auto '>A studio to three-bedroom apartment</p>
            </div>
        </div>
    </div>
  )
}

export default Apartments