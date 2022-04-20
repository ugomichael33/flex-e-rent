import React from 'react'

function CarouselItems2({carouselItem}) {
     const { img, title, content } = carouselItem

  return (
     <div className='carousel-item w-[300px] h-[250px] bg-[#F7F8FA] mx-auto mt-5 flex justify-between rounded-xl lg:mt-32'>
        <div className='w-60 mt-4'>
            <div className='w-[50px] h-[50px] rounded-3xl ml-3'><img src={img} /></div>
        </div>
        <div className='mt-4'>
            <h8 className='carousel-title'>
                {title}
            </h8>
            <p className='carousel-section mt-4'>
                {content}
            </p>
        </div>
    </div>
  )
}

export default CarouselItems2