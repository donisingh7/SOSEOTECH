// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Laptop,
//   GraduationCap,
//   Stethoscope,
//   ShoppingBag,
//   Building2,
//   Plane,
//   Briefcase,
// } from "lucide-react";

// const INDUSTRIES = [
//   {
//     icon: <Laptop className="w-6 h-6" />,
//     title: "IT & Software Services",
//     tagline: "Automate L1 support & onboarding",
//     gradient: "from-cyan-500/30 to-blue-600/30",
//   },
//   {
//     icon: <GraduationCap className="w-6 h-6" />,
//     title: "Education & Training",
//     tagline: "Admissions FAQ & course guidance",
//     gradient: "from-amber-400/30 to-orange-500/30",
//   },
//   {
//     icon: <Stethoscope className="w-6 h-6" />,
//     title: "Healthcare & Wellness",
//     tagline: "Appointment & triage assistance",
//     gradient: "from-pink-400/30 to-rose-500/30",
//   },
//   {
//     icon: <ShoppingBag className="w-6 h-6" />,
//     title: "E-commerce & Retail",
//     tagline: "Order status & product discovery",
//     gradient: "from-emerald-400/30 to-teal-500/30",
//   },
//   {
//     icon: <Building2 className="w-6 h-6" />,
//     title: "Real Estate",
//     tagline: "Lead qual & property info",
//     gradient: "from-purple-400/30 to-indigo-500/30",
//   },
//   {
//     icon: <Plane className="w-6 h-6" />,
//     title: "Hospitality & Travel",
//     tagline: "Booking & itinerary support",
//     gradient: "from-sky-400/30 to-cyan-600/30",
//   },
//   {
//     icon: <Briefcase className="w-6 h-6" />,
//     title: "Finance & Consulting",
//     tagline: "KYC, pricing & advisory triage",
//     gradient: "from-lime-400/30 to-green-500/30",
//   },
// ];

// function HexCard({ icon, title, tagline, gradient, delay = 0 }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 14 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-80px" }}
//       transition={{ duration: 0.4, delay }}
//       className="relative  group select-none"
//     >
//       {/* Glow background */}
//       <div
//         className={`absolute -inset-1 rounded-[18px] opacity-0 group-hover:opacity-100 blur-2xl transition bg-gradient-to-r ${gradient}`}
//       />

//       {/* Hex container */}
//       <div
//         className={`relative mx-auto h-40 w-40 md:h-44 md:w-44 lg:h-48 lg:w-48 text-white/90 ring-1 ring-white/10
//           bg-gradient-to-br ${gradient} hover:opacity-95 transition shadow-[0_0_0_1px_rgba(255,255,255,0.03)]`}
//         style={{
//           clipPath:
//             "polygon(25% 6.69873%, 75% 6.69873%, 100% 50%, 75% 93.30127%, 25% 93.30127%, 0% 50%)",
//         }}
//       >
//         {/* Content */}
//         <div className="relative h-full w-full grid place-items-center">
//           <motion.div
//             whileHover={{ scale: 1.06 }}
//             className="flex flex-col items-center gap-2 px-3 text-center"
//           >
//             <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10 text-white">
//               {icon}
//             </div>
//             <p className="text-xs md:text-sm font-semibold leading-tight">
//               {title}
//             </p>
//           </motion.div>

//           {/* Tagline reveal */}
//           </div>

//         {/* Border sheen */}
//         <div
//           className="pointer-events-none absolute inset-px rounded-[16px] opacity-60"
//           style={{
//             clipPath:
//               "polygon(25% 6.69873%, 75% 6.69873%, 100% 50%, 75% 93.30127%, 25% 93.30127%, 0% 50%)",
//             background:
//               "linear-gradient(180deg, rgba(255,255,255,0.14), rgba(255,255,255,0.04))",
//           }}
//         />
//       </div>
//     </motion.div>
//   );
// }

