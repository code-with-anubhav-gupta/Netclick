import { RiUserSettingsLine } from "react-icons/ri";
import Image from "next/image";
import ServiceCategory from "./ServiceCategory";
import ServiceProviderCurrentRequest from "./ServiceProviderCurrentRequest";
import RelatedExperts from "../layout/RelatedExperts";
import ServiceProviderBanner from "./ServiceProviderBanner";
import { useAppContext } from "@/context/Context";
import AddressPopup from "../common/AddressPopup";

const ServiceProviderRight = () => {
  const { setShowAddressPopup } = useAppContext();
  return (
    <div className="md:w-5/6">
      <div className="flex flex-col md:flex-row md:mx-10 md:items-center md:justify-between mb-5 ">
        <div className="flex items-center">
          <div className="relative">
            <Image
              // src="https://picsum.photos/80/80?random=1"
              src="/assets/image/BussinessWomen.jpg"
              alt="Caroline"
              width={700}
              height={700}
              className="h-18 w-18 bg-contain rounded-full"
              priority
            />
            <div className="absolute -bottom-1 -right-1 bg-black text-white rounded-full p-1">
              <RiUserSettingsLine className="text-lg cursor-pointer" />
            </div>
          </div>
          <div className="ml-4">
            <h1 className="text-2xl font-bold text-gray-900">Caroline</h1>
            <p className="text-sm text-gray-600">Address here lorem ipsum</p>
          </div>
        </div>
        <button onClick={() => setShowAddressPopup(true)}
        className="text-sm mt-4 md:-mt-5 bg-[#dfa460] text-white px-4 py-2 rounded-4xl transition-colors cursor-pointer">
          Request a Service
        </button>
      </div>

      <div className="text-sm mb-10 md:ml-32">
        <p className="text-xs tracking-tight text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labo32 et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
        <AddressPopup />
      </div>
      <div className="md:mx-18">
        <ServiceCategory />
        <ServiceProviderCurrentRequest />
        <ServiceProviderBanner />
        <div className="md:ml-15">
          <RelatedExperts />
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderRight;
