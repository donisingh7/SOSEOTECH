
// import React, { useEffect, useRef, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   ChevronDown,
//   ChevronRight,
//   Code2,
//   Monitor,
//   Cloud,
//   Megaphone,
//   Calculator,
//   Briefcase,
//   Layout,
//   FileText,
//   Receipt,
//   Menu,
//   X,
// } from "lucide-react";

// /* ---------- helpers ---------- */
// function useOutsideClose(refs, onClose) {
//   useEffect(() => {
//     const onClick = (e) => {
//       const inside = refs.some((r) => r.current && r.current.contains(e.target));
//       if (!inside) onClose();
//     };
//     const onKey = (e) => e.key === "Escape" && onClose();
//     document.addEventListener("mousedown", onClick);
//     document.addEventListener("keydown", onKey);
//     return () => {
//       document.removeEventListener("mousedown", onClick);
//       document.removeEventListener("keydown", onKey);
//     };
//   }, [refs, onClose]);
// }

// /* ---------- NAVBAR ONLY ---------- */
// export default function Navbar({ forceSolid = false }) {
//   // dropdown / mobile states
//   const [solOpen, setSolOpen] = useState(false);
//   const [resOpen, setResOpen] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [mobileSolOpen, setMobileSolOpen] = useState(false);
//   const [mobileResOpen, setMobileResOpen] = useState(false);

//   const solBtnRef = useRef(null);
//   const solMenuRef = useRef(null);
//   const resBtnRef = useRef(null);
//   const resMenuRef = useRef(null);

//   // Close any open dropdown when clicking outside (Solutions/Resources)
//   useOutsideClose([solBtnRef, solMenuRef, resBtnRef, resMenuRef], () => {
//     setSolOpen(false);
//     setResOpen(false);
//   });

//   const location = useLocation();
//   useEffect(() => {
//     // close all menus on route change
//     setMobileOpen(false);
//     setMobileSolOpen(false);
//     setMobileResOpen(false);
//     setSolOpen(false);
//     setResOpen(false);
//   }, [location.pathname]);

//   // scroll-driven solid background
//   const [isScrolledState, setIsScrolledState] = useState(false);
//   useEffect(() => {
//     const handleScroll = () => setIsScrolledState(window.scrollY > 50);
//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   const isScrolled = forceSolid ? true : isScrolledState;

//   const menu = [
//     { label: "Home", type: "route", to: "/" },
//     { label: "About", type: "route", to: "/about" },
//     { label: "Solutions & Services", type: "solutions" },
//     { label: "Technologies", type: "route", to: "/technologies" },
//     { label: "Careers", type: "route", to: "/careers" },
//     { label: "Resources", type: "resources" },
//     { label: "Contact Us", type: "route", to: "/contact" },
//   ];

//   // Services
//   const servicesCards = [
//     {
//       id: "software-development",
//       path: "/services/software-development",
//       icon: <Code2 className="h-5 w-5" />,
//       iconTint: "text-amber-300",
//       title: "Software Development",
//       desc: "Custom software built around your business.",
//     },
//     {
//       id: "web-development",
//       path: "/services/web-development",
//       icon: <Monitor className="h-5 w-5" />,
//       iconTint: "text-sky-300",
//       title: "Web Development",
//       desc: "Modern sites and web apps that scale.",
//     },
//     {
//       id: "cloud-solutions",
//       path: "/services/cloud-solutions",
//       icon: <Cloud className="h-5 w-5" />,
//       iconTint: "text-cyan-300",
//       title: "Cloud Solutions",
//       desc: "Migration, infra, DevOps, and security.",
//     },
//     {
//       id: "marketing-services",
//       path: "/services/social-media-marketing",
//       icon: <Megaphone className="h-5 w-5" />,
//       iconTint: "text-pink-300",
//       title: "Social Media Marketing",
//       desc: "Data-led growth across channels.",
//     },
//     {
//       id: "finance-accounting",
//       path: "/services/finance-accounting",
//       icon: <Calculator className="h-5 w-5" />,
//       iconTint: "text-emerald-300",
//       title: "Finance & Accounting",
//       desc: "Compliance, reporting, and cash flow.",
//     },
//     {
//       id: "business-solutions",
//       path: "/services/business-solutions",
//       icon: <Briefcase className="h-5 w-5" />,
//       iconTint: "text-violet-300",
//       title: "Business Solutions",
//       desc: "Strategy and automation to move faster.",
//     },
//     {
//       id: "ai-chatbot",
//       path: "/services/ai-chatbot",
//       icon: <AiChatIcon className="h-5 w-5" />,
//       iconTint: "text-indigo-300",
//       title: "AI Chat Bot",
//       desc: "WhatsApp & web chat assistants.",
//     },
//   ];

