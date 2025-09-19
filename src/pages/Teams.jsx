// src/pages/Teams.jsx
import React from "react";
import { Users2, Workflow, MessageSquare } from "lucide-react";

/** Beige palette just for the three long cards */
const BEIGE_BG = "#F5EBDD";      // card background (French beige)
const BEIGE_TILE = "#F3DCC4";    // icon tile
const BEIGE_ICON = "#5A4021";    // darker icon so it pops on beige

export default function Teams() {
  return (
    <main className="bg-white min-h-screen">
  {/* enough top spacing so hero doesn’t overlap navbar */}
  <div className="pt-24" />

  {/* ===== Hero ===== */}
  <section className="mx-auto max-w-7xl px-6">
    <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-2">
      <div className="max-w-2xl">
        <h1 className="mt-2 text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.15] text-neutral-900">
  Meet the people behind
  <br className="hidden md:block" />
  <span className="block">Soseotech Advisory</span>
</h1>
 <p className="mt-4 text-[15.5px] md:text-[16.5px] leading-8 text-neutral-800 text-justify">
              We’re a product-focused team that blends engineering discipline with
              practical execution. From discovery and design to delivery and long-term
              care, we build software that is reliable, scalable, and delightful to use.
              Our culture values ownership, clarity, and continuous improvement—so we
              can ship confidently and keep shipping.
            </p>
          </div>

          <div className="relative">
            <img
              src="/team/hero.jpg"
              alt="Soseotech team collaboration"
              className="w-full h-[330px] md:h-[380px] lg:h-[420px] object-cover rounded-3xl shadow-xl border border-neutral-200"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </div>
        </div>
      </section>

      {/* ===== Company intro copy ===== */}
      <section className="mx-auto max-w-7xl px-6 mt-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <p className="text-[15.5px] md:text-[16.5px] leading-8 text-neutral-800 text-justify">
            At Soseotech, our product development philosophy is simple: solve the right
            problems with the right technology—then make it effortless to run and
            evolve. We emphasize clean architecture, automation, strong observability,
            and human-friendly interfaces. The result is a predictable pipeline from
            idea to impact, with measurable outcomes at every stage.
          </p>
          <p className="text-[15.5px] md:text-[16.5px] leading-8 text-neutral-800 text-justify">
            We collaborate closely with stakeholders, prototype early, validate with
            users, and iterate quickly. Engineering quality and design quality move
            together; accessibility, performance, and security are part of “done,” not
            afterthoughts. This is how we reduce risk, accelerate delivery, and keep
            teams aligned around customer value.
          </p>
        </div>
      </section>

      {/* ===== Meet our team (3 member cards) ===== */}
      <section className="mx-auto max-w-7xl px-6 mt-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900">
          Meet our team
        </h2>

        <div className="mt-12 grid gap-15 sm:grid-cols-2 lg:grid-cols-3">
          <MemberCard
            name="Doni Singh Agrawal"
            role="Product Development Manager"
            img="/team/doni.jpg"
          />
          <MemberCard
            name="Seema Gawande"
            role="Software Development Engineer"
            img="/team/simmi.jpg"
          />
          <MemberCard
            name="Isha Gupta"
            role="Frontend Developer"
            img="/team/isha.jpg"
          />
        </div>
      </section>

      {/* ===== How our team works together (ONLY cards beige) ===== */}
      <section className="mx-auto max-w-7xl px-6 mt-16">
        <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">
          How our team works together
        </h3>

        <div className="mt-6 space-y-5">
          <WorkCard
            Icon={Users2}
            title="Discovery & Alignment"
            text="We begin with workshops to clarify goals, constraints, and success metrics. Shared context reduces rework and keeps delivery aligned with business outcomes."
          />
          <WorkCard
            Icon={Workflow}
            title="Build, Measure, Improve"
            text="Short, testable iterations with CI/CD, code reviews, and automated checks. We instrument early, monitor actively, and optimize based on evidence."
          />
          <WorkCard
            Icon={MessageSquare}
            title="Transparent Collaboration"
            text="Clear docs, async updates, and regular demos maintain momentum. Risks are surfaced early, decisions are recorded, and next steps are always visible."
          />
        </div>
      </section>

      {/* ===== Teamwork gallery (single full-width image) ===== */}
      <section className="mx-auto max-w-7xl px-6 mt-16 pb-20">
        <div className="rounded-2xl shadow-lg border border-neutral-200 overflow-hidden">
          <img
            src="/team/work1.jpg"
            alt="Team collaboration"
            className="w-full h-[340px] md:h-[420px] lg:h-[500px] object-cover"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/team/hero.jpg";
            }}
          />
        </div>
      </section>
    </main>
  );
}

/* ---------- Cards ---------- */

function MemberCard({ name, role, img }) {
  return (
    <article className="rounded-2xl bg-white shadow-md border border-neutral-200 p-6">
      <div className="w-28 h-28 mx-auto rounded-2xl overflow-hidden ring-1 ring-neutral-200">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
      </div>
      <h4 className="mt-4 text-lg font-semibold text-neutral-900 text-center">{name}</h4>
      <p className="text-neutral-600 text-center">{role}</p>
    </article>
  );
}

function WorkCard({ Icon, title, text }) {
  return (
    <div
      className="rounded-2xl shadow-md border p-6"
      style={{ backgroundColor: BEIGE_BG, borderColor: "rgba(0,0,0,0.10)" }}
    >
      <div
        className="h-12 w-12 rounded-xl flex items-center justify-center ring-1"
        style={{ backgroundColor: BEIGE_TILE, borderColor: "rgba(0,0,0,0.12)" }}
      >
        <Icon className="h-6 w-6" style={{ color: BEIGE_ICON }} />
      </div>
      <h4 className="mt-3 font-semibold text-neutral-900">{title}</h4>
      <p className="mt-2 text-[15.5px] leading-7 text-neutral-800 text-justify">{text}</p>
    </div>
  );
}
