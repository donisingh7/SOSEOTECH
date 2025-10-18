import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "../../assets/stepssss.png";
import { motion } from "framer-motion";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css/effect-coverflow";
  

export default function Steps({stepsData, heading}) {
  return (
    <section className="py-6 lg:py-10 bg-white-800">
      <div   
      className="container-lg mx-auto px-14"           
                
              >
        <motion.div className="text-center max-w-5xl mx-auto mb-12"
        initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false ,amount: 0.5}}
                transition={{ duration: 0.8 }}
                >
        
        <h2 className="text-4xl font-bold text-blue-100">
          {heading}
        </h2>
        <p className="text-lg text-gray-400 mt-4">
          With our expertise, we at <span className="font-semibold text-blue-600">SoseoTechAdvisory</span> craft professional, results-oriented websites that drive your corporate success.  
        </p>
      </motion.div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          effect="coverflow"
  grabCursor={true}
  centeredSlides={false}
  // slidesPerView="auto"
  loop={true}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  coverflowEffect={{
    rotate: 15,      // no tilt
    stretch: 0,     // spacing
    depth: 200,     // 3D depth
    modifier: 1,
    scale: 0.9,     // side cards shrink
    slideShadows: false,
  }}
  breakpoints={{
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  modules={[Navigation, Autoplay, EffectCoverflow]}
        >
          {stepsData.map((step) => (
            <SwiperSlide key={step.id} >
              <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative text-center mt-10 group"
        >
              <div className="relative text-center mt-10 group">
                {/* Image */}
                <div className="relative w-1/2 mx-auto transition-transform duration-300 group-hover:scale-105">
                  <img src={img1} alt={step.title} className="w-full h-auto" />
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-md shadow-lg border border-blue-200 text-center">
                    <span className="text-white font-semibold text-lg">
                      {step.id}
                    </span>
                    <p className="text-blue-200 text-sm font-normal">Step</p>
                  </div>
                </div>

                {/* Content */}
                <div className="relative -translate-y-8 md:-translate-y-10 rounded-xl border border-blue-300 shadow-md backdrop-blur-md text-left px-6 md:px-8 py-5 md:py-6 h-[240px] md:h-[270px]">
                  <h3 className="text-xl flex justify-center font-bold text-blue-400 my-4">
                    {step.title}
                  </h3> 
                  {step.description.map((d, i) => (
                    <p
                      key={i}
                      className="text-blue-100 flex justify-center text-sm leading-relaxed mb-2"
                    >
                      {d}
                    </p>
                  ))}
                </div>
              </div></motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

