import SkeletonCTABanner from "../skelton/SkeletonCTABanner"
import CTABanner from "./CTABanner"
import { useAppContext } from "@/context/Context";

const CTABannerLayout = () => {
  const { loading } = useAppContext();
  return (
    <>
    {loading ? <SkeletonCTABanner /> : <CTABanner />}
    </>
  )
}

export default CTABannerLayout