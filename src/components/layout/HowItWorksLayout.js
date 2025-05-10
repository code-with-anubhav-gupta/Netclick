import SkeletonHowItWorks from "../skelton/SkeletonHowItWorks"
import HowItWorks from "./HowItWorks"
import { useAppContext } from "@/context/Context";


const HowItWorksLayout = () => {
  const { loading } = useAppContext();
  return (
    <>
      {loading ? <SkeletonHowItWorks /> : <HowItWorks />}
    </>
  )
}

export default HowItWorksLayout