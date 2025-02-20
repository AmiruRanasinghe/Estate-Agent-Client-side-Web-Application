import React from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import HomeHero from '../components/HomeHero'

export default function Home() {
  return (
    <div>
        
      <Navbar />
      <HomeHero />
      <Footer />
    </div>
  )
}

