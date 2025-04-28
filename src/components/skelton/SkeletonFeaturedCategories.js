const SkeletonFeaturedCategories = () => {
    const skeletonItems = Array.from({ length: 10 });
  
    return (
      <section className="max-w-7xl relative mx-auto my-12 px-24 animate-pulse">
        <div className="flex justify-between items-center mb-6">
          <div className='md:w-full md:flex md:flex-col md:justify-center md:items-center'>
            <div className="h-6 w-48 bg-gray-300 rounded mb-2" />
            <div className="h-4 w-64 bg-gray-200 rounded" />
          </div>
          <div className="h-4 w-24 bg-gray-300 rounded md:absolute md:top-6 md:right-5" />
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {skeletonItems.map((_, index) => (
            <div key={index} className="bg-gray-50 py-8 rounded-lg text-center">
              <div className="w-24 h-24 mx-auto mb-3 bg-gray-300 rounded-lg" />
              <div className="h-4 w-24 bg-gray-300 mx-auto mb-1 rounded" />
              <div className="h-3 w-20 bg-gray-200 mx-auto rounded" />
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default SkeletonFeaturedCategories;
  