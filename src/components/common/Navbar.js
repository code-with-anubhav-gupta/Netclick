"use client";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto relative">
        <div className="flex justify-center items-center">
          <Image
            src="/assets/image/logo-black.png"
            alt="Netclic Logo"
            width={100}
            height={50}
            className="-mt-3 h-auto w-auto object-cover"
          />
          <span className="mx-2 text-gray-500">|</span>
          <nav className="ml-2 hidden md:block">
            <ul className="flex space-x-6 text-sm justify-center items-center">
              <li>
                <a href="#" className="text-gray-500 hover:text-amber-500">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-amber-500">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-amber-500">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-amber-500">
                  Freelancers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-amber-500">
                  Members
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-amber-500">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
        </div>

     
        <div className="hidden md:flex items-center space-x-4">
          <button className="flex items-center px-1 py-2 text-gray-800 font-light md:text-sm sm:px-3 sm:py-2 md:px-4 tracking-tighter md:py-2 rounded-2xl md:rounded-4xl hover:outline hover:outline-amber-500 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Sign in
          </button>
          <button className="bg-black text-white px-1 py-2 font-light sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-lg md:rounded-4xl hover:text-amber-500 cursor-pointer text-sm">
            Contact us
          </button>
        </div>

       
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 relative">
            <span
              className={`absolute h-0.5 w-full bg-black transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45 translate-y-2.5" : "translate-y-0"
              }`}
            />
            <span
              className={`absolute h-0.5 w-full bg-black transform transition-all duration-300 ease-in-out translate-y-2 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-full bg-black transform transition-all duration-300 ease-in-out translate-y-4 ${
                isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-4"
              }`}
            />
          </div>
        </button>
      </div>

    
      <div
        className={`absolute md:hidden w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="px-6 py-4">
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-gray-500 hover:text-amber-500 block">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-amber-500 block">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-amber-500 block">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-amber-500 block">
                Freelancers
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-amber-500 block">
                Members
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-amber-500 block">
                Blog
              </a>
            </li>
            <li className="pt-4">
              <button className="flex items-center justify-center w-full text-gray-800 font-light text-sm px-3 py-2 rounded-2xl border border-amber-500 hover:outline hover:outline-amber-500 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Sign in
              </button>
            </li>
            <li>
              <button className="w-full bg-black text-white py-2 px-3 rounded-lg hover:text-amber-500 cursor-pointer text-sm">
                Contact us
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
