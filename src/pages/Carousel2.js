import React from 'react'
import { dataDetails2 } from './carouselData'
import CarouselItems2 from './CarouselItems2'
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md'
import './carousel2.css'

function Carousel2() {

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
                  dataDetails2.map((carouselItem, index) => {
                      return (
                        <div className='slider-card'>
                          <CarouselItems2 carouselItem={carouselItem} key={index}/>
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

export default Carousel2