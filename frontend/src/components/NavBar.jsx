import React from 'react'
import { assets } from '../assets/assets'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
 <div className="flex items-center justify-between pb-[5%]">
 
  <img src={assets.logo} alt="Logo" className="w-[13%]" />


   
  <ul className="hidden flex-1  lg:flex justify-center gap-10 items-center">
    <li>
      <NavLink to="/">
      Home
       <hr className='w-6 border-none h-[1.5px] bg-gray-700  hidden' />
      </NavLink>
     
    </li>
    <li>
      <NavLink to="/howitworks">How it Works
       <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
       </NavLink>
      
    </li>
    <li>
      <NavLink to="/about">About Us
      <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' /></NavLink>
       
    </li>
    <li>
      <NavLink to="/contact">Contact Us
           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' /></NavLink>
  
  
    </li>
  </ul>



  
  <div className="hidden md:flex gap-4">
    <button className=" flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-blue-400 transition bg-[#3F91C1] text-white">
      <img src={assets.hand} alt="" className="w-5 h-5" />
      Get the App
    </button>
    <button className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-blue-400 transition">
      <img src={assets.login} alt="" className="w-5 h-5" />
      Log In
    </button>
  </div>
</div>


  )
}

export default NavBar