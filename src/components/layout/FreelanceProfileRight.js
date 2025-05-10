"use client";
import { FaStar, FaCheck, FaHeart } from "react-icons/fa";
import RelatedExperts from "./RelatedExperts";
import ClientReview from "./ClientReview";
import Image from "next/image";

const Quality_Criteria = [
  {
    title: "Relational",
    percentage: "76%",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    title: "Punctuality",
    percentage: "98%",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
];
const FreelanceProfileRight = () => {
  return (
    <div className="md:w-3/4">
      <h1 className="text-3xl text-black font-bold mb-2">Caroline</h1>
      <p className="text-gray-600 mb-4">Petcare</p>
      <p className="text-gray-700 text-sm mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis.
      </p>

      {/* Top Provider Badge */}
      <div className="border-2 border-[#D9A562] rounded-xl p-4 flex justify-between items-center mb-6">
        <div className="flex items-start gap-3">
          <div className="max-sm:mt-5 max-sm:w-30 flex items-center">
            <FaHeart
              size={45}
              className="w-20 fill-white stroke-[#DBA65F] stroke-60"
            />
            <span className="text-[#DBA65F] -mt-3 font-light text-5xl">|</span>
          </div>
          <div className="text-black flex flex-col justify-center items-start">
            <h3 className="font-bold mb-1">Top provider</h3>
            <p className="text-gray-600 text-sm">
              This badge highlights the most competent and highest rated
              providers on Yoojo.
            </p>
          </div>
        </div>
      </div>

      {/* Quality Criteria */}
      <div className="text-black mb-6">
        <h3 className="font-bold text-lg mb-6">Quality Criteria</h3>
        {/* Second Block */}
        {Quality_Criteria.map((item, index) => (
          <div key={index}>
            <div key={index} className="w-full px-2 flex gap-4">
              <div className="flex justify-center items-center">
                <span className="text-3xl font-bold mr-2">
                  {item.percentage}
                </span>
              </div>
              <div className="flex flex-col justify-center items-start">
                <span className="font font-semibold text-gray-700">
                  {item.title}
                </span>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
            {/* Divider Line */}
            {index < Quality_Criteria.length - 1 && (
              <div className="border-t border-gray-300 my-6"></div>
            )}
          </div>
        ))}
      </div>

      {/* Service Area Map */}
      <div className="mb-8">
        <div className="bg-gray-100 rounded-lg p-2 h-60 relative overflow-hidden">
          <Image
            src="/assets/image/Map.png"
            alt="Service area map"
            width={900}
            height={900}
            className="w-full h-full object-cover rounded-lg"
            priority
          />
         
        </div>
      </div>

      {/* Client Reviews */}
      <ClientReview />

      {/* Related Experts */}
      <RelatedExperts />
    </div>
  );
};

export default FreelanceProfileRight;
