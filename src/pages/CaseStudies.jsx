
import React from "react";
import { Link } from "react-router-dom";
import { caseStudies, slugify } from "../assets/data/caseStudies";

/* --- Reusable pill (dark) --- */
const Pill = ({ children }) => (
  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-800/80 text-slate-200 shadow-sm ring-1 ring-inset ring-slate-700/60">
    {children}
  </span>
);

/* --- Grid card (dark) --- */
const CaseCard = ({ item }) => {
  const slug = `${item.id}-${slugify(item.title)}`;
  return (
    <Link
      to={`/resources/case-studies/${slug}`}
      className="block rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 shadow-sm hover:shadow-md overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 flex gap-2 flex-wrap">
          <Pill>{item.industry}</Pill>
          {item.tags?.slice(0, 2).map((t) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-extrabold text-lg text-slate-100 leading-snug">
          {item.title}
        </h3>
        <p className="text-slate-400 mt-2 line-clamp-3">{item.description}</p>

        <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-100">
          Read case study <span aria-hidden>→</span>
        </div>
      </div>
    </Link>
  );
};

/* --- Featured split block (dark) --- */
const Featured = ({ item }) => {
  const slug = `${item.id}-${slugify(item.title)}`;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
      {/* Left: visual */}
      <div className="lg:col-span-7 relative rounded-2xl overflow-hidden shadow-md ring-1 ring-slate-800">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-72 md:h-[26rem] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
          <div className="flex gap-2 flex-wrap">
            <Pill>{item.industry}</Pill>
            {item.tags?.slice(0, 3).map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
          <h2 className="mt-2 text-2xl md:text-4xl font-extrabold leading-tight">
            {item.title}
          </h2>
          <p className="mt-2 text-white/90 max-w-3xl">{item.description}</p>
        </div>
      </div>

      {/* Right: summary */}
      <div className="lg:col-span-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md p-6 md:p-8 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-slate-100">
            Why this project mattered
          </h3>
          <p className="text-slate-300 mt-2">{item.background}</p>
          <ul className="list-disc pl-5 mt-3 text-slate-300 space-y-1">
            {item.solution?.slice(0, 3).map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <Link
            to={`/resources/case-studies/${slug}`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-semibold shadow transition"
          >
            View full case study <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

/* --- Page --- */
const CaseStudies = () => {
  const featured = caseStudies[0];

  return (
    <div className="bg-slate-950 min-h-screen py-12 text-slate-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Case Studies
          </h1>
          <p className="text-slate-400 mt-3 text-lg max-w-3xl mx-auto">
            Real-world outcomes across industries: faster platforms, safer
            workflows, and happier users.
          </p>
        </header>

        {/* Featured */}
        {featured && (
          <section className="mb-14">
            <Featured item={featured} />
          </section>
        )}

        {/* Grid */}
        <section aria-label="Case studies list">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((item) => (
              <CaseCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
            <div className="text-slate-100 font-semibold">
              Have a challenge like these?
            </div>
            <a
              href="/contact"
              className="px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-semibold transition"
            >
              Book a free consult
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CaseStudies;
