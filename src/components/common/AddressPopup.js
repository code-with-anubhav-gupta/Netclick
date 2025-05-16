"use client";
import { useAppContext } from "@/context/Context";
import { useEffect, useState, useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import { popupSteps, countryCodesList } from "./popupData";
import { BiSolidCheckShield } from "react-icons/bi";
import { BsImage } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { HiMiniCheckCircle } from "react-icons/hi2";
import { category } from "@/app/services/itemService";
import { getTokenFromCookie } from "@/lib/auth";
import toast from "react-hot-toast";

const AddressPopup = () => {
  const { showAddressPopup, setShowAddressPopup } = useAppContext();

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    images: [],
    duration: "4:00", // Set default duration to 4:00 (Classic option)
  });
  const [errors, setErrors] = useState({});
  const [selectedImages, setSelectedImages] = useState([]);
  const [charCount, setCharCount] = useState(0); // Changed from wordCount to charCount
  const [selectedTime, setSelectedTime] = useState("4:00"); // Add state for time
  const fileInputRef = useRef(null);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [selectedCountryIndex, setSelectedCountryIndex] = useState(
    countryCodesList.findIndex((country) => country.shortName === "AE")
  );

  const [categories, setCategories] = useState([]);
  const [availableServices, setAvailableServices] = useState([]);
  useEffect(() => {
    category(setCategories);
  }, []);

  useEffect(() => {
    if (showAddressPopup) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, [showAddressPopup]);

  const validateStep = () => {
    const currentFields = popupSteps[currentStep].fields;
    const newErrors = {};
    let isValid = true;

    // If this is the photo upload step (id: 3), always return true since it's optional
    if (popupSteps[currentStep].id === 3) {
      return true;
    }

    currentFields.forEach((field) => {
      if (field.required && field.name in formData === false) {
        newErrors[field.name] = "This field is required";
        isValid = false;
      } else if (field.required && !formData[field.name]) {
        if (field.name === "phone") {
          // For phone, we need both the number and country code
          if (!formData.phone) {
            newErrors[field.name] = "Phone number is required";
            isValid = false;
          }
        } else {
          newErrors[field.name] = "This field is required";
          isValid = false;
        }
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e, fieldName) => {
    const value = e.target.value;

    if (fieldName === "title") {
      // Count characters instead of words
      const count = value.length;

      // Limit to 80 characters
      if (count <= 80) {
        setCharCount(count);
        setFormData((prev) => ({
          ...prev,
          [fieldName]: value,
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [fieldName]: value,
      }));
    }

    if (errors[fieldName]) {
      setErrors((prev) => ({
        ...prev,
        [fieldName]: "",
      }));
    }
  };

  const handleServiceClick = async (value) => {
    const playload = { mainService: value };

    const response = await fetch(
      "http://20.244.1.102:5005/api/v1/services/sub-services",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }), // only if token exists
        },
        body: JSON.stringify(playload),
      }
    );
    const data = await response.json();
    if (response.ok) {
      setAvailableServices(data.data);
    } else {
      console.error("Error submitting service request:", response.status);
      toast.error(
        "There was an error submitting your service request. Please try again."
      );
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + selectedImages.length > 5) {
      toast.error("You can only upload up to 5 images");
      return;
    }

    const newImages = files.map((file) => ({
      url: URL.createObjectURL(file),
      file: file,
    }));

    setSelectedImages((prev) => [...prev, ...newImages]);
    setFormData((prev) => ({
      ...prev,
      images: [...(prev.images || []), ...files],
    }));
  };

  const removeImage = (index) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
    setFormData((prev) => ({
      ...prev,
      images: (prev.images || []).filter((_, i) => i !== index),
    }));
  };

  const handleNext = () => {
    if (validateStep()) {
      // Special validation for the final step
      if (currentStep === 5) {
        const checkboxes = document.querySelectorAll(
          'input[type="checkbox"][data-required="true"]'
        );
        for (const checkbox of checkboxes) {
          if (!checkbox.checked) {
            setErrors((prev) => ({
              ...prev,
              checkboxes: "Please accept the required terms",
            }));
            return;
          }
        }
      }

      // Clear any previous errors
      setErrors({});

      // Special handling for photo upload step
      if (popupSteps[currentStep].id === 3) {
        // Only proceed if Next button is clicked (not auto-proceed)
        if (currentStep === popupSteps.length - 1) {
          // Handle final step submission
          toast.success("Your details have been uploaded successfully.");
          setShowAddressPopup(false);
          setCurrentStep(0);
          setFormData({});
        } else {
          // Move to next step
          setCurrentStep((prev) => prev + 1);
        }
      } else {
        // For non-photo steps, proceed normally
        if (currentStep === popupSteps.length - 1) {
          // Handle final step submission
          toast.success("Your details have been uploaded successfully.");
          setShowAddressPopup(false);
          setCurrentStep(0);
          setFormData({});
        } else {
          // Move to next step
          setCurrentStep((prev) => prev + 1);
        }
      }
    }
  };

  const handleBack = () => {
    // Clear errors when going back
    setErrors({});
    if (currentStep === 0) {
      setShowAddressPopup(false);
    } else {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const navigateCountry = (direction) => {
    if (!showCountryDropdown) {
      setShowCountryDropdown(true);
      return;
    }

    const totalCountries = countryCodesList.length;
    let newIndex;

    if (direction === "up") {
      newIndex =
        selectedCountryIndex > 0
          ? selectedCountryIndex - 1
          : totalCountries - 1;
    } else {
      newIndex =
        selectedCountryIndex < totalCountries - 1
          ? selectedCountryIndex + 1
          : 0;
    }

    setSelectedCountryIndex(newIndex);
    const country = countryCodesList[newIndex];
    handleInputChange({ target: { value: country.code } }, "countryCode");
    handleInputChange(
      { target: { value: country.shortName } },
      "countryShortName"
    );
  };

  const adjustTime = (increment) => {
    const [hours, minutes] = selectedTime.split(":").map(Number);
    let newHours = hours;

    if (increment) {
      newHours = (hours + 1) % 24;
    } else {
      newHours = (hours - 1 + 24) % 24;
    }

    const newTime = `${String(newHours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}`;
    setSelectedTime(newTime);
    handleInputChange({ target: { value: newTime } }, "duration");
  };

  const renderField = (field) => {
    const commonClasses =
      "w-full px-6 py-2 border border-gray-400 rounded-4xl mb-1 focus:outline-none placeholder:text-sm"; // Removed placeholder:px-3 and increased px to 6

    switch (field.type) {
      case "text":
        return (
          <div className="">
            {field.name === "title" && (
              <span className="flex justify-end mb-2 text-xs text-gray-500">
                {charCount}/80
              </span>
            )}
            <input
              type={field.type}
              placeholder={field.placeholder}
              className={`${commonClasses} ${
                field.name === "lastName" ? "mt-3" : ""
              }`}
              value={formData[field.name] || ""}
              onChange={(e) => handleInputChange(e, field.name)}
              maxLength={field.name === "title" ? 80 : undefined}
            />
          </div>
        );
      case "password":
        return (
          <input
            type="password"
            placeholder={field.placeholder}
            className={`${commonClasses} mt-3`}
            value={formData[field.name] || ""}
            onChange={(e) => handleInputChange(e, field.name)}
          />
        );
      case "textarea":
        return (
          <textarea
            placeholder={field.placeholder}
            className={`${
              field.type === "text"
                ? commonClasses
                : "w-full px-6 py-2 border border-gray-400 rounded-xl mb-1 focus:outline-none placeholder:text-sm"
            } mt-2 min-h-[100px]`}
            value={formData[field.name] || ""}
            onChange={(e) => handleInputChange(e, field.name)}
          />
        );
      case "date":
        return (
          <input
            type="date"
            className={commonClasses}
            value={formData[field.name] || ""}
            onChange={(e) => handleInputChange(e, field.name)}
          />
        );
      case "search":
        return (
          <div className="relative">
            <input
              type="search"
              placeholder={field.placeholder}
              className={`${commonClasses} search-input`}
              value={formData[field.name] || ""}
              onChange={(e) => handleInputChange(e, field.name)}
            />
            <button className="bg-[#DDA25F] absolute bottom-[9px] right-3 text-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 rounded-full"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        );
      case "tel":
        return (
          <div className="flex gap-2 relative">
            <div className="relative">
              <button
                type="button"
                className="w-[70px] px-3 py-2 border border-gray-400 rounded-4xl mb-1 focus:outline-none text-sm flex items-center justify-between"
                onClick={() => setShowCountryDropdown(!showCountryDropdown)}
              >
                <span>{formData.countryShortName || field.defaultCountry}</span>
                <div className="flex flex-col">
                  <span
                    className="text-[8px] cursor-pointer hover:text-[#D9A562]"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateCountry("up");
                    }}
                  >
                    ▲
                  </span>
                  <span
                    className="text-[8px] cursor-pointer hover:text-[#D9A562]"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateCountry("down");
                    }}
                  >
                    ▼
                  </span>
                </div>
              </button>
              {showCountryDropdown && (
                <div className="absolute z-50 top-full left-0 mt-1 w-48 max-h-48 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg">
                  {field.countryCodes.map((country) => (
                    <div
                      key={`${country.shortName}-${country.code}`}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                      onClick={() => {
                        handleInputChange(
                          { target: { value: country.code } },
                          "countryCode"
                        );
                        handleInputChange(
                          { target: { value: country.shortName } },
                          "countryShortName"
                        );
                        setShowCountryDropdown(false);
                      }}
                    >
                      <span className="font-medium">{country.shortName}</span>
                      <span className="text-sm text-gray-600">
                        {country.code}
                      </span>
                      <span className="text-sm text-gray-500 truncate">
                        ({country.name})
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <input
              type="tel"
              placeholder={field.placeholder}
              className="flex-1 px-3 py-2 border border-gray-400 rounded-4xl mb-1 focus:outline-none placeholder:text-sm"
              value={formData.phone || ""}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9]/g, "");
                handleInputChange({ target: { value } }, "phone");
              }}
              maxLength={15}
            />
          </div>
        );
      case "file":
        return (
          <div className="mb-4">
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              multiple
              onChange={handleImageChange}
            />
            <div className="flex flex-wrap gap-2 mb-2">
              {selectedImages.map((img, index) => (
                <div key={index} className="relative w-20 h-20">
                  <Image
                    src={img.url}
                    alt={`Upload ${index + 1}`}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover rounded"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                  >
                    ×
                  </button>
                </div>
              ))}
              {selectedImages.length < 5 && (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-20 h-20 border-2 border-dashed border-gray-300 rounded flex items-center justify-center"
                >
                  <BsImage className="text-2xl text-gray-400" />
                </button>
              )}
            </div>
          </div>
        );
      case "time-selector":
        return (
          <div className="grid grid-cols-5 md:grid-cols-6 gap-3">
            {field.options.map((time) => (
              <button
                key={time}
                type="button"
                className={`p-2 bg-[#E9EAEC] text-xs  rounded-full ${
                  formData[field.name] === time && "font-bold"
                } cursor-pointer`}
                onClick={() =>
                  handleInputChange({ target: { value: time } }, field.name)
                }
              >
                {time}
              </button>
            ))}
          </div>
        );
      case "number-selector":
        return (
          <div className="flex items-center justify-center gap-6">
            <button
              type="button"
              className="w-10 h-10 rounded-full text-2xl bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
              onClick={() => {
                const currentValue = Number(formData[field.name] || 1);
                if (currentValue > field.min) {
                  handleInputChange(
                    { target: { value: currentValue - 1 } },
                    field.name
                  );
                }
              }}
            >
              -
            </button>
            <span className="text-3xl font-semibold">
              {formData[field.name] || 1}
            </span>
            <button
              type="button"
              className="w-10 h-10 rounded-full text-2xl bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
              onClick={() => {
                const currentValue = Number(formData[field.name] || 1);
                if (currentValue < field.max) {
                  handleInputChange(
                    { target: { value: currentValue + 1 } },
                    field.name
                  );
                }
              }}
            >
              +
            </button>
          </div>
        );
      case "duration-selector":
        return (
          <div className="grid  grid-cols-3 gap-1">
            {field.options.map((option) => (
              <div
                key={option.value}
                className="relative flex flex-col gap-3 justify-center items-center h-full"
              >
                <div className="w-full h-full flex flex-col justify-start items-start">
                  <div
                    className={`relative w-full min-h-[120px] flex flex-col gap-3 items-center justify-center rounded-xl p-4 border cursor-pointer ${
                      formData[field.name] === option.value
                        ? "border-2 border-blue-400"
                        : "border-gray-200 hover:border-2 hover:border-blue-400"
                    }`}
                    onClick={() => {
                      handleInputChange(
                        { target: { value: option.value } },
                        field.name
                      );
                      setSelectedTime(option.value);
                    }}
                  >
                    {formData[field.name] === option.value && (
                      <span className="bg-white text-blue-500 text-lg font-bold absolute -top-2 -right-1">
                        <HiMiniCheckCircle />
                      </span>
                    )}

                    <Image
                      src="https://picsum.photos/200/300"
                      alt={`Duration option ${option.label}`}
                      width={200}
                      height={200}
                      className="h-8 w-8 object-cover rounded-full"
                      priority
                    />
                    <p className="text-[13px] font-extrabold text-gray-800">
                      {option.value} a.m.
                    </p>
                    {option.label === "Classic" && (
                      <span className="text-[10px] bg-amber-300 px-1 rounded-2xl absolute -bottom-[7px] ">
                        {" "}
                        ★ Popular
                      </span>
                    )}
                  </div>
                  <div className="p-2">
                    <h1 className="text-xs font-bold text-gray-600">
                      {option.label}
                    </h1>
                    <p className="text-[10px] tracking-tight text-gray-400">
                      {option.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="w-full col-span-3 text-gray-600 text-[10px] flex justify-center rounded-lg">
              OR
            </div>
            <h3 className="w-full col-span-3 flex justify-center text-xs text-gray-600">
              Adjust the number of hours manually
            </h3>
            <div className="w-full col-span-3  flex items-center justify-center gap-1">
              <button
                type="button"
                className="w-8 h-8 text-sm rounded-full font-bold bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
                onClick={() => adjustTime(false)}
              >
                -
              </button>
              <span className="text-lg font-semibold">{selectedTime} a.m.</span>
              <button
                type="button"
                className="w-8 h-8 text-sm rounded-full font-bold bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
                onClick={() => adjustTime(true)}
              >
                +
              </button>
            </div>
          </div>
        );
      default:
        return (
          <input
            type={field.type}
            placeholder={field.placeholder}
            className={commonClasses}
            value={formData[field.name] || ""}
            onChange={(e) => handleInputChange(e, field.name)}
          />
        );
    }
  };

  if (!showAddressPopup) return null;

  const currentStepData = popupSteps[currentStep];

  const token = getTokenFromCookie();


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep()) {
      try {
        const data = {
          mainService: String(formData.mainService),
          availableService: String(formData.availableService),
          timeDuration: Number(formData.serviceDuration),
          providerCount: Number(formData.providersCount),
          days: [formData.preferredDate],
          time: String(formData.preferredTime),
          address: String(formData.address),
          telephone: Number(formData.phone),
          customerOtherDetail: {
            title: String(formData.title),
            description: String(formData.details),
          },
          photos: [],
        };

        // const data = {
        //   mainService: "Cleaning",
        //   availableService: "Window Cleaning",
        //   timeDuration: 2,
        //   providerCount: 1,
        //   days: ["2025-04-01"],
        //   time: "10:00",
        //   address: "123 Main St",
        //   telephone: 1234567890,
        //   customerOtherDetail: {
        //     title: "Expert Cleaner",
        //     description: "Experienced in window cleaning",
        //   },
        //   photos: [],
        // };

        console.log("Data we want to send", data);

        // const formDataToSend = new FormData();
        // formDataToSend.append("mainService", formData.mainService);
        // formDataToSend.append("availableService", formData.availableService);
        // formDataToSend.append("timeDuration", formData.serviceDuration);
        // formDataToSend.append("providerCount", formData.providersCount);
        // formDataToSend.append("days", formData.preferredDate);
        // formDataToSend.append("time", formData.preferredTime);
        // formDataToSend.append("address", formData.address);
        // formDataToSend.append("telephone", formData.phone);
        // formDataToSend.append("customerOtherDetail", {
        //   title: formData.title,
        //   description: formData.details,
        // });
        // formDataToSend.append("photos", formData.images);

        // // Append each key-value pair
        // Object.entries(formData.image).forEach(([key, value]) => {
        //   if (key === "images" && Array.isArray(formData.images)) {
        //     formData.images.forEach((imgFile) => {
        //       formDataToSend.append("images", imgFile);
        //     });
        //   } else {
        //     formDataToSend.append(key, value);
        //   }
        // });

        // console.log(formDataToSend)

        const response = await fetch(
          "http://20.244.1.102:5005/api/v1/service-requests",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              ...(token && { Authorization: `Bearer ${token}` }), // only if token exists
            },
            body: JSON.stringify(data),
            //  body: formDataToSend,
          }
        );

        console.log(response, "request-servicesResposne--------------------");

        if (response.ok) {
          toast.success(
            "Your service request has been submitted successfully."
          );
          setShowAddressPopup(false);
          setCurrentStep(0);
          setFormData({});
          setSelectedImages([]);
        } else {
          console.error("Error submitting service request:", response.status);
          toast.error(
            "There was an error submitting your service request. Please try again."
          );
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error(
          "There was an error submitting your request. Please try again."
        );
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0  bg-black opacity-50"
        onClick={() => setShowAddressPopup(false)}
      ></div>

      <div className="bg-white text-black rounded-lg px-8 py-3 w-full max-w-[24rem] mx-4 relative z-50 overflow-y-auto min-h-[32rem] max-h-[90vh] flex flex-col">
        <div
          className="flex my-2 justify-between items-center cursor-pointer"
          onClick={() => setShowAddressPopup(false)}
        >
          <h3 className="text-sm">Electrician</h3>
          <RxCross2 className="text-lg -mr-5" />
        </div>

        {/* Step indicator */}

        <h2
          className={`text-2xl font-bold mb-4 ${
            currentStepData.title === "Request a Service" && "text-center"
          }`}
        >
          {currentStepData.title}
        </h2>

        <form onSubmit={(e) => handleSubmit(e)}>
          {currentStepData.fields.map((field) => (
            <div key={field.name}>
              {renderField(field)}
              {errors[field.name] && (
                <p className="text-red-500 text-xs mb-2">
                  {errors[field.name]}
                </p>
              )}
            </div>
          ))}
          {(currentStep === 0 || currentStep === 1 || currentStep === 2) && (
            <div className="mt-4 bg-blue-50 p-3 rounded-lg flex items-start gap-2">
              <BiSolidCheckShield className="h-5 w-5 text-blue-500 mt-0.5" />
              <p className="text-[10px] tracking-tight font-semibold  text-gray-600">
                {currentStepData.info}
              </p>
            </div>
          )}

          {currentStep === 4 && (
            <p className="text-[11px] px-4 pr-10 py-2 text-zinc-600">
              Your email address will allow you to find or modify your request
              whenever you want.{" "}
            </p>
          )}

          {currentStep === 5 && (
            <div className="flex flex-col">
              <label className="flex items-center px-4 py-1 justify-start gap-2">
                <input
                  type="checkbox"
                  className="h-3 w-3 text-blue-600"
                  data-required="true"
                  checked={formData.newsUpdates || false}
                  onChange={(e) => handleInputChange(e, "newsUpdates")}
                />
                <span className="text-[10px] tracking-tight mt-4 text-zinc-600">
                  I would like to be informed about new products, gifts and good
                  deals
                </span>
              </label>
              <label className="flex items-center px-4 py-1 justify-start gap-2">
                <input
                  type="checkbox"
                  className="h-3 w-3 text-blue-600"
                  data-required="true"
                  checked={formData.partnerDeals || false}
                  onChange={(e) => handleInputChange(e, "partnerDeals")}
                />
                <span className="text-[10px] tracking-tight text-zinc-600">
                  I would like to receive good deals from partners
                </span>
              </label>
              {errors.checkboxes && (
                <p className="text-red-500 text-xs px-4">{errors.checkboxes}</p>
              )}
              <p className="text-[8px] pl-4 pr-1 py-2 text-zinc-600">
                By registering you accept the{" "}
                <Link href="#" className="text-blue-400 font-bold">
                  general conditions
                </Link>{" "}
                and the{" "}
                <Link href="#" className="text-blue-400 font-bold">
                  privacy policy
                </Link>
              </p>
            </div>
          )}

          {currentStepData.id === 7 && (
            <div className="grid grid-cols-3 gap-4 mt-4">
              {categories.map((category) => (
                <div
                  key={category.id}
                  onClick={() => {
                    setFormData({
                      ...formData,
                      ["mainService"]: category.name,
                    });
                    handleServiceClick(category.id);
                    handleNext();
                  }}
                  className="flex flex-col items-center"
                >
                  <Image
                    src="/assets/image/Plumber.png"
                    alt={category.name}
                    value={formData.alt || "Services"}
                    width={80}
                    height={80}
                    // onClick={handleNext}
                    className="rounded-lg hover:scale-105 transition-transform cursor-pointer object-cover"
                  />
                  <span className="text-xs text-zinc-500">{category.name}</span>
                </div>
              ))}
            </div>
          )}

          {currentStepData.id === 8 && (
            <div>
              <p className="text-[11px] px-2 pr-10 py-2 text-zinc-600">
                Request a Service <span>&gt;</span>{" "}
                <span className="font-bold">Electrician</span>{" "}
              </p>
              <div className="flex flex-col gap-4 mt-4 max-h-[300px] pr-2 overflow-y-auto  modern-scrollbar">
                {availableServices.map((availableService) => (
                  <div
                    key={availableService.id}
                    // onClick={handleNext}
                    onClick={(e) => {
                      setFormData({
                        ...formData,
                        ["availableService"]: availableService.name,
                      });
                      handleNext();
                    }}
                    className="flex flex-col items-start"
                  >
                    <div className="flex items-center gap-4">
                      <Image
                        src="/assets/image/Plumber.png"
                        alt={availableService.name}
                        width={80}
                        height={80}
                        className="rounded-lg hover:scale-105 transition-transform cursor-pointer object-cover"
                      />
                      <p className="text-xs">{availableService.name}.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div
            className={`${
              currentStep !== popupSteps.length - 1 && "hidden"
            } absolute bottom-10 left-0 right-0 flex justify-center gap-4`}
          >
            <button
              type="button"
              onClick={handleBack}
              className="px-10 py-2 bg-black text-xs text-white rounded-full cursor-pointer"
            >
              Back
            </button>
            <button
              type="submit"
              className="px-10 py-2 bg-[#D9A562] text-xs text-white rounded-full cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>

        {currentStepData.id === 7 || currentStepData.id === 8 ? null : (
          <div
            className={`${
              currentStep === popupSteps.length - 1 && "hidden"
            } absolute bottom-10 left-0 right-0 flex justify-center gap-3`}
          >
            <button
              type="button"
              onClick={handleBack}
              className="px-10 py-2 bg-black text-xs text-white rounded-full cursor-pointer"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="px-10 py-2 bg-[#D9A562] text-xs text-white rounded-full  cursor-pointer"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddressPopup;
