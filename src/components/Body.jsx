import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Body() {
 return (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">

    <NavBar />

    <div className="flex-grow">
      <Outlet />
    </div>

    <Footer />

  </div>
)
}

export default Body