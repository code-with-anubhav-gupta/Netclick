import ServiceProviderLeft from "./ServiceProviderLeft"
import ServiceProviderLeftSkeleton from "../skelton/ServiceProviderLeftSkeleton"
import { useAppContext } from "@/context/Context";

const ServiceProviderLeftLayout = () => {
  const { loading } = useAppContext();
  return (
    <>
      {loading ? <ServiceProviderLeftSkeleton /> : <ServiceProviderLeft />}
    </>
  )
}

export default ServiceProviderLeftLayout