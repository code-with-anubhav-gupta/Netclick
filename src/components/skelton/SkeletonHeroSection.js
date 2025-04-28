const SkeletonHeroSection = () => {
    return (
      <section className="bg-gray-200 animate-pulse max-w-7xl mx-auto px-4 sm:px-6 md:px-10 rounded-4xl overflow-hidden relative">
      <div className="flex flex-col-reverse md:flex-row items-center py-10">

        
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center text-center md:text-left space-y-6">
          
          <div className="h-4 w-32 bg-gray-300 rounded mx-auto md:mx-0"></div>

         
          <div className="h-8 w-3/4 bg-gray-300 rounded mx-auto md:mx-0"></div>
          <div className="h-8 w-1/2 bg-gray-300 rounded mx-auto md:mx-0"></div>

         
          <div className="bg-white rounded-lg flex flex-col sm:flex-row items-stretch overflow-hidden w-full p-4">
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
              <div className="bg-gray-200 h-10 w-full sm:w-32 rounded"></div>
              <div className="bg-gray-200 h-10 flex-1 rounded"></div>
            </div>
            <div className="h-10 w-10 m-2 rounded-full"></div>
          </div>

          
          <div className="flex flex-wrap gap-2 justify-center md:justify-start items-center">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="h-6 w-20 bg-gray-300 rounded-full"></div>
            ))}
          </div>
        </div>

        
        <div className="w-full md:w-1/2 relative min-h-[250px] sm:min-h-[300px] flex items-center justify-center p-6">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64 rounded-full"></div>
          </div>
          <div className="relative z-10 flex justify-center items-center h-full">
            <div className="h-40 w-32  rounded-lg"></div>
          </div>
        </div>

      </div>
    </section>
    );
  };
  
  export default SkeletonHeroSection;
  