//   // Resources
//   const resourceItems = [
//     {
//       to: "/blogs",
//       title: "Blogs",
//       desc: "Articles, guides, opinions",
//       icon: <FileText className="h-5 w-5" />,
//       tint: "text-sky-300",
//     },
//     {
//       to: "/resources/newsletter",
//       title: "Newsletter",
//       desc: "Monthly deep-dives",
//       icon: <Receipt className="h-5 w-5" />,
//       tint: "text-emerald-300",
//     },
//     {
//       to: "/resources/case-studies",
//       title: "Case Studies",
//       desc: "Real outcomes & wins",
//       icon: <Briefcase className="h-5 w-5" />,
//       tint: "text-amber-300",
//     },
//   ];

//   const shell =
//     "fixed top-0 left-0 z-[100] w-full transition-all duration-300 ease-out";
//   const transparent = "h-20 bg-transparent text-white border-0 shadow-none";
//   const solidCls =
//     "h-[72px] bg-slate-950/90 text-[#EAF4F6] backdrop-blur-xl shadow-lg ring-1 ring-white/5";
//   const navClasses = `${shell} ${isScrolled ? solidCls : transparent}`;

//   // trap focus in mobile panel when open (basic)
//   const mobilePanelRef = useRef(null);
//   useEffect(() => {
//     if (!mobileOpen) return;
//     const firstFocusable = mobilePanelRef.current?.querySelector(
//       'a, button, [tabindex]:not([tabindex="-1"])'
//     );
//     firstFocusable?.focus();
//   }, [mobileOpen]);

//   return (
//     <nav
//       className={navClasses}
//       style={!isScrolled ? { backgroundColor: "transparent" } : undefined}
//     >
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
//         {/* Logo */}
//         <Link to="/" className="flex items-center min-w-0">
//           <img
//             src="/soseo_logo.png"
//             alt="SOSEOTECH"
//             className="h-40 md:h-40 w-auto object-contain transition-[filter,opacity] duration-300"
//           />
//         </Link>

//         {/* Hamburger (mobile) */}
//         <button
//           className="inline-flex lg:hidden items-center justify-center size-10 rounded-md text-slate-100 aria-pressed:outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
//           aria-label={mobileOpen ? "Close menu" : "Open menu"}
//           aria-expanded={mobileOpen}
//           aria-controls="mobile-nav"
//           onClick={() => setMobileOpen((s) => !s)}
//         >
//           {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//         </button>

//         {/* Center nav (desktop) */}
//         <ul className="hidden lg:flex items-center gap-6">
//           {menu.map((item) => {
//             if (item.type === "route") {
//               return (
//                 <li key={item.label}>
//                   <Link
//                     to={item.to}
//                     className={`capitalize text-sm font-medium transition ${
//                       isScrolled
//                         ? "text-slate-200 hover:text-white"
//                         : "text-white/95 hover:text-white"
//                     }`}
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               );
//             }

//             /* ---- Solutions & Services (desktop dropdown) ---- */
//             if (item.type === "solutions") {
//               return (
//                 <li key={item.label} className="relative">
//                   <button
//                     ref={solBtnRef}
//                     onClick={() => {
//                       setSolOpen((v) => !v);
//                       setResOpen(false);
//                     }}
//                     className="capitalize flex items-center gap-1 text-sm font-medium text-slate-200 hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-md px-1"
//                     aria-haspopup="menu"
//                     aria-expanded={solOpen}
//                     aria-controls="solutions-menu"
//                     id="solutions-button"
//                   >
//                     {item.label}
//                     <ChevronDown
//                       size={14}
//                       className={`transition-transform ${solOpen ? "rotate-180" : ""}`}
//                     />
//                   </button>

