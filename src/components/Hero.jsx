import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24 bg-[#F6F5F3]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h1 className="font-serif font-extrabold tracking-tight text-slate-900 text-4xl sm:text-5xl lg:text-6xl leading-[1.06]">
              Convert more with <br className="hidden sm:block" />
              <span className="text-slate-900">software &amp; business</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-700 max-w-2xl">
              We’re the #1 technology partner for modern software and business platforms.
              That means tools and solutions to help you win more new and repeat customers.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {/* Must match your Route path (Navbar uses "/contact") */}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-400 transition"
              >
                Get in Touch
              </Link>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-xl border border-slate-900/80 px-6 py-3 font-semibold text-slate-900 hover:bg-slate-900 hover:text-white transition"
              >
                Our Services
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -z-10 inset-y-8 -right-8 -left-8 rounded-[28px] bg-white/70 hidden md:block" />
            <div className="rounded-[28px] bg-white shadow-2xl ring-1 ring-black/5 overflow-hidden">
              <img src="/hero.jpg" alt="Product / dashboard preview" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
