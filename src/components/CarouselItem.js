import React from 'react'

function CarouselItem({carouselItem}) {
  const { img, title, content } = carouselItem

  console.log({img})

  return (
    <div className='w-[300px] h-[250px] bg-[#F7F8FA] mx-auto mt-5 flex justify-between rounded-xl lg:mt-32'>
        <div className='w-60 mt-4'>
            <div className='w-[50px] h-[50px] rounded-3xl ml-3'><img src={img} /></div>
        </div>
        <div className='mt-4'>
            <h8 className='carousel-title'>Co-sharing with flexible 
                options and add-ons
            </h8>
            <p className='carousel-section mt-4'>Choose between our private spaces, or living in affordable 
            shared spaces with verified housemates.
            </p>
        </div>
    </div>
  )
}

export default CarouselItem