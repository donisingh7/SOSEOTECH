// import React from "react";
// import { Send, Mail, Phone } from "lucide-react";

// export default function ContactPage() {
//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const payload = Object.fromEntries(formData.entries());

//     try {
//       const res = await fetch(
//         `${import.meta.env.VITE_API_URL}/contact`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(payload),
//         }
//       );

//       if (res.ok) {
//         alert("Thanks! Your message has been sent.");
//         e.target.reset();
//       } else {
//         alert("Failed to send. Please try again later.");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Error submitting form.");
//     }
//   };

//   return (
//     <main className="bg-[#F6F5F3] text-slate-900">
//       <section className="mx-auto max-w-7xl px-6 lg:px-8 py-10 md:py-14">
//         <div className="grid gap-10 md:grid-cols-2 items-start">
//           <div className="rounded-3xl bg-white p-6 md:p-8 ring-1 ring-slate-200 shadow-sm">
//             <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
//               Contact Us
//             </h1>
//             <p className="mt-2 text-slate-600 text-justify">
//               Tell us about your goals—engineering, marketing, or business.
//               We’ll get back within 1 business day.
//             </p>

//             <form onSubmit={onSubmit} className="mt-6 space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block text-xs font-semibold text-slate-700"
//                   >
//                     Name
//                   </label>
//                   <input
//                     id="name"
//                     name="name"
//                     placeholder="Your Name"
//                     required
//                     className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 outline-none focus:ring-2 focus:ring-yellow-500"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-xs font-semibold text-slate-700"
//                   >
//                     Email
//                   </label>
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     placeholder="you@example.com"
//                     required
//                     className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 outline-none focus:ring-2 focus:ring-yellow-500"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="phone"
//                   className="block text-xs font-semibold text-slate-700"
//                 >
//                   Phone
//                 </label>
//                 <input
//                   id="phone"
//                   name="phone"
//                   placeholder="+91 9XXXXXXXXX"
//                   className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 outline-none focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-xs font-semibold text-slate-700"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={5}
//                   placeholder="How can we help?"
//                   required
//                   className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 outline-none focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="inline-flex items-center gap-2 rounded-xl bg-yellow-500 px-5 py-2.5 font-semibold text-black hover:bg-yellow-400 transition"
//               >
//                 <Send className="h-4 w-4" /> Send Message
//               </button>

//               <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-slate-700">
//                 <span className="inline-flex items-center gap-2">
//                   <Mail className="h-4 w-4" /> soseotech@gmail.com
//                 </span>
//                 <span className="inline-flex items-center gap-2">
//                   <Phone className="h-4 w-4" /> 8769388932
//                 </span>
//               </div>
//             </form>
//           </div>

//           <div className="relative h-[320px] md:h-[560px]">
//             <img
//               src="/contact.jpg"
//               alt="Contact SOSEOTECH"
//               className="absolute right-0 top-0 h-full w-auto max-w-full rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.10)] object-cover"
//               loading="eager"
//             />
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// import React from "react";
// import { Send, Mail, Phone } from "lucide-react";
// import { motion } from "framer-motion";

// export default function ContactPage() {
  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const payload = Object.fromEntries(formData.entries());

  //   try {
  //     const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(payload),
  //     });

  //     if (res.ok) {
  //       alert("Thanks! Your message has been sent.");
  //       e.target.reset();
  //     } else {
  //       alert("Failed to send. Please try again later.");
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     alert("Error submitting form.");
  //   }
  // };
  // ✅ CORRECTED VERSION

// const onSubmit = async (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   const payload = Object.fromEntries(formData.entries());

//   try {
//     // Use backticks (`) instead of regular quotes
//     const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     });

//     if (res.ok) {
//       alert("Thanks! Your message has been sent.");
//       e.target.reset();
//     } else {
//       alert("Failed to send. Please try again later.");
//     }
//   } catch (err) {
//     console.error(err);
//     alert("Error submitting form.");
//   }
// };

