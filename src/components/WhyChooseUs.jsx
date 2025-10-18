
// // src/components/WhyChooseUs.jsx
// import React from "react";
// import {
//   ShieldCheck,
//   Rocket,
//   MessageSquare,
//   Users,
//   GraduationCap,
//   Globe,
// } from "lucide-react";

// const items = [
//   {
//     icon: ShieldCheck,
//     title: "Proven Expertise",
//     desc: "Battle-tested playbooks, reviews, and SLAs that keep delivery predictable.",
//     color: "emerald",
//   },
//   {
//     icon: Rocket,
//     title: "Speed to Value",
//     desc: "Lean discovery, quick iterations, and measurable business impact.",
//     color: "amber",
//   },
//   {
//     icon: MessageSquare,
//     title: "Transparent Comms",
//     desc: "Weekly demos, clear docs, and no-surprise status updates.",
//     color: "sky",
//   },
//   {
//     icon: Users,
//     title: "Skilled Team",
//     desc: "Collaborative engineers, designers and marketers aligned to your goals.",
//     color: "pink",
//   },
//   {
//     icon: GraduationCap,
//     title: "Always Learning",
//     desc: "Continuous upskilling in modern stacks, cloud, and AI.",
//     color: "violet",
//   },
//   {
//     icon: Globe,
//     title: "Global-Ready",
//     desc: "Secure, scalable, and compliant delivery for growing brands.",
//     color: "cyan",
//   },
// ];

// function IconBadge({ Icon, color }) {
//   const map = {
//     emerald: { ring: "from-emerald-400 to-green-500", text: "text-emerald-300", glow: "rgba(16,185,129,0.55)" },
//     amber:   { ring: "from-amber-400 to-orange-500",  text: "text-amber-300",   glow: "rgba(245,158,11,0.55)" },
//     sky:     { ring: "from-sky-400 to-indigo-500",    text: "text-sky-300",     glow: "rgba(14,165,233,0.55)" },
//     pink:    { ring: "from-fuchsia-400 to-rose-500",  text: "text-pink-300",    glow: "rgba(236,72,153,0.55)" },
//     violet:  { ring: "from-violet-400 to-purple-500", text: "text-violet-300",  glow: "rgba(139,92,246,0.55)" },
//     cyan:    { ring: "from-teal-400 to-cyan-500",     text: "text-cyan-300",    glow: "rgba(34,211,238,0.55)" },
//   }[color];

//   return (
//     <div className="relative mx-auto h-24 w-24">
//       {/* floor shadow */}
//       <div
//         className="absolute left-1/2 top-[86%] h-5 w-16 -translate-x-1/2 rounded-full blur-md"
//         style={{ backgroundColor: map.glow }}
//       />
//       {/* glossy badge */}
//       <div
//         className={`relative grid h-24 w-24 place-items-center rounded-full
//                     bg-gradient-to-br ${map.ring}
//                     shadow-[0_12px_30px_rgba(0,0,0,0.38)] ring-1 ring-white/10`}
//       >
//         <div className="pointer-events-none absolute -top-2 left-1/2 h-16 w-28 -translate-x-1/2 -rotate-12 rounded-[100px] bg-gradient-to-b from-white/70 via-white/5 to-transparent" />
//         <div className="grid h-20 w-20 place-items-center rounded-full bg-[#0e1627] ring-1 ring-white/10">
//           <Icon className={`h-10 w-10 ${map.text} drop-shadow-[0_2px_8px_rgba(255,255,255,0.25)]`} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function WhyChooseUs() {
//   return (
//     <section id="why-choose-us" className="bg-[#021624] py-16 md:py-20">
//       <div className="mx-auto max-w-6xl px-6">
//         <div className="text-center max-w-3xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
//             Why choose <span className="text-blue-400">SOSEOTECH</span>
//           </h2>
//           <p className="mt-3 text-slate-300">
//             A partner that blends engineering, marketing, and business solutions to drive growth.
//           </p>
//         </div>

