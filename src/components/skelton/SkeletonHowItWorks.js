const SkeletonHowItWorks = () => {
    const steps = [1, 2, 3];
  
    return (
      <section className="bg-gray-50 py-12 px-6 animate-pulse">
        <div className="max-w-7xl mx-auto">
          <div className="h-8 w-64 bg-gray-300 mx-auto rounded mb-2" />
          <div className="h-4 w-72 bg-gray-200 mx-auto rounded mb-10" />
  
          <div className="flex flex-wrap justify-evenly gap-4">
            {steps.map((step) => (
              <div key={step} className="w-full md:w-1/4 p-6 bg-white border-2 border-[#E8E3E3] rounded-2xl relative">
                <div className="absolute -top-10 right-5 text-6xl text-[#E8E3E3] font-extrabold">0{step}</div>
                <div className="relative z-10 space-y-3">
                  <div className="h-4 w-32 bg-gray-300 rounded" />
                  <div className="h-3 w-full bg-gray-200 rounded" />
                  <div className="h-3 w-5/6 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>
  
          <div className="-mt-5 flex justify-center">
            <div className="h-56 md:h-96 w-full max-w-xl bg-gray-300 rounded-lg" />
          </div>
        </div>
      </section>
    );
  };
  
  export default SkeletonHowItWorks;
  