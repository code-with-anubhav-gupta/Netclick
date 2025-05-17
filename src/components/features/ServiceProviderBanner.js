const ServiceProviderBanner = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/assets/image/Service-Provider-Banner-2.png')",
      }}
      className="max-w-7xl md:mx-16 bg-contain bg-no-repeat mx-auto mb-10  relative"
    >
      <div className="w-full bg-cover bg-center relative text-white rounded-lg p-6  lg:px-12">
        <div className="flex flex-col items-start justify-center h-full">
          <h2 className="text-[10px] sm:text-xs max-sm:tracking-tighter md:text-[12px] lg:text-lg sm:font-extrabold lg:mt-8">
            Earn 5% of the amount your friends spend, for life
          </h2>
          <p className="opacity-80 text-[10px] mb-3 sm:text-base ">
            Be smart, become a sponsor!
          </p>
          <button className="bg-[#dfa460] text-[10px] sm:text-xs px-4 md:px-8 md:py-3 lg:px-15 max-sm:py-0.8 sm:py-3 mb-5 cursor-pointer rounded-4xl">
            Discover
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceProviderBanner;
