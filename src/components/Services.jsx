

// import React, { useState, useEffect, useRef } from "react";
// import {
//   Code2, Monitor, Cloud, Megaphone, Calculator, Briefcase,
//   Building2, ShoppingCart, Globe, Shield, Search, BarChart3,
//   Users, FileText, Receipt, Settings, TrendingUp, Workflow, Server,
//   Bot, MessageSquare, Brain, Sparkles
// } from "lucide-react";
// import { Link } from "react-router-dom";

// /* ---- YOUR SERVICES DATA (added AI Chatbot at end) ---- */
// const SERVICES = [
//   {
//     icon: <Code2 className="h-7 w-7" />,
//     color: "amber",
//     title: "Software Development",
//     path: "/services/software-development",   // ✅ added
//     desc: "Custom software solutions tailored to your business needs.",
//     bullets: [
//       { text: "Enterprise Applications", icon: <Building2 className="h-4 w-4" /> },
//       { text: "SaaS Products", icon: <Cloud className="h-4 w-4" /> },
//       { text: "API Development", icon: <Server className="h-4 w-4" /> },
//     ],
//     image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1400&auto=format&fit=crop",
//   },
//   {
//     icon: <Monitor className="h-7 w-7" />,
//     color: "sky",
//     title: "Web Development",
//     path: "/services/web-development",   // ✅ added
//     desc: "Responsive websites and modern web apps built with best practices.",
//     bullets: [
//       { text: "React Applications", icon: <Code2 className="h-4 w-4" /> },
//       { text: "E-commerce Solutions", icon: <ShoppingCart className="h-4 w-4" /> },
//       { text: "Progressive Web Apps", icon: <Globe className="h-4 w-4" /> },
//     ],
//     image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1400&auto=format&fit=crop",
//   },
//   {
//     icon: <Cloud className="h-7 w-7" />,
//     color: "cyan",
//     title: "Cloud Solutions",
//     path: "/services/cloud-solutions",   // ✅ added
//     desc: "Scalable cloud infrastructure and migration for performance & security.",
//     bullets: [
//       { text: "AWS & Azure Migration", icon: <Cloud className="h-4 w-4" /> },
//       { text: "DevOps / CI-CD", icon: <Settings className="h-4 w-4" /> },
//       { text: "Cloud Security", icon: <Shield className="h-4 w-4" /> },
//     ],
//     image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop",
//   },
//   {
//     icon: <Megaphone className="h-7 w-7" />,
//     color: "pink",
//     title: "Social Media Marketing",
//     path: "/services/social-media-marketing",   // ✅ added
//     desc: "Data-driven strategies to grow your brand and improve ROI.",
//     bullets: [
//       { text: "SEO", icon: <Search className="h-4 w-4" /> },
//       { text: "Performance Ads", icon: <BarChart3 className="h-4 w-4" /> },
//       { text: "Content & Social", icon: <Users className="h-4 w-4" /> },
//     ],
//     image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop",
//   },
//   {
//     icon: <Calculator className="h-7 w-7" />,
//     color: "emerald",
//     title: "Finance & Accounting",
//     path: "/services/finance-accounting",   // ✅ added
//     desc: "End-to-end financial services to ensure compliance & optimize cash flow.",
//     bullets: [
//       { text: "Bookkeeping & Payroll", icon: <FileText className="h-4 w-4" /> },
//       { text: "Financial Reporting", icon: <Receipt className="h-4 w-4" /> },
//       { text: "Tax & Compliance", icon: <Calculator className="h-4 w-4" /> },
//     ],
//     image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop",
//   },
//   {
//     icon: <Briefcase className="h-7 w-7" />,
//     color: "violet",
//     title: "Business Solutions",
//     path: "/services/business-solutions",   // ✅ added
//     desc: "Strategic consulting and automation to streamline operations.",
//     bullets: [
//       { text: "Business Strategy", icon: <TrendingUp className="h-4 w-4" /> },
//       { text: "Operational Efficiency", icon: <Workflow className="h-4 w-4" /> },
//       { text: "Process Automation", icon: <Settings className="h-4 w-4" /> },
//     ],
//     image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1400&auto=format&fit=crop",
//   },
//   {
//     icon: <Bot className="h-7 w-7" />,
//     color: "indigo",
//     title: "AI Chatbot Solutions",
//     path: "/services/ai-chatbot",   // ✅ added
//     desc: "Build intelligent WhatsApp and website chatbots that automate customer interactions using natural language AI.",
//     bullets: [
//       { text: "WhatsApp Business Bots", icon: <MessageSquare className="h-4 w-4" /> },
//       { text: "LLM-Powered Conversations", icon: <Brain className="h-4 w-4" /> },
//       { text: "Seamless API & CRM Integration", icon: <Sparkles className="h-4 w-4" /> },
//     ],
//     image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",
//   },
// ];


