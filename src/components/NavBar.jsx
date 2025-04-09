import React from 'react'
import navImg from "../assets/nav head.png"
import { GiHamburgerMenu } from "react-icons/gi";



const NavBar = () => {
  return (
    <div className='flex w-full justify-center relative'>
    <div className=' sticky top-0 z-10'>
        <div className='flex justify-between space-x-96'>
            <div className='flex text-black gap-3 '>
            <img src={navImg} alt="navImg" />
            <p className='text-nav py-1'>| Furniture web shop template /</p>
            <p className='text-nav py-1'>  HomePage</p>

            </div>
            <button>^</button>
            <div className=''>
            <GiHamburgerMenu className='text-black'/>
            </div>


        </div>
      
    </div>
    </div>
  )
}

export default NavBar