//                   {solOpen && (
//                     <div
//                       ref={solMenuRef}
//                       id="solutions-menu"
//                       role="menu"
//                       aria-labelledby="solutions-button"
//                       className="absolute left-1/2 -translate-x-1/2 mt-3 w-[360px] rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-xl shadow-2xl ring-1 ring-black/20 p-2 z-[120]"
//                     >
//                       <ul className="py-1">
//                         {servicesCards.map((s) => (
//                           <li key={s.id}>
//                             <Link
//                               to={s.path}
//                               onClick={() => setSolOpen(false)}
//                               className="group relative flex items-start gap-3 rounded-xl px-3.5 py-3 text-left transition"
//                               role="menuitem"
//                             >
//                               {/* hover background */}
//                               <span className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition" />
//                               {/* icon chip */}
//                               <span
//                                 className={`relative z-[1] grid h-9 w-9 place-items-center rounded-lg bg-white/5 ${s.iconTint} group-hover:bg-white/10 transition`}
//                               >
//                                 {s.icon}
//                               </span>
//                               {/* text */}
//                               <span className="relative z-[1] flex-1">
//                                 <span className="block text-sm font-semibold text-slate-100">
//                                   {s.title}
//                                 </span>
//                                 <span className="block text-[12px] text-slate-400">
//                                   {s.desc}
//                                 </span>
//                               </span>
//                               {/* chevron */}
//                               <ChevronRight
//                                 size={16}
//                                 className="relative z-[1] mt-1 text-slate-500 opacity-0 -translate-x-1 transition group-hover:opacity-100 group-hover:translate-x-0"
//                               />
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </li>
//               );
//             }

//             /* ---- Resources (desktop dropdown) ---- */
//             if (item.type === "resources") {
//               return (
//                 <li key={item.label} className="relative">
//                   <button
//                     ref={resBtnRef}
//                     onClick={() => {
//                       setResOpen((v) => !v);
//                       setSolOpen(false);
//                     }}
//                     className="capitalize flex items-center gap-1 text-sm font-medium text-slate-200 hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-md px-1"
//                     aria-haspopup="menu"
//                     aria-expanded={resOpen}
//                     aria-controls="resources-menu"
//                     id="resources-button"
//                   >
//                     {item.label}
//                     <ChevronDown
//                       size={14}
//                       className={`transition-transform ${resOpen ? "rotate-180" : ""}`}
//                     />
//                   </button>

//                   {resOpen && (
//                     <div
//                       ref={resMenuRef}
//                       id="resources-menu"
//                       role="menu"
//                       aria-labelledby="resources-button"
//                       className="absolute left-1/2 -translate-x-1/2 mt-3 w-[320px] rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-xl shadow-2xl ring-1 ring-black/20 p-2 z-[120]"
//                     >
//                       <ul className="py-1">
//                         {resourceItems.map((r) => (
//                           <li key={r.title}>
//                             <Link
//                               to={r.to}
//                               onClick={() => setResOpen(false)}
//                               className="group relative flex items-start gap-3 rounded-xl px-3.5 py-3 text-left transition"
//                               role="menuitem"
//                             >
//                               <span className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition" />
//                               <span
//                                 className={`relative z-[1] grid h-9 w-9 place-items-center rounded-lg bg-white/5 ${r.tint} group-hover:bg-white/10 transition`}
//                               >
//                                 {r.icon}
//                               </span>
//                               <span className="relative z-[1] flex-1">
//                                 <span className="block text-sm font-semibold text-slate-100">
//                                   {r.title}
//                                 </span>
//                                 <span className="block text-[12px] text-slate-400">
//                                   {r.desc}
//                                 </span>
//                               </span>
//                               <ChevronRight
//                                 size={16}
//                                 className="relative z-[1] mt-1 text-slate-500 opacity-0 -translate-x-1 transition group-hover:opacity-100 group-hover:translate-x-0"
//                               />
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </li>
//               );
//             }

