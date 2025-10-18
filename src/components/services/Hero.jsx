import { motion } from "framer-motion";
import video1 from '../../assets/videos/istockphoto-2210801206-640_adpp_is.mp4';
import { Link } from "react-router-dom";

export default function HeroSection({ servicetitle, heading }) {
  const particleAnimation = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      opacity: [0.3, 1, 0.3],
    },
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section
      className="
        relative h-100 w-full flex flex-col justify-center items-center text-center overflow-hidden
        max-[640px]:min-h-[50vh]  /* only on very small screens, give the hero some height */
      "
    >
      {/* Background video — small height on mobile, full-bleed from sm+ */}
<video
  className="
    w-full object-cover
    h-[50vh] max-[360px]:h-[42vh]     /* ⬅️ shorter on small screens */
    sm:absolute sm:inset-0 sm:h-full /* ⬅️ full height & absolute on desktop/tablet */
  "
  autoPlay
  loop
  muted
  playsInline
>
  <source src={video1} type="video/mp4" />
  Your browser does not support the video tag.
</video>

{/* Overlay — matches video height on mobile, full-bleed from sm+ */}
<div
  className="
    absolute left-0 right-0 top-0
    h-[48vh] max-[360px]:h-[42vh]  /* ⬅️ aligns with mobile video height */
    sm:inset-0 sm:h-full
    bg-black/40 p-6 sm:p-20
  "
>
  {/* Full-screen blur only on sm+ so mobile stays performant and clean */}
  <div className="hidden sm:block backdrop-blur-xl h-full"></div>
</div>


      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
  {/* mobile-only blur wrapper */}
  <div
    className="
      max-[640px]:relative max-[640px]:mx-auto max-[640px]:mt-6
      max-[640px]:w-[92%] max-[640px]:max-w-[520px]
      max-[640px]:rounded-3xl max-[640px]:px-4 max-[640px]:py-6
      max-[640px]:bg-black/30 max-[640px]:backdrop-blur-xl
      max-[640px]:border max-[640px]:border-white/10
     
    "
  >
    {/* Service title pill (absolute on desktop, normal flow on mobile) */}
    <div
  className="
    relative mt-4 self-center

    sm:absolute sm:top-16 sm:left-1/2 sm:-translate-x-1/2 sm:mt-0 sm:self-auto sm:z-30 
  "
>
  <div className=" max-[640px]:inline-flex max-[640px]:w-auto max-[640px]:max-w-[220px]
    max-[640px]:px-3 max-[640px]:py-1.5
    max-[640px]:rounded-2xl max-[640px]:backdrop-blur-md
    max-[640px]:bg-white/10 max-[640px]:border max-[640px]:border-blue-200
    max-[640px]:shadow-lg max-[640px]:mx-auto

    sm:flex sm:rounded-4xl sm:bg-white/10 sm:backdrop-blur-md sm:border sm:border-blue-200 sm:shadow-lg sm:px-4 sm:py-2
   flex flex-col items-center justify-center rounded-4xl bg-white/10 backdrop-blur-md shadow-lg border  border-blue-200 text-center">
    <h3 className="text-sm sm:text-xl font-semibold
      text-blue-400 rounded-full shadow-md
      max-[640px]:leading-tight max-[640px]:whitespace-nowrap
     px-3 sm:px-4 py-1.5 sm:py-2  ">
      {servicetitle}
    </h3>
  </div>
</div>


    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: [0, -10, 0] }}
      transition={{ duration: 1 }}
      className="
        relative z-10
        text-3xl sm:text-4xl md:text-5xl font-bold
        bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600
        bg-clip-text text-transparent
        max-[360px]:text-2xl
      "
    >
      {heading}
    </motion.h1>

    {/* CTAs — full width on mobile only */}
    <div
      className="
        mt-6 sm:mt-8 flex justify-center gap-3 sm:gap-4 relative z-10
        max-[640px]:flex-col max-[640px]:w-full
      "
    >
      
      <Link to="/contact">
        <motion.button
        whileHover={{ scale: 1.1 }}
        className="
          px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-md
          max-[640px]:w-full
        "
        >
          Get Started
        </motion.button>
      </Link>
      
     
      <Link to="/technologies">
        <motion.button
        whileHover={{ scale: 1.1 }}
        className="
          px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-md
          max-[640px]:w-full
        "
        >
          More
        </motion.button>
      </Link>
    </div>
  </div>

      </div>
    </section>
  );
}
