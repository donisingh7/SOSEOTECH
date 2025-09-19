import React from "react";
import {
  Code2,
  Monitor,
  Cloud,
  Megaphone,
  Calculator,
  Briefcase,
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
  Server,   // ✅ Added this missing import
} from "lucide-react";

const SERVICES = [
  {
    icon: <Code2 className="h-7 w-7 text-yellow-600" />,
    title: "Software Development",
    desc: "Custom software solutions tailored to your business needs.",
    bullets: [
      { text: "Enterprise Applications", icon: <Building2 className="h-4 w-4 text-yellow-600" /> },
      { text: "SaaS Products", icon: <Cloud className="h-4 w-4 text-yellow-600" /> },
      { text: "API Development", icon: <Server className="h-4 w-4 text-yellow-600" /> },
    ],
  },
  {
    icon: <Monitor className="h-7 w-7 text-blue-600" />,
    title: "Web Development",
    desc: "Responsive websites and modern web apps built with best practices.",
    bullets: [
      { text: "React Applications", icon: <Code2 className="h-4 w-4 text-blue-600" /> },
      { text: "E-commerce Solutions", icon: <ShoppingCart className="h-4 w-4 text-blue-600" /> },
      { text: "Progressive Web Apps", icon: <Globe className="h-4 w-4 text-blue-600" /> },
    ],
  },
  {
    icon: <Cloud className="h-7 w-7 text-cyan-600" />,
    title: "Cloud Solutions",
    desc: "Scalable cloud infrastructure and migration for performance & security.",
    bullets: [
      { text: "AWS & Azure Migration", icon: <Cloud className="h-4 w-4 text-cyan-600" /> },
      { text: "DevOps / CI-CD", icon: <Settings className="h-4 w-4 text-cyan-600" /> },
      { text: "Cloud Security", icon: <Shield className="h-4 w-4 text-cyan-600" /> },
    ],
  },
  {
    icon: <Megaphone className="h-7 w-7 text-pink-600" />,
    title: "Social Media Marketing",
    desc: "Data-driven strategies to grow your brand and improve ROI.",
    bullets: [
      { text: "SEO", icon: <Search className="h-4 w-4 text-pink-600" /> },
      { text: "Performance Ads", icon: <BarChart3 className="h-4 w-4 text-pink-600" /> },
      { text: "Content & Social", icon: <Users className="h-4 w-4 text-pink-600" /> },
    ],
  },
  {
    icon: <Calculator className="h-7 w-7 text-green-600" />,
    title: "Finance & Accounting",
    desc: "End-to-end financial services to ensure compliance & optimize cash flow.",
    bullets: [
      { text: "Bookkeeping & Payroll", icon: <FileText className="h-4 w-4 text-green-600" /> },
      { text: "Financial Reporting", icon: <Receipt className="h-4 w-4 text-green-600" /> },
      { text: "Tax & Compliance", icon: <Calculator className="h-4 w-4 text-green-600" /> },
    ],
  },
  {
    icon: <Briefcase className="h-7 w-7 text-purple-600" />,
    title: "Business Solutions",
    desc: "Strategic consulting and automation to streamline operations.",
    bullets: [
      { text: "Business Strategy", icon: <TrendingUp className="h-4 w-4 text-purple-600" /> },
      { text: "Operational Efficiency", icon: <Workflow className="h-4 w-4 text-purple-600" /> },
      { text: "Process Automation", icon: <Settings className="h-4 w-4 text-purple-600" /> },
    ],
  },
];

function ServiceCard({ icon, title, desc, bullets }) {
  return (
    <article className="relative flex flex-col border border-slate-200 bg-white p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition rounded-2xl w-full h-full">
      <div className="mb-4 flex justify-center">
        <div className="p-3 bg-slate-50 rounded-full">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold text-slate-900 text-center">{title}</h3>
      <p className="mt-2 text-slate-600 text-justify">{desc}</p>
      <ul className="mt-4 space-y-1 text-slate-700 text-sm">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-center gap-2">
            {b.icon}
            {b.text}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-36 pt-10 pb-20 bg-gradient-to-b from-stone-100 to-stone-200 w-full"
    >
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="text-slate-900 p-10 md:p-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center">
            Our <span className="text-yellow-600">Services</span>
          </h2>
          <p className="mt-3 text-slate-600 text-center text-lg">
            Practical, scalable solutions to build and grow with confidence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {SERVICES.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
