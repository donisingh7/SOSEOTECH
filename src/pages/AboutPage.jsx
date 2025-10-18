// import React from "react";
// import { Building2, Target, Eye, Award, Rocket } from "lucide-react";

// function SectionTitle({ icon: Icon, title }) {
//   return (
//     <div className="flex items-center gap-2">
//       <Icon className="h-6 w-6 text-yellow-500" aria-hidden="true" />
//       <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{title}</h2>
//     </div>
//   );
// }

// export default function AboutPage() {
//   return (
//     <main id="about" className="bg-gradient-to-b from-white to-stone-50">
//       <section className="relative isolate overflow-hidden py-16 md:py-20 lg:py-28">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
//             <div>
//               <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
//                 About <span className="text-yellow-600">SOSEOTECH</span>
//               </h1>
//               <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-700 text-justify">
//                 <strong>SOSEO-TECH ADVISORY LLP</strong> is a Limited Liability
//                 Partnership (LLP) governed by the LLP Act, 2008. Registered
//                 under the Registrar of Companies RoC-Delhi, it operates as a
//                 non-government entity. According to the Ministry of Corporate
//                 Affairs (MCA), this LLP was incorporated on{" "}
//                 <strong>20-04-2025</strong> and its records were last updated on{" "}
//                 <strong>22-05-2025</strong>. Its eFiling status is currently
//                 listed as <strong>“Active”</strong> as per MCA records.
//               </p>
//               <p className="mt-4 text-base leading-relaxed text-gray-700 text-justify">
//                 The firm is dedicated to delivering innovative technology
//                 solutions, digital transformation strategies, and consulting
//                 services that empower businesses to grow in today’s competitive
//                 environment.
//               </p>
//             </div>
//             <div className="flex justify-center lg:justify-end">
//               <img
//                 src="/aboutus.jpg"
//                 alt="About SOSEOTECH"
//                 className="w-full max-w-lg rounded-2xl shadow-lg"
//                 loading="eager"
//                 fetchpriority="high"
//               />
//             </div>
//           </div>

//           <section id="legal" className="mt-16 md:mt-20">
//             <SectionTitle icon={Building2} title="Legal Information" />
//             <div className="mt-6 space-y-4 text-gray-700 leading-relaxed text-justify">
//               <p>
//                 <strong>CIN:</strong> AAZ-1234 | <strong>ROC:</strong> Delhi
//               </p>
//               <p>
//                 <strong>Date of Incorporation:</strong> 20th April 2025
//               </p>
//               <p>
//                 <strong>Last Updated:</strong> 22nd May 2025
//               </p>
//               <p>
//                 <strong>Status:</strong> Active
//               </p>
//             </div>
//           </section>

//           <section id="mission" className="mt-16 md:mt-20">
//             <SectionTitle icon={Target} title="Our Mission" />
//             <p className="mt-6 text-gray-700 leading-relaxed text-justify">
//               To empower businesses with cutting-edge digital solutions that
//               drive growth, efficiency, and transformation. We combine
//               engineering expertise, marketing strategies, and business
//               consulting into one seamless service.
//             </p>
//           </section>

//           <section id="vision" className="mt-16 md:mt-20">
//             <SectionTitle icon={Eye} title="Our Vision" />
//             <p className="mt-6 text-gray-700 leading-relaxed text-justify">
//               To become a global leader in providing digital transformation
//               services, enabling startups, enterprises, and organizations to
//               thrive in an increasingly competitive world.
//             </p>
//           </section>

//           <section id="values" className="mt-16 md:mt-20">
//             <SectionTitle icon={Award} title="Core Values" />
//             <ul className="mt-6 list-disc pl-6 space-y-3 text-gray-700 leading-relaxed text-justify">
//               <li>Integrity & Transparency</li>
//               <li>Innovation & Excellence</li>
//               <li>Customer Centricity</li>
//               <li>Collaboration & Growth</li>
//               <li>Sustainability & Responsibility</li>
//             </ul>
//           </section>

//           <section id="capabilities" className="mt-16 md:mt-20">
//             <SectionTitle icon={Rocket} title="Our Capabilities" />
//             <div className="mt-6 space-y-4 text-gray-700 leading-relaxed text-justify">
//               <p>
//                 We specialize in custom software development, web and mobile
//                 applications, cloud solutions, marketing services, finance &
//                 accounting, and business consulting.
//               </p>
//               <p>
//                 Our team blends technology with creativity to deliver practical,
//                 scalable, and future-ready solutions.
//               </p>
//             </div>
//           </section>

