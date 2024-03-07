
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../../../images/four.png'
export const Fourthpart = () => {
  const [isMovingRight, setIsMovingRight] = useState(true);
   // Variants for animation
  const containerVariants = {
    start: {
      y: isMovingRight ? "80%" : "-20%",
    },
    end: {
      y: isMovingRight ? "-3%" : "50%",
    },
  };

  // Animation transition
  const transition = {
    duration: 4, // Adjust duration as needed
    loop: Infinity, // Loop infinitely
    ease: "linear", // Linear easing
  };

  return (
    
     <div className='max-container grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 mt-16 '>

<div className='w-full md:w-2/3'>
<h1 className='text-5xl font-bold mb-12 '>Create product videos in a few click</h1>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, eos consequatur! Repudiandae, quia ea. Facilis veritatis hic deserunt provident totam magni nostrum voluptatibus expedita dolor perspiciatis maxime mollitia explicabo rem distinctio, reprehenderit accusantium eum cumque dolore sunt, nisi consectetur. Necessitatibus numquam eveniet minima quaerat, repudiandae consequatur laudantium consequuntur! Dolorum dolore veritatis delectus</p>
<button className="bg-black text-white h-11 w-32 rounded mt-4">Join Wishlist</button>
    
        </div>
        <div className=''>
     
        <motion.img
          src={logo}
          alt="Description"
          className="fourth-img mx-auto h-auto w-2/3 lg:w-1/2 xl:w-2/3  md:w-1/2 lg:w-1/2 xl:w-1/2 mt-4"
          animate={isMovingRight ? "end" : "start"} // Set animation variant
          variants={containerVariants} // Define animation variants
          transition={transition} // Set animation transition
          onAnimationComplete={() => setIsMovingRight(!isMovingRight)} // Reverse animation on completion
        />

        </div>
      
    </div>
  )
}