//   return (
//     <main className="relative min-h-screen overflow-hidden text-white bg-[#0b1320]">
//       {/* Floating Background Shapes */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.2 }}
//         transition={{ duration: 2 }}
//         className="pointer-events-none absolute top-28 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"
//       />
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.3 }}
//         transition={{ duration: 2, delay: 1 }}
//         className="pointer-events-none absolute bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"
//       />

//       {/* =================== HERO WITH BACKGROUND VIDEO =================== */}
//       <section className="relative h-[220px] md:h-[220px] isolate overflow-hidden shadow-lg z-10">
//         {/* Video background (place your file in /public/videos) */}
//         <video
//           className="absolute inset-0 h-full w-full object-cover"
//           src="/public/videos/tech-hero.mp4"
//           poster="/videos/contact-hero.jpg"
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="metadata"
//           aria-label="Background video - abstract tech visuals"
//         />

//         {/* Dark overlay so text stays readable */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#0b1320]/90 via-[#0b1320]/70 to-[#0b1320]/90" />

//         {/* Hero content */}
//         <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: -30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-5xl md:text-6xl font-extrabold tracking-tight text-white"
//           >
//             Contact <span className="text-yellow-400">Us</span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 1 }}
//             className="mt-4 text-lg text-gray-200 max-w-2xl"
//           >
//             We’d love to hear from you! Let’s collaborate and create something
//             great together.
//           </motion.p>
//         </div>
//       </section>
//       {/* ================================================================= */}

//       {/* Contact Form Section */}
//       <section className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8 py-16">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="rounded-3xl bg-[#141b2b]/90 p-8 ring-1 ring-slate-700 shadow-2xl backdrop-blur-sm"
//         >
//           <form onSubmit={onSubmit} className="space-y-5">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-semibold text-gray-300">
//                   Name
//                 </label>
//                 <input
//                   id="name"
//                   name="name"
//                   placeholder="Your Name"
//                   required
//                   className="mt-1 w-full rounded-xl border border-gray-600 bg-[#0b1320] px-4 py-2.5 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-yellow-500 transition"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-semibold text-gray-300">
//                   Email
//                 </label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   placeholder="you@example.com"
//                   required
//                   className="mt-1 w-full rounded-xl border border-gray-600 bg-[#0b1320] px-4 py-2.5 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-yellow-500 transition"
//                 />
//               </div>
//             </div>

//             <div>
//               <label htmlFor="phone" className="block text-sm font-semibold text-gray-300">
//                 Phone
//               </label>
//               <input
//                 id="phone"
//                 name="phone"
//                 placeholder="+91 9XXXXXXXXX"
//                 className="mt-1 w-full rounded-xl border border-gray-600 bg-[#0b1320] px-4 py-2.5 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-yellow-500 transition"
//               />
//             </div>

//             <div>
//               <label htmlFor="message" className="block text-sm font-semibold text-gray-300">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows={5}
//                 placeholder="Your message here..."
//                 required
//                 className="mt-1 w-full rounded-xl border border-gray-600 bg-[#0b1320] px-4 py-2.5 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-yellow-500 transition"
//               />
//             </div>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               type="submit"
//               className="inline-flex items-center gap-2 rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-400 transition-all shadow-lg"
//             >
//               <Send className="h-4 w-4" /> Send Message
//             </motion.button>
//           </form>

//           {/* Contact Info */}
//           <div className="mt-10 grid gap-4 md:grid-cols-3 text-sm text-gray-400">
//             <span className="inline-flex items-center gap-2 justify-center">
//               <Mail className="h-4 w-4" /> soseotech@gmail.com
//             </span>
//             <span className="inline-flex items-center gap-2 justify-center">
//               <Phone className="h-4 w-4" /> +91 87693 88932
//             </span>
//             <span className="inline-flex items-center gap-2 justify-center">
//               🕒 Mon – Fri: 9 AM – 6 PM
//             </span>
//           </div>
//         </motion.div>
//       </section>
//     </main>
//   );
// }



