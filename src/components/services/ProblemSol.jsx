import { motion } from "framer-motion";

export default function ProblemSolution({
  problemimg,
  imgheading,
  imgcontent,
  descheading,
  desccontent,
}) {
  return (
    <section
      className="
        relative rounded-2xl
        mx-4 sm:mx-8 lg:mx-16
        px-4 sm:px-6
        py-10 sm:py-14 lg:py-16
        bg-[#21354f] to-transparent
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          grid grid-cols-1 lg:grid-cols-2
          gap-8 sm:gap-12 items-center
        "
      >
        {/* LEFT: Problem / Description (second on mobile for better scan) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false, amount: 0.5 }}
          className="
            max-w-3xl z-10
            order-2 lg:order-1
            text-center lg:text-left
          "
        >
          <h2
            className="
              text-3xl sm:text-4xl lg:text-5xl
              font-bold mb-4 sm:mb-6
              bg-gradient-to-r from-[#96a4ff] to-[#3b82f6]
              bg-clip-text text-transparent drop-shadow-lg
              max-[420px]:text-2xl
            "
          >
            {descheading}
          </h2>
          <p
            className="
              text-base sm:text-lg
              text-gray-200 sm:text-gray-300
              leading-relaxed font-medium
              max-[420px]:text-sm
            "
          >
            {desccontent}
          </p>
        </motion.div>

        {/* RIGHT: Image with Glass Card Overlay (first on mobile) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false, amount: 0.5 }}
          className="relative group order-1 lg:order-2"
        >
          <div
            className="
              relative rounded-2xl overflow-hidden shadow-2xl border border-cyan-400/30
              h-[200px] sm:h-[280px] md:h-[340px] lg:h-[380px]  /* was 220px on mobile; 200px is a bit tighter */
            ">

            {/* Image */}
            <img
              src={problemimg}
              alt={imgheading || "Solution"}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition duration-500"
            />

            {/* Cyan Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#06b6d4]/40 via-transparent to-transparent" />

            {/* Glass Text Box */}
<div
  className="
    absolute
    bottom-4 sm:bottom-6 lg:bottom-8
    left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8
    bg-black/50 backdrop-blur-md
    border border-cyan-400/30
    rounded-xl
    p-4 sm:p-5 lg:p-6
    shadow-lg transition duration-500 hover:scale-[1.02] lg:hover:scale-105

    max-[520px]:p-3 max-[520px]:bottom-3 max-[520px]:left-3 max-[520px]:right-3
  "
>
  <h3
    className="
      text-lg sm:text-xl font-bold text-blue-300
      mb-1.5 sm:mb-2
      max-[520px]:mb-0 max-[520px]:text-center max-[420px]:text-sm
    "
  >
    {imgheading}
  </h3>

  {/* Hide paragraph on screens < 520px */}
  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed max-[520px]:hidden">
    {imgcontent}
  </p>

            </div>
          </div>
        </motion.div>
      </div>

      {/* Soft cyan background glow */}
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.25)_0%,_transparent_70%)]" />
    </section>
  );
}
