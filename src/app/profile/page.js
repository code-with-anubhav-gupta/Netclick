"use client";
import Image from "next/image";
import { useState, useRef } from "react";

export default function Page() {
  // State definitions
  const [step, setStep] = useState(0);
  const fileInputRef = useRef(null);
  const [profileData, setProfileData] = useState({
    name: "Caroline",
    location: "Chandigarh, 160055",
    dob: "19/02/95",
    profileImage: "/assets/image/Girl.jpg",
    address: "",
    city: "",
    postalCode: "",
    service: "",
    description: "",
    documents: {
      govtLicense: null,
      passport: null,
      certification: null,
    },
  });

  const [notifications, setNotifications] = useState({
    newCourse: true,
    newMessages: false,
  });

  // Event Handlers
  const handleNotificationToggle = (type) => {
    setNotifications((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

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

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDocumentUpload = (type, event) => {
    const file = event.target.files[0];
    if (file) {
      const documentUrl = URL.createObjectURL(file);
      setProfileData((prev) => ({
        ...prev,
        documents: {
          ...prev.documents,
          [type]: documentUrl,
        },
      }));
    }
  };

  const ProfileView = () => (
    <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full text-black rounded-3xl shadow-2xl overflow-hidden">
        <div className="relative flex flex-col items-center">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-2 relative group">
            <Image
              src="https://picsum.photos/500/500?random=1"
              alt="Profile"
              width={96}
              height={96}
              className="w-full h-full object-cover"
              priority
            />
            {/* Edit Icon Overlay */}
            <div
              className="absolute inset-0  transition-opacity duration-200 cursor-pointer flex items-center justify-center"
              onClick={() => fileInputRef.current.click()}
            >
              <div className="absolute right-0 bottom-3  bg-white rounded-full  shadow-lg">
                <Image
                  src="/assets/image/edit.png"
                  alt="Edit"
                  width={20}
                  height={20}
                  className="object-contain w-[20] h-[20]"
                  priority
                />
              </div>
            </div>
          </div>
          <h2 className="text-lg font-semibold text-gray-900">
            {profileData.name}
          </h2>
          <p className="text-sm text-gray-500">{profileData.location}</p>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={fileInputRef}
            className="hidden"
          />
        </div>
        <div className="p-6 space-y-2">
          <hr className=" border-gray-300 "></hr>

          <div className="flex justify-between items-center ">
            <span className="text-gray-600 font-bold">Date of Birth</span>
            <span className="text-gray-800">{profileData.dob}</span>
          </div>
          <hr className=" border-gray-300 "></hr>

          <div className="flex justify-between items-center ">
            <span className="text-gray-600 font-bold">Notification</span>
          </div>

          <div className="space-y-2">
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
                  className={`w-11 h-6 rounded-full peer transition-all duration-500 ease-in-out ${
                    notifications.newCourse ? "bg-orange-400" : "bg-gray-200"
                  }`}
                >
                  <div
                    className={`absolute w-4 h-4 bg-white rounded-full shadow transform transition-all duration-500 ease-in-out ${
                      notifications.newCourse
                        ? "translate-x-6"
                        : "translate-x-1"
                    } top-1`}
                  />
                </div>
              </label>
            </div>
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
                  className={`w-11 h-6 rounded-full peer transition-all duration-500 ease-in-out ${
                    notifications.newMessages ? "bg-orange-400" : "bg-gray-200"
                  }`}
                >
                  <div
                    className={`absolute w-4 h-4 bg-white rounded-full shadow transform transition-all duration-500 ease-in-out ${
                      notifications.newMessages
                        ? "translate-x-6"
                        : "translate-x-1"
                    } top-1`}
                  />
                </div>
              </label>
            </div>
          </div>

          <div className="space-y-2 pt-4">
            <hr className=" border-gray-300 "></hr>

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

          <button
            onClick={() => setStep(1)}
            className="w-full mt-4 py-3 px-4 bg-orange-400 hover:bg-orange-500 text-white font-medium rounded-full transition duration-200"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );

  const EditView = () => {
    const [formData, setFormData] = useState({
      address: profileData.address,
      city: profileData.city,
      postalCode: profileData.postalCode,
      dob: profileData.dob,
      service: profileData.service,
    });

    const handleFormChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const handleNext = () => {
      // Update the main profileData state before moving to next step
      setProfileData((prev) => ({
        ...prev,
        ...formData,
      }));
      setStep(2);
    };

    return (
      <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full text-black  rounded-3xl shadow-2xl overflow-hidden p-8">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
              <Image
                src="https://picsum.photos/500/500?random=1"
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
          <form className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center border-b-2 border-gray-200">
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleFormChange}
                  className="w-full py-2 focus:outline-none"
                />
              </div>
              <div className="flex items-center border-b-2 border-gray-200">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleFormChange}
                  placeholder="City"
                  className="w-full py-2 focus:outline-none"
                />
              </div>
              <div className="flex items-center border-b-2 border-gray-200">
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleFormChange}
                  placeholder="Postal Code"
                  className="w-full py-2 focus:outline-none"
                />
              </div>
              <div className="flex items-center border-b-2 border-gray-200">
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleFormChange}
                  className="w-full py-2 focus:outline-none"
                />
              </div>
              <select
                name="service"
                value={formData.service}
                onChange={handleFormChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all outline-none"
              >
                <option value="">Service you&apos;re Looking</option>
                <option value="service1">Service 1</option>
                <option value="service2">Service 2</option>
                <option value="service3">Service 3</option>
              </select>
            </div>
            <button
              type="button"
              onClick={handleNext}
              className="w-full py-3 px-4 bg-orange-400 hover:bg-orange-500 text-white font-medium rounded-full transition duration-200"
            >
              Next
            </button>
          </form>
        </div>
      </div>
    );
  };

  const DocumentUploadView = () => {
    const [localDescription, setLocalDescription] = useState(
      profileData.description
    );

    const handleSubmit = () => {
      setProfileData((prev) => ({
        ...prev,
        description: localDescription,
      }));
      setStep(0);
    };

    return (
      <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full text-black rounded-3xl shadow-2xl overflow-hidden p-8">
          <div className="flex items-center border-b-2 border-gray-200">
            <input
              type="text"
              placeholder="ShortDescription"
              name="description"
              value={localDescription}
              onChange={(e) => setLocalDescription(e.target.value)}
              className="w-full py-2 focus:outline-none"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center mt-6">
            Upload Document
          </h2>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {["govtLicense", "passport", "certification"].map((docType) => (
                <div key={docType} className="flex flex-col items-center">
                  <div
                    className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-orange-400 transition-colors"
                    onClick={() => document.getElementById(docType).click()}
                  >
                    {profileData.documents[docType] ? (
                      <Image
                        src={profileData.documents[docType]}
                        alt={docType}
                        width={100}
                        height={100}
                        className="object-cover rounded-lg"
                      />
                    ) : (
                      <div className="text-4xl text-gray-400">+</div>
                    )}
                  </div>
                  <span className="mt-2 text-sm text-gray-600 capitalize">
                    {docType.replace(/([A-Z])/g, " $1").trim()}
                  </span>
                  <input
                    type="file"
                    id={docType}
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => handleDocumentUpload(docType, e)}
                  />
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full py-3 px-4 bg-orange-400 hover:bg-orange-500 text-white font-medium rounded-full transition duration-200"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Main render
  return (
    <>
      {step === 0 && <ProfileView />}
      {step === 1 && <EditView />}
      {step === 2 && <DocumentUploadView />}
    </>
  );
}
