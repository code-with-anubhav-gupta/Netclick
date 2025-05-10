import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const SocialMediaSidebar = () => {
  return (
    <>
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 shadow-lg rounded-l-lg p-2 block z-10">
        <div className="flex flex-col space-y-4">
          <a href="#" className="text-gray-500 hover:text-gray-700">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>
    </>
  );
};

export default SocialMediaSidebar;
