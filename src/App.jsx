import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import {Routes, Route} from "react-router-dom"
import Home from './pages/Home/Home'
import Dishes from './pages/Dishes/Dishes'
import Booking from './pages/Booking/Booking'
import About from './pages/About/About'
import PageNotFound from './pages/PageNotFound/PageNotFound'

function App() {
  return (
    <>
    
    
    
    <Header />
    <Routes>
    
      <Route path='/' element={<Home />} />
      <Route path='/dishes' element={<Dishes />} />
      <Route path='/services' element={<Booking />} />
      <Route path='/about' element={<About />} />
      <Route path='/*' element={<PageNotFound />} />
      
    </Routes>
    <Footer />
    </>
  )
}

export default App