import React from 'react'
import Hero from '../Components/Hero'
import Featured from '../Components/Featured'
import HeroProduct from '../Components/HeroProduct'
import Speciality from '../Components/Speciality'
import TestimonialSlider from '../Components/TestimonialSlider'

const Home = () => {
  return (
    <div>
        <Hero/>
        <HeroProduct/>
        <Featured/>
        <Speciality/>
        <TestimonialSlider/>
    </div>
  )
}

export default Home