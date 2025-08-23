import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
const App = () => {
  return (
   <div className="py-2 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
  <NavBar />
  <Routes>
    <Route path='/' element={<Home />} />
  </Routes>
</div>
  )
}

export default App