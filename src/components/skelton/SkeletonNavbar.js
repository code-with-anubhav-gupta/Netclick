const SkeletonNavbar = () => {
    return (
      <header className="bg-white px-6 py-4">
      <div className="animate-pulse flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <div className="w-24 h-10 bg-gray-300 rounded"></div>
          <div className="w-1 h-6 bg-gray-200 rounded"></div>
          <div className="hidden md:flex space-x-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-16 h-4 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
        <div className="hidden md:flex space-x-4">
          <div className="w-20 h-8 bg-gray-300 rounded-full"></div>
          <div className="w-24 h-8 bg-gray-400 rounded-full"></div>
        </div>
        <div className="md:hidden w-6 h-6 bg-gray-300 rounded"></div>
      </div>
    </header>
    );
  };
  
  export default SkeletonNavbar;
  