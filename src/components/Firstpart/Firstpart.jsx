import React from 'react'
import logo from '../../../images/download.jpg'

export const Firstpart = () => {
  return (
<div className="max-container flex flex-wrap justify-center my-10">
  <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mt-4'>
   
      <h1 className='text-6xl'>AI image and Video Generator for e-commerce Merchants</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nisi suscipit nesciunt quam? Excepturi ex, laudantium obcaecati sint dolores temporibus?</p>
      <button className="bg-black text-white h-11 w-32 rounded mt-4">Join Wishlist</button>
    
  </div>
  <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
   
      <img src={logo} alt="Description" className="mx-auto h-auto w-2/3 lg:w-1/2 xl:w-2/3  md:w-1/2 lg:w-1/2 xl:w-1/2 mt-4" /> 
   
  </div>
</div>




    
  )
}
