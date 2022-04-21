import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import flex from './assets/FlexErent.png'
import arc from './assets/arc.png'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'


function Navbar() {
     const [open, setOpen] = useState(false)

    const handleToggle = () => {
        setOpen(!open)
    }

  return (
    <div>
         {open ?
      (
        <Sidebar handleToggle={handleToggle}/>
      ) : 
      null
      }
        <div className='nav-bar flex items-center fixed z-10 justify-between'>
            <div className='flex ml-4'>
                <FaBars onClick={handleToggle} className='lg:hidden'/>
                <Link to='/'>
                    <div className='nav-container ml-5 '>
                        <img className='nav-image w-28' src={flex} alt='' />
                        <img className='w-10 mx-auto lg:w-[70px] ' src={arc} alt='' />
                    </div>
                </Link>
            </div>
            <div className='nav-right flex items-center justify-around lg:w-[1200px]'>
                <div className='nav-items'>
                    <ul className='flex justify-around lg:w-[700px]'>
                        <li>How it works</li>
                        <li>About us</li>
                        <Link to='/landlords'><li>Landlords</li></Link>
                    </ul>
                </div>
                <button className='nav-button w-20 h-8 bg-[#000000] text-white mr-4'>Get early Access</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar