import SkeletonNavbar from "../skelton/SkeletonNavbar"
import Navbar from "./Navbar"


const NavbarLayout = ({loading}) => {
  return (
    <>
    {loading ? <SkeletonNavbar /> : <Navbar /> }
    </>
  )
}

export default NavbarLayout