import React, { useState } from "react";
import { Send, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  // Prefer env if present; otherwise fall back to a proxy path (/api) for dev
  const API_BASE =
    (import.meta.env?.VITE_API_URL && String(import.meta.env.VITE_API_URL).trim()) || "/api";

  const onSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());

    try {
      // Use a "simple request" to avoid CORS preflight:
      // Content-Type: application/x-www-form-urlencoded is a "simple" header.
      const body = new URLSearchParams(payload); // name, email, phone, message

      const res = await fetch(`${API_BASE}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body,
      });

      const text = await res.text();
      let data;
      try { data = JSON.parse(text); } catch { data = { raw: text }; }

      if (res.ok) {
        alert("Thanks! Your message has been sent.");
        e.target.reset();
      } else {
        console.error("CONTACT FAILED", { status: res.status, data });
        alert(`Failed to send (HTTP ${res.status}). ${data?.error || data?.raw || "Please try again later."}`);
      }
    } catch (err) {
      console.error("CONTACT ERROR", err);
      alert(`Network error: ${err.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden text-white bg-[#0b1320]">
      {/* Floating Background Shapes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        className="pointer-events-none absolute top-28 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 1 }}
        className="pointer-events-none absolute bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"
      />

      {/* =================== HERO WITH BACKGROUND VIDEO =================== */}
      <section className="relative h-[220px] md:h-[220px] isolate overflow-hidden shadow-lg z-10">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/tech-hero.mp4"         // use /videos/... (not /public/videos/...)
          poster="/videos/contact-hero.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Background video - abstract tech visuals"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1320]/90 via-[#0b1320]/70 to-[#0b1320]/90" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            Contact <span className="text-yellow-400">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-4 text-lg text-gray-200 max-w-2xl"
          >
            We’d love to hear from you! Let’s collaborate and create something great together.
          </motion.p>
        </div>
      </section>
      {/* ================================================================= */}

      {/* Contact Form Section */}
      <section className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-[#141b2b]/90 p-8 ring-1 ring-slate-700 shadow-2xl backdrop-blur-sm"
        >
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="mt-1 w-full rounded-xl border border-gray-600 bg-[#0b1320] px-4 py-2.5 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-yellow-500 transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="mt-1 w-full rounded-xl border border-gray-600 bg-[#0b1320] px-4 py-2.5 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-yellow-500 transition"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-300">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                placeholder="+91 9XXXXXXXXX"
                className="mt-1 w-full rounded-xl border border-gray-600 bg-[#0b1320] px-4 py-2.5 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-yellow-500 transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Your message here..."
                required
                className="mt-1 w-full rounded-xl border border-gray-600 bg-[#0b1320] px-4 py-2.5 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-yellow-500 transition"
              />
            </div>

            <motion.button
              whileHover={{ scale: submitting ? 1 : 1.05 }}
              whileTap={{ scale: submitting ? 1 : 0.95 }}
              disabled={submitting}
              type="submit"
              className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all shadow-lg
                ${submitting ? "bg-yellow-600 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-400"} text-black`}
            >
              <Send className="h-4 w-4" /> {submitting ? "Sending..." : "Send Message"}
            </motion.button>
          </form>

          {/* Contact Info */}
          <div className="mt-10 grid gap-4 md:grid-cols-3 text-sm text-gray-400">
            <span className="inline-flex items-center gap-2 justify-center">
              <Mail className="h-4 w-4" /> soseotech@gmail.com
            </span>
            <span className="inline-flex items-center gap-2 justify-center">
              <Phone className="h-4 w-4" /> +91 87693 88932
            </span>
            <span className="inline-flex items-center gap-2 justify-center">
              🕒 Mon – Fri: 9 AM – 6 PM
            </span>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