// /* ---- small helper: keyboard focus loops through tabs ---- */
// function useArrowTabbing(count, setActive) {
//   const listRef = useRef(null);
//   useEffect(() => {
//     const el = listRef.current;
//     if (!el) return;
//     const onKey = (e) => {
//       const current = Number(el.dataset.active || 0);
//       if (e.key === "ArrowRight") {
//         e.preventDefault();
//         setActive((current + 1) % count);
//       } else if (e.key === "ArrowLeft") {
//         e.preventDefault();
//         setActive((current - 1 + count) % count);
//       }
//     };
//     el.addEventListener("keydown", onKey);
//     return () => el.removeEventListener("keydown", onKey);
//   }, [count, setActive]);
//   return listRef;
// }

// /* ---- main component ---- */
// export default function OurServicesTabs() {
//   const [active, setActive] = useState(0);
//   const listRef = useArrowTabbing(SERVICES.length, setActive);
//   const s = SERVICES[active];

//   return (
//     <section id="services" className="services bg-[#0b1320] text-white">
//       <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-14 md:py-16">
//         {/* Title block */}
//         <div className="text-center">
//           <div className="text-3xl md:text-[40px] font-serif font-semibold tracking-wide">
//             Our <span className="text-blue-400">Services</span>
//           </div>
//           <p className="mt-3 text-sm text-slate-300">
//             Practical, scalable solutions to build and grow with confidence.
//           </p>
//         </div>

//         {/* Tabs */}
//         <div className="mt-8">
//           <div className="border-b border-white/20" />
//           <ul
//             ref={listRef}
//             className="relative -mt-[1px] flex flex-wrap gap-x-6 gap-y-3 py-3 text-[12px] md:text-[13px] tracking-wider uppercase"
//             role="tablist"
//             aria-label="Services"
//             data-active={active}
//           >
//             {SERVICES.map((item, i) => {
//               const isActive = i === active;
//               return (
//                 <li key={item.title}>
//                   <button
//                     role="tab"
//                     aria-selected={isActive}
//                     onClick={() => setActive(i)}
//                     className={`pb-2 outline-none transition-colors ${
//                       isActive
//                         ? "text-white"
//                         : "text-slate-300 hover:text-white/90"
//                     }`}
//                   >
//                     {item.title.replace("&", " & ")}
//                     <span
//                       className={`block h-[2px] mt-2 ${
//                         isActive ? "bg-white" : "bg-transparent"
//                       }`}
//                     />
//                   </button>
//                 </li>
//               );
//             })}
//           </ul>
//           <div className="border-b border-white/20" />
//         </div>

//         {/* Panel */}
//         <div
//           role="tabpanel"
//           key={s.title}
//           className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
//         >
//           {/* left image */}
//           <div className="rounded-md overflow-hidden ring-1 ring-white/10 bg-slate-800/30">
//             <div className="aspect-[16/10] w-full">
//               <img
//                 src={s.image}
//                 alt={s.title}
//                 className="h-full w-full object-cover"
//               />
//             </div>
//           </div>

          {/* right content */}
        //   <div className="pt-2">
        //     <h3 className="text-3xl font-serif font-semibold">{s.title}</h3>
        //     <p className="mt-4 text-sm leading-6 text-slate-300 max-w-prose">
        //       {s.desc}
        //     </p>

        //     <ul className="mt-5 space-y-2 text-sm">
        //       {s.bullets?.map((b, i) => (
        //         <li key={i} className="flex items-center gap-2 text-slate-200">
        //           <span className="grid h-5 w-5 place-items-center rounded-full bg-white/10 ring-1 ring-white/20">
        //             <span className="text-slate-100">{b.icon}</span>
        //           </span>
        //           <span>{b.text}</span>
        //         </li>
        //       ))}
        //     </ul>

        //     <Link to={s.path}>
        //       <button className="mt-8 inline-flex items-center justify-center border border-white/40 px-5 py-3 text-[12px] tracking-widest uppercase hover:bg-white hover:text-[#0b1320] transition">
        //       Find Out More
        //     </button>
        //     </Link>
        //   </div>
//         </div>
//       </div>

