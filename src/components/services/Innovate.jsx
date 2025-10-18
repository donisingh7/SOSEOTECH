import { button, video } from "framer-motion/client";
import React from "react";
import { motion } from "framer-motion"; // 👈 add this
import { Link } from "react-router-dom";

export default function HeroVideoSection({ heading, subheading, buttonText }) {
  return (
    <section className="relative w-full  h-100  overflow-hidden">
      {/* Background Video */}
      
        <div className="absolute inset-0 bg-gradient-to-b from-[#dbcafe] via-[#4f3c75] to-[#dad1ff]

        bg-[length:200%_200%] animate-gradient-x">
      </div>
      
         {/* bg-gradient-to-b from-[#01934f] via-[#45b882] to-[#46f3ff]
         bg-gradient-to-t from-[#c4d7fc] via-[#7eb9f9] to-[#6d93b8]
  */}
      {/* Overlay Gradient (optional for better text contrast) */}
      <div className="absolute inset-0  bg-black/40"></div>

      {/* Overlay Text */}
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 ">
        <motion.div
          className=" flex flex-col items-center justify-center  text-center "
          initial={{ opacity: 0, y:60 }}
          whileInView={{ opacity: 1, y: 10 }}
          viewport={{ once: false ,amount: 0.5}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            {heading}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
            {subheading}
          </p>
          <Link to="/contact">
            <button className="px-8 py-3 bg-indigo-300 hover:bg-indigo-400 text-black rounded-full text-lg font-semibold transition-all duration-300 shadow-lg">
              {buttonText}
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
