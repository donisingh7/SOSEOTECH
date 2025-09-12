import React, { useEffect, useRef, useState } from "react";
import { HashRouter, Routes, Route, useLocation, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
// import Team from "./components/Team";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import WhyChooseUs from "./components/WhyChooseUs";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage"; // add
import Testimonials from "./components/Testimonials";
import Technologies from "./pages/Technologies.jsx";



// inside <Route element={<ShellLayout />}> …
<Route path="/contact" element={<ContactPage />} />




/* ---------- Always-on layout (Navbar everywhere) ---------- */
function ShellLayout() {
  return (
    <>
      <Navbar /> {/* Same navbar on every page */}
      <div className="pt-20">
        <Outlet />
      </div>
    </>
  );
}

/* ---------- Home layout (no Navbar here now) ---------- */
function HomeLayout() {
  const sections = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "services", label: "SERVICE" },
    { id: "careers", label: "CAREERS" },
    { id: "team", label: "TEAM" },
    { id: "contact", label: "CONTACT US" },
  ];

  const [active, setActive] = useState("home");
  const refs = useRef(Object.fromEntries(sections.map((s) => [s.id, null])));
  const location = useLocation();

  // Auto-scroll on path like /#/services
  useEffect(() => {
    const path = location.pathname?.slice(1);
    if (path) {
      setTimeout(() => {
        document.getElementById(path)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
    }
  }, [location.pathname]);

  // Intercept anchor clicks to smooth-scroll sections
  useEffect(() => {
    const sectionIds = new Set(["home", "about", "services", "careers", "team", "contact-us", "contact"]);
    const onDocClick = (e) => {
      const a = e.target.closest('a[href]');
      if (!a) return;
      const url = new URL(a.href, window.location.href);
      const hash = url.hash;
      if (hash && sectionIds.has(hash.slice(1))) {
        e.preventDefault();
        const id = hash.slice(1);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", `#/${id}`);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  // Active section tracking
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-50% 0px -45% 0px", threshold: 0.01 }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="font-sans">
      {/* Navbar removed here; ShellLayout handles it globally */}
      <section id="home" ref={(el) => (refs.current.home = el)} className="section bg-brand-gray">
        <Hero scrollTo={scrollTo} />
      </section>

        <Services />
                <About />
  <WhyChooseUs />
        <Testimonials />                      

        {/* <Team /> */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<ShellLayout />}>
          {/* Home (also handles /about, /services, etc. for section-scroll) */}
          <Route path="/*" element={<HomeLayout />} />
          {/* True separate pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
            <Route path="/technologies" element={<Technologies />} />



        </Route>
      </Routes>
    </HashRouter>
  );
}
