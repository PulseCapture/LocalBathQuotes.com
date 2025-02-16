import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // ✅ Instantly scrolls to the top when navigating to a new page
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 50);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
