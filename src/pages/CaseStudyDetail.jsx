
// import React, { useEffect } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import { caseStudies, slugify } from "../assets/data/caseStudies";

// const Pill = ({ children }) => (
//   <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 shadow-sm">
//     {children}
//   </span>
// );

// const Metric = ({ m }) => (
//   <div className="p-4 rounded-xl bg-white shadow-sm">
//     <div className="text-xs uppercase tracking-wide text-gray-500">{m.label}</div>
//     <div className="mt-1 text-sm text-gray-600">Before: <span className="font-medium">{m.before}</span></div>
//     <div className="text-base font-semibold text-gray-900">After: {m.after}</div>
//     <div className="mt-1 text-emerald-600 font-semibold">{m.change}</div>
//   </div>
// );

// const Related = ({ currentId }) => {
//   const rel = caseStudies.filter(cs => cs.id !== currentId).slice(0, 4);
//   return (
//     <div className="space-y-4">
//       {rel.map((p) => (
//         <Link
//           key={p.id}
//           to={`/resources/case-studies/${p.id}-${slugify(p.title)}`}
//           className="flex items-center gap-3 p-3 rounded-xl bg-white shadow-sm hover:shadow-md transition"
//         >
//           <img src={p.image} alt={p.title} className="h-14 w-20 object-cover rounded-lg" />
//           <div className="min-w-0">
//             <div className="text-[11px] uppercase text-brand-mute font-semibold">{p.industry}</div>
//             <div className="text-sm text-brand-text font-medium line-clamp-2">{p.title}</div>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// const PrevNext = ({ post }) => {
//   const ordered = [...caseStudies].sort((a, b) => a.id - b.id);
//   const idx = ordered.findIndex((p) => p.id === post.id);
//   const prev = idx > 0 ? ordered[idx - 1] : null;
//   const next = idx < ordered.length - 1 ? ordered[idx + 1] : null;

//   return (
//     <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-3">
//       <div className="flex">
//         {prev ? (
//           <Link
//             to={`/resources/case-studies/${prev.id}-${slugify(prev.title)}`}
//             className="flex-1 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition"
//           >
//             <div className="text-xs text-brand-mute mb-1">Previous</div>
//             <div className="font-semibold text-brand-text line-clamp-2">{prev.title}</div>
//           </Link>
//         ) : (
//           <div className="flex-1 p-4 rounded-xl bg-gray-50 text-brand-mute">No previous study</div>
//         )}
//       </div>
//       <div className="flex">
//         {next ? (
//           <Link
//             to={`/resources/case-studies/${next.id}-${slugify(next.title)}`}
//             className="flex-1 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition text-right"
//           >
//             <div className="text-xs text-brand-mute mb-1">Next</div>
//             <div className="font-semibold text-brand-text line-clamp-2">{next.title}</div>
//           </Link>
//         ) : (
//           <div className="flex-1 p-4 rounded-xl bg-gray-50 text-brand-mute text-right">No next study</div>
//         )}
//       </div>
//     </div>
//   );
// };

// const CaseStudyDetail = () => {
//   const { slug } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => { window.scrollTo(0, 0); }, [slug]);

//   const id = Number(slug.split("-")[0]);
//   const cs = caseStudies.find((p) => p.id === id);

//   if (!cs) {
//     return (
//       <div className="container mx-auto px-4 py-16">
//         <p className="text-brand-text text-xl">Case study not found.</p>
//         <button onClick={() => navigate("/resources/case-studies")} className="text-brand-yellow font-semibold mt-4 inline-block">
//           ← Back to Case Studies
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white min-h-screen">
//       {/* Hero */}
//       <div className="relative h-[40vh] md:h-[50vh]">
//         <img src={cs.image} alt={cs.title} className="w-full h-full object-cover" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
//         <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-8 text-white">
//           <div className="flex gap-2 flex-wrap mb-2">
//             <Pill>{cs.industry}</Pill>
//             {cs.tags?.slice(0, 3).map((t) => <Pill key={t}>{t}</Pill>)}
//           </div>
//           <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">{cs.title}</h1>
//           <div className="text-white/90 text-sm mt-2">{cs.client}</div>
//         </div>
//       </div>

