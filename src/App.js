import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import MyProjects from './components/MyProjects'
import Contact from './components/Contact'
import Connect from './components/Connect'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div className='bg-custom-gradient'>
        <Navbar />
        <div id='home'>
          <Home />
        </div>
        <div id='about'>
          <About />
        </div>
        {/* <div id='services'>
          <Services />
        </div> */}
        <div id='projects'>
          <MyProjects />
        </div>
        <div id='contact'>
          <Contact />
        </div>
        <div id='connect'>
          <Connect />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
