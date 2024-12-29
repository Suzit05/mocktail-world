import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Cocktailslist from './assets/Components/Cocktailslist'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Cocktailslist' element={<Cocktailslist />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App