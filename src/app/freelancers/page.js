// pages/profile/[id].js
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaStar,
  FaCheck,
  FaHeart,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Footer2 from "@/components/common/Footer2";
import RelatedExperts from "@/components/layout/RelatedExperts";
import SocialMediaSidebar from "@/components/common/SocialMediaSidebar";
import ClientReview from "@/components/layout/ClientReview";

export default function ProfilePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
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
                <a
                  href="#"
                  className="text-gray-500 hover:text-amber-500 block"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-amber-500 block"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-amber-500 block"
                >
                  Jobs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-amber-500 block"
                >
                  Freelancers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-amber-500 block"
                >
                  Members
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-amber-500 block"
                >
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

      {/* Add padding to account for fixed header */}
      <div className="pt-10">
        <main className="max-w-6xl mx-auto px-4 py-8">
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Side - Profile Image & Actions */}
            <div className="flex flex-col items-center md:w-1/4">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1558280417-ea782f829e93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGdpcmxzfGVufDB8fDB8fHww"
                  alt="Profile"
                  className="rounded-lg w-full max-w-xs object-cover"
                />
                <div className="absolute bottom-2 right-0 bg-amber-500 text-white px-3 py-1 rounded-l-full">
                  $15/h
                </div>
              </div>
              <button className="bg-amber-500 text-white w-full max-w-[12rem] rounded-3xl py-3 mt-4 font-medium hover:bg-amber-600 transition-colors">
                Request A Service
              </button>
              <div className="w-full text-black  max-w-xs mt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaStar className="text-black" />
                    <span className="font-bold ml-1">4.84</span>
                    <span className="text-gray-500 ml-1">(345 reviews)</span>
                  </div>
                </div>
                {/* Rating Bars */}
                <div className="mt-2">
                  <div className="flex items-center my-1">
                    <span className="w-8 text-xs">5 ★</span>
                    <div className="h-2 bg-gray-200 rounded-full flex-grow mx-2">
                      <div
                        className="h-2 bg-black rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                    <span className="w-8 text-xs text-right">302</span>
                  </div>
                  <div className="flex items-center my-1">
                    <span className="w-8 text-xs">4 ★</span>
                    <div className="h-2 bg-gray-200 rounded-full flex-grow mx-2">
                      <div
                        className="h-2  bg-black rounded-full"
                        style={{ width: "10%" }}
                      ></div>
                    </div>
                    <span className="w-8 text-xs text-right">35</span>
                  </div>
                  <div className="flex items-center my-1">
                    <span className="w-8 text-xs">3 ★</span>
                    <div className="h-2 bg-gray-200 rounded-full flex-grow mx-2">
                      <div
                        className="h-2  bg-black rounded-full"
                        style={{ width: "2%" }}
                      ></div>
                    </div>
                    <span className="w-8 text-xs text-right">7</span>
                  </div>
                  <div className="flex items-center my-1">
                    <span className="w-8 text-xs">2 ★</span>
                    <div className="h-2 bg-gray-200 rounded-full flex-grow mx-2">
                      <div
                        className="h-2  bg-black rounded-full"
                        style={{ width: "0.2%" }}
                      ></div>
                    </div>
                    <span className="w-8 text-xs text-right">1</span>
                  </div>
                  <div className="flex items-center my-1">
                    <span className="w-8 text-xs">1 ★</span>
                    <div className="h-2 bg-gray-200 rounded-full flex-grow mx-2">
                      <div
                        className="h-2 bg-amber-500 rounded-full"
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                    <span className="w-8 text-xs text-right">0</span>
                  </div>
                </div>
              </div>

              {/* Verified Information */}
              <div className="w-full text-black max-w-xs mt-6">
                <h3 className="font-bold text-lg mb-2">Verified Information</h3>
                <div className="flex items-center mb-2">
                  <FaCheck className="text-black mr-2  h-5 w-5 border-2 rounded-full" />
                  <span>Identity verified</span>
                </div>
                <div className="flex items-center">
                  <FaCheck className="text-black font-extralight mr-2  h-5 w-5  border-2 rounded-full" />
                  <span>Verified phone number</span>
                </div>
              </div>
            </div>

            {/* Right Side - Profile Information */}
            <div className="md:w-3/4">
              <h1 className="text-3xl text-black font-bold mb-2">Caroline</h1>
              <p className="text-gray-600 mb-4">Petcare</p>
              <p className="text-gray-700 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>

              {/* Top Provider Badge */}
              <div className="border border-amber-500 rounded-lg p-4 flex justify-between items-center mb-6">
                <div className="flex items-start gap-3">
                  <div className="max-sm:mt-5 max-sm:w-30 mr-4  flex gap-3 items-center">
                    <FaHeart
                      size={45}
                      className="w-auto stroke-amber-500 stroke-30"
                    />
                    <span className="text-amber-500 font-extralight text-4xl">
                      |
                    </span>
                  </div>
                  <div className="text-black flex flex-col justify-center items-start">
                    <h3 className="font-bold mb-1">Top provider</h3>
                    <p className="text-gray-600">
                      This badge highlights the most competent and highest rated
                      providers on Yoojo.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quality Criteria */}
              <div className="text-black mb-6">
                <h3 className="font-bold text-lg mb-6">Quality Criteria</h3>

                {/* First Block */}
                <div className="mb-6 ml-2">
                  <div className="flex items-center mb-2">
                    <span className="text-3xl font-bold mr-2">76%</span>
                    <span className="font-semibold text-gray-700">
                      Relational
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </p>
                </div>

                {/* Divider Line */}
                <div className="border-t border-gray-300 mb-6"></div>

                {/* Second Block */}
                <div className="ml-2">
                  <div className="flex items-center mb-2">
                    <span className="text-3xl font-bold mr-2">98%</span>
                    <span className="font-semibold text-gray-700">
                      Punctuality
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </p>
                </div>
              </div>

              {/* Service Area Map */}
              <div className="mb-8">
                <div className="bg-gray-100 rounded-lg p-2 h-60 relative overflow-hidden">
                  <img
                    src="https://developers.google.com/static/maps/images/landing/react-codelab-thumbnail.png"
                    alt="Service area map"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      {/* <div className="border-2 border-blue-500 bg-blue-300 bg-opacity-0 rounded-full w-32 h-32 md:w-48 md:h-48 flex items-center justify-center"> */}
                        <img
                          src="https://images.unsplash.com/photo-1558280417-ea782f829e93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGdpcmxzfGVufDB8fDB8fHww"
                          alt="Profile"
                          className="rounded-full w-16 h-16 border-2 border-white"
                        />
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Client Reviews */}
              <ClientReview />

              {/* Related Experts */}
              <RelatedExperts/>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer2/>

      {/* Social Media Sidebar */}
      <SocialMediaSidebar/>
    </div>
  );
}
