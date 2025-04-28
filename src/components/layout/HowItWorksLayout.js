import SkeletonHowItWorks from "../skelton/SkeletonHowItWorks"
import HowItWorks from "./HowItWorks"


const HowItWorksLayout = ({loading}) => {
  return (
    <>
      {loading ? <SkeletonHowItWorks /> : <HowItWorks />}
    </>
  )
}

export default HowItWorksLayout