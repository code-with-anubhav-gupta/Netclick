'use client';
import React from "react";
import {
    FaFacebook,
    FaInstagram,
    FaWhatsapp,
  } from "react-icons/fa";

const Footer2 = () => {
  return (
    <>
      {" "}
      {/* Footer */}
      <footer className="bg-gray-50 py-12 border-t border-gray-200 text-black mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-amber-500">net</span>
                <span className="text-2xl font-bold text-gray-800">clic</span>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <FaWhatsapp size={20} />
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-6">
                Copyright © 2024 netclic
                <br />
                All Rights Reserved.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Discover</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Request a service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Find a job
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Become a service provider
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Mobile application
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Yoojo Direct
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Company subscription
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Invite friends{" "}
                    <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full ml-1">
                      New
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    CSR tickets
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Gift cards
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Why use us?
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Useful information</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Yoojo Insurance
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Tax credit
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Trust and security
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    VIP Status
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Partners Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Business referral services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    General customer conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    General conditions of the service provider
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Cookie management
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Yoojob becomes Yoojo
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Sending and unsubscription
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Understand everything about booking
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Download the mobile app</h4>
              <div className="flex space-x-2">
                <a href="#" className="block">
                  <img
                    src="https://img.favpng.com/8/23/25/app-store-apple-google-play-png-favpng-qTUNaPD0snEWx1GLan4dZPdae.jpg"
                    alt="App Store"
                    className="h-10 w-40 object-cover rounded"
                  />
                </a>
                <a href="#" className="block">
                  <img
                    src="https://thumbs.dreamstime.com/b/google-play-store-icons-google-play-store-icons-editable-file-included-eps-176748269.jpg"
                    alt="Google Play"
                    className="h-10 w-40 object-cover rounded"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer2;
