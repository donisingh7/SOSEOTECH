import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  Code2,
  Monitor,
  Cloud,
  Megaphone,
  Calculator,
  Briefcase,
  Layout,
  Database,
  Layers,
  Server,
  Building2,
  ShoppingCart,
  Globe,
  Shield,
  Search,
  BarChart3,
  Users,
  FileText,
  Receipt,
  Settings,
  TrendingUp,
  Workflow,
} from "lucide-react";

/* Close dropdowns on outside click or Escape */
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

export default function Navbar() {
  const [techOpen, setTechOpen] = useState(false);
  const [solOpen, setSolOpen] = useState(false);

  const techBtnRef = useRef(null);
  const techMenuRef = useRef(null);
  const solBtnRef = useRef(null);
  const solMenuRef = useRef(null);

  useOutsideClose([techBtnRef, techMenuRef, solBtnRef, solMenuRef], () => {
    setTechOpen(false);
    setSolOpen(false);
  });

  const menu = [
    { label: "Home", type: "route", to: "/" },
    { label: "About", type: "route", to: "/about" },
    { label: "Solutions & Services", type: "mega" },
    { label: "Technologies", type: "dropdown" },
    { label: "Careers", type: "route", to: "/careers" },
    { label: "Contact Us", type: "route", to: "/contact" },
  ];

  const servicesCards = [
    {
      id: "software-development",
      icon: <Code2 className="h-5 w-5 text-yellow-600" />,
      title: "Software Development",
      desc: "Custom software solutions tailored to your business needs.",
      bullets: [
        { text: "Enterprise Applications", icon: <Building2 className="h-3.5 w-3.5 text-yellow-600" /> },
        { text: "SaaS Products", icon: <Cloud className="h-3.5 w-3.5 text-yellow-600" /> },
        { text: "API Development", icon: <Server className="h-3.5 w-3.5 text-yellow-600" /> },
      ],
    },
    {
      id: "web-development",
      icon: <Monitor className="h-5 w-5 text-blue-600" />,
      title: "Web Development",
      desc: "Responsive websites and modern web apps built with best practices.",
      bullets: [
        { text: "React Applications", icon: <Code2 className="h-3.5 w-3.5 text-blue-600" /> },
        { text: "E-commerce Solutions", icon: <ShoppingCart className="h-3.5 w-3.5 text-blue-600" /> },
        { text: "Progressive Web Apps", icon: <Globe className="h-3.5 w-3.5 text-blue-600" /> },
      ],
    },
    {
      id: "cloud-solutions",
      icon: <Cloud className="h-5 w-5 text-cyan-600" />,
      title: "Cloud Solutions",
      desc: "Scalable cloud infrastructure and migration for performance & security.",
      bullets: [
        { text: "AWS & Azure Migration", icon: <Cloud className="h-3.5 w-3.5 text-cyan-600" /> },
        { text: "DevOps / CI-CD", icon: <Settings className="h-3.5 w-3.5 text-cyan-600" /> },
        { text: "Cloud Security", icon: <Shield className="h-3.5 w-3.5 text-cyan-600" /> },
      ],
    },
    {
      id: "marketing-services",
      icon: <Megaphone className="h-5 w-5 text-pink-600" />,
      title: "Marketing Services",
      desc: "Data-driven strategies to grow your brand and improve ROI.",
      bullets: [
        { text: "SEO", icon: <Search className="h-3.5 w-3.5 text-pink-600" /> },
        { text: "Performance Ads", icon: <BarChart3 className="h-3.5 w-3.5 text-pink-600" /> },
        { text: "Content & Social", icon: <Users className="h-3.5 w-3.5 text-pink-600" /> },
      ],
    },
    {
      id: "finance-accounting",
      icon: <Calculator className="h-5 w-5 text-green-600" />,
      title: "Finance & Accounting",
      desc: "End-to-end financial services to ensure compliance & optimize cash flow.",
      bullets: [
        { text: "Bookkeeping & Payroll", icon: <FileText className="h-3.5 w-3.5 text-green-600" /> },
        { text: "Financial Reporting", icon: <Receipt className="h-3.5 w-3.5 text-green-600" /> },
        { text: "Tax & Compliance", icon: <Calculator className="h-3.5 w-3.5 text-green-600" /> },
      ],
    },
    {
      id: "business-solutions",
      icon: <Briefcase className="h-5 w-5 text-purple-600" />,
      title: "Business Solutions",
      desc: "Strategic consulting and automation to streamline operations.",
      bullets: [
        { text: "Business Strategy", icon: <TrendingUp className="h-3.5 w-3.5 text-purple-600" /> },
        { text: "Operational Efficiency", icon: <Workflow className="h-3.5 w-3.5 text-purple-600" /> },
        { text: "Process Automation", icon: <Settings className="h-3.5 w-3.5 text-purple-600" /> },
      ],
    },
  ];

  return (
    <nav className="fixed top-0 left-0 z-[100] w-full bg-[#241c15] text-[#f6f3ee] border-b border-[#3a2f26]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/soseo_logo.png" alt="SOSEOTECH" className="h-20 w-auto object-contain" />
        </Link>

        {/* Center nav */}
        <ul className="flex items-center gap-6">
          {menu.map((item) => {
            if (item.type === "route") {
              return (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="capitalize text-sm font-medium text-[#f6f3ee]/95 hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }

            if (item.type === "mega") {
              return (
                <li key={item.label} className="relative">
                  <button
                    ref={solBtnRef}
                    onClick={() => {
                      setSolOpen((v) => !v);
                      setTechOpen(false);
                    }}
                    className="capitalize flex items-center gap-1 text-sm font-medium text-[#f6f3ee]/95 hover:text-white transition"
                  >
                    {item.label}
                    <ChevronDown size={14} className={`transition-transform ${solOpen ? "rotate-180" : ""}`} />
                  </button>

                  {solOpen && (
                    <div
                      ref={solMenuRef}
                      className="absolute left-1/2 -translate-x-1/2 mt-3
                                 w-[1000px] max-w-[calc(100vw-2rem)]
                                 rounded-xl border border-slate-200 bg-white shadow-2xl ring-1 ring-black/5
                                 p-8 z-[110] overflow-visible"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {servicesCards.map((s) => (
                          <Link
                            key={s.title}
                            to={`/services#${s.id}`}
                            onClick={() => setSolOpen(false)}
                            className="flex flex-col items-start rounded-lg p-4 hover:bg-slate-50 transition text-left"
                          >
                            <div className="w-10 h-10 flex items-center justify-center rounded-md bg-slate-100 mb-2">
                              {s.icon}
                            </div>
                            <h4 className="text-sm font-semibold text-slate-900">{s.title}</h4>
                            <p className="text-xs text-slate-600 mt-1">{s.desc}</p>
                            <ul className="mt-2 space-y-1">
                              {s.bullets.map((b, i) => (
                                <li key={i} className="flex items-center gap-2 text-[12px] text-slate-700">
                                  {b.icon}
                                  {b.text}
                                </li>
                              ))}
                            </ul>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            }

            if (item.type === "dropdown") {
              return (
                <li key={item.label} className="relative">
                  <button
                    ref={techBtnRef}
                    onClick={() => {
                      setTechOpen((v) => !v);
                      setSolOpen(false);
                    }}
                    className="capitalize flex items-center gap-1 text-sm font-medium text-[#f6f3ee]/95 hover:text-white transition"
                  >
                    {item.label}
                    <ChevronDown size={14} className={`transition-transform ${techOpen ? "rotate-180" : ""}`} />
                  </button>

                  {techOpen && (
                    <div
                      ref={techMenuRef}
                      className="absolute left-1/2 -translate-x-1/2 mt-3
                                 w-[1000px] max-w-[calc(100vw-2rem)]
                                 rounded-xl border border-slate-200 bg-white shadow-2xl ring-1 ring-black/5
                                 p-8 z-[120] overflow-visible max-h-[75vh]"
                    >
                      {/* if viewport is short, allow scroll inside the panel */}
                      <div className="max-h-[65vh] overflow-auto pr-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                          <NavTechLink to="/technologies#mean" onDone={() => setTechOpen(false)}>
                            <TechCard
                              icon={<Server className="h-6 w-6 text-indigo-600" />}
                              title="MEAN Stack"
                              desc="MongoDB, Express, Angular, Node.js for scalable full-stack apps."
                            />
                          </NavTechLink>

                          <NavTechLink to="/technologies#mern" onDone={() => setTechOpen(false)}>
                            <TechCard
                              icon={<Layers className="h-6 w-6 text-pink-600" />}
                              title="MERN Stack"
                              desc="MongoDB, Express, React, Node.js for modern web solutions."
                            />
                          </NavTechLink>

                          <NavTechLink to="/technologies#cloud" onDone={() => setTechOpen(false)}>
                            <TechCard
                              icon={<Cloud className="h-6 w-6 text-blue-600" />}
                              title="Cloud"
                              desc="AWS, Azure, GCP with secure, scalable architecture."
                            />
                          </NavTechLink>

                          <NavTechLink to="/technologies#microsoft" onDone={() => setTechOpen(false)}>
                            <TechCard
                              icon={<Code2 className="h-6 w-6 text-green-600" />}
                              title="Microsoft"
                              desc=".NET, Azure & Power Platform for enterprises."
                            />
                          </NavTechLink>

                          <NavTechLink to="/technologies#ui-frameworks" onDone={() => setTechOpen(false)}>
                            <TechCard
                              icon={<Layout className="h-6 w-6 text-amber-600" />}
                              title="UI Frameworks"
                              desc="React, Vue, Angular, Next.js for sleek interfaces."
                            />
                          </NavTechLink>

                          <NavTechLink to="/technologies#database" onDone={() => setTechOpen(false)}>
                            <TechCard
                              icon={<Database className="h-6 w-6 text-purple-600" />}
                              title="Database"
                              desc="Secure, scalable data solutions for your apps."
                            />
                          </NavTechLink>

                          <NavTechLink to="/technologies#python-django" onDone={() => setTechOpen(false)}>
                            <TechCard
                              icon={<Code2 className="h-6 w-6 text-red-600" />}
                              title="Python & Django"
                              desc="Backends/APIs with Django, Flask & FastAPI."
                            />
                          </NavTechLink>

                          <NavTechLink to="/technologies#java-spring" onDone={() => setTechOpen(false)}>
                            <TechCard
                              icon={<Code2 className="h-6 w-6 text-orange-600" />}
                              title="Java & Spring Boot"
                              desc="Enterprise-grade backend systems and APIs."
                            />
                          </NavTechLink>

                          <NavTechLink to="/technologies#php-laravel" onDone={() => setTechOpen(false)}>
                            <TechCard
                              icon={<Code2 className="h-6 w-6 text-yellow-600" />}
                              title="PHP & Laravel"
                              desc="Modern, scalable web apps with Laravel."
                            />
                          </NavTechLink>

                          <NavTechLink to="/technologies#mobile-apps" onDone={() => setTechOpen(false)}>
                            <TechCard
                              icon={<Layout className="h-6 w-6 text-blue-500" />}
                              title="Mobile Apps"
                              desc="Android (Kotlin/Java) & iOS (Swift)."
                            />
                          </NavTechLink>

                          <NavTechLink to="/technologies#devops" onDone={() => setTechOpen(false)}>
                            <TechCard
                              icon={<Cloud className="h-6 w-6 text-cyan-600" />}
                              title="DevOps Tools"
                              desc="Docker, Kubernetes, Jenkins, CI/CD pipelines."
                            />
                          </NavTechLink>

                          <NavTechLink to="/technologies#ai-ml" onDone={() => setTechOpen(false)}>
                            <TechCard
                              icon={<Layers className="h-6 w-6 text-purple-600" />}
                              title="AI & ML"
                              desc="TensorFlow, PyTorch & Scikit-learn."
                            />
                          </NavTechLink>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              );
            }

            return null;
          })}
        </ul>

        {/* Right CTA */}
        <div className="block">
          <Link
            to="/contact"
            className="inline-flex items-center border border-[#f6f3ee]/30 px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-semibold text-[#f6f3ee] hover:bg-[#f6f3ee] hover:text-[#241c15] transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

/* Small helpers */
function NavTechLink({ to, onDone, children }) {
  return (
    <Link to={to} onClick={onDone} className="flex flex-col items-start rounded-lg p-0 text-left">
      {children}
    </Link>
  );
}

function TechCard({ icon, title, desc }) {
  return (
    <div className="flex flex-col items-start rounded-lg p-4 hover:bg-slate-50 transition text-left w-full">
      <div className="w-10 h-10 flex items-center justify-center rounded-md bg-slate-100 mb-2">
        {icon}
      </div>
      <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
      <p className="text-[12px] text-slate-600 mt-1">{desc}</p>
    </div>
  );
}
