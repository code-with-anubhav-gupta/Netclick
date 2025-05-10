import ServiceProviderRightSkeleton from "../skelton/ServiceProviderRightSkeleton"
import ServiceProviderRight from "./ServiceProviderRight"
import { useAppContext } from "@/context/Context";

const ServiceProviderRightLayout = () => {
  const { loading } = useAppContext();
  return (
    <>
      {loading ? <ServiceProviderRightSkeleton /> : <ServiceProviderRight />}
    </>
  )
}

export default ServiceProviderRightLayout
