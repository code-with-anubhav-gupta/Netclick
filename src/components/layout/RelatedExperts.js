"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import {images} from '../../../public/assets/image/index.js'

const RelatedExperts = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  const experts = [
    {
      name: "Alexander",
      role: "Plumber",
      rating: "5.0",
      reviews: "38",
      image: '/assets/image/Men.jpg',
      hourlyRate: "15",
      qualities: [
        "Dynamic and smiling",
        "Calm and patient",
        "Vigilant and caring",
      ],
    },
    {
      name: "Caroline",
      role: "Pet Care",
      rating: "5.0",
      reviews: "38",
      image: "/assets/image/BussinessWomen.jpg",
      hourlyRate: "15",
      qualities: [
        "Dynamic and smiling",
        "Calm and patient",
        "Vigilant and caring",
      ],
    },
    {
      name: "Denis",
      role: "Electrician",
      rating: "5.0",
      reviews: "38",
      image: "/assets/image/Men2.jpg",
      hourlyRate: "15",
      qualities: [
        "Dynamic and smiling",
        "Calm and patient",
        "Vigilant and caring",
      ],
    },
    {
      name: "Emma",
      role: "Pet Care",
      rating: "5.0",
      reviews: "38",
      image: "/assets/image/Women1.jpg",
      hourlyRate: "15",
      qualities: [
        "Dynamic and smiling",
        "Calm and patient",
        "Vigilant and caring",
      ],
    },
  ];

  return (
    <div className="relative mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl text-black mb-10 font-bold">Related Experts...</h2>
        <div className="flex gap-2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={`custom-prev-button bg-white rounded-full w-10 h-10 flex items-center justify-center border border-gray-400 ${
              isBeginning
                ? "opacity-50 cursor-not-allowed"
                : "hover:border-gray-300"
            } transition-all`}
            disabled={isBeginning}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={`custom-next-button bg-white rounded-full w-10 h-10 flex items-center justify-center border border-gray-400 ${
              isEnd ? "opacity-50 cursor-not-allowed" : "hover:border-gray-300"
            } transition-all`}
            disabled={isEnd}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          prevEl: ".custom-prev-button",
          nextEl: ".custom-next-button",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        loop={true}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="!pb-4"
      >
        {experts.map((expert, index) => (
          <SwiperSlide key={index}>
            <div className="text-black hover:hover:shadow-2xl rounded-lg overflow-hidden h-full cursor-pointer transition-all">
              <div className="relative flex items-center justify-start">
                <div className="mx-3 h-28 w-28 overflow-hidden rounded-full bg-white shadow-lg">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-full bg-cover "
                  />
                </div>
                <div className="absolute top-0 right-0 text-gray-600 px-2 py-1 rounded-full text-sm font-bold">
                  ${expert.hourlyRate}/h
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-sm font-bold">{expert.name}</h4>
                <p className="text-xs text-gray-600">{expert.role}</p>
                <div className="flex items-center mt-1">
                  <span className="text-[#F4BB44] text-sm font-bold">★</span>
                  <span className="text-xs font-bold ml-1">
                    {expert.rating}
                  </span>
                  <span className="text-xs text-gray-500 ml-1">
                    ({expert.reviews} reviews)
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {expert.qualities.map((quality, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-[#E6EDED] rounded-lg px-2 py-1 text-xs text-gray-600"
                    >
                      {quality}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-slide {
          height: auto !important;
        }
      `}</style>
    </div>
  );
};

export default RelatedExperts;
