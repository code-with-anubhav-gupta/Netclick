import SkeletonTopProviders from "../skelton/SkeletonTopProviders"
import TopProviders from "./TopProviders"
import { useAppContext } from "@/context/Context";

const TopProvidersLayout = () => {
   const { loading } = useAppContext();
  return (
    <>
    {loading ? <SkeletonTopProviders /> : <TopProviders />}
</>
  )
}

export default TopProvidersLayout