// export default function AIIndustry() {
//   const row1 = INDUSTRIES.slice(0, 3);
//   const row2 = INDUSTRIES.slice(3, 7);

//   return (
//     <section className="relative bg-[#090f1c] text-white py-16 border-t border-white/10 overflow-hidden">
//       {/* Gradient glows */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[140px]" />
//         <div className="absolute -bottom-24 right-1/3 h-[420px] w-[420px] rounded-full bg-fuchsia-500/10 blur-[120px]" />
//       </div>

//       {/* Heading */}
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-500 bg-clip-text text-transparent">
//           Industries That Can Benefit
//         </h2>
//         <p className="mt-3 text-white/70 max-w-2xl mx-auto">
//           SoseoBot adapts to your domain—delivering fast, accurate, human-like assistance 24/7.
//         </p>
//       </div>

//       {/* Honeycomb grid */}
//       <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
//         {/* Row 1 */}
//         <div className="flex items-center justify-center gap-5 md:gap-8">
//           {row1.map((it, i) => (
//             <HexCard
//               key={it.title}
//               icon={it.icon}
//               title={it.title}
//               tagline={it.tagline}
//               gradient={it.gradient}
//               delay={i * 0.04}
//             />
//           ))}
//         </div>

//         {/* Row 2 offset */}
//         <div className="mt-6 md:mt-8 flex items-center justify-center gap-5 md:gap-8">
//           <div className="hidden md:block w-10" aria-hidden />
//           {row2.map((it, i) => (
//             <HexCard
//               key={it.title}
//               icon={it.icon}
//               title={it.title}
//               tagline={it.tagline}
//               gradient={it.gradient}
//               delay={0.12 + i * 0.04}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import React, { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Laptop,
  GraduationCap,
  Stethoscope,
  ShoppingBag,
  Building2,
  Plane,
  Briefcase,
} from "lucide-react";

const INDUSTRIES = [
  {
    icon: <Laptop className="w-6 h-6" />,
    title: "IT & Software Services",
    tagline: "Automate L1 support & onboarding",
    gradient: "from-cyan-500/30 to-blue-600/30",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Education & Training",
    tagline: "Admissions FAQ & course guidance",
    gradient: "from-amber-400/30 to-orange-500/30",
  },
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: "Healthcare & Wellness",
    tagline: "Appointment & triage assistance",
    gradient: "from-pink-400/30 to-rose-500/30",
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "E-commerce & Retail",
    tagline: "Order status & product discovery",
    gradient: "from-emerald-400/30 to-teal-500/30",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Real Estate",
    tagline: "Lead qual & property info",
    gradient: "from-purple-400/30 to-indigo-500/30",
  },
  {
    icon: <Plane className="w-6 h-6" />,
    title: "Hospitality & Travel",
    tagline: "Booking & itinerary support",
    gradient: "from-sky-400/30 to-cyan-600/30",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Finance & Consulting",
    tagline: "KYC, pricing & advisory triage",
    gradient: "from-lime-400/30 to-green-500/30",
  },
];

