import React from 'react'
import logoImg from '../../../images/logo.png'
import logoImg1 from '../../../images/Frame.png'

export const Footer = () => {
  return (
    <div className='max-container grid grid-cols-1   md:grid-cols-4 lg:grid-cols-4 mb-4 mt-16'>

        <div>
        <img src={logoImg} alt="Description" className="w-28 mt-1.5 md:mt-0 md:ml-32" />
        <img src={logoImg1} alt="Description" className="w-28 mt-1.5 md:mt-0 md:ml-32 mt-16" />
        <p className='text-xs ms-16'>Copyright And fetchtech.All rights reserved</p>
        </div>

        <div className='ms-32'>
    <p className='ms-16 font-bold'>Products</p>
    <p className='text-xs ms-16'>Background remover</p>
    <p className='text-xs ms-16' >All background Removal</p>
<p className='text-xs ms-16'>All prouct phtoto geenraator</p>
<p className='text-xs ms-16'>Photo Editing tackle</p>
<p className='text-xs ms-16' >All Video geenrator</p>
<p className='text-xs ms-16'>Video geenrator</p>
<p className='text-xs ms-16'>Email support</p>
<p className='text-xs ms-16'>All background iamges</p>
        </div>
        <div className='ms-32'>
   
<p className='text-xs ms-16'>Photo Editing tackle</p>
<p className='text-xs ms-16' >All Video geenrator</p>
<p className='text-xs ms-16'>Video geenrator</p>
<p className='text-xs ms-16'>Email support</p>
<p className='text-xs ms-16'>All background iamges</p>
        </div>
        <div className='ms-32'>
    <p className='ms-16 font-bold'>Support</p>
    <p className='text-xs ms-16'>Background remover</p>
    <p className='text-xs ms-16' >All background Removal</p>
<p className='text-xs ms-16'>All prouct phtoto geenraator</p>
<p className='text-xs ms-16'>Photo Editing tackle</p>
<p className='text-xs ms-16' >All Video geenrator</p>
<p className='text-xs ms-16'>Video geenrator</p>
<p className='text-xs ms-16'>Email support</p>
<p className='text-xs ms-16'>All background iamges</p>
        </div>
        </div>
  )
}
