'use client'
import Image from 'next/image'
const CTABanner = () => {
  return (
     <section className="max-w-7xl mx-auto my-12 px-4 md:px-28 relative">
            <div className=" bg-amber-500 rounded-lg p-8 flex flex-wrap">
              <div className="w-full md:w-[70%]">
                <h2 className="text-xl md:text-4xl  font-bold text-black mb-3">
                  Find the talent needed<br/>to get your Work Done.
                </h2>
                <p className="text-black opacity-80 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="bg-gray-900 text-white px-6 py-3 mb-5 md:mb-0 rounded-4xl">
                  Get Started
                </button>
              </div>
              <div className="w-full md:w-[30%] relative flex items-center justify-center">
                <div className="absolute -bottom-8 -right-8 sm:right-0 md:-bottom-8 md:w-full  lg:-top-35 lg:left-5 lg:w-full lg:h-full">
                  <Image src="/assets/image/men&Women.png" alt="Professionals" 
                  width={500} height={200} 
                  className='w-full h-32 sm:h-36  md:h-40 lg:-ml-2 lg:h-96 object-cover' 
                  />
                </div>
              </div>
            </div>
          </section>
  )
}

export default CTABanner