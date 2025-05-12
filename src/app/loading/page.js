import React from "react";
import Image from "next/image";

const LoadingPage = () => {
  return (
    <div className="fixed inset-0 w-full min-h-screen flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="relative flex flex-col items-center">
        {/* Main spinner with gradient and glow effect */}
        <div className="relative">
          <div className="w-16 h-16 md:w-20 md:h-20">
            {/* Background ring */}
            <div className="absolute w-full h-full rounded-full border-[3px] border-gray-100"></div>
            {/* Animated spinner ring */}
            <div className="absolute w-full h-full rounded-full border-[3px] border-transparent border-t-orange-500 animate-spin"></div>
            {/* Gradient overlay */}
            <div className="absolute w-full h-full rounded-full border-[3px] border-transparent border-l-orange-300 animate-pulse"></div>
          </div>
          {/* Inner glow */}
          <div className="absolute inset-0 rounded-full bg-orange-500/10 filter blur-xl animate-pulse"></div>
        </div>

        {/* Logo and text animation */}
        <div className="mt-8 flex flex-col items-center">
          <Image
            src="/assets/image/logo-black.png"
            alt="Logo"
            width={120}
            height={40}
            className="mb-4 animate-pulse"
            priority
          />
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 bg-orange-300 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
