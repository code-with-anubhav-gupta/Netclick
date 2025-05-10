import SkeletonFeaturedCategories from '../skelton/SkeletonFeaturedCategories'
import FeaturedCategories from './FeaturedCategories'
import { useAppContext } from "@/context/Context";

const FeaturedLayout = () => {
    const { loading } = useAppContext();
  return (
    <>
      {loading ? <SkeletonFeaturedCategories /> : <FeaturedCategories />}
    </>
  )
}

export default FeaturedLayout