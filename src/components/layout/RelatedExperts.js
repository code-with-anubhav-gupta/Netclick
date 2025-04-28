import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import {
    FaStar,
  } from "react-icons/fa";

const RelatedExperts = () => {
  const experts = [
    {
      name: "Alexander",
      role: "Plumber",
      rating: "5.0",
      reviews: "26",
      image: "https://picsum.photos/240/180?random=1",
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
      reviews: "26",
      image: "https://picsum.photos/240/180?random=2",
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
      reviews: "26",
      image: "https://picsum.photos/240/180?random=3",
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
      reviews: "26",
      image: "https://picsum.photos/240/180?random=4",
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
      reviews: "26",
      image: "https://picsum.photos/240/180?random=4",
      hourlyRate: "15",
      qualities: [
        "Dynamic and smiling",
        "Calm and patient",
        "Vigilant and caring",
      ],
    },
  ];
  return (
    <>
      {/* Related Experts */}
      <div className="mb-8 text-black">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Related Experts...</h2>
          <div className="flex gap-2">
            <button className="custom-prev-button bg-white rounded-full w-10 h-10 flex items-center justify-center border border-gray-400 hover:border-gray-300 transition-all">
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
            <button className="custom-next-button bg-white rounded-full w-10 h-10 flex items-center justify-center border border-gray-400 hover:border-gray-300 transition-all">
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
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: ".custom-prev-button",
              nextEl: ".custom-next-button",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              reverseDirection: false,
            }}
            loop={true}
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
                <div className="text-black rounded-lg overflow-hidden h-full max-sm:w-full">
                  <div className="relative">
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute top-2 right-2 text-gray-800 px-2 py-1 rounded-full text-sm">
                      ${expert.hourlyRate}/h
                    </div>
                  </div>
                  <div className="p-3  max-sm:text-center ">
                    <h4 className="font-bold">{expert.name}</h4>
                    <p className="text-sm text-gray-600">{expert.role}</p>
                    <div className="flex items-center max-sm:justify-center mt-1">
                      <FaStar className="text-amber-500 text-xs" />
                      <span className="text-xs ml-1">{expert.rating}</span>
                      <span className="text-xs text-gray-500 ml-1">
                        ({expert.reviews} reviews)
                      </span>
                    </div>
                    {expert.qualities.map((quality, idx) => (
                      <p key={idx} className="text-xs text-gray-600 mt-2">
                        {quality}
                      </p>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default RelatedExperts;
