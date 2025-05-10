import SkeletonNavbar from "../skelton/SkeletonNavbar"
import Navbar from "./Navbar"
// import { useLoading } from "@/context/Context";
import { useAppContext } from "@/context/Context";


const NavbarLayout = () => {
    const { loading } = useAppContext();
  return (
    <>
    {loading ? <SkeletonNavbar /> : <Navbar /> }
    </>
  )
}

export default NavbarLayout