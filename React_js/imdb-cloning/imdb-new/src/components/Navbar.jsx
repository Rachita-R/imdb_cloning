import React from 'react'
import logo from '../movielogo.jpg'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex items-center gap-6 px-3 py-2 bg-blue-200">
      <img className="w-[40px]" src={logo} alt="Movie Logo" />
      <Link to = "/Movies" className="text-black text-1xl font-bold">Movies</Link>
      <Link to = "/Watchlist" className="text-black text-1xl font-bold">Watchlist</Link>
    </div>
  )
}

export default Navbar;