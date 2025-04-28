'use client'

const SkeletonCTABanner = () => {
  return (
    <section className="max-w-7xl mx-auto my-12 px-4 md:px-28 animate-pulse">
      <div className="bg-amber-100 rounded-lg p-8 flex flex-wrap items-center relative overflow-hidden">
        
        
        <div className="w-full md:w-2/3 space-y-4">
          <div className="h-8 w-3/4 bg-gray-300 rounded"></div>
          <div className="h-4 w-full bg-gray-300 rounded"></div>
          <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
          <div className="h-10 w-32 bg-gray-400 rounded-md mt-4"></div>
        </div>

       
        <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gray-300 rounded-lg"></div>
        </div>
      </div>
    </section>
  )
}

export default SkeletonCTABanner
