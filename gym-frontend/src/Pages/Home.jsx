import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Hero } from '../Components/Hero'
import { Program } from '../Components/Program'

export const Home = () => {
  return (
    <div className="font-signature">
      <Navbar/>
      <Hero/>
      <Program/>
    </div>
  )
}
