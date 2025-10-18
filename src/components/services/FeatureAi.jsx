/* -----------------------------------------
   Key Features — Segmented Tabs (Pills)
------------------------------------------*/
"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function KeyFeaturesTabs({ heading = "Key Features", features = [] }) {
  const [active, setActive] = useState(0);
  const tabsRef = useRef([]);

  // Basic keyboard nav (Left/Right/Enter)
  useEffect(() => {
    const el = tabsRef.current[active];
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [active]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") setActive((i) => (i + 1) % features.length);
    if (e.key === "ArrowLeft") setActive((i) => (i - 1 + features.length) % features.length);
    if (e.key === "Home") setActive(0);
    if (e.key === "End") setActive(features.length - 1);
  };

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="relative bg-[#090f1c] text-white py-14 md:py-16 border-t border-white/15"
    >
      {/* hairline */}
      <div className="h-[1px] w-full bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 absolute top-0 left-0" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2 id="features-heading" className="text-3xl md:text-4xl font-bold">
            {heading}
          </h2>
          <p className="mt-3 text-white/75 max-w-2xl mx-auto">
            Everything you need to automate conversations without losing the human touch.
          </p>
        </div>

        {/* Tabs (pills) */}
        <div
          role="tablist"
          aria-label="Key features"
          onKeyDown={onKeyDown}
          className="
            relative flex gap-2 sm:gap-3
            overflow-x-auto scrollbar-none
            rounded-2xl p-2 bg-white/5 ring-1 ring-white/10
          "
        >
          <style>{`.scrollbar-none::-webkit-scrollbar{display:none}`}</style>
          {features.map((f, i) => {
            const selected = i === active;
            return (
              <button
                key={f.title}
                role="tab"
                aria-selected={selected}
                aria-controls={`feature-panel-${i}`}
                id={`feature-tab-${i}`}
                ref={(el) => (tabsRef.current[i] = el)}
                onClick={() => setActive(i)}
                className={[
                  "whitespace-nowrap rounded-xl px-3.5 sm:px-4 py-2 text-sm font-semibold transition",
                  selected
                    ? "bg-white/100 text-[#0b1220] shadow-lg"
                    : "bg-white/0 text-white/80 hover:bg-white/10"
                ].join(" ")}
              >
                {f.title}
              </button>
            );
          })}
        </div>

        {/* Detail Pane */}
        <div className="mt-6 md:mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              role="tabpanel"
              id={`feature-panel-${active}`}
              aria-labelledby={`feature-tab-${active}`}
              className="relative rounded-2xl border border-white/15 bg-[#39767b] p-5 md:p-6 lg:p-8"
            >
              <div className="flex items-start gap-4 md:gap-5">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 ring-1 ring-white/100 shrink-0">
                  {features[active].icon}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl  font-semibold">{features[active].title}</h3>
                  <p className="mt-2 text-sm md:text-base text-white/75 max-w-3xl">
                    {features[active].desc}
                  </p>
                </div>
              </div>

              {/* Optional: mini grid of other features beneath (quick jump) */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {features.map((f, i) => (
                  <button
                    key={`mini-${f.title}`}
                    onClick={() => setActive(i)}
                    className={[
                      "text-left rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition p-3",
                      i === active ? "ring-1 ring-cyan-400/40 bg-cyan-800" : ""
                    ].join(" ")}
                  >
                    <div className="flex items-center gap-3">
                      <div className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 ring-1 ring-white/100">
                        {f.icon}
                      </div>
                      <p className="text-xs md:text-sm line-clamp-2">{f.title}</p>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default KeyFeaturesTabs;
