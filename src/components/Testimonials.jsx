
// import React from "react";

// /* initials */
// const initials = (name = "") => {
//   const p = name.trim().split(/\s+/);
//   return ((p[0]?.[0] || "") + (p.at(-1)?.[0] || "")).toUpperCase() || "--";
// };

// /* data */
// const TESTIMONIALS = [
//   {
//     name: "Wilder Beast",
//     quote:
//       "I am absolutely thrilled with the service I received from their company! They were attentive, responsive, and genuinely cared about meeting my needs. I highly recommend them.",
//   },
//   {
//     name: "Finance Saarthi",
//     quote:
//       "I am absolutely thrilled with the service I received from their company! They were attentive, responsive, and genuinely cared about meeting my needs. I highly recommend them.",
//   },
//   {
//     name: "CA Sudhanshu Agrawal & Associates",
//     quote:
//       "Their team exceeded our expectations. Their creative approach and attention to detail brought our vision to life. Highly recommended!",
//   },
// ];

// /* quote icon */
// const QuoteIcon = (props) => (
//   <svg viewBox="0 0 24 24" className="h-7 w-7 text-white/80" fill="currentColor" {...props}>
//     <path d="M10 7H6a1 1 0 0 0-1 1v4c0 2.21 1.79 4 4 4v-2a2 2 0 0 1-2-2V9h3V7zm9 0h-4a1 1 0 0 0-1 1v4c0 2.21 1.79 4 4 4v-2a2 2 0 0 1-2-2V9h3V7z" />
//   </svg>
// );

// /* frosted-glass card */
// function GlassCard({ name, quote, className = "" }) {
//   return (
//     <div
//       className={[
//         "relative rounded-3xl p-6 md:p-7",
//         "bg-white/10 backdrop-blur-[12px]",
//         "border border-white/15",
//         "shadow-[0_20px_50px_-15px_rgba(0,0,0,.6)_inset,0_10px_30px_rgba(0,0,0,.35)]",
//         "before:absolute before:inset-0 before:rounded-3xl before:pointer-events-none",
//         "before:bg-[radial-gradient(120px_120px_at_20%_10%,rgba(255,255,255,.25),rgba(255,255,255,0))]",
//         className,
//       ].join(" ")}
//     >
//       <QuoteIcon />
//       <p className="mt-4 text-[13.5px] leading-relaxed text-white/90">{quote}</p>

//       <div className="mt-6 flex items-center gap-3">
//         <div className="grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white font-semibold">
//           {initials(name)}
//         </div>
//         <div className="leading-tight">
//           <div className="text-[13px] font-medium text-white">{name}</div>
//         </div>
//       </div>
//     </div>
//   );
  
// }

// /* main section */
// export default function Testimonials() {
//   return (
//     <section
//       className={[
//         "relative overflow-hidden py-14 md:py-16",
//         "bg-[#0d0720]",
//         "bg-[radial-gradient(1200px_600px_at_70%_-10%,#2d1b78_0%,transparent_50%),radial-gradient(900px_500px_at_-10%_120%,#121029_0%,transparent_55%)]",
//       ].join(" ")}
//     >
//       {/* neon blobs */}
//       <div className="pointer-events-none absolute -top-16 -right-10 h-72 w-72 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,#ffdd55_0%,#ff3bd4_40%,#6f5cff_70%,#ffdd55_100%)] blur-3xl opacity-70" />
//       <div className="pointer-events-none absolute -bottom-12 -left-8 h-64 w-64 rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#ff6b6b_0%,#ffd166_35%,#6a5acd_70%,#ff6b6b_100%)] blur-3xl opacity-60" />
//       <div className="pointer-events-none absolute top-1/3 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[conic-gradient(from_0deg_at_50%_50%,#8b5cf6_0%,#06b6d4_45%,#f472b6_80%,#8b5cf6_100%)] blur-3xl opacity-50" />

//       <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
//         {/* centered heading */}
//         <h2 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
//           What Our Customers Say
//         </h2>
//         <p className="text-[13px] text-white/70 mb-10">
//           Discover the reasons why people love us and become your go-to partner.
//         </p>

