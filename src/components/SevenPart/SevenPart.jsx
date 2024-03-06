import React from 'react'
import logo from '../../../images/onee.png'
import logo1 from '../../../images/imgg.png'

export const SevenPart = () => {
  return (
    <div className='max-container mt-28'>
        <h1 className='text-4xl text-center font-bold my-6'>Pricing Plans</h1>
        <p className='text-center mb-16'>Leave up the way you create content</p>

    
    <div className='grid grid-cols-1 mx-auto  md:grid-cols-3 lg:grid-cols-3 mb-4 gap-2'>

        <div className='sevenpart'>
<img className='w-72 mb-5' src={logo}></img>
<p className='common'>All background Removal</p>
<p className='common'>All prouct phtoto geenraator</p>
<p className='common'>Photo Editing tackle</p>
<p className='common'>All Video geenrator</p>
<p className='common'>Video geenrator</p>
<p className='common'>Email support</p>
<p className='common'>All background iamges</p>
<button className='button-seven'>Choose Plan</button>

        </div>
       
        <div className='sevenpart'>
<img className='w-72 mb-5' src={logo1}></img>
<p className='common'>All background Removal</p>
<p className='common'>All prouct phtoto geenraator</p>
<p className='common'>Photo Editing tackle</p>
<p className='common'>All Video geenrator</p>
<p className='common'>Video geenrator</p>
<p className='common'>Email support</p>
<p className='common'>All background iamges</p>
<button className='button-seven'>Choose Plan</button>

        </div>
        <div className='sevenpart'>
<img className='w-72 mb-5' src={logo}></img>
<p className='common'>All background Removal</p>
<p className='common'>All prouct phtoto geenraator</p>
<p className='common'>Photo Editing tackle</p>
<p className='common'>All Video geenrator</p>
<p className='common'>Video geenrator</p>
<p className='common'>Email support</p>
<p className='common'>All background iamges</p>
<button className='button-seven bg-white'>Choose Plan</button>

        </div>
    </div>
    </div>
  )
}
