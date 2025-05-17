import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const clientReviews = [
  {
    id: 1,
    title: "Quality of work was excellent",
    review:
      '“I had a great experience with ABC Electrical on the Services. The electrician arrived on time!!!"',
    clientName: "Daniel Davis",
    rating: 5,
    date: "7 Days Ago",
    clientImage: "https://picsum.photos/200?random=1",
  },
  {
    id: 2,
    title: "Green Cleaning",
    review:
      "“I love that they use eco-friendly products without compromising on cleanliness with care.”",
    clientName: "Daniel Davis",
    rating: 5,
    date: "7 Days Ago",
    clientImage: "https://picsum.photos/200?random=2",
  },
  {
    id: 3,
    title: "Luxury Car Cleaning",
    review:
      "“I love that they use eco-friendly products without compromising on cleanliness with care.”",
    clientName: "Daniel Davis",
    rating: 5,
    date: "7 Days Ago",
    clientImage: "https://picsum.photos/200?random=3",
  },
];

const ClientReview = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="m-auto text-black">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">What Client Say</h2>
        <div className="flex gap-2">
          <button
            className={`client-prev-button rounded-full w-10 h-10 flex items-center justify-center border transition-all ${
              isBeginning
                ? "bg-gray-100 border-gray-200 cursor-not-allowed"
                : "bg-white border-gray-400 hover:border-gray-300"
              // ?  "opacity-50 cursor-not-allowed"
              // : "hover:border-gray-300"
            }`}
            disabled={isBeginning}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke={isBeginning ? "#9CA3AF" : "currentColor"}
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            className={`client-next-button rounded-full w-10 h-10 flex items-center justify-center border transition-all ${
              isEnd
                ? "bg-gray-100 border-gray-200 cursor-not-allowed"
                : "bg-white border-gray-400 hover:border-gray-300"
              // ? "opacity-50 cursor-not-allowed"
              // : "hover:border-gray-300"
            }`}
            disabled={isEnd}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke={isEnd ? "#9CA3AF" : "currentColor"}
              className="w-5 h-5"
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
          onSlideChange={handleSlideChange}
          onInit={handleSlideChange}
          loop={false}
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
          {/* Reviews */}
          {clientReviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="rounded-lg p-4 hover:shadow-2xl h-full">
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className="text-[#F7C401] mr-1" />
                  ))}
                </div>
                <h4 className="font-bold mb-2">{review.title}</h4>
                <p className="text-xs tracking-tight text-gray-600 mb-4">
                  {review.review}
                </p>
                <div className="flex items-center">
                  <Image
                    src={review.clientImage}
                    alt="Client"
                    width={100}
                    height={100}
                    className="rounded-full w-8 h-8 mr-2"
                  />
                  <span className="text-sm font-medium">
                    {review.clientName}
                  </span>
                  <span className="text-xs text-gray-500 ml-auto">
                    {review.date}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ClientReview;
