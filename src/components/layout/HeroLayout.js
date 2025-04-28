import SkeletonHeroSection from "../skelton/SkeletonHeroSection";
import HeroSection from "./HeroSection";

const HeroLayout = ({ loading }) => {
  return (
    <>
      {loading ? <SkeletonHeroSection /> : <HeroSection loading={loading} />}
    </>
  );
};

export default HeroLayout;