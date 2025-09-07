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
  },
  {
    icon: Rocket,
    title: "Speed to Value",
    desc: "Lean discovery, quick iterations, and measurable business impact.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Comms",
    desc: "Weekly demos, clear docs, and no-surprise status updates.",
  },
  {
    icon: Users,
    title: "Skilled Team",
    desc: "Collaborative engineers, designers and marketers aligned to your goals.",
  },
  {
    icon: GraduationCap,
    title: "Always Learning",
    desc: "Continuous upskilling in modern stacks, cloud, and AI.",
  },
  {
    icon: Globe,
    title: "Global-Ready",
    desc: "Secure, scalable, and compliant delivery for growing brands.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="scroll-mt-28 md:scroll-mt-32 bg-white py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Why choose SOSEOTECH
          </h2>
          <p className="mt-2 text-slate-600 text-justify">
            A partner that blends engineering, marketing, and business
            solutions to drive growth.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-[#FFFDF5] p-5 hover:shadow-md transition"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-lg p-2 bg-yellow-100 ring-1 ring-yellow-200 shrink-0">
                  <Icon className="h-5 w-5 text-yellow-700" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {title}
                  </h3>
                  <p className="mt-1 text-[13px] text-slate-700 text-justify">
                    {desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
