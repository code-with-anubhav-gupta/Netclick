'use client'

const FreelanceProfileRightSkeleton = () => {
  return (
    <div className="md:w-3/4 animate-pulse">
      {/* Name */}
      <div className="h-8 w-40 bg-gray-300 rounded mb-2" />
      {/* Category */}
      <div className="h-4 w-24 bg-gray-300 rounded mb-4" />
      {/* Description */}
      <div className="space-y-2 mb-6">
        <div className="h-4 w-full bg-gray-300 rounded" />
        <div className="h-4 w-5/6 bg-gray-300 rounded" />
        <div className="h-4 w-2/3 bg-gray-300 rounded" />
      </div>

      {/* Top Provider Badge */}
      <div className="border-2 border-[#D9A562] rounded-xl p-4 flex justify-between items-center mb-6">
        <div className="flex items-start gap-3">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gray-300 rounded-full" />
            <div className="w-4 h-10 bg-gray-300 rounded ml-2" />
          </div>
          <div className="flex flex-col space-y-2">
            <div className="h-4 w-32 bg-gray-300 rounded" />
            <div className="h-3 w-64 bg-gray-300 rounded" />
          </div>
        </div>
      </div>

      {/* Quality Criteria */}
      <div className="text-black mb-6">
        <div className="h-5 w-40 bg-gray-300 rounded mb-6" />
        {[...Array(2)].map((_, index) => (
          <div key={index}>
            <div className="w-full px-2 flex gap-4">
              <div className="w-16 h-10 bg-gray-300 rounded" />
              <div className="flex flex-col space-y-2">
                <div className="h-4 w-24 bg-gray-300 rounded" />
                <div className="h-3 w-64 bg-gray-300 rounded" />
              </div>
            </div>
            {index < 1 && <div className="border-t border-gray-300 my-6" />}
          </div>
        ))}
      </div>

      {/* Service Area Map */}
      <div className="mb-8">
        <div className="bg-gray-200 rounded-lg h-60 relative overflow-hidden">
          <div className="absolute inset-0 bg-gray-300 rounded-lg" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-16 bg-gray-400 rounded-full border-2 border-white" />
          </div>
        </div>
      </div>

      {/* Client Reviews */}
      <div className="h-24 bg-gray-200 rounded mb-6" />

      {/* Related Experts */}
      <div className="h-32 bg-gray-200 rounded" />
    </div>
  );
};

export default FreelanceProfileRightSkeleton;
