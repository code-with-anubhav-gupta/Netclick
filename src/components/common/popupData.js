import {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import en from "react-phone-number-input/locale/en";
import { images } from "../../../public/assets/image/index.js";

export const countryCodesList = getCountries().map((country) => ({
  code: `+${getCountryCallingCode(country)}`,
  shortName: country,
  name: en[country],
}));

export const popupSteps = [
  {
    id: 1,
    title: "What is the address of the service?",
    fields: [
      {
        type: "text",
        name: "address",
        placeholder: "Please Enter The Address",
        required: true,
      },
    ],
    info: "This information will only be transmitted to the providers you book.",
  },
  {
    id: 2,
    title: "What telephone number can the service provider reach you on?",
    fields: [
      {
        type: "tel",
        name: "phone",
        placeholder: "050 123 4567",
        required: true,
        countryCodes: countryCodesList,
        defaultCountry: "IN",
      },
    ],
    info: "This information will only be transmitted to the providers you book.",
  },

  {
    id: 3,
    title: "Would you like to add photos? (optional)",
    fields: [
      {
        type: "file",
        name: "photos",
        placeholder: "Upload photos",
        required: false,
        multiple: true,
        accept: "image/*",
        maxFiles: 5,
      },
    ],
    info: "This information will only be transmitted to the providers you book.",
  },
  {
    id: 4,
    title: "Do you have any details to provide?",
    fields: [
      {
        type: "text",
        name: "title",
        placeholder: "Title of the request",
        required: true,
      },
      {
        type: "textarea",
        name: "details",
        placeholder: "Additional details (optional)",
        required: false,
      },
    ],
  },
  {
    id: 5,
    title: "What&apos;s your e-mail address?",
    fields: [
      {
        type: "email",
        name: "email",
        placeholder: "example@email.com",
        required: true,
      },
    ],
    info: "Your email address will allow you to find or modify your request whenever you want.",
  },
  {
    id: 6,
    title: "What is your first name?",
    fields: [
      {
        type: "text",
        name: "firstName",
        placeholder: "First Name",
        required: true,
      },
      {
        type: "text",
        name: "lastName",
        placeholder: "Last Name",
        required: true,
      },
      {
        type: "password",
        name: "password",
        placeholder: "Password",
        required: true,
      },
    ],
    info: "By registering you accept the general conditions and the privacy policy.",
    options: [
      {
        id: "newProducts",
        text: "I would like to be informed about new products, gifts and good deals",
      },
      {
        id: "goodDeals",
        text: "I would like to receive good deals from partners",
      },
    ],
  },
  {
    id: 7,
    title: "Request a Service",
    fields: [
      {
        type: "search",
        name: "serviceRequest",
        placeholder: "Search for a service",
      },
    ],
    images: [
      images.CarWash,
      images.Carpainter,
      images.Cleaner,
      images.Electrician,
      images.Plumber,
    ],
    info: "This information will only be transmitted to the providers you book.",
  },
  {
    id: 8,
    title: "Electrician",
    fields: [
      {
        type: "search",
        name: "electrician",
        placeholder: "Search for a service",
      },
    ],
    images: [
      images.CarWash,
      images.Carpainter,
      images.Cleaner,
      images.Electrician,
      images.Plumber,
    ],
    info: "This information will only be transmitted to the providers you book.",
  },
  {
    id: 9,
    title: "What time is best for you?",
    fields: [
      {
        type: "time-selector",
        name: "preferredTime",
        options: [
          "07:00",
          "07:30",
          "08:00",
          "08:30",
          "09:00",
          "09:30",
          "10:00",
          "10:30",
          "11:00",
          "11:30",
          "12:00",
          "12:30",
          "13:00",
          "13:30",
          "14:00",
          "14:30",
          "15:00",
          "15:30",
          "16:00",
          "16:30",
          "17:00",
          "17:30",
          "18:00",
          "18:30",
          "19:00",
          "19:30",
          "20:00",
          "20:30",
          "21:00",
        ],
        required: true,
      },
    ],
  },
  {
    id: 10,
    title: "Which day is best for you?",
    fields: [
      {
        type: "date",
        name: "preferredDate",
        required: true,
      },
    ],
  },
  {
    id: 11,
    title: "How many providers do you need?",
    fields: [
      {
        type: "number-selector",
        name: "providersCount",
        min: 1,
        max: 10,
        default: 1,
        // required: true,
      },
    ],
  },
  {
    id: 12,
    title: "How many hours of service do you need?",
    fields: [
      {
        type: "duration-selector",
        name: "serviceDuration",
        options: [
          {
            value: "2:00",
            label: "Short",
            description: "Example: 2 to 4 chairs, armchairs...",
          },
          {
            value: "4:00",
            label: "Classic",
            description: "Example: A chest of drawers and a bed...",
          },
          {
            value: "6:00",
            label: "Long",
            description:
              "Example: A large wardrobe or several pieces of furniture...",
          },
        ],
        required: true,
      },
    ],
  },
];
