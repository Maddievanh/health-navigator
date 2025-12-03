import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Always scroll to top on route change
    window.scrollTo(0, 0);

    // If on the home page AND there is a hash, remove it
    if (pathname === "/" && hash) {
      window.history.replaceState(null, "", "/");
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
