import { motion } from "framer-motion";
import {  ShieldCheck, Rocket, Lightbulb, Puzzle, DollarSign, Globe } from "lucide-react";

export default function CloudOverview() {
  const features = [
    {
      icon: <Rocket className="w-8 h-8 text-blue-600" />,
      title: "Rapid Deployment",
      desc: "Launch new services within hours, not weeks, and accelerate time-to-market.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "End-to-End Security",
      desc: "Multi-layered protection ensures data integrity and privacy across all operations.",
    },
    {
      icon: <Puzzle className="w-8 h-8 text-blue-600" />,
      title: "Seamless Migration",
      desc: "Transition to the cloud with minimal downtime and zero data loss.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      title: "Continuous Innovation",
      desc: "Access cutting-edge tools and frameworks for ongoing growth and modernization.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue-600" />,
      title: "Optimized Spending",
      desc: "Scale usage and costs dynamically with flexible pay-as-you-go pricing.",
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Global Reach",
      desc: "Deploy and manage your applications anywhere in the world effortlessly.",
    },
  ];

  return (
    <section className="py-24  ">
      {/* Heading */}
      <div className="text-center max-w-4xl border py-3 px-8 rounded-2xl bg-white/10 backdrop-blur-2xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-blue-300"
        >
          Why Choose Cloud for Your Business?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 mt-4 text-lg"
        >
          Empower your business with secure, scalable, and efficient cloud infrastructure.
          Our solutions help you innovate faster, optimize costs, and achieve sustainable growth.
        </motion.p>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#acc6ff] shadow-md hover:shadow-xl transition-all rounded-2xl p-8 flex flex-col items-start"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Highlight Quote */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-20 text-center bg-[#233565] text-white rounded-2xl py-10 px-6 shadow-lg"
      >
        <p className="text-2xl font-medium leading-relaxed">
          “Businesses leveraging cloud solutions achieve <span className="font-bold">30% higher
          operational efficiency</span> within their first year.”
        </p>
      </motion.div>
    </section>
  );
}
