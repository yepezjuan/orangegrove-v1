import { useState } from 'react'

import Header from './components/Header'
import Hero from './components/Hero'
import Carousel from './components/Carousel'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Products from './components/Products'
import Contact from './components/Contact'




function App() {

  return (
    <>
      <Header></Header>
      <Carousel />
      <Hero />
      <Services />
      <Gallery />
      <Products />
      <Contact />


    </>
  )
}

export default App
