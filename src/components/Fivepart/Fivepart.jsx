import React from 'react'
import logo from '../../../images/one.png'

export const Fivepart = () => {
  return (
    <div className='max-conatiner grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-2 mt-16 '>
       

    <div className='ms-28'>
    <img src={logo} alt="Description" className="mx-auto h-auto w-2/3 lg:w-1/2 xl:w-2/3  md:w-1/2 lg:w-1/2 xl:w-1/2 mt-4" /> 
    </div>

    <div className='mt-6'>
<h1 className='text-5xl w-2/3 font-bold'>Enhance photos and videos using photo editor tools</h1>
<p className='w-2/3 mt-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, iusto esse unde temporibus sunt minus facere laboriosam fugiat sequi tenetur magnam debitis? Numquam vero consequuntur enim tempore, repellat est rem, dolorem quae quidem eius at, ipsa ipsum natus eos sunt voluptate expedita delectus optio ipsam repellendus impedit. Quam accusantium voluptas repellendus, nulla eos possimus architecto, similique vero amet, dolorum atque corrupti! Iusto nesciunt id veritatis unde quaerat atque quod. Quo saepe quaerat perspiciatis labore natus possimus id ipsum placeat iure?.</p>
<button className="bg-black text-white h-11 w-32 rounded mt-4">Join Wishlist</button>
</div>

</div>
  )
}
