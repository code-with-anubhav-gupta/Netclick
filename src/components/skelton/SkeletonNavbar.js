const SkeletonNavbar = () => {
    return (
      <header className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto animate-pulse">
        <div className="flex items-center">
          <div className="bg-gray-300 h-10 w-24 rounded-md" />
          <span className="mx-2 text-gray-400">|</span>
          <nav className="ml-2 hidden md:block">
            <ul className="flex space-x-6 text-sm">
              {Array.from({ length: 6 }).map((_, i) => (
                <li key={i}>
                  <div className="h-4 w-16 bg-gray-300 rounded-md" />
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="h-8 w-20 bg-gray-300 rounded-2xl" />
          <div className="h-8 w-24 bg-gray-300 rounded-2xl" />
        </div>
      </header>
    );
  };
  
  export default SkeletonNavbar;
  