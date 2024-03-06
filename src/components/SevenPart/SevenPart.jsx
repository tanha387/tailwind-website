import React from 'react'
import logo from '../../../images/onee.png'
import logo1 from '../../../images/imgg.png'

export const SevenPart = () => {
  return (
        <div class='max-container mt-28'>
        <h1 class='text-4xl text-center font-bold my-6'>Pricing Plans</h1>
        <p class='text-center mb-16'>Leave up the way you create content</p>
    
        <div class='grid ms-2 justify-center md:grid-cols-3 lg:grid-cols-3 gap-2 mx-auto '>
            <div class='sevenpart'>
                <img class='w-72 mb-5' src={logo} alt='Logo'></img>
                <p class='common'>All background Removal</p>
                <p class='common'>All product photo generator</p>
                <p class='common'>Photo Editing tackle</p>
                <p class='common'>All Video generator</p>
                <p class='common'>Video generator</p>
                <p class='common'>Email support</p>
                <p class='common'>All background images</p>
                <button class='button-seven'>Choose Plan</button>
            </div>
            
            <div class='sevenpart'>
                <img class='w-72 mb-5' src={logo1} alt='Logo'></img>
                <p class='common'>All background Removal</p>
                <p class='common'>All product photo generator</p>
                <p class='common'>Photo Editing tackle</p>
                <p class='common'>All Video generator</p>
                <p class='common'>Video generator</p>
                <p class='common'>Email support</p>
                <p class='common'>All background images</p>
                <button class='button-seven'>Choose Plan</button>
            </div>
            
            <div class='sevenpart'>
                <img class='w-72 mb-5' src={logo} alt='Logo'></img>
                <p class='common'>All background Removal</p>
                <p class='common'>All product photo generator</p>
                <p class='common'>Photo Editing tackle</p>
                <p class='common'>All Video generator</p>
                <p class='common'>Video generator</p>
                <p class='common'>Email support</p>
                <p class='common'>All background images</p>
                <button class='button-seven bg-white'>Choose Plan</button>
            </div>
        </div>
    </div>
    
  )
}
