import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Loader from "./loader";

const MainLayout = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    // Delay just to show loader (simulate data fetching or animation)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 600); // adjust time if you want

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      {loading ? <Loader /> : <Outlet />}
    </>
  );
};

export default MainLayout;
