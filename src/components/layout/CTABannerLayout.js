import SkeletonCTABanner from "../skelton/SkeletonCTABanner"
import CTABanner from "./CTABanner"

const CTABannerLayout = ({loading}) => {
  return (
    <>
    {loading ? <SkeletonCTABanner /> : <CTABanner />}
    </>
  )
}

export default CTABannerLayout