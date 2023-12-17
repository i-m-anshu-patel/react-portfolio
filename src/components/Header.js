import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  const [activeNavbar, setActiveNavbar] = useState(1);
  const handleHighlight = (navbarid) => {
    setActiveNavbar(navbarid)
  }
  return (
    <nav className="w-full bg-white border-gray-400 dark:bg-gray-900">
      <div className="flex flex-wrap  p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo.jpg" className="h-8" alt="Portfolio Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">Anshu Patel</span>
        </Link>

        <div className="hidden w-full md:block md:w-auto ml-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
            <li>
              <Link to="/" className={`block py-2 px-3 text-gray-900 rounded md:bg-transparent md:hover:text-blue-700 md:p-0 ${activeNavbar==1 ? 'underline' : ''} `} onClick={() => handleHighlight(1)}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${activeNavbar==2 ? 'underline' : ''}`} onClick={() => handleHighlight(2)}>About</Link>
            </li>
            <li>
              <Link to="/projects" className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${activeNavbar==3 ? 'underline' : ''}`} onClick={() => handleHighlight(3)}>Projects</Link>
            </li>
            <li>
              <Link to="/acheivements" className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${activeNavbar==4 ? 'underline' : ''}`} onClick={() => handleHighlight(4)}>Acheivements</Link>
            </li>
            <li>
              <Link to="/contact" className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${activeNavbar==5 ? 'underline' : ''}`} onClick={() => handleHighlight(5)}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
