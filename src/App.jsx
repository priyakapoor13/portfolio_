import React from 'react'
import Navbar from './components/navbar/navbar'
import { Hero } from './components/Hero/Hero';
import About from './components/About/About'
import MyWork from './components/MyWork/mywork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'




const App = () => {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <About/>
     <MyWork/>
     <Contact/>
     <Footer/>
    </div>
  )
}



export default App
