import FreelanceProfileRightSkeleton from "../skelton/FreelanceProfileRightSkeleton";
import FreelanceProfileRight from "./FreelanceProfileRight";
import { useAppContext } from "@/context/Context";

const FreelanceProfileRightLayout = () => {
  const { loading } = useAppContext();
  return (
    <>
      {loading ? <FreelanceProfileRightSkeleton /> : <FreelanceProfileRight />}
    </>
  );
};

export default FreelanceProfileRightLayout;
