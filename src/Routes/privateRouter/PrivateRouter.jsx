import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import PropTypes from "prop-types";

const PrivateRouter = ({ children }) => {
  const location = useLocation();
  const { user, loader } = useAuth();
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loader || showSkeleton) {
    return (
      <div className="h-screen">
        <SkeletonTheme color="#ddd" highlightColor="#ccc">
          <Skeleton height={100} width={100} duration={2} />
          <Skeleton count={20} duration={2} />
        </SkeletonTheme>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRouter;
PrivateRouter.propTypes = {
  children: PropTypes.node,
};
