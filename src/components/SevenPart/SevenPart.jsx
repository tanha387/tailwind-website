import React from 'react'
import logo from '../../../images/onee.png'
import logo1 from '../../../images/imgg.png'
import { motion } from 'framer-motion';

export const SevenPart = () => {
  return (
        <div class='max-container mt-28 ms-16'>
        <h1 class='text-4xl text-center font-bold my-6'>Pricing Plans</h1>
        <p class='text-center mb-16'>Leave up the way you create content</p>
    
        <div class='grid ms-2 justify-center md:grid-cols-3 lg:grid-cols-3 gap-2 '>
        <motion.div
            className='sevenpart' // Use "className" instead of "class" in JSX
            animate={{ scale: 1.1 }} // Animate scale to 1.2
            transition={{ duration: 7 }} // Set duration to 4 seconds
            drag="y"
            dragConstraints={{ left: -70, right: 80 }}
        >
            <img className='w-72 mb-5' src={logo} alt='Logo' />
            <p className='common'>All background Removal</p>
            <p className='common'>All product photo generator</p>
            <p className='common'>Photo Editing tackle</p>
            <p className='common'>All Video generator</p>
            <p className='common'>Video generator</p>
            <p className='common'>Email support</p>
            <p className='common'>All background images</p>
            <button className='button-seven'>Choose Plan</button>
        </motion.div>
        <motion.div
            className='sevenpart' // Use "className" instead of "class" in JSX
            animate={{ scale: 1.1 }} // Animate scale to 1.2
            transition={{ duration: 7}} // Set duration to 4 seconds
            drag="x"
            dragConstraints={{ left: -80, right: 80 }}
        >
        
                <img class='w-72 mb-5' src={logo1} alt='Logo'></img>
                <p class='common'>All background Removal</p>
                <p class='common'>All product photo generator</p>
                <p class='common'>Photo Editing tackle</p>
                <p class='common'>All Video generator</p>
                <p class='common'>Video generator</p>
                <p class='common'>Email support</p>
                <p class='common'>All background images</p>
                <button class='button-seven'>Choose Plan</button>
                </motion.div>
            
                <motion.div
            className='sevenpart' // Use "className" instead of "class" in JSX
            animate={{ scale: 1.1 }} // Animate scale to 1.2
            transition={{ duration: 7}} // Set duration to 4 seconds
            drag="x"
            dragConstraints={{ left: -70, right: 80 }}
        >
                <img class='w-72 mb-5' src={logo} alt='Logo'></img>
                <p class='common'>All background Removal</p>
                <p class='common'>All product photo generator</p>
                <p class='common'>Photo Editing tackle</p>
                <p class='common'>All Video generator</p>
                <p class='common'>Video generator</p>
                <p class='common'>Email support</p>
                <p class='common'>All background images</p>
                <button class='button-seven bg-white'>Choose Plan</button>
            </motion.div>
        </div>
    </div>
    
  )
}