//           <section id="timeline" className="mt-16 md:mt-20">
//             <SectionTitle icon={Rocket} title="Our Journey" />
//             <ol className="mt-6 relative border-l border-gray-200 pl-6 space-y-8 text-justify">
//               <li>
//                 <div className="absolute -left-2 top-1 w-3 h-3 rounded-full bg-yellow-500"></div>
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   2025 – Company Founded
//                 </h3>
//                 <p className="text-gray-600">
//                   SOSEOTECH was established to provide innovative technology
//                   advisory and development services.
//                 </p>
//               </li>
//               <li>
//                 <div className="absolute -left-2 top-1 w-3 h-3 rounded-full bg-yellow-500"></div>
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   2026 – Expansion
//                 </h3>
//                 <p className="text-gray-600">
//                   Expanded into cloud, marketing, and financial consulting
//                   services.
//                 </p>
//               </li>
//               <li>
//                 <div className="absolute -left-2 top-1 w-3 h-3 rounded-full bg-yellow-500"></div>
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   2027 – Global Reach
//                 </h3>
//                 <p className="text-gray-600">
//                   Established partnerships with global enterprises and startups
//                   alike.
//                 </p>
//               </li>
//             </ol>
//           </section>
//         </div>
//       </section>
//     </main>
//   );
// }


import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaCloud, FaUsers, FaRocket, FaCogs } from "react-icons/fa";

export default function AboutPage() {
  const symbols = [
    { Icon: FaCode, top: "10%", left: "5%" },
    { Icon: FaRocket, top: "25%", right: "10%" },
    { Icon: FaCloud, bottom: "15%", left: "15%" },
    { Icon: FaCogs, bottom: "10%", right: "8%" },
    { Icon: FaUsers, top: "55%", left: "42%" },
  ];

  return (
    <main
      className="relative min-h-screen overflow-hidden text-white"
      style={{
        backgroundColor: "#0b1320",
        fontFamily: "'Inter', 'Poppins', sans-serif",
      }}
    >
      {/* ✅ Google Fonts Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700;800&display=swap');
      `}</style>

      {/* Floating Animated Symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {symbols.map(({ Icon, top, left, right, bottom }, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top,
              left,
              right,
              bottom,
              color: "rgba(182,208,226,0.18)",
              fontSize: i % 2 === 0 ? "90px" : "110px",
            }}
            animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 10 + i * 1.5, repeat: Infinity }}
          >
            <Icon />
          </motion.div>
        ))}
      </div>

      {/* 🌈 Banner Section */}
      <section className="relative text-center py-20 z-10 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #ff6b6b, #f8e473, #51cf66, #3bc9db, #4f46e5, #9333ea)",
            backgroundSize: "400% 400%",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "rgba(11,19,32,0.15)",
          }}
        />
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            About <span style={{ color: "#1B2947" }}>SOSEOTECH</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.9 }}
            className="mt-4 text-xl text-white max-w-3xl mx-auto font-medium"
          >
            Empowering Businesses Through Technology, Innovation, and
            Collaboration.
          </motion.p>

          <motion.div
            className="mt-6 mx-auto rounded-full"
            style={{ width: "120px", height: "3px", backgroundColor: "#B6D0E2" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9 }}
          />
        </div>
      </section>

      {/* 🏢 Company Info Section — glassmorphism + cosmic bg */}
<section
  className={[
    "relative z-10 mx-auto max-w-6xl px-6 lg:px-8 py-16",
    // cosmic backdrop under the section
    "before:pointer-events-none before:absolute before:inset-0",
    "before:bg-[radial-gradient(1000px_600px_at_70%_-10%,rgba(113,74,255,.25),transparent_55%),radial-gradient(800px_520px_at_-10%_120%,rgba(255,115,150,.22),transparent_60%)]",
  ].join(" ")}
