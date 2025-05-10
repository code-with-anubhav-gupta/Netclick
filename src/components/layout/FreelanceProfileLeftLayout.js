import FreelanceProfileLeftSkeleton from "../skelton/FreelanceProfileLeftSkeleton";
import FreelanceProfileLeft from "./FreelanceProfileLeft";
import { useAppContext } from "@/context/Context";

const FreelanceProfileLeftLayout = () => {
    const { loading } = useAppContext();
  return (
    <>{loading ? <FreelanceProfileLeftSkeleton /> : <FreelanceProfileLeft />}</>
  );
};

export default FreelanceProfileLeftLayout;
