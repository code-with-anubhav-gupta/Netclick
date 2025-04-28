const SkeletonClientTestimonials = () => {
    return (
      <section className="py-12 px-6 max-w-7xl mx-auto animate-pulse">
        <div className="h-8 w-72 bg-gray-300 mx-auto rounded mb-2" />
        <div className="h-4 w-96 bg-gray-200 mx-auto rounded mb-10" />
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="p-6 bg-white rounded-lg shadow-sm space-y-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-gray-200 rounded" />
                ))}
              </div>
              <div className="h-4 bg-gray-300 w-3/4 rounded" />
              <div className="h-3 bg-gray-200 w-full rounded" />
              <div className="h-3 bg-gray-200 w-5/6 rounded" />
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full mr-2" />
                  <div className="h-3 w-20 bg-gray-200 rounded" />
                </div>
                <div className="h-3 w-12 bg-gray-200 rounded" />
              </div>
            </div>
          ))}
        </div>
  
        <div className="text-center mt-8">
          <div className="h-3 w-96 bg-gray-200 mx-auto mb-3 rounded" />
          <div className="flex items-center justify-center space-x-1">
            <div className="h-4 w-20 bg-gray-300 rounded" />
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-5 h-5 bg-gray-300 rounded" />
              ))}
            </div>
            <div className="h-4 w-40 bg-gray-200 rounded" />
          </div>
        </div>
      </section>
    );
  };
  
  export default SkeletonClientTestimonials;
  