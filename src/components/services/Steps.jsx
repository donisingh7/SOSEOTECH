import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "../../assets/stepssss.png";
import { motion } from "framer-motion";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css/effect-coverflow";

export default function Steps({ stepsData, heading }) {
  return (
    <section className="py-6 lg:py-10 bg-white-800">
      <div className="container-lg mx-auto px-4 md:px-14">
        <motion.div
          className="text-center max-w-5xl mx-auto mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-100">
            {heading}
          </h2>
          <p className="text-base md:text-lg text-gray-400 mt-4">
            With our expertise, we at{" "}
            <span className="font-semibold text-blue-600">SoseoTechAdvisory</span>{" "}
            craft professional, results-oriented websites that drive your corporate success.
          </p>
        </motion.div>

        <Swiper
          // mobile-friendly spacing/centering
          spaceBetween={16}
          slidesPerView={1.05}
          centeredSlides={true}
          // desktop/tablet via breakpoints
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 24, centeredSlides: false },
            1024: { slidesPerView: 3, spaceBetween: 50, centeredSlides: false },
          }}
          navigation={true}
          effect="coverflow"
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 200,
            modifier: 1,
            scale: 0.9,
            slideShadows: false,
          }}
          modules={[Navigation, Autoplay, EffectCoverflow]}
        >
          {stepsData.map((step) => (
            <SwiperSlide key={step.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative text-center mt-10 group"
              >
                <div className="relative text-center mt-10 group">
                  {/* Image: wider on mobile, original on desktop */}
                  <div className="relative w-3/4 md:w-1/2 mx-auto transition-transform duration-300 group-hover:scale-105">
                    <img src={img1} alt={step.title} className="w-full h-auto" />
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-md shadow-lg border border-blue-200 text-center">
                      <span className="text-white font-semibold text-base md:text-lg">
                        {step.id}
                      </span>
                      <p className="text-blue-200 text-xs md:text-sm font-normal">Step</p>
                    </div>
                  </div>

                  {/* Content: auto-height on mobile so text never overflows */}
                  <div className="relative -translate-y-8 md:-translate-y-10 rounded-xl border border-blue-300 shadow-md backdrop-blur-md text-left px-5 md:px-8 py-5 md:py-6 h-auto md:h-[270px]">
                    <h3 className="text-lg md:text-xl flex justify-center font-bold text-blue-400 my-3 md:my-4 text-center">
                      {step.title}
                    </h3>
                    <div className="space-y-2 text-center">
                      {step.description.map((d, i) => (
                        <p
                          key={i}
                          className="text-blue-100 text-sm md:text-base leading-relaxed break-words hyphens-auto"
                          style={{ overflowWrap: "anywhere" }}
                        >
                          {d}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}


