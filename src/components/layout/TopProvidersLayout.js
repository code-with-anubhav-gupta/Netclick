import SkeletonTopProviders from "../skelton/SkeletonTopProviders"
import TopProviders from "./TopProviders"

const TopProvidersLayout = ({loading}) => {
  return (
    <>
    {loading ? <SkeletonTopProviders /> : <TopProviders />}
</>
  )
}

export default TopProvidersLayout