"use client";

import Link from "next/link";
import { useState } from "react";
import { GoHome } from "react-icons/go";
import { IoBookmarkOutline } from "react-icons/io5";
import { RiUserSettingsLine } from "react-icons/ri";
import { HiOutlineUserPlus } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa6";
import { TfiHelpAlt } from "react-icons/tfi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { TbBellRinging } from "react-icons/tb";

const ServiceProviderLeft = () => {
  const [activeTab, setActiveTab] = useState("welcome");
  return (
    <div className="hidden md:flex flex-col items-center md:w-1/6">
      <div className="relative">
        <div className="shadow-2xl/30 border rounded-2xl p-4">
          <div>
            <nav className="space-y-1">
              <Link href="#welcome">
                <span
                  className={`flex items-center px-4 py-3 text-xs rounded-lg ${
                    activeTab === "welcome"
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-700 hover:bg-gray-100"
                    // ? "bg-amber-100 text-amber-700"
                    // : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("welcome")}
                >
                  <GoHome className="text-lg mr-3" />
                  Welcome
                </span>
              </Link>
              <Link href="#profile">
                <span
                  className={`flex items-center px-4 py-3 text-xs rounded-lg ${
                    activeTab === "profile"
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("profile")}
                >
                  <FaRegUser className="text-lg mr-3" />
                  Profile
                </span>
              </Link>
              <Link href="#notifications">
                <span
                  className={`flex items-center px-4 py-3 text-xs rounded-lg ${
                    activeTab === "notifications"
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("notifications")}
                >
                  <TbBellRinging className="text-lg mr-3" />
                  Notifications
                  <span className="ml-auto bg-amber-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    3
                  </span>
                </span>
              </Link>
              <Link href="#requests">
                <span
                  className={`flex items-center px-4 py-3 text-xs rounded-lg ${
                    activeTab === "requests"
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("requests")}
                >
                  <IoBookmarkOutline className="text-lg mr-3" />
                  My Requests
                </span>
              </Link>
              <Link href="#account">
                <span
                  className={`flex items-center px-4 py-3 text-xs rounded-lg ${
                    activeTab === "account"
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab("account")}
                >
                  <RiUserSettingsLine className="text-xl mr-3" />
                  Account
                </span>
              </Link>
            </nav>
          </div>

          <div className="w-full">
            <div className="w-full border border-[#DFA460] rounded-2xl px-3 flex gap-2 item-center justify-center bg-amber-50">
              <div className="text-2xl flex py-3 item-start">
                <HiOutlineUserPlus className="text-[#DFA460]" />
              </div>
              <div className="py-3 ">
                <h3 className=" text-xs font-bold text-gray-500">
                  Invite Friends
                </h3>
                <p className="text-[10px] tracking-tighter text-gray-500">
                  Earn 5% of the amount your friends spend, for life.
                </p>
              </div>
            </div>
          </div>

          <div>
            <Link href="#assistance">
              <span
                className={`tracking-tight  flex items-center px-4 py-3 text-xs rounded-lg ${
                  activeTab === "assistance"
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab("assistance")}
              >
                <MdOutlineSupportAgent className="text-xl mr-3" />
                Request Assistance
              </span>
            </Link>
            <Link href="#help">
              <span
                className={`flex items-center px-4 py-3 text-xs rounded-lg ${
                  activeTab === "help"
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab("help")}
              >
                <TfiHelpAlt className="text-xl mr-3" />
                Help Center
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderLeft;
