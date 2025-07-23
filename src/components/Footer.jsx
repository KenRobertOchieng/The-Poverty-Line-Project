import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-blue-950 py-5">
      
      <div className="max-w-7xl m-auto grid lg:grid-cols-2 items-center px-4">
        {/* Left side */}
        <div className="text-amber-50 text-lg lg:text-2xl">
          <h2>© {currentYear} Epixolab. All rights reserved.</h2>
        </div>

        {/* Right side - Navigation Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 lg:mt-0 text-white text-sm sm:text-base">
          <Link to="/portfolio" className="hover:underline">Portfolio</Link>
          <Link to="/pricing" className="hover:underline">Pricing</Link>
          <Link to="/how-it-works" className="hover:underline">How it Works</Link>
          <Link to="/networking" className="hover:underline">Networking</Link>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 mt-6 pt-4 px-4 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm gap-2">
        <p>© {currentYear} The Poverty Line Project. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link to="/terms" className="hover:underline">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
