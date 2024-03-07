// components/Firstpart.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../../images/download.jpg';

export const Firstpart = () => {
  const [isMovingRight, setIsMovingRight] = useState(true);

  const notify = () => toast("You have joined!");

  // Variants for animation
  const containerVariants = {
    start: {
      x: isMovingRight ? "80%" : "-20%",
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
    <div className="max-container flex flex-wrap justify-center my-10">
      <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mt-4'>
        <h1 className='text-6xl'>AI image and Video Generator for e-commerce Merchants</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nisi suscipit nesciunt quam? Excepturi ex, laudantium obcaecati sint dolores temporibus?</p>
        <button onClick={notify} className="bg-black text-white h-11 w-32 rounded mt-4">Join Wishlist</button>
        <ToastContainer />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
        <motion.img
          src={logo}
          alt="Description"
          className="mx-auto h-auto w-2/3 lg:w-1/2 xl:w-2/3  md:w-1/2 lg:w-1/2 xl:w-1/2 mt-4"
          animate={isMovingRight ? "end" : "start"} // Set animation variant
          variants={containerVariants} // Define animation variants
          transition={transition} // Set animation transition
          onAnimationComplete={() => setIsMovingRight(!isMovingRight)} // Reverse animation on completion
        />
      </div>
    </div>
  );
};
