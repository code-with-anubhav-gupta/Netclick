"use client";
import Image from "next/image";
import { useState } from "react";
import SocialIcons from "./SocialIcons";

const HeroSection = ({ loading }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const popularServices = ["Plumber", "Carpenter", "Electrician", "Cleaner"];

  return (
    <section className="bg-[url('/assets/image/background.jpg')] bg-cover bg-center text-white max-w-7xl mx-auto px-4 sm:px-6 md:px-10 rounded-4xl overflow-hidden relative">
      <div className="flex flex-col-reverse md:flex-row items-center">
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center text-center md:text-left">
          <p className="text-amber-500 mb-2 font-medium text-xs sm:text-sm md:text-base">
            50,000+ VERIFIED EXPERTS...
          </p>
          <h1 className="text-2xl sm:text-4xl md:text-4xl font-bold mb-6 leading-tight">
            Find Trusted Local Professionals Instantly
          </h1>

          <div className="bg-white rounded-lg flex flex-col sm:flex-row items-stretch overflow-hidden w-full">
            <div className="p-2 flex flex-col sm:flex-row items-center gap-2 w-full">
              <div className="bg-gray-100 p-2 rounded w-full sm:w-auto">
                <select 
                  id="category" 
                  name="category" 
                  className="bg-transparent outline-none text-gray-800 cursor-pointer w-full"
                >
                  <option>Category</option>
                  <option>Service 1</option>
                  <option>Service 2</option>
                  <option>Service 3</option>
                  <option>Service 4</option>
                  <option>Service 5</option>
                </select>
              </div>
              <input
                type="text"
                placeholder="Search for Service"
                className="flex-1 px-3 py-2 outline-none text-gray-800 rounded w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                name="search"
                id="search"
              />
            </div>

            
            <button className="bg-amber-500 text-white h-10 w-12 m-2 flex items-center justify-center rounded-full self-center sm:self-auto cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

        
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center md:justify-start items-center">
            <p className="text-sm text-white font-medium">Popular Services:</p>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {popularServices.map((service, index) => (
                <span
                  key={index}
                  className="px-3 py-1 border border-white rounded-full text-xs sm:text-sm"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>


        <div className="w-full md:w-1/2 relative min-h-[250px] sm:min-h-[300px] flex items-center justify-center p-6">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64 bg-amber-500 rounded-full"></div>
          </div>
          <div className="relative z-10 flex justify-center items-center h-full">
            <Image
              src="/assets/image/Splash-scrn2.png"
              alt="Professional handyman"
              width={900}
              height={900}
              className="object-contain max-h-full w-auto h-auto"
              priority
            />
          </div>
        </div>

      </div>
      <SocialIcons loading={loading} />
    </section>
  );
};

export default HeroSection;
