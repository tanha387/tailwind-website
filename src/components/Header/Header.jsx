import React from 'react'
import { NavLink } from 'react-router-dom'
import logoImg from '../../../images/logo.png'
export const Header = () => {
  return (
<div class="bg-custom-color p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-items-center gap-4 ">
    <div className="logo ">
      <img src={logoImg} alt="Description" className="w-28 mt-1.5 md:mt-0 md:ml-32" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5  lg:grid-cols-2">
  <NavLink class="ms-4 " to="/">Home</NavLink>
  <NavLink class="md:ms-5 sm:ms-0 " to="/about">About</NavLink>
</div>


    <div className="navbar-buttons">
      <button className="bg-blue-500 text-white h-11 w-32 rounded">Sign In</button>
    </div>
  </div>
  
  
  
  )
}
