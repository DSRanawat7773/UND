import React from 'react'
import Hero from '../Components/Hero'
import Featured from '../Components/Featured'
import HeroProduct from '../Components/HeroProduct'
import Speciality from '../Components/Speciality'
import TestimonialSlider from '../Components/TestimonialSlider'
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
        <Helmet>
        <title>Urban Nest Designs | Bespoke Interior Decor & Wall Art</title>
        <meta
          name="description"
          content="Discover luxury home decor and mural wall art with Urban Nest Designs. Premium craftsmanship and timeless elegance for your space."
        />
        </Helmet>
        <Hero/>
        <HeroProduct/>
        <Featured/>
        <Speciality/>
        <TestimonialSlider/>
    </div>
  )
}

export default Home