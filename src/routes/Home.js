import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Footer from '../components/Footer'
import Skills from '../components/Skills'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage />
        <Skills />
        <Footer />
    </div>
  )
}

export default Home