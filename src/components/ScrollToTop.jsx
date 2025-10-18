// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash, search } = useLocation();

  useEffect(() => {
    // If navigating to an in-page anchor, let the browser handle it;
    // otherwise, scroll to the very top.
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, search, hash]);

  return null;
}
