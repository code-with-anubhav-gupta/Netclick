import SkeletonFeaturedCategories from '../skelton/SkeletonFeaturedCategories'
import FeaturedCategories from './FeaturedCategories'

const FeaturedLayout = ({loading}) => {
  return (
    <>
      {loading ? <SkeletonFeaturedCategories /> : <FeaturedCategories />}
    </>
  )
}

export default FeaturedLayout