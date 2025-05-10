import SkeletonHeroSection from "../skelton/SkeletonHeroSection";
import HeroSection from "./HeroSection";
import { useAppContext } from "@/context/Context";

const HeroLayout = () => {
  const { loading } = useAppContext();
  return (
    <>
      {loading ? <SkeletonHeroSection /> : <HeroSection loading={loading} />}
    </>
  );
};

export default HeroLayout;