>
  {/* decorative neon blobs like the reference */}
  <div className="pointer-events-none absolute -top-14 -right-10 h-72 w-72 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,#ffdd55_0%,#ff3bd4_40%,#6f5cff_70%,#ffdd55_100%)] blur-3xl opacity-70" />
  <div className="pointer-events-none absolute -bottom-16 -left-10 h-64 w-64 rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#ff6b6b_0%,#ffd166_35%,#6a5acd_70%,#ff6b6b_100%)] blur-3xl opacity-60" />

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className={[
      "relative rounded-[28px] p-10 md:p-12",
      // glass look
      "bg-white/10 backdrop-blur-[12px] border border-white/15",
      "shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset,0_40px_80px_-35px_rgba(0,0,0,0.6)]",
      // soft inner sheen
      "before:absolute before:inset-0 before:rounded-[28px] before:pointer-events-none",
      "before:bg-[radial-gradient(220px_160px_at_18%_8%,rgba(255,255,255,0.18),rgba(255,255,255,0))]",
    ].join(" ")}
  >
    <h2
      className="text-center text-4xl font-extrabold tracking-tight mb-3"
      style={{ color: "#ffffff", fontFamily: "'Poppins', sans-serif" }}
    >
      About SOSEOTECH
    </h2>

    <p className="text-white/85 text-justify leading-relaxed text-lg md:text-xl">
      SOSEO-TECH ADVISORY LLP is a Limited Liability Partnership (LLP)
      governed by the LLP Act, 2008. Registered under the Registrar of
      Companies RoC-Delhi, it operates as a non-government entity.
      Incorporated on <b>20-04-2025</b> and last updated on{" "}
      <b>22-05-2025</b>, its e-Filing status is currently “Active”. The
      firm provides innovative technology solutions, digital
      transformation strategies, and consulting services that empower
      businesses to grow.
    </p>

    <div className="grid md:grid-cols-2 gap-8 mt-10">
      <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
        <h3
          className="font-semibold mb-2 text-2xl text-white"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Legal Information
        </h3>
        <p className="text-white/80 text-lg">
          CIN: AAZ-1234 | ROC: Delhi <br />
          Incorporation: 20th April 2025 <br />
          Updated: 22nd May 2025 <br />
          Status: Active
        </p>
      </motion.div>

      <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
        <h3
          className="font-semibold mb-2 text-2xl text-white"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Our Mission
        </h3>
        <p className="text-white/80 text-lg">
          To empower businesses with cutting-edge digital solutions that
          drive growth, efficiency, and transformation through seamless
          integration of technology, marketing, and consulting expertise.
        </p>
      </motion.div>
    </div>

    {/* Vision / Values / Capabilities — glass cards */}
    <div className="grid md:grid-cols-3 gap-8 mt-12">
      {[
        {
          icon: <FaRocket className="text-5xl mb-3 mx-auto text-white/90" />,
          title: "Our Vision",
          text:
            "To become a global leader in digital transformation, enabling enterprises to thrive in a competitive world.",
        },
        {
          icon: <FaUsers className="text-5xl mb-3 mx-auto text-white/90" />,
          title: "Core Values",
          text: (
            <ul className="list-disc text-left ml-6 text-lg text-white/80 space-y-2">
              <li>Integrity & Transparency</li>
              <li>Innovation & Excellence</li>
              <li>Customer Centricity</li>
              <li>Collaboration & Growth</li>
              <li>Sustainability & Responsibility</li>
            </ul>
          ),
        },
        {
          icon: <FaCogs className="text-5xl mb-3 mx-auto text-white/90" />,
          title: "Capabilities",
          text:
            "Custom software, web & mobile apps, cloud services, digital marketing, and business consulting.",
        },
      ].map((card, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.04, y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className={[
            "rounded-2xl p-8 text-center",
            "bg-white/8 backdrop-blur-[10px] border border-white/15",
            "shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset,0_30px_60px_-35px_rgba(0,0,0,0.65)]",
            "hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset,0_40px_90px_-40px_rgba(132,99,255,.55)]",
          ].join(" ")}
        >
          {card.icon}
          <h3
            className="text-2xl font-semibold mb-3 text-white"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {card.title}
          </h3>
          <div className="text-lg text-white/80">{card.text}</div>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>


      {/* 👥 Team Section — matches the glass look */}
<section className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 py-20">
  {/* subtle background glow for this block too */}
  <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(700px_420px_at_50%_-10%,rgba(134,77,255,.20),transparent_60%)]" />

  <motion.h2
    initial={{ opacity: 0, y: -18 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-5xl font-extrabold text-center mb-3 text-white"
    style={{ fontFamily: "'Poppins', sans-serif" }}
  >
    Meet the People Behind SOSEOTECH
  </motion.h2>

  <p className="text-center text-white/75 max-w-3xl mx-auto mb-14 text-lg md:text-xl leading-relaxed">
    We’re a product-focused team that combines engineering precision with
    creative execution — from discovery to delivery, we build solutions
    that scale and inspire.
  </p>

  <div className="flex flex-wrap justify-center gap-10">
    {[
      { name: "Doni Singh Agrawal", role: "Product Development Manager" },
      { name: "Seema Gawande", role: "Software Development Engineer" },
      { name: "Isha Gupta", role: "Frontend Developer" },
    ].map((member, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.06, y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        className={[
          "rounded-3xl p-8 text-center w-80",
          "bg-white/10 backdrop-blur-[12px] border border-white/15",
          "shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset,0_35px_70px_-35px_rgba(0,0,0,0.65)]",
        ].join(" ")}
      >
        <div
          className="w-28 h-28 mx-auto rounded-full mb-5 flex items-center justify-center text-white/95"
          style={{
            border: "4px solid rgba(255,255,255,.25)",
            background:
              "radial-gradient(60px_60px_at_40%_30%,rgba(255,255,255,.12),rgba(255,255,255,.02))",
          }}
        >
          <FaUsers className="text-4xl" />
        </div>
        <h3
          className="text-2xl font-semibold text-white"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {member.name}
        </h3>
        <p className="text-white/75 text-lg mt-1">{member.role}</p>
      </motion.div>
    ))}
  </div>
</section>

    </main>
  );
}
