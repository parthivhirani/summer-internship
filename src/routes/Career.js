import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage2 from '../components/HeroImage2'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Experience from '../components/Experience'

const Career = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading='MORE DETAILS' text='Detailed information about my academics, skills and work experience.'/>
      <Education />
      <Experience />
      <Skills />
      <Footer />
    </div>
  )
}

export default Career