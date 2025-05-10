'use client'

const FreelanceProfileLeftSkeleton = () => {
  return (
    <div className="flex flex-col items-center md:w-1/4 animate-pulse">
      <div className="relative w-full max-w-xs">
        <div className="rounded-2xl h-64 w-full bg-gray-300" />
        <div className="absolute bottom-2 right-0 bg-gray-400 text-white px-3 py-1 rounded-l-full w-16 h-6" />
      </div>
      <div className="bg-gray-300 w-full max-w-[12rem] rounded-3xl py-3 mt-4" />
      
      <div className="w-full max-w-xs mt-4 space-y-2">
        <div className="flex items-center space-x-2">
          <div className="h-4 w-4 bg-gray-300 rounded" />
          <div className="h-4 w-10 bg-gray-300 rounded" />
          <div className="h-4 w-24 bg-gray-300 rounded" />
        </div>

        {/* Rating Bars */}
        {[90, 10, 2, 1, 0].map((width, idx) => (
          <div className="flex items-center my-1 space-x-2" key={idx}>
            <div className="w-8 h-4 bg-gray-300 rounded" />
            <div className="h-1 bg-gray-200 rounded-full flex-grow relative">
              <div
                className="h-1 bg-gray-400 rounded-full"
                style={{ width: `${width}%` }}
              />
            </div>
            <div className="w-8 h-4 bg-gray-300 rounded" />
          </div>
        ))}
      </div>

      <div className="w-full max-w-xs mt-6">
        <div className="h-5 w-40 bg-gray-300 rounded mb-2" />
        <div className="flex items-center mb-2 space-x-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full" />
          <div className="h-4 w-32 bg-gray-300 rounded" />
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full" />
          <div className="h-4 w-40 bg-gray-300 rounded" />
        </div>
      </div>
    </div>
  );
};

export default FreelanceProfileLeftSkeleton;
