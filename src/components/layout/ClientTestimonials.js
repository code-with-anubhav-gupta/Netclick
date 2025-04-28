"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";

const ClientTestimonials = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      title: "Quality of work was excellent!",
      content:
        "I needed someone to handle my electrical work and they came through. The service arrived on time!",
      user: "Daniel Davis",
      rating: 5,
      time: "1 hour ago",
      service: "Electrical",
      image: "https://picsum.photos/200?random=1",
    },
    {
      id: 2,
      title: "Green Cleaning",
      content:
        "I love that they used eco-friendly products while still maintaining our cleanliness with care.",
      user: "Daniel Davis",
      rating: 5,
      time: "7 hours ago",
      service: "Cleaning",
      image: "https://picsum.photos/200?random=2",
    },
    {
      id: 3,
      title: "Luxury Car Cleaning",
      content:
        "Used their premium car cleaning service, which provided exceptionally high-quality outcomes with care.",
      user: "Daniel Davis",
      rating: 5,
      time: "7 hours ago",
      service: "Car Cleaning",
      image: "https://picsum.photos/200?random=3",
    },
    {
      id: 4,
      title: "Handyman Services",
      content:
        "The handyman fixed all my issues quickly and professionally. Highly recommended!",
      user: "John Doe",
      rating: 5,
      time: "2 days ago",
      service: "Handyman",
      image: "https://picsum.photos/200?random=4",
    },
    {
      id: 5,
      title: "Plumbing Service",
      content:
        "Got my plumbing fixed quickly. Excellent service, I am very happy with the outcome.",
      user: "Jane Smith",
      rating: 5,
      time: "3 days ago",
      service: "Plumbing",
      image: "https://picsum.photos/200?random=5",
    },
  ];

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div className="md:ml-20 md:w-full md:flex md:flex-col md:justify-center md:items-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">
            What Our Clients Says
          </h2>
          <p className="text-gray-800 text-sm">
            Each listing is designed to be clear and concise, providing
            customers
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
            <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
              <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" />
            </svg>
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={`bg-gray-100 border border-gray-300 text-white shadow-md p-2 rounded-full transition-all ${
              isEnd
                ? "opacity-30 cursor-not-allowed hover:bg-gray-800"
                : "hover:bg-gray-300"
            }`}
            disabled={isEnd}
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
              <path d="M7.293 4.293a1 1 0 011.414 0L13.707 9.293a1 1 0 010 1.414L8.707 15.707a1 1 0 01-1.414-1.414L11.586 10 7.293 5.707a1 1 0 010-1.414z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative">
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
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="pb-4"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <div className="flex text-amber-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <h3 className="font-bold mb-2">{testimonial.title}</h3>
                <p className="text-sm text-gray-500 mb-4">
                  {testimonial.content}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden mr-2">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.user}
                        width={32}
                        height={32}
                      />
                    </div>
                    <span className="text-sm font-medium">
                      {testimonial.user}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400">
                    {testimonial.time}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-gray-800 mb-3">
          Each listing is designed to be clear and concise, providing customers
        </p>
        <div className="flex items-center justify-center space-x-1">
          <span className="text-sm font-medium">Excellent</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-5 h-5 bg-green-800 ml-1 text-white text-xs flex items-center justify-center"
              >
                ★
              </div>
            ))}
          </div>
          <span className="text-sm text-gray-500">based on 166 reviews</span>
        </div>
      </div>

      <style jsx global>{`
        .swiper-slide {
          height: auto !important;
        }
      `}</style>
    </section>
  );
};

export default ClientTestimonials;
