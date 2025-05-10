import { RiUserSettingsLine } from "react-icons/ri";

const ServiceProviderRightSkeleton = () => {
  return (
    <div className="md:w-5/6 animate-pulse">
      {/* Header Skeleton */}
      <div className="flex flex-col md:flex-row md:mx-10 md:items-center md:justify-between mb-5">
        <div className="flex items-center">
          <div className="relative">
            <div className="w-[70px] h-[70px] rounded-full bg-gray-300" />
            <div className="absolute -bottom-1 -right-1 bg-black rounded-full p-1">
              <RiUserSettingsLine className="text-lg text-white opacity-0" />
            </div>
          </div>
          <div className="ml-4">
            <div className="h-5 w-32 bg-gray-300 rounded mb-2"></div>
            <div className="h-3 w-48 bg-gray-200 rounded"></div>
          </div>
        </div>
        <div className="mt-4 md:-mt-5">
          <div className="h-8 w-40 bg-gray-300 rounded-3xl"></div>
        </div>
      </div>

      {/* Description Skeleton */}
      <div className="text-sm mb-10 md:ml-32">
        <div className="space-y-2">
          <div className="h-3 w-full bg-gray-200 rounded"></div>
          <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
          <div className="h-3 w-2/3 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Placeholder Components Skeleton */}
      <div className="md:mx-18 space-y-6">
        <div className="h-40 w-full bg-gray-200 rounded-xl"></div>
        <div className="h-32 w-full bg-gray-200 rounded-xl"></div>
        <div className="h-28 w-full bg-gray-200 rounded-xl"></div>
        <div className="md:ml-15">
          <div className="h-40 w-full bg-gray-200 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderRightSkeleton;