//             return null;
//           })}
//         </ul>

//         {/* Right CTA (desktop only) */}
//         <div className="hidden lg:block">
//           <Link
//             to="/contact"
//             className="inline-flex items-center border border-[#f6f3ee]/30 px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-semibold text-[#f6f3ee] hover:bg-[#f6f3ee] hover:text-[#241c15] transition"
//           >
//             Get Started
//           </Link>
//         </div>
//       </div>

//       {/* Mobile overlay */}
//       {mobileOpen && (
//         <div
//           className="fixed inset-0 bg-black/40 lg:hidden z-[95]"
//           onClick={() => setMobileOpen(false)}
//         />
//       )}

//       {/* Mobile panel */}
//       <div
//         id="mobile-nav"
//         ref={mobilePanelRef}
//         className={`lg:hidden fixed left-0 right-0 top-[72px] z-[99] bg-[#0b1120] text-[#f6f3ee] border-t border-slate-800 max-h-[calc(100vh-72px)] overflow-y-auto transition-all duration-200 ${
//           mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
//         }`}
//         role="dialog"
//         aria-modal="true"
//       >
//         <div className="p-4">
//           <Link to="/" className="block py-3 border-b border-slate-800 text-slate-200 hover:text-white"
//             onClick={() => setMobileOpen(false)}
//           >
//             Home
//           </Link>
//           <Link to="/about" className="block py-3 border-b border-slate-800 text-slate-200 hover:text-white"
//             onClick={() => setMobileOpen(false)}
//           >
//             About
//           </Link>

//           {/* Solutions list (mobile) */}
//           <button
//             className="w-full flex items-center justify-between py-3 border-b border-slate-800 text-left font-semibold text-slate-200 hover:text-white focus:outline-none"
//             aria-expanded={mobileSolOpen}
//             onClick={() => setMobileSolOpen((s) => !s)}
//           >
//             Solutions &amp; Services
//             <ChevronDown className={`h-4 w-4 transition-transform ${mobileSolOpen ? "rotate-180" : ""}`} />
//           </button>
//           <div className={`${mobileSolOpen ? "block" : "hidden"} pl-2.5 py-2`}>
//             {servicesCards.map((s) => (
//               <Link
//                 key={s.id}
//                 to={s.path}
//                 className="flex items-center gap-2 py-2 text-slate-300 hover:text-white"
//                 onClick={() => setMobileOpen(false)}
//               >
//                 <span className={`${s.iconTint}`}>{s.icon}</span>
//                 <span>{s.title}</span>
//               </Link>
//             ))}
//           </div>

//           <Link
//             to="/technologies"
//             className="block py-3 border-b border-slate-800 text-slate-200 hover:text-white"
//             onClick={() => setMobileOpen(false)}
//           >
//             Technologies
//           </Link>
//           <Link
//             to="/careers"
//             className="block py-3 border-b border-slate-800 text-slate-200 hover:text-white"
//             onClick={() => setMobileOpen(false)}
//           >
//             Careers
//           </Link>

//           {/* Resources (mobile) */}
//           <button
//             className="w-full flex items-center justify-between py-3 border-b border-slate-800 text-left font-semibold text-slate-200 hover:text-white focus:outline-none"
//             aria-expanded={mobileResOpen}
//             onClick={() => setMobileResOpen((s) => !s)}
//           >
//             Resources
//             <ChevronDown className={`h-4 w-4 transition-transform ${mobileResOpen ? "rotate-180" : ""}`} />
//           </button>
//           <div className={`${mobileResOpen ? "block" : "hidden"} pl-2.5 py-2`}>
//             <Link
//               to="/blogs"
//               className="flex items-center gap-2 py-2 text-slate-300 hover:text-white"
//               onClick={() => setMobileOpen(false)}
//             >
//               <FileText className="h-4 w-4" /> <span>Blogs</span>
//             </Link>
//             <Link
//               to="/resources/newsletter"
//               className="flex items-center gap-2 py-2 text-slate-300 hover:text-white"
//               onClick={() => setMobileOpen(false)}
//             >
//               <Receipt className="h-4 w-4" /> <span>Newsletter</span>
//             </Link>
//             <Link
//               to="/resources/case-studies"
//               className="flex items-center gap-2 py-2 text-slate-300 hover:text-white"
//               onClick={() => setMobileOpen(false)}
//             >
//               <Briefcase className="h-4 w-4" /> <span>Case Studies</span>
//             </Link>
//           </div>

