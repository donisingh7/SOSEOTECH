import React from "react";
import { Star } from "lucide-react";

// Get initials from a full name / brand
const initials = (name = "") => {
  const parts = name.trim().split(/\s+/);
  if (!parts.length) return "--";
  const first = parts[0]?.[0] || "";
  const last = parts[parts.length - 1]?.[0] || "";
  return (first + last).toUpperCase();
};

// ✅ Client reviews about SOSEOTECH
const TESTIMONIALS = [
  {
    name: "Wilderbeast",
    quote:
      "SOSEOTECH helped us streamline our booking platform with smooth UI and reliable backend. Their team is professional and fast.",
  },
  {
    name: "Finance Saarthi",
    quote:
      "Partnering with SOSEOTECH was the best decision — they delivered secure and scalable solutions for our financial workflows.",
  },
  {
    name: "CA Sudhanshu Agrawal & Associates",
    quote:
      "Thanks to SOSEOTECH, our compliance processes are now automated and client handling is easier than ever. Great support team!",
  },
];

export default function Testimonials({
  title = "What our clients say",
  bg = "#F6F5F3", // ✅ Light background
}) {
  return (
    <section
      id="testimonials"
      className="py-14 md:py-16"
      style={{ backgroundColor: bg }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-slate-900 text-3xl md:text-4xl font-extrabold tracking-tight">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <article
              key={idx}
              className="rounded-3xl bg-white p-6 ring-1 ring-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
            >
              {/* ⭐ Star rating */}
              <div
                className="flex gap-1 text-yellow-500"
                aria-label="5 star rating"
              >
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <p className="mt-4 text-slate-700 leading-relaxed text-justify">
                “{t.quote}”
              </p>

              {/* ✅ Custom logo for Wilderbeast */}
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 shrink-0 rounded-full bg-slate-200 text-slate-700 grid place-items-center font-bold">
                  {t.name === "Wilderbeast" ? "WB" : initials(t.name)}
                </div>
                <div className="font-semibold text-slate-900">{t.name}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
