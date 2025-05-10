import Footer from "@/components/common/Footer";
import SkeletonFooter from "@/components/common/SkeletonFooter";
import { useAppContext } from "@/context/Context";

const FooterLayout = () => {
  const { loading } = useAppContext();
  return <div>{loading ? <SkeletonFooter /> : <Footer />}</div>;
};
export default FooterLayout;
