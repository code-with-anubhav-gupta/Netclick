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

const ServiceProviderSidebarContent = ({activeTab,setActiveTab,toggleDrawer}) => {
  // const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="relative w-full rounded-2xl bg-white">
      {/* Close Button */}
      <div className="flex justify-end">
        <button
          onClick={toggleDrawer}
          className="text-gray-600 text-lg hover:text-gray-900"
        >
          ✕
        </button>
      </div>
      <div className="shadow-2xl/30 border rounded-2xl p-4 w-full">
        <nav className="space-y-1">
          <NavItem
            href="#welcome"
            label="Welcome"
            icon={<GoHome className="text-xl mr-3" />}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <NavItem
            href="#profile"
            label="Profile"
            icon={<FaRegUser className="text-xl mr-3" />}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <NavItem
            href="#notifications"
            label="Notifications"
            icon={<TbBellRinging className="text-xl mr-3" />}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            badge="3"
          />
          <NavItem
            href="#requests"
            label="My Requests"
            icon={<IoBookmarkOutline className="text-xl mr-3" />}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <NavItem
            href="#account"
            label="Account"
            icon={<RiUserSettingsLine className="text-xl mr-3" />}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </nav>

        <div className="w-full mt-4">
          <div className="w-full border border-[#DFA460] rounded-2xl px-3 flex gap-2 item-center justify-center bg-amber-50">
            <div className="text-2xl flex py-3 item-start">
              <HiOutlineUserPlus className="text-[#DFA460]" />
            </div>
            <div className="py-3">
              <h3 className="text-xs font-bold text-gray-500">
                Invite Friends
              </h3>
              <p className="text-xs tracking-tighter text-gray-500">
                Earn 5% of the amount your friends spend, for life.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <NavItem
            href="#assistance"
            label="Request Assistance"
            icon={<MdOutlineSupportAgent className="text-xl mr-3" />}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <NavItem
            href="#help"
            label="Help Center"
            icon={<TfiHelpAlt className="text-xl mr-3" />}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderSidebarContent;

const NavItem = ({ href, label, icon, activeTab, setActiveTab, badge }) => (
  <Link href={href}>
    <span
      className={`flex items-center px-4 py-3 text-xs rounded-lg ${
        activeTab === href.slice(1)
          ? "bg-gray-100 text-gray-900"
          : "text-gray-700 hover:bg-gray-100"
      }`}
      onClick={() => setActiveTab(href.slice(1))}
    >
      {icon}
      {label}
      {badge && (
        <span className="ml-auto bg-amber-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
          {badge}
        </span>
      )}
    </span>
  </Link>
);
