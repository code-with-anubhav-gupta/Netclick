import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import {
    FaStar,
  } from "react-icons/fa";

const ClientReview = () => {
  return (
    <div className="mb-8 text-black">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">What Client Say</h2>
        <div className="flex gap-2">
          <button className="client-prev-button bg-white rounded-full w-10 h-10 flex items-center justify-center border border-gray-400 hover:border-gray-300 transition-all">
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
          <button className="client-next-button bg-white rounded-full w-10 h-10 flex items-center justify-center border border-gray-400 hover:border-gray-300 transition-all">
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
            prevEl: ".client-prev-button",
            nextEl: ".client-next-button",
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
          }}
          className="!pb-4"
        >
          {/* Review 1 */}
          <SwiperSlide>
            <div className="rounded-lg p-4 hover:border hover:border-gray-300 h-full">
              <div className="flex mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className="text-amber-500 mr-1" />
                ))}
              </div>
              <h4 className="font-bold mb-2">Quality of work was excellent</h4>
              <p className="text-sm text-gray-600 mb-4">
                "I had a great experience with ABC Electrical on the Services.
                The electrician arrived on time!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://picsum.photos/32/32"
                  alt="Client"
                  className="rounded-full w-8 h-8 mr-2"
                />
                <span className="text-sm font-medium">Daniel Davis</span>
                <span className="text-xs text-gray-500 ml-auto">
                  7 Days Ago
                </span>
              </div>
            </div>
          </SwiperSlide>

          {/* Review 2 */}
          <SwiperSlide>
            <div className="rounded-lg p-4 hover:border hover:border-gray-300 h-full">
              <div className="flex mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className="text-amber-500 mr-1" />
                ))}
              </div>
              <h4 className="font-bold mb-2">Green Cleaning</h4>
              <p className="text-sm text-gray-600 mb-4">
                "I love that they use eco-friendly products without compromising
                on cleanliness with care."
              </p>
              <div className="flex items-center">
                <img
                  src="https://picsum.photos/32/32"
                  alt="Client"
                  className="rounded-full w-8 h-8 mr-2"
                />
                <span className="text-sm font-medium">Daniel Davis</span>
                <span className="text-xs text-gray-500 ml-auto">
                  7 Days Ago
                </span>
              </div>
            </div>
          </SwiperSlide>

          {/* Review 3 */}
          <SwiperSlide>
            <div className="rounded-lg p-4 hover:border hover:border-gray-300 h-full">
              <div className="flex mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className="text-amber-500 mr-1" />
                ))}
              </div>
              <h4 className="font-bold mb-2">Luxury Car Cleaning</h4>
              <p className="text-sm text-gray-600 mb-4">
                "I love that they use eco-friendly products without compromising
                on cleanliness with care."
              </p>
              <div className="flex items-center">
                <img
                  src="https://picsum.photos/32/32"
                  alt="Client"
                  className="rounded-full w-8 h-8 mr-2"
                />
                <span className="text-sm font-medium">Daniel Davis</span>
                <span className="text-xs text-gray-500 ml-auto">
                  7 Days Ago
                </span>
              </div>
            </div>
          </SwiperSlide>

          {/* Review 4 */}
          <SwiperSlide>
            <div className="rounded-lg p-4 hover:border hover:border-gray-300 h-full">
              <div className="flex mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className="text-amber-500 mr-1" />
                ))}
              </div>
              <h4 className="font-bold mb-2">Luxury Car Cleaning</h4>
              <p className="text-sm text-gray-600 mb-4">
                "I love that they use eco-friendly products without compromising
                on cleanliness with care."
              </p>
              <div className="flex items-center">
                <img
                  src="https://picsum.photos/32/32"
                  alt="Client"
                  className="rounded-full w-8 h-8 mr-2"
                />
                <span className="text-sm font-medium">Daniel Davis</span>
                <span className="text-xs text-gray-500 ml-auto">
                  7 Days Ago
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ClientReview;