//         <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {items.map(({ icon: Icon, title, desc, color }) => (
//             <div key={title} className="group text-center">
//               <div className="transition-transform duration-300 group-hover:-translate-y-1">
//                 <IconBadge Icon={Icon} color={color} />
//               </div>
//               <h3 className="mt-6 text-2xl font-extrabold text-emerald-400">{title}</h3>
//               <p className="mt-3 text-slate-300 leading-relaxed max-w-xs mx-auto">{desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// src/components/WhyChooseUs.jsx
import React from "react";
import {
  ShieldCheck,
  Rocket,
  MessageSquare,
  Users,
  GraduationCap,
  Globe,
} from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Proven Expertise",
    desc: "Battle-tested playbooks, reviews, and SLAs that keep delivery predictable.",
    color: "emerald",
  },
  {
    icon: Rocket,
    title: "Speed to Value",
    desc: "Lean discovery, quick iterations, and measurable business impact.",
    color: "amber",
  },
  {
    icon: MessageSquare,
    title: "Transparent Comms",
    desc: "Weekly demos, clear docs, and no-surprise status updates.",
    color: "sky",
  },
  {
    icon: Users,
    title: "Skilled Team",
    desc: "Collaborative engineers, designers and marketers aligned to your goals.",
    color: "pink",
  },
  {
    icon: GraduationCap,
    title: "Always Learning",
    desc: "Continuous upskilling in modern stacks, cloud, and AI.",
    color: "violet",
  },
  {
    icon: Globe,
    title: "Global-Ready",
    desc: "Secure, scalable, and compliant delivery for growing brands.",
    color: "cyan",
  },
];

function IconBadge({ Icon, color }) {
  const map = {
    emerald: { ring: "from-emerald-400 to-green-500", text: "text-emerald-300", glow: "rgba(16,185,129,0.55)" },
    amber:   { ring: "from-amber-400 to-orange-500",  text: "text-amber-300",   glow: "rgba(245,158,11,0.55)" },
    sky:     { ring: "from-sky-400 to-indigo-500",    text: "text-sky-300",     glow: "rgba(14,165,233,0.55)" },
    pink:    { ring: "from-fuchsia-400 to-rose-500",  text: "text-pink-300",    glow: "rgba(236,72,153,0.55)" },
    violet:  { ring: "from-violet-400 to-purple-500", text: "text-violet-300",  glow: "rgba(139,92,246,0.55)" },
    cyan:    { ring: "from-teal-400 to-cyan-500",     text: "text-cyan-300",    glow: "rgba(34,211,238,0.55)" },
  }[color];

  return (
    <div className="relative mx-auto h-16 w-16"> {/* smaller outer circle */}
      {/* floor glow */}
      <div
        className="absolute left-1/2 top-[86%] h-3 w-10 -translate-x-1/2 rounded-full blur-md"
        style={{ backgroundColor: map.glow }}
      />
      {/* gradient ring */}
      <div
        className={`relative grid h-16 w-16 place-items-center rounded-full
                    bg-gradient-to-br ${map.ring}
                    shadow-[0_10px_25px_rgba(0,0,0,0.4)] ring-1 ring-white/10`}
      >
        <div className="pointer-events-none absolute -top-1 left-1/2 h-10 w-16 -translate-x-1/2 -rotate-12 rounded-[80px] bg-gradient-to-b from-white/70 via-white/5 to-transparent" />
        <div className="grid h-12 w-12 place-items-center rounded-full bg-[#0e1627] ring-1 ring-white/10">
          <Icon className={`h-6 w-6 ${map.text} drop-shadow-[0_1px_5px_rgba(255,255,255,0.25)]`} />
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-[#010c18] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Why choose <span className="text-blue-400">SOSEOTECH</span>
          </h2>
          <p className="mt-3 text-slate-300">
            A partner that blends engineering, marketing, and business solutions to drive growth.
          </p>
        </div>

        {/* icon grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="group text-center">
              <div className="transition-transform duration-300 group-hover:-translate-y-1">
                <IconBadge Icon={Icon} color={color} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-emerald-400">{title}</h3>
              <p className="mt-3 text-slate-300 leading-relaxed max-w-xs mx-auto">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