function HexCard({ icon, title, gradient, delay = 0, size = "md" }) {
  const sizes =
    size === "sm"
      ? "h-32 w-32"
      : size === "lg"
      ? "h-48 w-48"
      : "h-40 w-40"; // default md

  const iconWrap =
    size === "sm" ? "h-10 w-10" : size === "lg" ? "h-12 w-12" : "h-11 w-11";

  const titleText =
    size === "sm" ? "text-[11px]" : size === "lg" ? "text-sm" : "text-xs";

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, delay }}
      className="relative group select-none"
    >
      {/* Glow background */}
      <div
        className={`absolute -inset-1 rounded-[18px] opacity-0 group-hover:opacity-100 blur-2xl transition bg-gradient-to-r ${gradient}`}
      />

      {/* Hex container */}
      <div
        className={`relative mx-auto ${sizes} text-white/90 ring-1 ring-white/10
          bg-gradient-to-br ${gradient} hover:opacity-95 transition shadow-[0_0_0_1px_rgba(255,255,255,0.03)]`}
        style={{
          clipPath:
            "polygon(25% 6.69873%, 75% 6.69873%, 100% 50%, 75% 93.30127%, 25% 93.30127%, 0% 50%)",
        }}
      >
        {/* Content */}
        <div className="relative h-full w-full grid place-items-center">
          <motion.div
            whileHover={{ scale: 1.06 }}
            className="flex flex-col items-center gap-2 px-3 text-center"
          >
            <div
              className={`grid ${iconWrap} place-items-center rounded-xl bg-white/10 ring-1 ring-white/10 text-white`}
            >
              {icon}
            </div>
            <p className={`${titleText} font-semibold leading-tight`}>{title}</p>
          </motion.div>
        </div>

        {/* Border sheen */}
        <div
          className="pointer-events-none absolute inset-px rounded-[16px] opacity-60"
          style={{
            clipPath:
              "polygon(25% 6.69873%, 75% 6.69873%, 100% 50%, 75% 93.30127%, 25% 93.30127%, 0% 50%)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.14), rgba(255,255,255,0.04))",
          }}
        />
      </div>
    </motion.div>
  );
}

export default function AIIndustry() {
  const prefersReducedMotion = useReducedMotion();

  // desktop rows (unchanged)
  const row1 = INDUSTRIES.slice(0, 3);
  const row2 = INDUSTRIES.slice(3, 7);

  // mobile marquee: one row (duplicate for seamless loop)
  const marquee = useMemo(
    () => [...INDUSTRIES, ...INDUSTRIES],
    []
  );

  // Speed (seconds) for one half-width traverse
  const DURATION = 15;

  return (
    <section className="relative bg-[#090f1c] text-white py-16 border-t border-white/10 overflow-hidden">
      {/* Gradient glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute -bottom-24 right-1/3 h-[420px] w-[420px] rounded-full bg-fuchsia-500/10 blur-[120px]" />
      </div>

      {/* Heading */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-500 bg-clip-text text-transparent">
          Industries That Can Benefit
        </h2>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto">
          SoseoBot adapts to your domain—delivering fast, accurate, human-like assistance 24/7.
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ===== Desktop/Tablet: Original honeycomb (unchanged) ===== */}
        <div className="hidden md:block">
          {/* Row 1 */}
          <div className="flex items-center justify-center gap-8">
            {row1.map((it, i) => (
              <HexCard
                key={it.title}
                icon={it.icon}
                title={it.title}
                gradient={it.gradient}
                size="md"
              />
            ))}
          </div>

          {/* Row 2 offset */}
          <div className="mt-8 flex items-center justify-center gap-8">
            <div className="hidden md:block w-10" aria-hidden />
            {row2.map((it, i) => (
              <HexCard
                key={it.title}
                icon={it.icon}
                title={it.title}
                gradient={it.gradient}
                size="md"
              />
            ))}
          </div>
        </div>

        {/* ===== Mobile: Single-line moving row ===== */}
        <div className="md:hidden relative">
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#090f1c] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#090f1c] to-transparent" />

          <motion.div
            className={`flex items-center gap-5 will-change-transform ${
              prefersReducedMotion ? "overflow-x-auto px-10 hide-scrollbar" : ""
            }`}
            // Move left → right in a seamless loop by shifting -50% over time (row is duplicated)
            animate={
              prefersReducedMotion
                ? { x: 0 }
                : { x: ["0%", "-50%"] }
            }
            transition={
              prefersReducedMotion
                ? {}
                : { repeat: Infinity, duration: DURATION, ease: "linear" }
            }
            role="list"
            aria-label="Industries marquee"
          >
            {marquee.map((it, i) => (
              <div role="listitem" key={`${it.title}-${i}`} className="shrink-0">
                <HexCard
                  icon={it.icon}
                  title={it.title}
                  gradient={it.gradient}
                  size="sm"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Hide scrollbar utility */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
