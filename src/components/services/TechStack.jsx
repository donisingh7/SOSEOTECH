
"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function TechStackGrid({ techStack = [] }) {
  const prefersReducedMotion = useReducedMotion();

  // Duplicate once so the marquee can loop seamlessly in a single line
  const row = [...techStack, ...techStack];

  return (
    <section className="relative py-14 overflow-hidden">
      {/* Glowing Background (unchanged) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full top-20 left-10 animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-cyan-400/10 blur-[100px] rounded-full bottom-20 right-10 animate-pulse"></div>
      </div>

      {/* Section Heading (unchanged) */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Tech Stack</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Powering <span className="text-blue-400 font-semibold">Soseotech</span> with the latest and most reliable technologies.
        </p>
      </div>

      {/* ===== One-line marquee on ALL breakpoints ===== */}
      <div className="relative overflow-hidden mb-20">
        {/* Edge fades for a polished look (optional, doesn’t affect layout) */}
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-10 md:w-16 bg-gradient-to-r from-[#0b1320] to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-10 md:w-16 bg-gradient-to-l from-[#0b1320] to-transparent" />

        <motion.div
          className={`flex items-stretch gap-8 md:gap-10 lg:gap-12 will-change-transform ${
            prefersReducedMotion ? "overflow-x-auto pl-8 pr-8" : ""
          }`}
          style={{
            WebkitOverflowScrolling: prefersReducedMotion ? "touch" : "auto",
          }}
          animate={prefersReducedMotion ? {} : { x: ["0%", "-50%"] }} // -50% because row is duplicated
          transition={prefersReducedMotion ? {} : { repeat: Infinity, duration: 20, ease: "linear" }}
          role="list"
          aria-label="Scrolling list of technologies"
        >
          {row.map((tech, i) => (
            <motion.div
              key={`row-${i}-${tech?.name || i}`}
              whileHover={{ scale: 1.08 }}
              role="listitem"
              className="relative group flex flex-col items-center justify-center min-w-[120px] sm:min-w-[140px] lg:min-w-[160px]"
            >
              {/* glow on hover */}
              <div
                aria-hidden
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition"
                style={{ backgroundColor: tech.color, boxShadow: `0 0 26px ${tech.color}` }}
              />
              <div
                className="relative bg-gray-700/40 border border-gray-500/70 backdrop-blur-xl rounded-2xl p-4 sm:p-5 lg:p-6 transition transform group-hover:scale-110 hover:shadow-[var(--glow)]"
                style={{ "--glow": tech.color }}
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="mx-auto mb-1.5 h-10 sm:h-12 lg:h-14 max-w-[120px] sm:max-w-[140px] object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <p className="text-white text-xs sm:text-sm font-medium text-center">{tech.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
