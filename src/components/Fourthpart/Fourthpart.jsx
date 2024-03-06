import React from 'react'
import logo from '../../../images/four.png'
export const Fourthpart = () => {
  return (
    
     <div className='max-container grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 mt-16 '>

<div className='w-2/3'>
<h1 className='text-5xl font-bold mb-12 '>Create product videos in a few click</h1>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, eos consequatur! Repudiandae, quia ea. Facilis veritatis hic deserunt provident totam magni nostrum voluptatibus expedita dolor perspiciatis maxime mollitia explicabo rem distinctio, reprehenderit accusantium eum cumque dolore sunt, nisi consectetur. Necessitatibus numquam eveniet minima quaerat, repudiandae consequatur laudantium consequuntur! Dolorum dolore veritatis delectus</p>
<button className="bg-black text-white h-11 w-32 rounded mt-4">Join Wishlist</button>
    
        </div>
        <div>
        <img src={logo}  className='fourth-img'></img>

        </div>
      
    </div>
  )
}
