import React from "react";

const TECHS = [
  {
    title: "UI Frameworks",
    desc: "React, Next.js, Vue — modern frameworks for scalable web apps.",
  },
  {
    title: "MEAN Stack",
    desc: "MongoDB, Express, Angular, Node — complete full-stack solutions.",
  },
  {
    title: "MERN Stack",
    desc: "MongoDB, Express, React, Node — fast, flexible and scalable.",
  },
  {
    title: "Cloud",
    desc: "AWS, Azure, GCP — deploy and scale your business securely.",
  },
  {
    title: "Microsoft",
    desc: ".NET, Azure, Power Platform — enterprise-grade Microsoft solutions.",
  },
];

export default function Technologies() {
  return (
    <section id="technologies" className="scroll-mt-36 py-20 bg-white w-full">
      <div className="max-w-6xl mx-auto px-6 md:px-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-slate-900">
          Our <span className="text-yellow-600">Technologies</span>
        </h2>
        <p className="mt-3 text-slate-600 text-center text-lg max-w-3xl mx-auto">
          Leveraging the latest stacks and platforms to deliver modern, scalable,
          and secure solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
          {TECHS.map((tech) => (
            <div key={tech.title} className="text-center">
              <h3 className="text-xl font-semibold text-slate-900">{tech.title}</h3>
              <p className="mt-2 text-slate-600">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
