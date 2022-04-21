import React from 'react'
import { AiOutlineClose } from "react-icons/ai"
import { Link } from 'react-router-dom'

function Sidebar({ handleToggle }) {
   

  return (
    <div>
         <div className='w-3/4 h-full bg-white fixed z-20'>
            <div>
                <AiOutlineClose onClick={handleToggle} className='mt-3 ml-4 cursor-pointer text-lg'/>
            </div>
            <ul className='ml-7 py-10 ease-linear duration-[10000ms] ' onClick={handleToggle}>
                <li className='my-2 text-lg font-bold'>How it works</li>
                <li className='text-lg font-bold'>About us</li>
                <Link to='/landlords'><li className='my-2 text-lg font-bold'>Landlords</li></Link>
            </ul>   
        </div>
    </div>
  )
}

export default Sidebar