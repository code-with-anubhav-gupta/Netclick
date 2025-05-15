"use client";
import { FaCheck } from "react-icons/fa";
import { useAppContext } from "@/context/Context";
import AddressPopup from "../common/AddressPopup";
// import MainPopup from "../popup/MainPopup"
import Image from "next/image";
import { useState } from "react";

const FreelanceProfileLeft = () => {
  const { showAddressPopup, setShowAddressPopup } = useAppContext();
  const [popUP, setPopUP] = useState("address");

  return (
    <div className="mx-auto flex flex-col items-center w-full md:w-1/4 px-4 md:px-0">
      <div className="relative  max-w-xs">
        <Image
          src="/assets/image/Women1.jpg"
          alt="Profile"
          className="rounded-2xl h-64 w-full object-cover"
          width={100}
          height={100}
        />
        <div className="absolute bottom-4 right-0 bg-[#D9A562] text-sm text-black font-semibold px-3 py-1 rounded-l-full">
          $15/h
        </div>
      </div>
      <button
        onClick={() => setShowAddressPopup(true)}
        className="bg-[#D9A562] text-white w-full max-w-[12rem] rounded-3xl py-3 mt-4 font-medium hover:bg-[#ecc48f] transition-colors cursor-pointer"
      >
        Request A Service
      </button>
      <div className="w-full text-black max-w-xs mt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-bold">★</span>
            <span className="font-bold ml-1">4.84</span>
            <span className="text-gray-500 font-medium ml-1">
              ( 345 reviews )
            </span>
          </div>
        </div>
        <div className="mt-2">
          <div className="flex items-center my-1">
            <span className="w-8 text-xs">
              5 <span className="font-bold">★</span>
            </span>
            <div className="h-1 bg-gray-200 rounded-full flex-grow">
              <div
                className="h-1 bg-black rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
            <span className="w-8 text-xs text-left">300</span>
          </div>
          <div className="flex items-center my-1">
            <span className="w-8 text-xs">
              4 <span className="font-bold">★</span>
            </span>
            <div className="h-1 bg-gray-200 rounded-full flex-grow">
              <div
                className="h-1 bg-black rounded-full"
                style={{ width: "10%" }}
              ></div>
            </div>
            <span className="w-8 text-xs text-left">35</span>
          </div>
          <div className="flex items-center my-1">
            <span className="w-8 text-xs">
              3 <span className="font-bold">★</span>
            </span>
            <div className="h-1 bg-gray-200 rounded-full flex-grow">
              <div
                className="h-1 bg-black rounded-full"
                style={{ width: "2%" }}
              ></div>
            </div>
            <span className="w-8 text-xs text-left">9</span>
          </div>
          <div className="flex items-center my-1">
            <span className="w-8 text-xs">
              2 <span className="font-bold">★</span>
            </span>
            <div className="h-1 bg-gray-200 rounded-full flex-grow">
              <div
                className="h-1 bg-black rounded-full"
                style={{ width: "0.2%" }}
              ></div>
            </div>
            <span className="w-8 text-xs text-left">1</span>
          </div>
          <div className="flex items-center my-1">
            <span className="w-8 text-xs">
              1 <span className="font-bold">★</span>
            </span>
            <div className="h-1 bg-gray-200 rounded-full flex-grow">
              <div
                className="h-1 bg-[#D9A562] rounded-full"
                style={{ width: "0%" }}
              ></div>
            </div>
            <span className="w-8 text-xs text-left">0</span>
          </div>
        </div>
      </div>
      <div className="w-full text-black max-w-xs mt-6">
        <h3 className="font-medium text-lg mb-2">Verified Information</h3>
        <div className="flex items-center mb-2">
          <FaCheck className="text-black mr-2 text-sm border-2 rounded-full" />
          <span>Identity verified</span>
        </div>
        <div className="flex items-center">
          <FaCheck className="text-black font-extralight mr-2 text-sm border-2 rounded-full" />
          <span>Verified phone number</span>
        </div>
      </div>
      <AddressPopup />
      {/* {showAddressPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setShowAddressPopup(false)}
          ></div>

          <div className="bg-white text-black rounded-lg px-8 py-3 w-full max-w-[24rem] mx-4 relative z-50 overflow-y-auto min-h-[32rem] max-h-[90vh] flex flex-col">
            <div
              className="flex my-2 justify-between items-center cursor-pointer"
              onClick={() => setShowAddressPopup(false)}
            >
              <h1>Hello POp-up</h1>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default FreelanceProfileLeft;
