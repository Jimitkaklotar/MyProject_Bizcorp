import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BusinessSection from './components/BusinessSection'
import BusinessSteps from './components/BusinessSteps'
import ProjectShowcase from './components/ProjectShowcase'
import Profile from './components/profile'
import BlogSection from './components/BlogSection'
import Footer from './components/Footer'


function App() {


  return (
    <>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <BusinessSection />
        <BusinessSteps />
        <ProjectShowcase />
        <Profile />
        <BlogSection />
        <Footer />
      </div>
    </>
  )
}

export default App
