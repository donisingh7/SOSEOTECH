// // src/components/AboutPlainSection.jsx
// import React, { useEffect, useRef } from "react";

// function useReveal() {
//   const ref = useRef(null);
//   useEffect(() => {
//     const io = new IntersectionObserver(
//       (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("show")),
//       { threshold: 0.15 }
//     );
//     ref.current?.querySelectorAll?.(".reveal").forEach((n) => io.observe(n));
//     return () => io.disconnect();
//   }, []);
//   return ref;
// }

// export default function AboutPlainSection() {
//   const ref = useReveal();

//   return (
//     <section className="relative isolate">
//       {/* curved connector under dark hero */}
//       <svg
//         className="absolute -top-8 left-0 right-0 w-full"
//         height="80"
//         viewBox="0 0 1440 80"
//         preserveAspectRatio="none"
//       >
//         <path d="M0,80 C320,0 1120,0 1440,80 L1440,80 L0,80 Z" fill="white" />
//       </svg>

//       {/* bright dotted background */}
//       <div className="bg-white">
//         <div className="relative bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:18px_18px]">
//           <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-slate-50" />
//           <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-10 py-16" ref={ref}>
//             {/* Heading */}
//             <header className="text-center reveal opacity-0 translate-y-6 transition duration-700">
//               <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
//                 About <span className="text-yellow-600">SOSEOTECH</span>
//               </h2>
//               <p className="mx-auto mt-3 max-w-3xl text-slate-600 text-lg">
//                 We’re a technology partner helping ambitious teams design, build, and scale
//                 software—with clarity, speed, and measurable outcomes.
//               </p>
//               <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-slate-400/60 to-transparent" />
//             </header>

//             {/* Body copy only — no cards */}
//             <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
//               {/* optional illustrative image area – remove if not needed */}
//               <div className="lg:col-span-5 reveal opacity-0 translate-y-6 transition duration-700">
//                 <div className="rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-sm bg-white">
//                   <img
//                     src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop"
//                     alt="Team at work"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>

//               <div className="lg:col-span-7 reveal opacity-0 translate-y-6 transition duration-700">
//                 <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-700 text-justify">
//                 <strong>SOSEO-TECH ADVISORY LLP</strong> is a Limited Liability
//                 Partnership (LLP) governed by the LLP Act, 2008. Registered
//                 under the Registrar of Companies RoC-Delhi, it operates as a
//                 non-government entity. According to the Ministry of Corporate
//                 Affairs (MCA), this LLP was incorporated on{" "}
//                 <strong>20-04-2025</strong> and its records were last updated on{" "}
//                 <strong>22-05-2025</strong>. Its eFiling status is currently
//                 listed as <strong>“Active”</strong> as per MCA records.
//               </p>

                {/* CTA row (optional) */}
        //         <div className="mt-8 flex flex-wrap gap-3">
        //           <a
        //             href="#contact"
        //             className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:bg-slate-800 transition"
        //           >
        //             Talk to us
        //           </a>
        //           <a
        //             href="#work"
        //             className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-white transition"
        //           >
        //             See our work
        //           </a>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
//         </div>
//       </div>

//       {/* reveal helper */}
//       <style>{`.reveal.show{opacity:1;transform:translateY(0)}`}</style>
//     </section>
//   );
// }


// src/components/AboutSection.jsx
import React, { useEffect, useRef } from "react";

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("show")),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll?.(".reveal").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

export default function AboutSection() {
  const ref = useReveal();

  return (
    <section className="relative isolate">
      {/* curved connector */}
      <svg
        className="absolute -top-8 left-0 right-0 w-full"
        height="80"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path d="M0,80 C320,0 1120,0 1440,80 L1440,80 L0,80 Z" fill="white" />
      </svg>

      {/* dotted + gradient background */}
      <div className="bg-white">
        <div className="relative bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:18px_18px]">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-slate-50" />

          <div
            className="relative mx-auto max-w-5xl px-6 sm:px-8 md:px-10 py-16 text-center"
            ref={ref}
          >
            {/* Heading */}
            <h2 className="reveal opacity-0 translate-y-6 transition duration-700 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              About <span className="text-blue-600">Us</span>
            </h2>

            {/* Paragraph */}
            <p className="reveal opacity-0 translate-y-6 transition duration-700 mt-4 text-base md:text-lg leading-relaxed text-slate-700 max-w-3xl mx-auto">
              Founded in 2016 and headquartered in Pitampura, Delhi, Finance Saarthi
              offers end-to-end financial services. Our network of experienced professionals
              provides personalized strategies in taxation, compliance, investments,
              and business advisory, serving clients worldwide.
            </p>

            
            {/* Divider */}
            <div className="mx-auto mt-6 mb-8 h-px w-24 bg-gradient-to-r from-transparent via-slate-400/60 to-transparent" />

            {/* Stats */}
            <div className="reveal opacity-0 translate-y-6 transition duration-700 mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-extrabold text-blue-600">10+</div>
                <p className="mt-2 text-sm md:text-base text-slate-600">Years of Experience</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-extrabold text-blue-600">500+</div>
                <p className="mt-2 text-sm md:text-base text-slate-600">Clients Served</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-extrabold text-blue-600">98%</div>
                <p className="mt-2 text-sm md:text-base text-slate-600">Compliance Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* reveal helper */}
      <style>{`.reveal.show{opacity:1;transform:translateY(0)}`}</style>
    </section>
  );
}
