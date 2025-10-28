

import React from "react";
import { BrowserRouter, Routes, Route, Outlet, useLocation } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import WhyChooseUs from "./components/WhyChooseUs";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";
import Testimonials from "./components/Testimonials";
import Technologies from "./pages/Technologies.jsx";
import Blogs from "./pages/Blogs.jsx";
import CaseStudies from "./pages/CaseStudies.jsx";
import NewsLetter from "./pages/NewsLetter.jsx";
import BlogDetail from "./pages/BlogDetail.jsx";
import CaseStudyDetail from "./pages/CaseStudyDetail.jsx";
import NewsletterDetail from "./pages/NewsLetterDetail.jsx";

import SoftwareDevelopment from "./pages/servicepages/SoftwareDevelopment.jsx";
import WebsiteDevelopment from "./pages/servicepages/WebDev.jsx";
import CloudSolution from "./pages/servicepages/CloudSol.jsx";
import SocialMediaMarketing from "./pages/servicepages/SocialMarketing.jsx";
import FinanceConsulting from "./pages/servicepages/Finance.jsx";
import BusinessSolutions from "./pages/servicepages/Business.jsx";
import AIChatBot from "./pages/servicepages/Chatbot.jsx";



/* ---------- Always-on app shell: Navbar + page content + Footer ---------- */
function ShellLayout() {
  const { pathname } = useLocation();
  // Solid everywhere except home (“/” in HashRouter after the #)
  const forceSolid = pathname !== "/";

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar forceSolid={forceSolid} />
      {/* Match navbar height: 72px when solid, 80px when transparent */}
      <main className={forceSolid ? "flex-1 pt-[72px]" : "flex-1 pt-20"}>
        <div id="nav-sentinel" className="h-px w-px" />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- Home (landing) with section scrolling ---------- */
function HomeLayout() {
  // Keep your existing home sections
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="font-sans">
      <section id="home" className="section bg-brand-gray">
        <Hero scrollTo={scrollTo} />
      </section>
      {/* <About /> */}
      <Services />
      <WhyChooseUs />
      <Testimonials />
      {/* Footer is already in ShellLayout */}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter >
    <ScrollToTop />
      <Routes>
        <Route element={<ShellLayout />}>
          {/* Home as the index route (so pathname === "/") */}
          <Route index element={<HomeLayout />} />

          {/* Other pages (solid navbar) */}
          <Route path="about" element={<AboutPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="technologies" element={<Technologies />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="/resources/newsletter" element={<NewsLetter/>} />
          <Route path="/resources/newsletters/:slug" element={<NewsletterDetail />} />
          <Route path="/resources/case-studies" element={<CaseStudies />} />
          <Route path="/resources/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/resources/blogs/:slug" element={<BlogDetail/>} />

          <Route path="services/software-development" element={<SoftwareDevelopment />} />
          <Route path="services/web-development" element={<WebsiteDevelopment />} />
          <Route path="services/cloud-solutions" element={<CloudSolution />} />
          <Route path="services/social-media-marketing" element={<SocialMediaMarketing />} />
          <Route path="services/finance-accounting" element={<FinanceConsulting />} />
          <Route path="services/business-solutions" element={<BusinessSolutions />} />
          <Route path="services/ai-chatbot" element={<AIChatBot />} />


          {/* (Optional) catch-all for unknown routes — send to home or a 404 page */}
          {/* <Route path="*" element={<HomeLayout />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
