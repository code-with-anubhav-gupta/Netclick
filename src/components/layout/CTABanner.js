"use client";
import Image from "next/image";

const CTABanner = () => {
  return (
    <section className="max-w-7xl mx-auto md:py-10 px-4 sm:px-6 md:px-8 lg:px-20 relative">
      <div className="bg-[#DFA35B] rounded-lg p-6 sm:p-8 md:p-12 lg:p-16 flex flex-wrap items-center justify-between relative ">
        <div className="w-full md:w-1/2 lg:w-[55%] relative z-10">
          <h2 className="text-xl sm:text-2xl md:text-4xl tracking-wider font-extrabold text-black mb-2 sm:mb-3">
            Find the talent needed{" "}
            <br className="hidden sm:block" />
            to get your Work Done.
          </h2>
          <p className="text-black tracking-wide opacity-80 mb-4 sm:mb-6 text-sm ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-[#1C1914] text-white px-3 md:px-7 py-2 sm:py-2 mb-10 sm:mb-5 md:-mb-3 rounded-4xl">
            Get Started
          </button>
        </div>
        <div className="absolute right-5 md:right-28 top-0 bottom-0 w-1/2 flex items-end justify-end">
          <Image
            src="/assets/image/get-Started.png"
            alt="Professionals"
            width={800}
            height={800}
            className="w-auto h-30 sm:h-40 md:h-48 lg:h-[420px] object-contain object-bottom transform translate-x-4 md:translate-x-0"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