//           <Link
//             to="/contact"
//             className="block py-3 border-b border-slate-800 text-slate-200 hover:text-white"
//             onClick={() => setMobileOpen(false)}
//           >
//             Contact Us
//           </Link>

//           <Link
//             to="/contact"
//             className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[#f6f3ee] text-[#241c15] font-semibold py-2.5"
//             onClick={() => setMobileOpen(false)}
//           >
//             Get Started
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// /* Friendly AI Chatbot icon (robot + sparkle) */
// function AiChatIcon(props) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.6"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       {...props}
//     >
//       {/* head */}
//       <rect x="5" y="7.5" width="14" height="10" rx="3.5" />
//       {/* antenna */}
//       <path d="M12 5v2.5" />
//       <circle cx="12" cy="4" r="1" />
//       {/* eyes */}
//       <circle cx="9.25" cy="12.5" r="1.25" />
//       <circle cx="14.75" cy="12.5" r="1.25" />
//       {/* smile */}
//       <path d="M9 14.5c.8.6 1.7.9 3 .9s2.2-.3 3-.9" />
//       {/* sparkle (top-right) */}
//       <path d="M18.8 6.1l.5 1.3 1.3.5-1.3.5-.5 1.3-.5-1.3-1.3-.5 1.3-.5.5-1.3z" />
//     </svg>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  ChevronRight,
  Code2,
  Monitor,
  Cloud,
  Megaphone,
  Calculator,
  Briefcase,
  Layout,
  FileText,
  Receipt,
  Menu,
  X,
} from "lucide-react";

