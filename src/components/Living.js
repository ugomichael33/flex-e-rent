import React from 'react'
import power from './assets/power.svg'
import water from './assets/water.svg'
import gas from './assets/gas.svg'
import dues from './assets/dues.svg'
import clean from './assets/clean.svg'
import security from './assets/security.svg'

import amenities from './assets/amenities.svg'

function Living() {
  return (
    <div className='w-full mx-auto lg:mt-72'>
           <div className='mt-20'>
               <h2 className='main-head text-xl ml-5 mt-16 w-80'>All-Inclusive Bill Living</h2>
                <p className='body-section ml-5 w-80'>Our homes come fully furnished and equipped with handpicked essentials. When you subscribe, 
                You have complete access to these and more benefits than you can imagine. When you arrive, 
                your Spleet home is warm, comfortable, and ready for living.
                </p>
                <div className='grid grid-cols-2 gap-2 lg:ml-[200px] lg:mt-32 lg:grid-cols-4'>
                    <div className='living flex items-center'> 
                        <div><img className='living-img w-[20px] h-[30px] mt-10 ml-4 -mr-3' id='living-image' src={power} /></div>
                        <div>
                            <h5 className='services-head ml-5 mt-6'>Power Supply</h5>
                            <h6 className='services-title ml-5 w-30'>Minimum of 12 hours</h6>
                        </div>
                    </div>
                    <div>
                        <div className='living flex'>
                            <div><img className='living-img w-[50px] h-[50px] mt-5 -mr-3' src={water} /></div>
                            <div>
                                <h5 className='services-head mt-6' >Water</h5>
                                <h6 className='services-title '>24/7 running water </h6>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='living flex'>
                            <div><img className='living-img w-[60px] h-[60px] mt-4 ml-2' src={gas} /></div>
                            <div>
                                <h5 className='services-head ml-2 mt-4' >Gas</h5>
                                <h6 className='services-title ml-2 '>Included in subscription</h6>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='living flex items-center'>
                            <div><img className='living-img w-[20px] h-[30px] mt-8 ml-2 ' id='estate-img' src={dues} /></div>
                            <div>
                                <h5 className='services-head mt-4 ml-4' >Estate Dues</h5>
                                <h6 className='services-title  w-30 ml-4'>Included in subscription</h6>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='living flex items-center'>
                            <div><img className='living-img w-[60px] h-[60px] mt-8 ml-4 -mr-3' src={clean} /></div>
                            <div>
                                <h5 className='services-head ml-5 mt-4' >Cleaning</h5>
                                <h6 className='services-title ml-5 '>Complete space cleaning</h6>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='living flex items-center'>
                            <div><img className='living-img mt-8 -ml-3' src={security} /></div>
                            <div>
                                <h5 className='services-head mt-4 -ml-4' >Security services</h5>
                                <h6 className='services-title -ml-4'>Included in subscription</h6>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='living flex items-center'>
                            <div><img className='living-img lg:mt-8' src={security} /></div>
                            <div>
                                <h5 className='services-head  mt-4' >Waste Management</h5>
                                <h6 className='services-title '>Included in subscription</h6>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='living flex items-center mt-5'>
                            <div><img className='living-img lg:mt-4' id='amenities-img' src={amenities} /></div>
                            <div>
                                <h5 className='services-head ml-2 lg:ml-5' >Amenities</h5>
                                <h6 className='services-title ml-2 lg:ml-5'>Included in subscription</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='main-head text-xl ml-5 mt-16 w-80'>Questions? We have answers.</h2>
                    <div className='question'>
                        <h6 className='question-title ml-5 mt-3 lg:mt-32'>What is Flex-E-Rent?</h6>
                        <p className='question-content ml-5 mt-2'>Flex-E-Rent is an unconventional urban residential rental lifestyle and marketplace 
                            that match demand with a network of all-inclusive furnished apartments for rent across
                            Lagos city with flexible lease terms to live safe, happy, and productive.
                        </p>
                    </div>
                    <div className='question'>
                        <h6 className='question-title ml-5 mt-3'>Who is Flex-E-Rent for?</h6>
                        <p className='question-content ml-5 mt-2'>To bring landlords, renters, and communities closer together by creating a collectively
                            beneficial partnership.
                        </p>
                    </div>
                    <div className='question'>
                        <h6 className='question-title ml-5 mt-3'>What is Flex membership?</h6>
                        <p className='question-content ml-5 mt-2'>Everyone that finds a home through Flex-E-Rent is a Flex Member. Your Flex Membership gives you 
                            access to our payment plans and other services provided by Flex-E-Rent or third-party vendors. 
                            Your membership is valid throughout the time you reside in the home you found through Flex-E-Rent.
                        </p>
                    </div>
                    <div className='question'>
                        <h6 className='question-title ml-5 mt-3'>What are my membership payments?</h6>
                        <p className='question-content ml-5 mt-2'>Your membership is free, excluding your rent and service charge and a booking fee.
                            The booking fees are paid at the start of every new membership period. This fee includes agency and
                            legal fees and a Flex-E-Rent fee that helps us run the platform.
                        </p>
                    </div>
                    <div className='question'>
                        <h6 className='question-title ml-5 mt-3 '>What does my Membership Rent cover?</h6>
                        <p className='question-content ml-5 mt-2'>To bring landlords, renters, and communities closer together by creating a collectively 
                            beneficial partnership.
                        </p>
                    </div>
                    <div className='question ml-5'>
                        <h6 className='question-title mt-3 lg:ml-5'>What does my Membership Rent cover?</h6>
                        <p className='question-content mt-2 lg:ml-5'>Your membership rent cover: </p>
                        <div className='question-content'>
                            <ul className='lg:ml-5'>
                                <li>Your living at the location.</li>
                                <li>LAWMA and refuse disposal fees.</li>
                                <li>Monthly water bill</li>
                                <li>Monthly internet/wifi charges (unless otherwise stated)</li>
                                <li>Monthly electricity charges (unless otherwise stated)</li>
                                <li>VAT and other tax charges.</li>
                                <li>Access to the amenities at your location (unless otherwise stated).</li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>      
    </div>
  )
}

export default Living