//       {/* slide / fade animation between tabs */}
//       <style>{`
//         [role="tabpanel"]{ animation: slideIn .35s ease both; }
//         @keyframes slideIn{
//           from{ opacity:.0; transform: translateY(8px); }
//           to{ opacity:1; transform: translateY(0); }
//         }
//       `}</style>
//     </section>
//   );
// }


import React, { useState, useEffect, useRef } from "react";
import {
  Code2, Monitor, Cloud, Megaphone, Calculator, Briefcase,
  Building2, ShoppingCart, Globe, Shield, Search, BarChart3,
  Users, FileText, Receipt, Settings, TrendingUp, Workflow, Server,
  Bot, MessageSquare, Brain, Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

/* ---- SERVICES DATA ---- */
const SERVICES = [
  {
    icon: <Code2 className="h-6 w-6 sm:h-7 sm:w-7" />,
    color: "amber",
    title: "Software Development",
    path: "/services/software-development",
    desc: "Custom software solutions tailored to your business needs.",
    bullets: [
      { text: "Enterprise Applications", icon: <Building2 className="h-4 w-4" /> },
      { text: "SaaS Products", icon: <Cloud className="h-4 w-4" /> },
      { text: "API Development", icon: <Server className="h-4 w-4" /> },
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1400&auto=format&fit=crop",
  },
  {
    icon: <Monitor className="h-6 w-6 sm:h-7 sm:w-7" />,
    color: "sky",
    title: "Web Development",
    path: "/services/web-development",
    desc: "Responsive websites and modern web apps built with best practices.",
    bullets: [
      { text: "React Applications", icon: <Code2 className="h-4 w-4" /> },
      { text: "E-commerce Solutions", icon: <ShoppingCart className="h-4 w-4" /> },
      { text: "Progressive Web Apps", icon: <Globe className="h-4 w-4" /> },
    ],
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1400&auto=format&fit=crop",
  },
  {
    icon: <Cloud className="h-6 w-6 sm:h-7 sm:w-7" />,
    color: "cyan",
    title: "Cloud Solutions",
    path: "/services/cloud-solutions",
    desc: "Scalable cloud infrastructure and migration for performance & security.",
    bullets: [
      { text: "AWS & Azure Migration", icon: <Cloud className="h-4 w-4" /> },
      { text: "DevOps / CI-CD", icon: <Settings className="h-4 w-4" /> },
      { text: "Cloud Security", icon: <Shield className="h-4 w-4" /> },
    ],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop",
  },
  {
    icon: <Megaphone className="h-6 w-6 sm:h-7 sm:w-7" />,
    color: "pink",
    title: "Social Media Marketing",
    path: "/services/social-media-marketing",
    desc: "Data-driven strategies to grow your brand and improve ROI.",
    bullets: [
      { text: "SEO", icon: <Search className="h-4 w-4" /> },
      { text: "Performance Ads", icon: <BarChart3 className="h-4 w-4" /> },
      { text: "Content & Social", icon: <Users className="h-4 w-4" /> },
    ],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop",
  },
  {
    icon: <Calculator className="h-6 w-6 sm:h-7 sm:w-7" />,
    color: "emerald",
    title: "Finance & Accounting",
    path: "/services/finance-accounting",
    desc: "End-to-end financial services to ensure compliance & optimize cash flow.",
    bullets: [
      { text: "Bookkeeping & Payroll", icon: <FileText className="h-4 w-4" /> },
      { text: "Financial Reporting", icon: <Receipt className="h-4 w-4" /> },
      { text: "Tax & Compliance", icon: <Calculator className="h-4 w-4" /> },
    ],
    image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=1400&auto=format&fit=crop",
  },
  {
    icon: <Briefcase className="h-6 w-6 sm:h-7 sm:w-7" />,
    color: "violet",
    title: "Business Solutions",
    path: "/services/business-solutions",
    desc: "Strategic consulting and automation to streamline operations.",
    bullets: [
      { text: "Business Strategy", icon: <TrendingUp className="h-4 w-4" /> },
      { text: "Operational Efficiency", icon: <Workflow className="h-4 w-4" /> },
      { text: "Process Automation", icon: <Settings className="h-4 w-4" /> },
    ],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1400&auto=format&fit=crop",
  },
  {
    icon: <Bot className="h-6 w-6 sm:h-7 sm:w-7" />,
    color: "indigo",
    title: "AI Chatbot Solutions",
    path: "/services/ai-chatbot",
    desc: "Build intelligent WhatsApp and website chatbots that automate customer interactions using natural language AI.",
    bullets: [
      { text: "WhatsApp Business Bots", icon: <MessageSquare className="h-4 w-4" /> },
      { text: "LLM-Powered Conversations", icon: <Brain className="h-4 w-4" /> },
      { text: "Seamless API & CRM Integration", icon: <Sparkles className="h-4 w-4" /> },
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop",
  },
];

/* ---- helper: keyboard left/right on tab rail ---- */
function useArrowTabbing(count, setActive) {
  const listRef = useRef(null);
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const onKey = (e) => {
      const current = Number(el.dataset.active || 0);
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setActive((current + 1) % count);
        (el.querySelectorAll('button[role="tab"]')[ (current + 1) % count ])?.focus();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setActive((current - 1 + count) % count);
        (el.querySelectorAll('button[role="tab"]')[ (current - 1 + count) % count ])?.focus();
      }
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [count, setActive]);
  return listRef;
}

/* ---- main component ---- */
export default function OurServicesTabs() {
  const [active, setActive] = useState(0);
  const listRef = useArrowTabbing(SERVICES.length, setActive);
  const s = SERVICES[active];

  return (
    <section id="services" className="bg-[#0b1320] text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-16">
        {/* Title block */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-serif font-semibold tracking-wide">
            Our <span className="text-blue-400">Services</span>
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-300">
            Practical, scalable solutions to build and grow with confidence.
          </p>
        </div>

        {/* Tabs rail (mobile: horizontal scrollable pills) */}
        <div className="mt-6 sm:mt-8">
          <div className="hidden sm:block border-b border-white/20" />
          <ul
            ref={listRef}
            role="tablist"
            aria-label="Services"
            data-active={active}
            className="
              relative -mt-[1px]
              flex sm:flex-wrap
              gap-2 sm:gap-x-6 sm:gap-y-3
              py-2 sm:py-3
              text-[12px] sm:text-[13px]
              uppercase tracking-wider
              overflow-x-auto sm:overflow-visible
              snap-x snap-mandatory
              scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent
              [-webkit-overflow-scrolling:touch]
              [&>*]:shrink-0 sm:[&>*]:shrink
            "
          >
            {SERVICES.map((item, i) => {
              const isActive = i === active;
              return (
                <li key={item.title} className="snap-start sm:snap-none">
                  <button
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(i)}
                    className={[
                      "whitespace-nowrap",
                      "px-3 py-2 sm:px-0 sm:py-0",
                      "rounded-full sm:rounded-none",
                      "outline-none transition-colors",
                      isActive
                        ? "bg-white/10 sm:bg-transparent text-white"
                        : "bg-white/0 sm:bg-transparent text-slate-300 hover:text-white/90"
                    ].join(" ")}
                  >
                    <span className="inline-flex items-center gap-2 sm:gap-0">
                      <span className="sm:hidden">{item.icon}</span>
                      <span>{item.title.replace("&", " & ")}</span>
                    </span>

                    {/* underline for ≥ sm */}
                    <span
                      className={`hidden sm:block h-[2px] mt-2 ${
                        isActive ? "bg-white" : "bg-transparent"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="hidden sm:block border-b border-white/20" />
        </div>

        {/* Panel */}
        <div
          role="tabpanel"
          key={s.title}
          className="
            mt-6 sm:mt-8 md:mt-10
            grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-8 items-start
            animate-[fadeIn_.35s_ease_both]
          "
        >
          {/* left image */}
          <div className="rounded-md overflow-hidden ring-1 ring-white/10 bg-slate-800/30">
            <div className="aspect-[16/10] sm:aspect-[16/9] w-full">
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* right content */}
          <div className="pt-2">
            <h3 className="text-3xl font-serif font-semibold">{s.title}</h3>
            <p className="mt-4 text-sm leading-6 text-slate-300 max-w-prose">
              {s.desc}
            </p>

            <ul className="mt-5 space-y-2 text-sm">
              {s.bullets?.map((b, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-200">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-white/10 ring-1 ring-white/20">
                    <span className="text-slate-100">{b.icon}</span>
                  </span>
                  <span>{b.text}</span>
                </li>
              ))}
            </ul>

            <Link to={s.path}>
              <button className="mt-8 inline-flex items-center justify-center border border-white/40 px-5 py-3 text-[12px] tracking-widest uppercase hover:bg-white hover:text-[#0b1320] transition">
              Find Out More
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* animations + mobile scrollbar fix */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: .0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        /* Firefox scrollbar fallback */
        .scrollbar-thin { scrollbar-width: thin; }
      `}</style>
    </section>
  );
}
