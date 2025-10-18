// src/components/services/WhyChooseSoseoBot.jsx
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Zap, Bot, MessageSquare, Wand2, Sparkles, Clock } from "lucide-react";

export default function WhyChooseSoseoBot() {
  const points = [
    { icon: <Bot className="w-5 h-5" />, text: "Reduces manual work with automated responses." },
    { icon: <Zap className="w-5 h-5" />, text: "Ensures fast and consistent communication." },
    { icon: <MessageSquare className="w-5 h-5" />, text: "Improves customer engagement and satisfaction." },
    { icon: <Wand2 className="w-5 h-5" />, text: "Simple setup and easy customization options." },
    { icon: <Sparkles className="w-5 h-5" />, text: "Gives your business a professional image on WhatsApp." },
  ];

  
const [mode, setMode] = useState("bot");
  return (
    <section className="relative bg-[#090f1c] text-white py-16 border-t border-white/10 overflow-hidden">
      {/* background aura */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-28 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute -bottom-24 right-1/3 h-[420px] w-[420px] rounded-full bg-fuchsia-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose SoseoBot</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Convert chats into outcomes—without adding headcount.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: bullet cards */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {points.map((p, i) => (
              <motion.div
                key={p.text}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="group flex items-start gap-4 rounded-2xl border border-white/15 bg-white/[0.04] p-4 hover:bg-white/[0.06] transition"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/6 ring-1 ring-white/10 text-emerald-300">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-white/90">
                    <span className="text-sm font-semibold">{p.text.split(".")[0]}</span>
                  </div>
                  <p className="text-sm text-white/70 mt-1">
                    {p.text.includes(".") ? p.text.slice(p.text.indexOf(".") + 1).trim() : ""}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: interactive comparison + KPIs */}
          <div className="space-y-6">
            {/* Toggle */}
            <div className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/[0.04] p-3">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wide text-white/60">View</span>
                <div className="relative inline-flex rounded-xl bg-white/5 p-1 ring-1 ring-white/10">
                  <button
                    onClick={() => setMode("manual")}
                    className={`px-3 py-1 rounded-lg text-sm transition ${
                      mode === "manual" ? "bg-white text-[#0b1220] font-semibold" : "text-white/70"
                    }`}
                  >
                    Manual
                  </button>
                  <button
                    onClick={() => setMode("bot")}
                    className={`px-3 py-1 rounded-lg text-sm transition ${
                      mode === "bot" ? "bg-white text-[#0b1220] font-semibold" : "text-white/70"
                    }`}
                  >
                    SoseoBot
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-xs">
                <Clock className="w-4 h-4" />
                Realistic preview
              </div>
            </div>

            {/* Comparison card */}
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04] p-5">
              <AnimatePresence mode="wait">
                {mode === "manual" ? (
                  <motion.div
                    key="manual"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-3"
                  >
                    <div className="text-xs text-white/60">Manual process</div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <p className="text-sm text-white/80">
                        <span className="font-semibold">Customer:</span> “Hi, what are your pricing plans?”
                      </p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <p className="text-sm text-white/70">
                        <span className="font-semibold">Agent:</span> “Please wait while I check with the team…”
                      </p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <p className="text-sm text-white/60">Delay: 10–45 mins (busy hours)</p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="bot"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-3"
                  >
                    <div className="text-xs text-emerald-300/80">SoseoBot in action</div>
                    <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-3">
                      <p className="text-sm text-emerald-100">
                        <span className="font-semibold">Customer:</span> “Hi, what are your pricing plans?”
                      </p>
                    </div>
                    <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-3">
                      <p className="text-sm text-emerald-100">
                        <span className="font-semibold">SoseoBot:</span> “We offer Starter, Growth, and Business plans.
                        Want the full comparison or a quick recommendation?”
                      </p>
                    </div>
                    <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-3">
                      <p className="text-sm text-emerald-200">Response: &lt; 2 seconds, 24/7</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-3 gap-3">
              <Stat label="Faster replies" value="x12" />
              <Stat label="Tickets reduced" value="40%" />
              <Stat label="Lead capture" value="3×" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Small stat card */
function Stat({ label, value }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-white/15 bg-white/[0.04] p-4 text-center"
    >
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-[11px] tracking-wide uppercase text-white/60 mt-1">{label}</div>
    </motion.div>
  );
}