//         {/* horizontally aligned cards */}
//         <div className="flex flex-wrap justify-center gap-8">
//           {TESTIMONIALS.map((t, idx) => (
//             <div
//               key={idx}
//               className="w-full sm:w-[300px] md:w-[340px] lg:w-[360px] flex justify-center"
//             >
//               <GlassCard {...t} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";

/* initials */
const initials = (name = "") => {
  const p = name.trim().split(/\s+/);
  return ((p[0]?.[0] || "") + (p.at(-1)?.[0] || "")).toUpperCase() || "--";
};

/* data */
const TESTIMONIALS = [
  {
    name: "Wilder Beast",
    quote:
      "“SOSEOTECH helped us streamline our booking platform with smooth UI and reliable backend. Their team is professional and fast.”",
  },
  {
    name: "Finance Saarthi",
    quote:
      "“Partnering with SOSEOTECH was the best decision — they delivered secure and scalable solutions for our financial workflows.”",
  },
  {
    name: "CA Sudhanshu Agrawal & Associates",
    quote:
      "“Thanks to SOSEOTECH, our compliance processes are now automated and client handling is easier than ever. Great support team!”",
  },
];

/* quote icon */
const QuoteIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    className="h-7 w-7 text-[#7ec8ff]" // blue accent instead of white
    fill="currentColor"
    {...props}
  >
    <path d="M10 7H6a1 1 0 0 0-1 1v4c0 2.21 1.79 4 4 4v-2a2 2 0 0 1-2-2V9h3V7zm9 0h-4a1 1 0 0 0-1 1v4c0 2.21 1.79 4 4 4v-2a2 2 0 0 1-2-2V9h3V7z" />
  </svg>
);

/* glass card */
function GlassCard({ name, quote, className = "" }) {
  return (
    <div
      className={[
        "relative rounded-3xl p-6 md:p-7",
        "bg-white/5 backdrop-blur-[12px]",
        "border border-white/10",
        "shadow-[0_20px_50px_-15px_rgba(0,0,0,.6)_inset,0_10px_30px_rgba(0,0,0,.35)]",
        "before:absolute before:inset-0 before:rounded-3xl before:pointer-events-none",
        "before:bg-[radial-gradient(120px_120px_at_20%_10%,rgba(126,200,255,.15),rgba(255,255,255,0))]",
        className,
      ].join(" ")}
    >
      <QuoteIcon />
      <p className="mt-4 text-[13.5px] leading-relaxed text-white/90">{quote}</p>

      <div className="mt-6 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-[#7ec8ff] font-semibold">
          {initials(name)}
        </div>
        <div className="leading-tight">
          <div className="text-[13px] font-medium text-white">{name}</div>
        </div>
      </div>
    </div>
  );
}

/* main section */
export default function Testimonials() {
  return (
    <section
      className={[
        "relative overflow-hidden py-14 md:py-16",
        "bg-[#03091a]", // darker blue base
        "bg-[radial-gradient(1000px_600px_at_80%_-10%,#122d58_0%,transparent_60%),radial-gradient(800px_500px_at_-10%_100%,#061a35_0%,transparent_60%)]",
      ].join(" ")}
    >
      {/* blue neon blobs */}
      <div className="pointer-events-none absolute -top-20 -right-10 h-72 w-72 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,#2edaff_0%,#4f46e5_45%,#00b3ff_90%)] blur-3xl opacity-70" />
      <div className="pointer-events-none absolute -bottom-16 -left-10 h-64 w-64 rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#1e3a8a_0%,#2563eb_50%,#38bdf8_100%)] blur-3xl opacity-50" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[conic-gradient(from_0deg_at_50%_50%,#0ea5e9_0%,#3b82f6_45%,#06b6d4_80%,#0ea5e9_100%)] blur-3xl opacity-60" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
        {/* heading */}
        <h2 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
          What Our Customers Say
        </h2>
        <p className="text-[13px] text-blue-200/80 mb-10">
          Discover the reasons why people love us and become your go-to partner.
        </p>

        {/* cards in one line (responsive) */}
        <div className="flex flex-wrap justify-center gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="w-full sm:w-[300px] md:w-[340px] lg:w-[360px] flex justify-center"
            >
              <GlassCard {...t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
