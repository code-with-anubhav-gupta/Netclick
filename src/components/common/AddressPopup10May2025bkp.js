"use client";
import { useAppContext } from "@/context/Context";
import { useEffect, useState, useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import { popupSteps, countryCodesList } from "./popupData";
import { BiSolidCheckShield } from "react-icons/bi";
import { BsImage } from "react-icons/bs";
import Link from "next/link";

import Image from "next/image";

const AddressPopup = () => {
  const { showAddressPopup, setShowAddressPopup } = useAppContext();

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [selectedImages, setSelectedImages] = useState([]);
  const fileInputRef = useRef(null);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [selectedCountryIndex, setSelectedCountryIndex] = useState(0);

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

    currentFields.forEach((field) => {
      if (field.required && !formData[field.name]) {
        if (field.name === "phone" && formData.countryCode && formData.phone) {
          return;
        }
        newErrors[field.name] = "This field is required";
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e, fieldName) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: e.target.value,
    }));

    if (errors[fieldName]) {
      setErrors((prev) => ({
        ...prev,
        [fieldName]: "",
      }));
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + selectedImages.length > 3) {
      alert("You can only upload up to 3 images");
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
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleNext = () => {
    if (validateStep()) {
      // For the final step, check if checkboxes are checked when required
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

      if (currentStep === popupSteps.length - 1) {
        alert("Your details have been uploaded successfully.");
        setShowAddressPopup(false);
        setCurrentStep(0);
        setFormData({});
      } else {
        setCurrentStep((prev) => prev + 1);
      }
    }
  };

  const handleBack = () => {
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

  const renderField = (field) => {
    const commonClasses =
      "w-full px-3 py-2 border border-gray-400 rounded-4xl mb-1 focus:outline-none placeholder:text-sm placeholder:px-3";

    switch (field.type) {
      case "text":
        return (
          <input
            type={field.type}
            placeholder={field.placeholder}
            className={`${commonClasses} ${
              field.name === "lastName" ? "mt-3" : ""
            }`}
            value={formData[field.name] || ""}
            onChange={(e) => handleInputChange(e, field.name)}
          />
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
                : "w-full px-3 py-2 border border-gray-400 rounded-xl mb-1 focus:outline-none placeholder:text-sm placeholder:px-3"
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
            <button className="bg-[#DDA25F] absolute top-1 right-3 text-white h-8 w-8  flex items-center justify-center rounded-full cursor-pointer">
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
                      key={country.code}
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
                  <img
                    src={img.url}
                    alt={`Upload ${index + 1}`}
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
              {selectedImages.length < 3 && (
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
          <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
            {field.options.map((time) => (
              <button
                key={time}
                type="button"
                className={`p-2 bg-[#E9EAEC] text-xs  rounded-full ${
                  formData[field.name] === time
                    && "font-bold"
                   
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
          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              className="w-8 h-8 rounded-full bg-blue-100 text-blue-500"
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
            <span className="text-xl font-semibold">
              {formData[field.name] || 1}
            </span>
            <button
              type="button"
              className="w-8 h-8 rounded-full bg-blue-100 text-blue-500"
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
          <div className="space-y-3">
            {field.options.map((option) => (
              <div
                key={option.value}
                className={`p-4 border rounded-lg cursor-pointer ${
                  formData[field.name] === option.value
                    ? "border-[#D9A562] bg-orange-50"
                    : "border-gray-300"
                }`}
                onClick={() =>
                  handleInputChange(
                    { target: { value: option.value } },
                    field.name
                  )
                }
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">{option.label}</h4>
                    <p className="text-xs text-gray-500">
                      {option.description}
                    </p>
                  </div>
                  <div className="text-lg font-semibold">{option.value}</div>
                </div>
              </div>
            ))}
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

  return (
    <div className="fixed mt-5 inset-0 z-50 flex items-center justify-center overflow-hidden">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={() => setShowAddressPopup(false)}
      ></div>

      <div className="h-[32rem] max-h-[100vh] bg-white text-black rounded-lg px-8 py-3 w-full max-w-[24rem] mx-4 relative z-50 overflow-y-auto">
        <div
          className="flex justify-end items-center cursor-pointer"
          onClick={() => setShowAddressPopup(false)}
        >
          <RxCross2 className="text-lg" />
        </div>

        {/* Step indicator */}
        <h3 className="text-sm">
          {currentStepData.id === 7 || currentStepData.id === 8
            ? null
            : "Electrician"}
        </h3>
        <h2
          className={`text-2xl font-bold mb-4 ${
            currentStepData.title === "Request a Service" && "text-center"
          }`}
        >
          {currentStepData.title}
        </h2>

        <form onSubmit={(e) => e.preventDefault()}>
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
              <p className="text-[8px] tracking-wide font-medium text-gray-600">
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
              {currentStepData.images.map((image, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Image
                    src={image}
                    alt={`Service ${index + 1}`}
                    width={80}
                    height={80}
                    onClick={handleNext}
                    className="rounded-lg hover:scale-105 transition-transform cursor-pointer object-cover"
                  />
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
              <div className="flex flex-col gap-4 mt-4">
                {currentStepData.images.map((image, index) => (
                  <div key={index} onClick={handleNext} className="flex flex-col items-start">
                    <div className="flex items-center gap-4">
                      <Image
                        src={image}
                        alt={`Service ${index + 1}`}
                        width={80}
                        height={80}
                        className="rounded-lg hover:scale-105 transition-transform cursor-pointer object-cover"
                      />
                      <p className="text-xs">Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </form>

        {currentStepData.id === 7 || currentStepData.id === 8 ? null : (
          <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-4">
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
              {currentStep === popupSteps.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddressPopup;