//       {/* Body */}
//       <div className="container mx-auto px-4 py-10 md:py-14">
//         {/* Breadcrumbs */}
//         <nav className="text-sm mb-6 text-brand-mute">
//           <Link to="/" className="hover:text-brand-text">Home</Link>
//           <span className="mx-2">/</span>
//           <Link to="/resources/case-studies" className="hover:text-brand-text">Case Studies</Link>
//           <span className="mx-2">/</span>
//           <span className="text-brand-text font-medium">{cs.title}</span>
//         </nav>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
//           {/* Main */}
//           <article className="lg:col-span-8">
//             <div className="rounded-2xl bg-white shadow-md p-6 md:p-8">
//               {/* Background */}
//               <section className="mb-6">
//                 <h3 className="text-lg font-semibold text-gray-900">Background</h3>
//                 <p className="text-gray-700 mt-2">{cs.background}</p>
//               </section>

//               {/* Problem */}
//               <section className="mb-6">
//                 <h3 className="text-lg font-semibold text-gray-900">Problem</h3>
//                 <p className="text-gray-700 mt-2">{cs.problem}</p>
//               </section>

//               {/* Solution */}
//               <section className="mb-6">
//                 <h3 className="text-lg font-semibold text-gray-900">Solution</h3>
//                 <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
//                   {cs.solution?.map((s, i) => <li key={i}>{s}</li>)}
//                 </ul>
//               </section>

//               {/* Process */}
//               <section className="mb-6">
//                 <h3 className="text-lg font-semibold text-gray-900">Process</h3>
//                 <div className="mt-3 space-y-3">
//                   {cs.process?.map((p, i) => (
//                     <div key={p.step} className="relative pl-8">
//                       <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-brand-yellow shadow" />
//                       <div className="text-sm font-semibold text-gray-900">{i + 1}. {p.step}</div>
//                       <div className="text-sm text-gray-600">{p.detail}</div>
//                     </div>
//                   ))}
//                 </div>
//               </section>

//               {/* Key Learnings */}
//               <section className="mb-8">
//                 <h3 className="text-lg font-semibold text-gray-900">Key Learnings</h3>
//                 <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
//                   {cs.learnings?.map((l, i) => <li key={i}>{l}</li>)}
//                 </ul>
//               </section>

//               {/* Quotes */}
//               {cs.quotes?.length > 0 && (
//                 <section className="mb-8">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-3">What our users say</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                     {cs.quotes.map((q) => (
//                       <div key={q.name} className="p-5 rounded-xl bg-gray-50 shadow-sm">
//                         <div className="flex items-center gap-3 mb-3">
//                           {q.avatar && <img src={q.avatar} alt={q.name} className="h-10 w-10 rounded-full object-cover" />}
//                           <div>
//                             <div className="font-semibold text-gray-900">{q.name}</div>
//                             <div className="text-xs text-gray-500">{q.role}</div>
//                           </div>
//                         </div>
//                         <p className="text-gray-700 italic">“{q.text}”</p>
//                       </div>
//                     ))}
//                   </div>
//                 </section>
//               )}

//               {/* CTA */}
//               <div className="mt-6">
//                 <a href={cs.cta?.link || "#"} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-yellow text-black font-semibold shadow hover:shadow-md transition">
//                   {cs.cta?.text || "Start your project"} <span aria-hidden>→</span>
//                 </a>
//               </div>

//               {/* Prev/Next */}
//               <PrevNext post={cs} />
//             </div>
//           </article>

//           {/* Sidebar */}
//           <aside className="lg:col-span-4 space-y-6">
//             {/* Results */}
//             <section>
//               <h4 className="text-sm font-semibold text-gray-900 mb-3">Quantifiable Results</h4>
//               <div className="grid grid-cols-2 gap-3">
//                 {cs.results?.map((m) => <Metric key={m.label} m={m} />)}
//               </div>
//             </section>

//             {/* Quick meta */}
//             <section className="rounded-2xl bg-white shadow-sm p-6">
//               <div className="text-sm font-semibold text-gray-900">At a glance</div>
//               <ul className="mt-2 text-sm text-gray-700 space-y-1">
//                 <li><span className="text-gray-500">Client:</span> {cs.client}</li>
//                 <li><span className="text-gray-500">Industry:</span> {cs.industry}</li>
//                 <li className="flex flex-wrap gap-1 items-center">
//                   <span className="text-gray-500 mr-1">Tags:</span>
//                   {cs.tags?.map((t) => <Pill key={t}>{t}</Pill>)}
//                 </li>
//               </ul>
//             </section>

//             {/* Related */}
//             <section className="rounded-2xl">
//               <div className="text-sm font-semibold text-gray-900 mb-3">Related studies</div>
//               <Related currentId={cs.id} />
//             </section>
//           </aside>
//         </div>

