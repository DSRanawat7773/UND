import React from 'react'
import Hero from '../Components/Hero'
import Featured from '../Components/Featured'
import HeroProduct from '../Components/HeroProduct'
import Speciality from '../Components/Speciality'

const Home = () => {
  return (
    <div>
        <Hero/>
        <HeroProduct/>
        <Featured/>
        <Speciality/>
    </div>
  )
}

export default Home