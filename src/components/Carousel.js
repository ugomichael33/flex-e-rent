import React from 'react'
import { dataDetails } from './data'
import CarouselItem from './CarouselItem'
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md'
import './carousel.css'


function CarouselSlide() { 

  const slideLeft = () => {
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 300
  }

  const slideRight = () => {
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 300
  }

  return (
    <div className='carousel-container'>
      <div className='carousel'>
        <MdOutlineChevronLeft size={40} className='slider-icon left' onClick={()=>slideLeft()}/>
          <div id='slider'>
              {
                  dataDetails.map((carouselItem, index) => {
                      return (
                        <div className='slider-card'>
                          <CarouselItem carouselItem={carouselItem} key={index}/>
                        </div>
                      )
                  })
              }
          </div>
        <MdOutlineChevronRight size={40} className='slider-icon right' onClick={()=>slideRight()}/>
      </div> 
    </div>
  )
}

export default CarouselSlide