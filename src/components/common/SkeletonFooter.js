'use client';
import { usePathname } from "next/navigation";
const SkeletonFooter = () => {
  const pathname = usePathname();
  const footer = pathname === "/";
  return (
    <>
      {footer ? (
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
      ) : (
        <footer className="bg-gray-50 py-12 border-t border-gray-200 text-black mt-16 animate-pulse">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {/* Logo and social */}
              <div>
                <div className="h-6 w-24 bg-gray-300 rounded mb-4" />
                <div className="flex space-x-4 mb-4">
                  <div className="h-8 w-8 rounded-full bg-gray-300" />
                  <div className="h-8 w-8 rounded-full bg-gray-300" />
                  <div className="h-8 w-8 rounded-full bg-gray-300" />
                </div>
                <div className="h-4 w-32 bg-gray-300 rounded mt-6" />
                <div className="h-4 w-20 bg-gray-300 rounded mt-1" />
              </div>

              {/* Column 1 */}
              <div>
                <div className="h-4 w-24 bg-gray-300 rounded mb-4" />
                <div className="space-y-2">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-3 w-32 bg-gray-300 rounded" />
                  ))}
                </div>
              </div>

              {/* Column 2 */}
              <div>
                <div className="h-4 w-32 bg-gray-300 rounded mb-4" />
                <div className="space-y-2">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-3 w-28 bg-gray-300 rounded" />
                  ))}
                </div>
              </div>

              {/* Column 3 */}
              <div>
                <div className="h-4 w-20 bg-gray-300 rounded mb-4" />
                <div className="space-y-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-3 w-28 bg-gray-300 rounded" />
                  ))}
                </div>
              </div>

              {/* App Download */}
              <div>
                <div className="h-4 w-36 bg-gray-300 rounded mb-4" />
                <div className="flex space-x-2">
                  <div className="h-12 w-36 bg-gray-300 rounded-lg" />
                  <div className="h-12 w-32 bg-gray-300 rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default SkeletonFooter;
