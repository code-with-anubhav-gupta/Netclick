"use client";
const ServiceProviderLeftSkeleton = () => {
  return (
    <div className="hidden md:flex flex-col items-center md:w-1/6 animate-pulse">
      <div className="relative w-full">
        <div className="shadow-2xl/30 border rounded-2xl p-4 space-y-4">
          {/* Navigation Skeleton */}
          <div className="space-y-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="flex items-center px-4 py-3 text-xs rounded-lg bg-gray-100"
              >
                <div className="h-5 w-5 bg-gray-300 rounded mr-3"></div>
                <div className="h-3 w-2/3 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>

          {/* Invite Friends Skeleton */}
          <div className="w-full border border-[#DFA460] rounded-2xl px-3 bg-amber-50 flex gap-2 items-center justify-center">
            <div className="text-2xl py-3">
              <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
            </div>
            <div className="flex flex-col py-3 gap-1">
              <div className="h-3 w-24 bg-gray-300 rounded"></div>
              <div className="h-3 w-40 bg-gray-200 rounded"></div>
            </div>
          </div>

          {/* Assistance and Help Skeleton */}
          <div className="space-y-2">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="flex items-center px-4 py-3 text-xs rounded-lg bg-gray-100"
              >
                <div className="h-5 w-5 bg-gray-300 rounded mr-3"></div>
                <div className="h-3 w-2/3 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderLeftSkeleton;
