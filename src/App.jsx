import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Tech from './components/Tech'
import Works from './components/Works'
import Contact from './components/Contact'
import Proof from './components/Proof'

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-hero">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Proof/>
      <Tech />
      <Works />
      <Contact />
    </BrowserRouter>
  )
}

export default App
