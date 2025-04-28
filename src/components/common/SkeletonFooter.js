const SkeletonFooter = () => {
    return (
      <footer className="bg-white py-6 border-t border-gray-100 animate-pulse">
        <div className="max-w-7xl mx-auto px-6 flex justify-around items-center">
          <div className="h-4 w-60 bg-gray-300 rounded" />
          <div className="flex space-x-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-4 w-4 bg-gray-300 rounded-full" />
            ))}
          </div>
        </div>
      </footer>
    );
  };
  
  export default SkeletonFooter;
  