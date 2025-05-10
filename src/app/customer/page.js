"use client";
import Image from "next/image";
import { useState, useRef } from "react";

export default function Page() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Caroline",
    location: "Chandigarh, 160055",
    dob: " ",
    profileImage: "/assets/image/Girl.jpg",
    address: "",
    city: "",
    postalCode: "",
    service: "",
  });
  const [notifications, setNotifications] = useState({
    newCourse: true,
    newMessages: false,
  });

  const fileInputRef = useRef(null);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileData((prev) => ({
        ...prev,
        profileImage: imageUrl,
      }));
    }
  };
  const handleNotificationToggle = (type) => {
    setNotifications((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const profileView = (
    <div className="min-h-screen bg-white  flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full  text-black rounded-3xl shadow-2xl overflow-hidden">
        <div className="relative h-32">
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
            <div className="w-40 h-40 rounded-full border-4 border-white overflow-hidden bg-white relative group">
              <Image
                src="https://picsum.photos/100/100"
                alt="Profile"
                fill
                priority
                sizes="(max-width: 160px) 100vw, 160px"
                className="bg-cover w-[160px] h-[160px] rounded-full object-cover"
              />
              <div
                className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-white shadow flex items-center justify-center cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              >
                <Image
                  className="object-contain"
                  src="/assets/image/edit.png"
                  alt="Edit"
                  width={26}
                  height={26}
                />
              </div>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
          </div>
        </div>
        <div className="pt-12 pb-8 px-6">
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              {profileData.name}
            </h2>
            <p className="text-gray-500 text-sm">{profileData.location}</p>
          </div>
          <hr className="border-t border-gray-300 mb-2" />
          <div className="space-y-4">
            <div className="flex mt-4 justify-between items-center">
              <span className="text-gray-800 font-bold">Date of Birth</span>
              <span className="text-gray-800">{profileData.dob}</span>
            </div>
            <hr className="border-t border-gray-300" />
            <div className="space-y-3">
              <p className="text-gray-800 font-bold">Notification</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">New Messages</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={notifications.newMessages}
                      onChange={() => handleNotificationToggle("newMessages")}
                    />
                    <div
                      className={`w-11 h-6 bg-gray-200 rounded-full transition-colors duration-300 ease-in-out ${
                        notifications.newMessages
                          ? "bg-green-800"
                          : "bg-gray-300"
                      }`}
                    ></div>
                    <div
                      className={`absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full shadow transform transition-transform duration-300 ease-in-out ${
                        notifications.newMessages
                          ? "translate-x-5"
                          : "translate-x-0"
                      }`}
                    ></div>
                  </label>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">New Course</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={notifications.newCourse}
                      onChange={() => handleNotificationToggle("newCourse")}
                    />
                    <div
                      className={`w-11 h-6 bg-gray-200 rounded-full transition-colors duration-300 ease-in-out ${
                        notifications.newCourse ? "bg-green-800" : "bg-gray-300"
                      }`}
                    ></div>
                    <div
                      className={`absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full shadow transform transition-transform duration-300 ease-in-out ${
                        notifications.newCourse
                          ? "translate-x-5"
                          : "translate-x-0"
                      }`}
                    ></div>
                  </label>
                </div>
              </div>
            </div>
            <hr className="border-t border-gray-300 mb-2" />
            <div className="space-y-2">
              <div className="text-gray-500 cursor-pointer hover:text-gray-700">
                Terms And Conditions
              </div>
              <div className="text-gray-500 cursor-pointer hover:text-gray-700">
                Privacy Policy
              </div>
              <div className="text-gray-500 cursor-pointer hover:text-gray-700">
                Help
              </div>
            </div>
          </div>
          <button
            className="w-full mt-8 py-3 px-4 bg-orange-400 hover:bg-orange-500 text-white font-medium rounded-full transition duration-200"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );

  const editView = (
    <div className="min-h-screen flex bg-white items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-md w-full text-black space-y-8  p-8 rounded-2xl shadow-2xl">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
            <Image
              src="https://picsum.photos/300/300?random=girl"
              alt="Profile"
              width={96}
              height={96}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {profileData.name}
          </h2>
        </div>
        <form onSubmit={handleEditSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center border-b-2 border-gray-200">
              <span className="text-gray-500 mr-2"></span>
              <input
                type="tel"
                placeholder="Address"
                name="address"
                value={profileData.address}
                onChange={handleEditChange}
                className="w-full py-2 focus:outline-none"
              />
            </div>
            <div className="flex items-center border-b-2 border-gray-200">
              <span className="text-gray-500 mr-2"></span>
              <input
                type="text"
                name="city"
                value={profileData.city}
                onChange={handleEditChange}
                placeholder="City"
                className="w-full py-2 focus:outline-none"
              />
            </div>
            <div className="flex items-center border-b-2 border-gray-200">
              <span className="text-gray-500 mr-2"></span>
              <input
                type="text"
                name="postalCode"
                value={profileData.postalCode}
                onChange={handleEditChange}
                placeholder="Postal Code"
                className="w-full py-2 focus:outline-none"
              />
            </div>
            <div className="flex items-center border-b-2 border-gray-200">
              <span className="text-gray-500 mr-2"></span>
              <input
                type="number"
                name="dob"
                value={profileData.dob}
                onChange={handleEditChange}
                placeholder="Date of Birth"
                className="w-full py-2 focus:outline-none"
              />
            </div>
            <select
              name="service"
              value={profileData.service}
              placeholder="Service you're Looking"
              onChange={handleEditChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all outline-none"
            >
              <option value="">Service you're Looking</option>
              <option value="service1">Service 1</option>
              <option value="service2">Service 2</option>
              <option value="service3">Service 3</option>
            </select>
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-orange-400 hover:bg-orange-500 text-white font-medium rounded-full transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return isEditing ? editView : profileView;
}
