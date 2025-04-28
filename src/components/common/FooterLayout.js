import Footer from "@/components/common/Footer";
import SkeletonFooter from "@/components/common/SkeletonFooter";

const FooterLayout = ({ loading }) => {
  return (
    <div>
      {loading ? <SkeletonFooter /> : <Footer />}
    </div>
  );
};
export default FooterLayout;