import Image from "next/image";
import { images } from "../../../public/assets/image";

const ServiceProviderCurrentRequest = () => {
  const RequestCard = [
    {
      icon: images.Electrician,
      title: "Electrician for Fixing extra wires",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    },
    {
      icon: images.Cleaner,
      title: "Home Cleaner",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    },
  ];

  return (
    <div className="mb-10 md:mx-14">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Current Requests</h2>
      <div className="space-y-4">
        {RequestCard.map((request, index) => (
          <div key={index} className="px-4 border-2 border-gray-200 rounded-lg">
            <div className="flex gap-5 items-center">
              <Image
                src={request.icon}
                alt={request.title}
                className="h-14 w-14 object-cover"
              />
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  {request.title}
                </h3>
                <p className="text-xs text-gray-600 mt-1">
                  {request.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceProviderCurrentRequest;
