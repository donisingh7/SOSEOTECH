import React, { useState, useRef, useEffect } from "react";
import { BriefcaseBusiness, Rocket, Users, ArrowUp, X } from "lucide-react";
import { motion, useInView, useMotionValue, animate, useScroll } from "framer-motion";

export default function CareersPage() {
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState("All");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!showModal) return;
    const onKey = (e) => e.key === "Escape" && setShowModal(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showModal]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const data = new FormData(formEl);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/careers`, { method: "POST", body: data });
      if (res.ok) {
        alert("Application submitted successfully!");
        formEl.reset();
        setShowModal(false);
      } else {
        const j = await res.json().catch(() => ({}));
        alert(j.error || "Failed to submit application. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again.");
    }
  };

  const stats = [
    { label: "Clients Served", value: 20 },
    { label: "Projects Completed", value: 15 },
    { label: "Team Members", value: 10 },
  ];

  const jobs = [
    { title: "SDE Intern", intro: "Contribute to front-end and back-end development projects.", type: "Internship" },
    { title: "UI/UX Designer", intro: "Design seamless and engaging digital experiences for our clients.", type: "Full-Time" },
    { title: "Marketing Intern", intro: "Support campaigns, content creation, and digital marketing strategies.", type: "Internship" },
  ];

  const benefits = [
    { icon: Rocket, title: "Fast Growth", desc: "Work on cutting-edge projects and accelerate your career with real-world experience." },
    { icon: Users, title: "Collaborative Culture", desc: "Learn from peers and mentors in a supportive and open environment." },
    { icon: BriefcaseBusiness, title: "Diverse Opportunities", desc: "From development to marketing, explore roles across industries and technologies." },
  ];

  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  function CountUp({ from = 0, to = 0, duration = 1.5, start }) {
    const motionVal = useMotionValue(from);
    const [display, setDisplay] = useState(from);
    useEffect(() => motionVal.on("change", (v) => setDisplay(Math.round(v))), [motionVal]);
    useEffect(() => {
      let ctrls;
      if (start) ctrls = animate(motionVal, to, { duration, ease: "easeOut" });
      else motionVal.set(from);
      return () => ctrls?.stop();
    }, [start, to, duration, motionVal, from]);
    return <span>{display}+</span>;
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <main className="bg-[#111c36] text-white relative overflow-hidden font-sans">
      {/* progress bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-yellow-500 z-50 origin-left" style={{ scaleX: scrollYProgress }} />

      {/* HERO */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="relative text-center py-16 md:py-24 overflow-visible bg-[#111c36]">
        <div className="absolute inset-0" style={{ background: "linear-gradient(292deg, #f59e0b 0%, #9333ea 50%, #4f46e5 100%)", clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)", zIndex: 0 }}></div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="mx-auto max-w-3xl">
              <h1 className="text-4xl font-extrabold sm:text-5xl text-white">
                Careers at <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-400">SOSEOTECH</span>
              </h1>
              <p className="mt-4 text-base md:text-lg max-w-xl mx-auto md:mx-0 text-slate-100 text-justify">
                Join our team of engineers, designers, and strategists shaping the future of technology, marketing, and business solutions.
              </p>
            </div>
            <div className="relative md:static">
              <img src="/career_img.png" alt="Career Illustration" className="relative md:absolute md:right-1 md:-bottom-21 w-110 md:w-130 z-20 mx-auto md:mx-0" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* STATS */}
      <motion.section ref={statsRef} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="pt-24 pb-12 bg-[#111c36]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <div className="flex justify-around flex-wrap gap-6">
            {stats.map((s, i) => {
              const colors = [
                { bg: "rgba(124,58,237,0.2)", border: "#7C3AED" },
                { bg: "rgba(37,99,235,0.2)", border: "#2563EB" },
                { bg: "rgba(250,204,21,0.2)", border: "#CA8A04" },
              ];
              return (
                <motion.div
                  key={i}
                  className="rounded-2xl p-6 w-36 text-center border-2 cursor-pointer backdrop-blur-md"
                  style={{ backgroundColor: colors[i].bg, borderColor: colors[i].border }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.18, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.4)" }}
                >
                  <h3 className="text-2xl font-bold text-white"><CountUp from={0} to={s.value} duration={1.6} start={statsInView} /></h3>
                  <p className="text-sm text-slate-300">{s.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* WHY */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="py-12 bg-[#111c36]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-400 font-[math]">
            Why Work With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={i} className="rounded-2xl border border-slate-700 bg-[#0b1320]/60 p-5 flex items-start gap-4 cursor-pointer backdrop-blur-md" whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.5)" }} transition={{ duration: 0.2 }}>
                <div className="bg-yellow-400/20 p-3 rounded-full"><b.icon className="h-6 w-6 text-yellow-400" /></div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-white">{b.title}</h3>
                  <p className="text-slate-300 text-sm mt-1">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ROLES */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="py-12 bg-[#111c36]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-400 font-[math]">
            Open Roles
          </h2>

          <div className="mb-4 flex flex-wrap gap-3 justify-center">
            {["All", "Internship", "Full-Time"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1 rounded-full text-sm font-semibold transition ${
                  filter === f ? "bg-yellow-500 text-black" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {jobs
              .filter((j) => filter === "All" || j.type === filter)
              .map((r, i) => (
                <motion.div key={i} className="rounded-2xl border border-slate-700 bg-[#0b1320]/60 p-5 cursor-pointer backdrop-blur-sm" whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.5)" }} transition={{ duration: 0.2 }}>
                  <h3 className="text-lg font-semibold text-white">{r.title}</h3>
                  <p className="mt-2 text-slate-300 text-sm">{r.intro}</p>
                  <p className="mt-1 text-xs text-slate-400 font-medium">{r.type}</p>
                </motion.div>
              ))}
          </div>

          <div className="mt-6 text-center">
            <motion.button
              onClick={() => setShowModal(true)}
              style={{ backgroundColor: "#f59e0b" }}
              className="inline-block rounded-full px-6 py-2 text-sm font-semibold text-black cursor-pointer"
              whileHover={{ scale: 1.05, backgroundColor: "#facc15" }}
              transition={{ duration: 0.2 }}
            >
              Apply Now
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* ✅ Modal Form (popup) — with extra padding so the X is always visible */}
      {/* ✅ Modal Form (popup) — smaller + with top margin */}
{showModal && (
  <div
    className="fixed inset-0 z-[60] flex items-start justify-center pt-10 sm:pt-14 px-4 sm:px-6"
    aria-modal="true"
    role="dialog"
    onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}
  >
    {/* Backdrop */}
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

    {/* Card */}
    <div className="relative w-full max-w-lg sm:max-w-xl bg-white text-slate-900 border border-slate-200 rounded-2xl shadow-2xl p-5 sm:p-6 pt-14 max-h-[85vh] overflow-y-auto">
      {/* Close */}
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        aria-label="Close"
      >
        {/* If you're importing X from lucide-react, keep it. Otherwise replace with × */}
        {/* <X className="h-5 w-5 text-slate-600" /> */}
        <span className="block h-5 w-5 text-slate-600 leading-none">×</span>
      </button>

      <h3 className="text-lg sm:text-xl font-bold mb-4">Submit Your Application</h3>

      <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold text-slate-700">Full Name</label>
          <input
            id="fullName" name="fullName" type="text" required
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700">Email</label>
          <input
            id="email" name="email" type="email" required
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-700">Phone</label>
          <input
            id="phone" name="phone" type="text"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div>
          <label htmlFor="resume" className="block text-sm font-semibold text-slate-700">Resume</label>
          <input id="resume" name="resume" type="file" required className="mt-1 w-full text-sm" />
        </div>

        <div>
          <label htmlFor="cover" className="block text-sm font-semibold text-slate-700">Cover Letter</label>
          <textarea
            id="cover" name="cover" rows={4}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-yellow-500 px-5 py-2 text-sm font-semibold text-white hover:bg-yellow-600 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  </div>
)}

      {/* Back to Top */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-yellow-500 text-black shadow-lg hover:bg-yellow-400 transition"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </main>
  );
}