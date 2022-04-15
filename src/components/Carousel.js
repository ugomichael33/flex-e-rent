import React from 'react'
import { dataDetails } from './data'



function CarouselSlide() {
    console.log({dataDetails})


    
  return (
    <div>
        
            {
                dataDetails.map((carouselItem, index) => {
                    return (
                        <CarouselItem carouselItem={carouselItem} key={index}/>
                    )
                })
            }
       
    </div>
  )
}

export default CarouselSlide