
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { newsletters, slugify } from "../assets/data/newsletters";

/* ----------------------------- Helpers ----------------------------- */
const toSlug = (n) => `/resources/newsletters/${n.id}-${slugify(n.title)}`;

const Badge = ({ children }) => (
  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-slate-800/80 text-slate-200 shadow-sm ring-1 ring-inset ring-slate-700/60">
    {children}
  </span>
);

const Pill = ({ children, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${
      active
        ? "bg-indigo-500 text-white shadow-md"
        : "bg-slate-800/60 text-slate-300 hover:bg-slate-700/60"
    }`}
  >
    {children}
  </button>
);

/* ------------------------------ Hero Mosaic ------------------------------ */
const HeroMosaic = ({ items }) => {
  if (!items || !items.length) return null;

  const Tile = ({ n, aspect = "aspect-[16/9]" }) => (
    <Link to={toSlug(n)} className="block w-full max-w-full group">
      <div className={`relative overflow-hidden rounded-3xl ${aspect} isolate`}>
        <img
          src={n.image}
          alt={n.title}
          className="block h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-white z-10">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <Badge>{n.category}</Badge>
            {(n.tags || []).slice(0, 2).map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
          <h3 className="font-extrabold leading-tight text-lg sm:text-xl line-clamp-2">
            {n.title}
          </h3>
          <p className="mt-1 text-slate-200/90 text-xs sm:text-sm line-clamp-2">
            {n.description}
          </p>
        </div>
      </div>
    </Link>
  );

  if (items.length < 5) {
    return (
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 sm:mb-10">
        {items.map((n) => (
          <Tile key={n.id} n={n} aspect="aspect-[16/9] sm:aspect-[3/2]" />
        ))}
      </section>
    );
  }

  const [a, b, c, d, e] = items;

  return (
    <section className="mb-8 sm:mb-10 grid grid-cols-1 md:grid-cols-2 gap-4 min-w-0">
      {/* Left feature */}
      <div className="min-w-0">
        <Tile n={a} aspect="aspect-[16/10] md:aspect-[4/3]" />
      </div>

      {/* Right column */}
      <div className="grid grid-cols-1 gap-4 min-w-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 min-w-0">
          <Tile n={b} aspect="aspect-[16/9]" />
          <Tile n={c} aspect="aspect-[16/9]" />
        </div>

        {/* Banner */}
        <Link to={toSlug(d)} className="block w-full max-w-full group">
          <div className="relative overflow-hidden rounded-3xl aspect-[21/10] md:aspect-[16/7] isolate">
            <img
              src={d.image}
              alt={d.title}
              className="block h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />
            <div className="absolute left-0 right-0 bottom-0 md:bottom-auto md:left-6 md:top-1/2 md:-translate-y-1/2 p-4 sm:p-6 text-white z-10">
              <div className="mb-1">
                <Badge>Editor’s pick</Badge>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold leading-snug">
                {d.title}
              </h3>
              <p className="text-slate-200/90 text-xs sm:text-sm line-clamp-2">
                {d.description}
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Full-width mini banner */}
      <div className="md:col-span-2 rounded-3xl bg-slate-900 text-white p-5 sm:p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-3 border border-slate-800">
        <div className="text-xs sm:text-sm text-slate-400">Featured series</div>
        <div className="text-center md:text-left">
          <h4 className="text-xl sm:text-2xl md:text-3xl font-extrabold">
            {e.title}
          </h4>
          <p className="text-slate-300 mt-1 text-sm">{e.description}</p>
        </div>
        <Link
          to={toSlug(e)}
          className="mt-2 md:mt-0 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-semibold transition"
        >
          Read now →
        </Link>
      </div>
    </section>
  );
};

/* -------------------------- Category Tabs + Search ------------------------ */
const CategoryTabs = ({ cats, active, onChange }) => (
  <div className="flex flex-wrap items-center gap-2">
    {["All", ...cats].map((c) => (
      <Pill key={c} active={active === c} onClick={() => onChange(c)}>
        {c}
      </Pill>
    ))}
  </div>
);

const SearchBar = ({ value, setValue }) => (
  <div className="relative w-full md:w-96">
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Search issues, topics…"
      className="w-full rounded-2xl bg-slate-800/60 text-slate-200 placeholder-slate-500 px-4 py-3 pr-10 outline-none focus:ring-2 focus:ring-indigo-400 border border-slate-700 shadow-inner"
    />
    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 text-xs md:text-sm">
      ⌘K
    </span>
  </div>
);

/* ---------------------------- Timeline List ------------------------------- */
const TimelineList = ({ items }) => (
  <section className="mt-6">
    <h2 className="text-base sm:text-lg font-semibold text-slate-200 mb-3">
      Latest issues
    </h2>
    <ul className="space-y-4">
      {items.map((n) => (
        <li key={n.id}>
          <Link
            to={toSlug(n)}
            className="group flex items-center gap-3 sm:gap-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 shadow-sm hover:shadow-md transition p-3 w-full max-w-full"
          >
            <div className="relative h-20 w-28 rounded-xl overflow-hidden shrink-0">
              <img
                src={n.image}
                alt={n.title}
                className="block h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-400">
                <span>{n.date}</span>
                <span>•</span>
                <span>{n.category}</span>
              </div>
              <div className="font-semibold text-slate-100 leading-tight line-clamp-2">
                {n.title}
              </div>
              <p className="text-slate-400 text-xs sm:text-sm line-clamp-2">
                {n.description}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

/* ------------------------------ Subscribe -------------------------------- */
const Subscribe = () => (
  <div className="mt-12 sm:mt-14 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm p-5 sm:p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
    <div>
      <div className="text-lg sm:text-xl font-semibold text-slate-100">
        Get the newsletter
      </div>
      <p className="text-slate-400 text-sm sm:text-base">
        Actionable insights on cloud, engineering, finance, and growth.
      </p>
    </div>
    <form onSubmit={(e) => e.preventDefault()} className="flex w-full md:w-auto gap-2">
      <button className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-semibold transition">
        <Link to="/contact">
          Contact for Newsletter
        </Link>
      </button>
    </form>
  </div>
);

/* ---------------------------------- Page ---------------------------------- */
const Newsletter = () => {
  const [active, setActive] = useState("All");
  const [q, setQ] = useState("");

  const categories = useMemo(
    () => Array.from(new Set(newsletters.map((n) => n.category))).sort(),
    []
  );

  const filtered = useMemo(() => {
    const byCat =
      active === "All" ? newsletters : newsletters.filter((n) => n.category === active);
    const qNorm = q.trim().toLowerCase();
    if (!qNorm) return byCat;
    return byCat.filter(
      (n) =>
        n.title.toLowerCase().includes(qNorm) ||
        (n.description || "").toLowerCase().includes(qNorm) ||
        (n.tags || []).some((t) => t.toLowerCase().includes(qNorm))
    );
  }, [active, q]);

  const heroItems = filtered.slice(0, 5);

  useEffect(() => {
    document.title = "Newsletters — SOSEOTECH";
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen py-8 sm:py-10 overflow-x-hidden text-slate-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="mb-5 sm:mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Newsletter Library
          </h1>
          <p className="text-slate-400 mt-2 text-base sm:text-lg max-w-3xl">
            A magazine-style hub of deep dives, playbooks, and monthly roundups.
          </p>
        </header>

        {/* Hero Mosaic */}
        {heroItems.length > 0 && <HeroMosaic items={heroItems} />}

        {/* Controls */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4 mt-2">
          <CategoryTabs cats={categories} active={active} onChange={setActive} />
          <SearchBar value={q} setValue={setQ} />
        </div>

        {/* Latest — show ALL when All tab is active */}
        <div className="mt-5 sm:mt-6">
          <TimelineList
            items={
              active === "All"
                ? filtered
                : (filtered.length > 5 ? filtered.slice(5) : filtered)
            }
          />
        </div>

        {/* Subscribe */}
        <Subscribe />
      </div>
    </div>
  );
};

export default Newsletter;
