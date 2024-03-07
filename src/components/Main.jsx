import React from 'react'
import { Header } from './Header/Header'
import { Home } from './Home/Home'
import { About } from './About/About'
import { Outlet } from 'react-router-dom'

export const Main = () => {
  return (
    <div>
        <Header/>
       <Outlet/>
    </div>
  )
}
