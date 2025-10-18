import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "react-feather"; 


export default function Subservices({subservices, heading}) {
  const [active, setActive] = useState(Object.keys(subservices)[0]);
  
  return (
      <section className=" py-14 sm:py-16 lg:py-20  bg-[#0b1320]">
      {/* Heading + Subheading */}
      <motion.div              
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false ,amount: 0.5}}
                transition={{ duration: 0.8 }}
              >
                <div className="text-center max-w-5xl mx-auto  px-4 sm:px-6 mb-12 sm:mb-14">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-100">
          {heading}
        </h2>
        <p className="text-base sm:text-lg text-gray-400 mt-3 sm:mt-4 max-[540px]:hidden">
  Enhance your brand’s online presence, credibility, and user experience with{" "}
  <span className="font-semibold text-blue-600">SoseoTechAdvisory</span>.
  Explore our subservices below to see how we tailor solutions for your business needs.
</p>

      </div>
      </motion.div>
      {/* Layout: mobile = stack; lg+ = two columns */}
      <motion.div  
        className="container mx-auto px-4  flex rounded-xl  overflow-hidden sm:px-6 lg:px-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

        
        {/* Left: Subservice List */}
         <div className="lg:col-span-4">
         <div className="lg:hidden">
        <div className="  flex gap-3 overflow-x-auto no-scrollbar pb-2 -mx-1 ">
          {Object.keys(subservices).map((service) => (
            <button   
              key={service}
              onClick={() => setActive(service)}
              className={`w-full whitespace-nowrap px-4 py-2 rounded-2xl text-sm transition transform text-left p-4 min-[1270px]:text-xl max-[860px]:text-sm text-md font-large font-semibold
                ${
                  active === service
                    ? "bg-blue-600 text-white shadow-md translate-x-{-30} scale-110 "
                    : "bg-white text-gray-800 hover:scale-103"
                }`}
            >
              {service}
            </button>
          ))}
        </div></div>
        
        {/* Desktop: vertical list */}
            <div className="hidden  w-2xl lg:block bg-blue-200 rounded-3xl  lg:py-14 lg:pe-6 translate-x-10.5">
              <div className=" space-y-12 ">
                {Object.keys(subservices).map((service)=> {
                  const isActive = active === service;
                  return (
                    <button
                      key={service}
                      onClick={() => setActive(service)}
                      className={[
                        "w-full text-left px-4 py-3 rounded-4xl text-base min-[1270px]:text-xl max-[960px]:text-sm text-md font-large  font-semibold transition transform",
                        isActive
                          ? "bg-blue-600 text-white translate-x-{-30} shadow-md scale-[1.02]"
                          : "bg-blue-200  text-gray-800 hover:scale-[1.01]"
                      ].join(" ")}
                      aria-pressed={isActive}
                    >
                      {service}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
            {/* Right: Active Content */}
            <div className="relative w-5xl lg:w-4xl bg-blue-300 rounded-4xl shadow-lg p-10"> 
              <AnimatePresence mode="wait"> <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} > 
                <h3 className="text-4xl font-bold px-5 font-large text-gray-800 mb-4 mt-4"> {active} </h3>
                 <div className="space-y-4 p-8"> {subservices[active].desc.map((point, idx) => 
                  ( <div key={idx} className="flex items-start  gap-2"> 
                  <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={22} /> 
                  <p className="text-gray-900 text-lg leading-relaxed"> {point} </p> </div> ))} 
                  </div> </motion.div> </AnimatePresence> 
                  </div>
        </div>
        </motion.div>
      
    </section>
  );
} 
  