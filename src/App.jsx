import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Contact from './pages/Contact'
 

function App() {
 
  return (
    <div className="App">
       <Navbar/>
       <Hero/>
       {/* <Slider/> */}
       <Contact/>
    </div>
  )
}

export default App
