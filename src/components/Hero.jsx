



import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="home" className="relative -mt-20 pt-20 min-h-screen overflow-hidden">
      {/* Navbar watcher for transparent/solid toggle */}
      <div id="nav-sentinel" className="absolute top-0 left-0 w-px h-px" />

      {/* === Background video (covers full viewport) === */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/hero-poster.jpg"   // fallback image
      >
        <source src="/Hero_Video.mp4" type="video/mp4" />
        {/* <source src="/Hero_Video.webm" type="video/webm" /> */}
      </video>

      {/* Dark overlay to improve readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 min-h-[calc(100vh-5rem)] flex items-center">
        <div className="max-w-2xl text-left text-white">
          <h1 className="font-serif font-extrabold leading-[1.08] text-4xl sm:text-5xl md:text-6xl mb-6">
            Convert more with <br /> software &amp; business
          </h1>

          <p className="text-lg sm:text-xl text-slate-200 mb-8">
            We’re the #1 technology partner for modern software and <br />
            business platforms. That means tools and solutions <br />
            to help you win more new and repeat customers.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-white/50 transition"
            >
              Get in Touch
            </Link>
            <Link
              to="#"
               onClick={() => {
                const el = document.getElementById("services");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center rounded-full border-2 border-white/85 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* No-JS fallback */}
      <noscript>
        <style>{`.hero-fallback{background:url('/assets/hero-poster.jpg') center/cover no-repeat;}`}</style>
        <div className="absolute inset-0 hero-fallback" />
      </noscript>
    </section>
  );
}