//         {/* Back link */}
//         <div className="mt-10">
//           <Link to="/resources/case-studies" className="inline-block text-brand-yellow font-semibold hover:underline">
//             ← Back to Case Studies
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CaseStudyDetail;
 
import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { caseStudies, slugify } from "../assets/data/caseStudies";

/* ---------- small UI bits (dark themed) ---------- */
const Pill = ({ children }) => (
  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/10 text-slate-200 ring-1 ring-white/15">
    {children}
  </span>
);

const Metric = ({ m }) => (
  <div className="p-4 rounded-xl bg-slate-900/70 ring-1 ring-white/10 shadow-lg">
    <div className="text-[11px] uppercase tracking-wide text-slate-400">
      {m.label}
    </div>
    <div className="mt-1 text-sm text-slate-300">
      Before: <span className="font-medium">{m.before}</span>
    </div>
    <div className="text-base font-semibold text-slate-100">
      After: {m.after}
    </div>
    <div className="mt-1 text-emerald-400 font-semibold">{m.change}</div>
  </div>
);

const Related = ({ currentId }) => {
  const rel = caseStudies.filter((cs) => cs.id !== currentId).slice(0, 4);
  return (
    <div className="space-y-4">
      {rel.map((p) => (
        <Link
          key={p.id}
          to={`/resources/case-studies/${p.id}-${slugify(p.title)}`}
          className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/70 ring-1 ring-white/10 hover:ring-white/20 hover:bg-slate-900/80 transition"
        >
          <img
            src={p.image}
            alt={p.title}
            className="h-14 w-20 object-cover rounded-lg ring-1 ring-white/20"
          />
          <div className="min-w-0">
            <div className="text-[11px] uppercase text-slate-400 font-semibold">
              {p.industry}
            </div>
            <div className="text-sm text-slate-100 font-medium line-clamp-2">
              {p.title}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

const PrevNext = ({ post }) => {
  const ordered = [...caseStudies].sort((a, b) => a.id - b.id);
  const idx = ordered.findIndex((p) => p.id === post.id);
  const prev = idx > 0 ? ordered[idx - 1] : null;
  const next = idx < ordered.length - 1 ? ordered[idx + 1] : null;

  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-3">
      <div className="flex">
        {prev ? (
          <Link
            to={`/resources/case-studies/${prev.id}-${slugify(prev.title)}`}
            className="flex-1 p-4 rounded-xl bg-slate-900/70 ring-1 ring-white/10 hover:ring-white/20 transition"
          >
            <div className="text-[12px] text-slate-400 mb-1">Previous</div>
            <div className="font-semibold text-slate-100 line-clamp-2">
              {prev.title}
            </div>
          </Link>
        ) : (
          <div className="flex-1 p-4 rounded-xl bg-slate-900/40 text-slate-500 ring-1 ring-white/5">
            No previous study
          </div>
        )}
      </div>
      <div className="flex">
        {next ? (
          <Link
            to={`/resources/case-studies/${next.id}-${slugify(next.title)}`}
            className="flex-1 p-4 rounded-xl bg-slate-900/70 ring-1 ring-white/10 hover:ring-white/20 transition text-right"
          >
            <div className="text-[12px] text-slate-400 mb-1">Next</div>
            <div className="font-semibold text-slate-100 line-clamp-2">
              {next.title}
            </div>
          </Link>
        ) : (
          <div className="flex-1 p-4 rounded-xl bg-slate-900/40 text-slate-500 ring-1 ring-white/5 text-right">
            No next study
          </div>
        )}
      </div>
    </div>
  );
};

/* ---------- page ---------- */
const CaseStudyDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const id = Number(slug.split("-")[0]);
  const cs = caseStudies.find((p) => p.id === id);

  if (!cs) {
    return (
      <div className="container mx-auto px-4 py-16">
        <p className="text-slate-100 text-xl">Case study not found.</p>
        <button
          onClick={() => navigate("/resources/case-studies")}
          className="text-amber-300 font-semibold mt-4 inline-block"
        >
          ← Back to Case Studies
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b1220] text-slate-200">
      {/* Hero */}
      <div className="relative h-[40vh] md:h-[50vh]">
        <img src={cs.image} alt={cs.title} className="w-full h-full object-cover" />
        {/* dark gradient & slight backdrop blur on top to improve readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-transparent backdrop-blur-[1px]" />
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-8 text-white">
          <div className="flex gap-2 flex-wrap mb-2">
            <Pill>{cs.industry}</Pill>
            {cs.tags?.slice(0, 3).map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            {cs.title}
          </h1>
          <div className="text-white/90 text-sm mt-2">{cs.client}</div>
        </div>
      </div>

      {/* Body */}
      <div className="container mx-auto px-4 py-10 md:py-14">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-6 text-slate-400">
          <Link to="/" className="hover:text-slate-100">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/resources/case-studies" className="hover:text-slate-100">
            Case Studies
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-100 font-medium">{cs.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main */}
          <article className="lg:col-span-8">
            <div className="rounded-2xl bg-slate-900/70 ring-1 ring-white/10 shadow-xl p-6 md:p-8">
              {/* Background */}
              <section className="mb-6">
                <h3 className="text-lg font-semibold text-slate-100">Background</h3>
                <p className="text-slate-300 mt-2">{cs.background}</p>
              </section>

              {/* Problem */}
              <section className="mb-6">
                <h3 className="text-lg font-semibold text-slate-100">Problem</h3>
                <p className="text-slate-300 mt-2">{cs.problem}</p>
              </section>

              {/* Solution */}
              <section className="mb-6">
                <h3 className="text-lg font-semibold text-slate-100">Solution</h3>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-300">
                  {cs.solution?.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </section>

              {/* Process */}
              <section className="mb-6">
                <h3 className="text-lg font-semibold text-slate-100">Process</h3>
                <div className="mt-3 space-y-3">
                  {cs.process?.map((p, i) => (
                    <div key={p.step} className="relative pl-8">
                      <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-amber-300 shadow" />
                      <div className="text-sm font-semibold text-slate-100">
                        {i + 1}. {p.step}
                      </div>
                      <div className="text-sm text-slate-300">{p.detail}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Key Learnings */}
              <section className="mb-8">
                <h3 className="text-lg font-semibold text-slate-100">
                  Key Learnings
                </h3>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-300">
                  {cs.learnings?.map((l, i) => (
                    <li key={i}>{l}</li>
                  ))}
                </ul>
              </section>

              {/* Quotes */}
              {cs.quotes?.length > 0 && (
                <section className="mb-8">
                  <h3 className="text-lg font-semibold text-slate-100 mb-3">
                    What our users say
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {cs.quotes.map((q) => (
                      <div
                        key={q.name}
                        className="p-5 rounded-xl bg-slate-900/60 ring-1 ring-white/10"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          {q.avatar && (
                            <img
                              src={q.avatar}
                              alt={q.name}
                              className="h-10 w-10 rounded-full object-cover ring-1 ring-white/20"
                            />
                          )}
                          <div>
                            <div className="font-semibold text-slate-100">
                              {q.name}
                            </div>
                            <div className="text-xs text-slate-400">{q.role}</div>
                          </div>
                        </div>
                        <p className="text-slate-300 italic">“{q.text}”</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* CTA */}
              <div className="mt-6">
                <a
                  href={cs.cta?.link || "#"}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-300 text-black font-semibold shadow hover:shadow-amber-300/30 transition"
                >
                  {cs.cta?.text || "Start your project"} <span aria-hidden>→</span>
                </a>
              </div>

              {/* Prev/Next */}
              <PrevNext post={cs} />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Results */}
            <section>
              <h4 className="text-sm font-semibold text-slate-200 mb-3">
                Quantifiable Results
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {cs.results?.map((m) => (
                  <Metric key={m.label} m={m} />
                ))}
              </div>
            </section>

            {/* Quick meta */}
            <section className="rounded-2xl bg-slate-900/70 ring-1 ring-white/10 p-6">
              <div className="text-sm font-semibold text-slate-200">
                At a glance
              </div>
              <ul className="mt-2 text-sm text-slate-300 space-y-1">
                <li>
                  <span className="text-slate-400">Client:</span> {cs.client}
                </li>
                <li>
                  <span className="text-slate-400">Industry:</span> {cs.industry}
                </li>
                <li className="flex flex-wrap gap-1 items-center">
                  <span className="text-slate-400 mr-1">Tags:</span>
                  {cs.tags?.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </li>
              </ul>
            </section>

            {/* Related */}
            <section className="rounded-2xl">
              <div className="text-sm font-semibold text-slate-200 mb-3">
                Related studies
              </div>
              <Related currentId={cs.id} />
            </section>
          </aside>
        </div>

        {/* Back link */}
        <div className="mt-10">
          <Link
            to="/resources/case-studies"
            className="inline-block text-amber-300 font-semibold hover:underline"
          >
            ← Back to Case Studies
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
