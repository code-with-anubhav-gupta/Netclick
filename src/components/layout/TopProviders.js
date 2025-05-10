"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";

const TopProviders = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  const topProviders = [
    {
      id: 1,
      name: "William Miller",
      star: '5.0',
      reviews: 2,
      image: "https://picsum.photos/200?random=1",
    },
    {
      id: 2,
      name: "Sophia Taylor",
      star: '4.3',
      reviews: 3,
      image: "https://picsum.photos/200?random=2",
    },
    {
      id: 3,
      name: "Sarah Brown",
      star: '3.0',
      reviews: 3,
      image: "https://picsum.photos/200?random=3",
    },
    {
      id: 4,
      name: "Olivia Clark",
      star: '5.0',
      reviews: 2,
      image: "https://picsum.photos/200?random=4",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-10 md:py-8 px-5 md:px-20 relative">
      <div className="w-full flex justify-between items-center mb-8">
        <div className="w-full flex flex-col md:justify-center md:items-center md:ml-20 ">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">Top Providers</h2>
          <p className="text-gray-500 font-medium text-sm">
          Get some Inspirations from 50K+ skills
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={`bg-gray-100 border border-gray-300 text-white shadow-md p-2 rounded-full transition-all ${
              isBeginning
                ? "opacity-30 cursor-not-allowed hover:bg-gray-800"
                : "hover:bg-gray-300"
            }`}
            disabled={isBeginning}
            aria-label="Previous slide"
          >
            <svg
              className="w-5 h-5 text-gray-800"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" />
            </svg>
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={`bg-gray-100 border border-gray-300 text-white shadow-md p-2 rounded-full transition-all ${
              isEnd
                ? "opacity-30 cursor-not-allowed hover:bg-gray-800"
                : "hover:bg-gray-3000"
            }`}
            disabled={isEnd}
            aria-label="Next slide"
          >
            <svg
              className="w-5 h-5 text-gray-800"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M7.293 4.293a1 1 0 011.414 0L13.707 9.293a1 1 0 010 1.414L8.707 15.707a1 1 0 01-1.414-1.414L11.586 10 7.293 5.707a1 1 0 010-1.414z" />
            </svg>
          </button>
        </div>
      </div>

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="pb-4"
      >
        {topProviders.map((provider) => (
          <SwiperSlide key={provider.id}>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-gray-200 rounded-full overflow-hidden">
                <Image
                  src={provider.image}
                  alt={provider.name}
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="font-bold mb-3">{provider.name}</h3>
              <div className="flex items-center justify-center mb-3">
                <div className="flex text-amber-400">
                  {[...Array(1)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-black font-extrabold"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-gray-500 ml-1">
                  {provider.star} ({provider.reviews} Reviews)
                </span>
              </div>
              <a
                href={`/provider`}
                className="text-xs font-bold text-black px-3 py-1 inline-block"
              >
                View Profile
                {/*  */}
                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block font-extrabold w-4 ml-1"  viewBox="0 0 25 25" >
                  <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z" />
                </svg>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-slide {
          height: auto !important;
        }
      `}</style>
    </section>
  );
};

export default TopProviders;