/* ---------- helpers ---------- */
function useOutsideClose(refs, onClose) {
  useEffect(() => {
    const onClick = (e) => {
      const inside = refs.some((r) => r.current && r.current.contains(e.target));
      if (!inside) onClose();
    };
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [refs, onClose]);
}

/* ---------- NAVBAR ONLY ---------- */
export default function Navbar({ forceSolid = false }) {
  // dropdown / mobile states
  const [solOpen, setSolOpen] = useState(false);
  const [resOpen, setResOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolOpen, setMobileSolOpen] = useState(false);
  const [mobileResOpen, setMobileResOpen] = useState(false);

  const solBtnRef = useRef(null);
  const solMenuRef = useRef(null);
  const resBtnRef = useRef(null);
  const resMenuRef = useRef(null);

  useOutsideClose([solBtnRef, solMenuRef, resBtnRef, resMenuRef], () => {
    setSolOpen(false);
    setResOpen(false);
  });

  const location = useLocation();
  useEffect(() => {
    setMobileOpen(false);
    setMobileSolOpen(false);
    setMobileResOpen(false);
    setSolOpen(false);
    setResOpen(false);
  }, [location.pathname]);

  /* ------ SOLID ON SCROLL (sentinel-driven) ------ */
  const [isSolid, setIsSolid] = useState(forceSolid);

  // keep in sync with prop (non-home pages)
  useEffect(() => setIsSolid(forceSolid), [forceSolid]);

  useEffect(() => {
    if (forceSolid) return; // already solid on non-home pages
    const sentinel = document.getElementById("nav-sentinel");

    if (!sentinel) {
      // fallback to scrollY if sentinel doesn't exist
      const onScroll = () => setIsSolid(window.scrollY > 50);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    const io = new IntersectionObserver(
      ([entry]) => setIsSolid(!entry.isIntersecting),
      { root: null, rootMargin: "-72px 0px 0px 0px", threshold: 0 }
    );

    io.observe(sentinel);
    return () => io.disconnect();
  }, [forceSolid]);
  /* ----------------------------------------------- */

  const menu = [
    { label: "Home", type: "route", to: "/" },
    { label: "About", type: "route", to: "/about" },
    { label: "Solutions & Services", type: "solutions" },
    { label: "Technologies", type: "route", to: "/technologies" },
    { label: "Careers", type: "route", to: "/careers" },
    { label: "Resources", type: "resources" },
    { label: "Contact Us", type: "route", to: "/contact" },
  ];

  const servicesCards = [
    { id: "software-development", path: "/services/software-development", icon: <Code2 className="h-5 w-5" />, iconTint: "text-amber-300", title: "Software Development", desc: "Custom software built around your business." },
    { id: "web-development", path: "/services/web-development", icon: <Monitor className="h-5 w-5" />, iconTint: "text-sky-300", title: "Web Development", desc: "Modern sites and web apps that scale." },
    { id: "cloud-solutions", path: "/services/cloud-solutions", icon: <Cloud className="h-5 w-5" />, iconTint: "text-cyan-300", title: "Cloud Solutions", desc: "Migration, infra, DevOps, and security." },
    { id: "marketing-services", path: "/services/social-media-marketing", icon: <Megaphone className="h-5 w-5" />, iconTint: "text-pink-300", title: "Social Media Marketing", desc: "Data-led growth across channels." },
    { id: "finance-accounting", path: "/services/finance-accounting", icon: <Calculator className="h-5 w-5" />, iconTint: "text-emerald-300", title: "Finance & Accounting", desc: "Compliance, reporting, and cash flow." },
    { id: "business-solutions", path: "/services/business-solutions", icon: <Briefcase className="h-5 w-5" />, iconTint: "text-violet-300", title: "Business Solutions", desc: "Strategy and automation to move faster." },
    { id: "ai-chatbot", path: "/services/ai-chatbot", icon: <AiChatIcon className="h-5 w-5" />, iconTint: "text-indigo-300", title: "AI Chat Bot", desc: "WhatsApp & web chat assistants." },
  ];

  const resourceItems = [
    { to: "/blogs", title: "Blogs", desc: "Articles, guides, opinions", icon: <FileText className="h-5 w-5" />, tint: "text-sky-300" },
    { to: "/resources/newsletter", title: "Newsletter", desc: "Monthly deep-dives", icon: <Receipt className="h-5 w-5" />, tint: "text-emerald-300" },
    { to: "/resources/case-studies", title: "Case Studies", desc: "Real outcomes & wins", icon: <Briefcase className="h-5 w-5" />, tint: "text-amber-300" },
  ];

  const shell = "fixed top-0 left-0 z-[100] w-full transition-all duration-300 ease-out";
  const transparent = "h-20 bg-transparent text-white border-0 shadow-none";
  const solidCls = "h-[72px] bg-slate-950/90 text-[#EAF4F6] backdrop-blur-xl shadow-lg ring-1 ring-white/5";
  const navClasses = `${shell} ${isSolid ? solidCls : transparent}`;

  const mobilePanelRef = useRef(null);
  useEffect(() => {
    if (!mobileOpen) return;
    const firstFocusable = mobilePanelRef.current?.querySelector(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    firstFocusable?.focus();
  }, [mobileOpen]);

  return (
    <nav className={navClasses} style={!isSolid ? { backgroundColor: "transparent" } : undefined}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center min-w-0">
          <img src="/soseo_logo.png" alt="SOSEOTECH" className="h-40 md:h-40 w-auto object-contain transition-[filter,opacity] duration-300" />
        </Link>

        {/* Hamburger (mobile) */}
        <button
          className="inline-flex lg:hidden items-center justify-center size-10 rounded-md text-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((s) => !s)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Center nav (desktop) */}
        <ul className="hidden lg:flex items-center gap-6">
          {menu.map((item) => {
            if (item.type === "route") {
              return (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className={`capitalize text-sm font-medium transition ${isSolid ? "text-slate-200 hover:text-white" : "text-white/95 hover:text-white"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }

            if (item.type === "solutions") {
              return (
                <li key={item.label} className="relative">
                  <button
                    ref={solBtnRef}
                    onClick={() => { setSolOpen((v) => !v); setResOpen(false); }}
                    className="capitalize flex items-center gap-1 text-sm font-medium text-slate-200 hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-md px-1"
                    aria-haspopup="menu"
                    aria-expanded={solOpen}
                    aria-controls="solutions-menu"
                    id="solutions-button"
                  >
                    {item.label}
                    <ChevronDown size={14} className={`transition-transform ${solOpen ? "rotate-180" : ""}`} />
                  </button>

                  {solOpen && (
                    <div
                      ref={solMenuRef}
                      id="solutions-menu"
                      role="menu"
                      aria-labelledby="solutions-button"
                      className="absolute left-1/2 -translate-x-1/2 mt-3 w-[360px] rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-xl shadow-2xl ring-1 ring-black/20 p-2 z-[120]"
                    >
                      <ul className="py-1">
                        {servicesCards.map((s) => (
                          <li key={s.id}>
                            <Link
                              to={s.path}
                              onClick={() => setSolOpen(false)}
                              className="group relative flex items-start gap-3 rounded-xl px-3.5 py-3 text-left transition"
                              role="menuitem"
                            >
                              <span className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition" />
                              <span className={`relative z-[1] grid h-9 w-9 place-items-center rounded-lg bg-white/5 ${s.iconTint} group-hover:bg-white/10 transition`}>
                                {s.icon}
                              </span>
                              <span className="relative z-[1] flex-1">
                                <span className="block text-sm font-semibold text-slate-100">{s.title}</span>
                                <span className="block text-[12px] text-slate-400">{s.desc}</span>
                              </span>
                              <ChevronRight size={16} className="relative z-[1] mt-1 text-slate-500 opacity-0 -translate-x-1 transition group-hover:opacity-100 group-hover:translate-x-0" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            }

            if (item.type === "resources") {
              return (
                <li key={item.label} className="relative">
                  <button
                    ref={resBtnRef}
                    onClick={() => { setResOpen((v) => !v); setSolOpen(false); }}
                    className="capitalize flex items-center gap-1 text-sm font-medium text-slate-200 hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-md px-1"
                    aria-haspopup="menu"
                    aria-expanded={resOpen}
                    aria-controls="resources-menu"
                    id="resources-button"
                  >
                    {item.label}
                    <ChevronDown size={14} className={`transition-transform ${resOpen ? "rotate-180" : ""}`} />
                  </button>

                  {resOpen && (
                    <div
                      ref={resMenuRef}
                      id="resources-menu"
                      role="menu"
                      aria-labelledby="resources-button"
                      className="absolute left-1/2 -translate-x-1/2 mt-3 w-[320px] rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-xl shadow-2xl ring-1 ring-black/20 p-2 z-[120]"
                    >
                      <ul className="py-1">
                        {resourceItems.map((r) => (
                          <li key={r.title}>
                            <Link
                              to={r.to}
                              onClick={() => setResOpen(false)}
                              className="group relative flex items-start gap-3 rounded-xl px-3.5 py-3 text-left transition"
                              role="menuitem"
                            >
                              <span className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition" />
                              <span className={`relative z-[1] grid h-9 w-9 place-items-center rounded-lg bg-white/5 ${r.tint} group-hover:bg-white/10 transition`}>
                                {r.icon}
                              </span>
                              <span className="relative z-[1] flex-1">
                                <span className="block text-sm font-semibold text-slate-100">{r.title}</span>
                                <span className="block text-[12px] text-slate-400">{r.desc}</span>
                              </span>
                              <ChevronRight size={16} className="relative z-[1] mt-1 text-slate-500 opacity-0 -translate-x-1 transition group-hover:opacity-100 group-hover:translate-x-0" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            }

            return null;
          })}
        </ul>

        {/* Right CTA (desktop) */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center border border-[#f6f3ee]/30 px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-semibold text-[#f6f3ee] hover:bg-[#f6f3ee] hover:text-[#241c15] transition"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/40 lg:hidden z-[95]" onClick={() => setMobileOpen(false)} />
      )}

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        ref={mobilePanelRef}
        className={`lg:hidden fixed left-0 right-0 top-[72px] z-[99] bg-[#0b1120] text-[#f6f3ee] border-t border-slate-800 max-h-[calc(100vh-72px)] overflow-y-auto transition-all duration-200 ${
          mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
      >
        {/* ...mobile links unchanged... */}
        {/* (keep your existing mobile content here) */}
        <div className="p-4">
           <Link to="/" className="block py-3 border-b border-slate-800 text-slate-200 hover:text-white"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <Link to="/about" className="block py-3 border-b border-slate-800 text-slate-200 hover:text-white"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>

          {/* Solutions list (mobile) */}
          <button
            className="w-full flex items-center justify-between py-3 border-b border-slate-800 text-left font-semibold text-slate-200 hover:text-white focus:outline-none"
            aria-expanded={mobileSolOpen}
            onClick={() => setMobileSolOpen((s) => !s)}
          >
            Solutions &amp; Services
            <ChevronDown className={`h-4 w-4 transition-transform ${mobileSolOpen ? "rotate-180" : ""}`} />
          </button>
          <div className={`${mobileSolOpen ? "block" : "hidden"} pl-2.5 py-2`}>
            {servicesCards.map((s) => (
              <Link
                key={s.id}
                to={s.path}
                className="flex items-center gap-2 py-2 text-slate-300 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                <span className={`${s.iconTint}`}>{s.icon}</span>
                <span>{s.title}</span>
              </Link>
            ))}
          </div>

          <Link
            to="/technologies"
            className="block py-3 border-b border-slate-800 text-slate-200 hover:text-white"
            onClick={() => setMobileOpen(false)}
          >
            Technologies
          </Link>
          <Link
            to="/careers"
            className="block py-3 border-b border-slate-800 text-slate-200 hover:text-white"
            onClick={() => setMobileOpen(false)}
          >
            Careers
          </Link>

          {/* Resources (mobile) */}
          <button
            className="w-full flex items-center justify-between py-3 border-b border-slate-800 text-left font-semibold text-slate-200 hover:text-white focus:outline-none"
            aria-expanded={mobileResOpen}
            onClick={() => setMobileResOpen((s) => !s)}
          >
            Resources
            <ChevronDown className={`h-4 w-4 transition-transform ${mobileResOpen ? "rotate-180" : ""}`} />
          </button>
          <div className={`${mobileResOpen ? "block" : "hidden"} pl-2.5 py-2`}>
            <Link
              to="/blogs"
              className="flex items-center gap-2 py-2 text-slate-300 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              <FileText className="h-4 w-4" /> <span>Blogs</span>
            </Link>
            <Link
              to="/resources/newsletter"
              className="flex items-center gap-2 py-2 text-slate-300 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              <Receipt className="h-4 w-4" /> <span>Newsletter</span>
            </Link>
            <Link
              to="/resources/case-studies"
              className="flex items-center gap-2 py-2 text-slate-300 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              <Briefcase className="h-4 w-4" /> <span>Case Studies</span>
            </Link>
          </div>

          <Link
            to="/contact"
            className="block py-3 border-b border-slate-800 text-slate-200 hover:text-white"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </Link>

          <Link
            to="/contact"
            className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[#f6f3ee] text-[#241c15] font-semibold py-2.5"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

/* Friendly AI Chatbot icon (robot + sparkle) */
function AiChatIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="5" y="7.5" width="14" height="10" rx="3.5" />
      <path d="M12 5v2.5" />
      <circle cx="12" cy="4" r="1" />
      <circle cx="9.25" cy="12.5" r="1.25" />
      <circle cx="14.75" cy="12.5" r="1.25" />
      <path d="M9 14.5c.8.6 1.7.9 3 .9s2.2-.3 3-.9" />
      <path d="M18.8 6.1l.5 1.3 1.3.5-1.3.5-.5 1.3-.5-1.3-1.3-.5 1.3-.5.5-1.3z" />
    </svg>
  );
}





