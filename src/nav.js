import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const scrollToHero = () => {
    const supportersSection = document.getElementById('hero');
    if (supportersSection) {
      window.scrollTo({
        top: supportersSection.offsetTop - 0, // Adjust as needed for your navbar height or other offsets
        behavior: 'smooth',
      });
    }
  };

  const scrollToSupporters = () => {
    const supportersSection = document.getElementById('supporters');
    if (supportersSection) {
      window.scrollTo({
        top: supportersSection.offsetTop - 350, // Adjust as needed for your navbar height or other offsets
        behavior: 'smooth',
      });
    }
  };

  const scrollToServices = () => {
    const supportersSection = document.getElementById('implementation');
    if (supportersSection) {
      window.scrollTo({
        top: supportersSection.offsetTop - 170, // Adjust as needed for your navbar height or other offsets
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 font-figtree">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 relative">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt=" Logo" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link to="/demo">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 hidden md:block focus:outline-none font-bold focus:ring-4 focus:ring-blue-300 rounded-full text-md px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-6"
              style={{ backgroundColor: "#0087f7", opacity: "0.9" }}
            >
              Book Demo
            </button>
          </Link>
          <a
            href="https://unitoni.com/student"
            className="hidden md:inline-block text-black hover:text-blue-800 focus:outline-none font-bold text-md ml-7 cursor-pointer mt-2"
            style={{ color: "#ff9a24" }}
          >
            Login
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div
          className={`absolute top-full left-0 w-full bg-white dark:bg-gray-900 md:relative md:flex md:w-auto md:order-1 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900">
            <li>
              <Link to="/"  onClick={scrollToHero} className="block py-2 px-3 text-[#112d42] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold" style={{ color: "#112d42" }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/partners" onClick={scrollToSupporters} className="block py-2 px-3 text-[#112d42] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold" style={{ color: "#112d42" }}>
                Partners
              </Link>
            </li>
            <li>
              <Link to="/implementation "onClick={scrollToServices} className="block py-2 px-3 text-[#112d42] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold" style={{ color: "#112d42" }}>
                Implementation
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 px-3 text-[#112d42] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold" style={{ color: "#112d42" }}>
                Contact us
              </Link>
            </li>
            <li>
              <a href="https://unitoni.com/student" className="block md:hidden py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white font-bold">
                Login
              </a>
            </li>
            <li>
              <Link to="/demo" className="block md:hidden py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white font-bold">
                Book Demo
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
