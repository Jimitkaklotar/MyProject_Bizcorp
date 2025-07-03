import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-4 md:px-10">
      {/* Main Navbar */}
      <nav className="fixed md:absolute top-0 left-0 md:left-4 right-0 md:right-4 z-50 bg-[#321e34]/70 backdrop-blur-lg shadow-md text-white px-6 py-4 flex justify-between items-center rounded-bl-4xl rounded-tr-4xl max-w-screen-xl mx-auto mt-0 lg:mt-6">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="w-28" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:gap-6 gap-3 font-semibold text-white text-lg">
          <li className="cursor-pointer hover:text-orange-400"><a href='#'>Home</a></li>
          <li className="cursor-pointer hover:text-orange-400"><a href="#pages">Pages</a></li>
          <li className="cursor-pointer hover:text-orange-400"><a href='#service'>Services</a></li>
          <li className="cursor-pointer hover:text-orange-400"><a href='#Portfolio'>Portfolio</a></li>
          <li className="cursor-pointer hover:text-orange-400"><a href='#blog'>Blog</a></li>
          <li className="cursor-pointer hover:text-orange-400"><a href='#contact'>Contact</a></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <span className="material-icons text-white text-3xl">
              {isOpen ? 'close ' : 'menu'}
            </span>
          </button>
        </div>
  
        {/* Desktop Button */}
        <button className="hidden lg:inline-block relative text-white text-sm font-semibold px-6 py-2 border-2 border-white rounded-bl-full rounded-tr-full hover:bg-white hover:text-[#321e34] transition-all cursor-pointer">
          Request a quotes
        </button>
      </nav>

      {/* Mobile Slide-In Menu */} 
      <div
        className={`fixed lg:hidden top-0 right-0 h-full w-3/4 sm:w-1/2 bg-[#321e34]/70 backdrop-blur-lg z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }  px-6 py-8 pt-17  `}
      >
        <ul className="flex flex-col gap-6 font-semibold text-white text-lg">
          <li className="cursor-pointer hover:text-orange-400"><a href='#'>Home</a></li>
          <li className="cursor-pointer hover:text-orange-400"><a href="#pages">Pages</a></li>
          <li className="cursor-pointer hover:text-orange-400"><a href='#service'>Services</a></li>
          <li className="cursor-pointer hover:text-orange-400"><a href='#Portfolio'>Portfolio</a></li>
          <li className="cursor-pointer hover:text-orange-400"><a href='#blog'>Blog</a></li>
          <li className="cursor-pointer hover:text-orange-400"><a href='#contact'>Contact</a></li>
        </ul>
        <button className="w-full mt-8 text-sm text-white font-semibold px-6 py-2 border-2 border-white rounded-bl-full rounded-tr-full hover:bg-white hover:text-[#321e34] transition-all">
          Request a quotes
        </button>
      </div>
    </div>
  );
};

export default Navbar;
