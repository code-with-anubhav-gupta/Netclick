"use client";

const SkeletonTopProviders = () => {
  return (
    <section className="max-w-7xl mx-auto my-12 px-6 animate-pulse">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-2">
        <div className="h-6 w-1/2 bg-gray-300 rounded mb-2"></div>
      </h2>
      
      <div className="h-4 w-1/3 bg-gray-300 rounded mx-auto"></div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 md:justify-around gap-6">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg border border-gray-100 text-center space-y-4"
          >
            <div className="w-16 h-16 mx-auto bg-gray-300 rounded-full"></div>
            <div className="h-4 w-3/4 bg-gray-300 rounded mx-auto"></div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              <div className="h-3 w-20 bg-gray-300 rounded"></div>
            </div>
            <div className="h-4 w-2/3 bg-gray-300 rounded mx-auto"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkeletonTopProviders;
