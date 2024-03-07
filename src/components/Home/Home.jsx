import React from 'react'
import { Header } from '../Header/Header'
import { Firstpart } from '../Firstpart/Firstpart'
import { Secondpart } from '../Secondpart/Secondpart'
import { Thirdpart } from '../Thirdpart/Thirdpart'
import { Fourthpart } from '../Fourthpart/Fourthpart'
import { Fivepart } from '../Fivepart/Fivepart'
import { Six } from '../Six/Six'
import { SevenPart } from '../SevenPart/SevenPart'
import { EightPart } from '../EightPart/EightPart'
import { Footer } from '../Footer/Footer'


export const Home = () => {
  return (
    <div className=''>
  
       <Firstpart/>
       
       <Secondpart/>
       <Thirdpart/>
       <Fourthpart/>
       <Fivepart/>
       <Six/>
       <SevenPart/>
       <EightPart/>
       <Footer/>
    </div>
  )
}
