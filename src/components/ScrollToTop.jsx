import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If navigating to an in-page anchor, let the browser handle it;
    // otherwise, scroll to the very top.
    if (!hash) {
      // Force immediate scroll
      window.scrollTo(0, 0);
      
      // Also scroll the document body and html elements
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Backup: set a small timeout to ensure DOM is ready
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    }
  }, [pathname, hash]);

  return null;
}