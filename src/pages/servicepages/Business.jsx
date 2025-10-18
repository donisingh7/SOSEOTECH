"use client";
import { motion } from "framer-motion";
import Hero from '../../components/services/Hero.jsx';
import Steps from '../../components/services/Steps.jsx';
import FaqItem from '../../components/services/FaqItems.jsx';
import ProblemSolution from '../../components/services/ProblemSol.jsx';
import businessimg from '../../assets/images/businessss.jpeg';
import Innovate from '../../components/services/Innovate.jsx';
import ZigZagFeatures from '../../components/services/Highlights.jsx';
import Pillars from '../../components/services/Pillars.jsx';
import { Target, BriefcaseBusiness, LineChart, Workflow,Users2,Factory,Scale, BarChart3 } from "lucide-react";

export const businessStrategyItems = [
  { icon: <Target className="w-6 h-6" />, title: "Market & GTM Playbooks", desc: "Segmentation, positioning, pricing, and channel strategy aligned with your ICP and revenue goals.", badge: "Focus" },
  { icon: <LineChart className="w-6 h-6" />, title: "Growth Experiments", desc: "Hypothesis-driven sprints to lift acquisition, conversion, retention, and LTV." },
  { icon: <BriefcaseBusiness className="w-6 h-6" />, title: "Operating Model Design", desc: "OKRs, governance, and process mapping that scale with your org." },
  { icon: <Scale className="w-6 h-6" />, title: "Risk & Control Alignment", desc: "Identify dependencies, mitigate risk, and keep initiatives on track." },
  { icon: <Workflow className="w-6 h-6" />, title: "Transformation PMO", desc: "Roadmaps, risk registers, and cross-functional delivery at scale." },
  { icon: <Users2 className="w-6 h-6" />, title: "Customer Success", desc: "Voice-of-customer loops to reduce churn and increase expansion revenue." },
  { icon: <Factory className="w-6 h-6" />, title: "Process Excellence", desc: "Lean ops, SOPs, automation, and time/cost efficiency programs." },
  { icon: <BarChart3 className="w-6 h-6" />, title: "Performance Dashboards", desc: "Exec-ready KPIs and drill-down analytics for faster decisions." },
];
const strategyPillarsData = {
  eyebrow: "Business Strategy",
  title: "Think Beyond. Execute Smart.",
  subtitle:
    "Data-driven strategy aligning market, product, and operations—so you scale sustainably and win consistently.",
  pillars: [
    {
      icon: <Target className="w-7 h-7" />,
      title: "Market & GTM",
      desc: "Segmentation, positioning, pricing, and channel playbooks tailored to your ICP.",
      badge: "Focus",
    },
    {
      icon: <LineChart className="w-7 h-7" />,
      title: "Growth Analytics",
      desc: "North-star metrics, cohort insights, and experimentation for revenue lift.",
    },
    
    {
      icon: <BriefcaseBusiness className="w-7 h-7" />,
      title: "Operating Model",
      desc: "OKRs, governance, and process design that enable predictable execution.",
    },
    
    {
      icon: <Workflow className="w-7 h-7" />,
      title: "Transformation PMO",
      desc: "Initiative roadmaps, risk control, and cross-functional delivery at scale.",
    },
  ],
};


export default function BusinessStrategies({ industries = financeIndustriesServed })
 {const duplicated = [...industries, ...industries];
  return (
    <><div className="bg-[#0b1320]">
      <Hero 
      servicetitle={"Business Strategies"}
      heading={ "Smarter Strategies. Better Outcomes."} 
      subheading={"Streamline workflows, automate processes, and unlock growth with solutions crafted to meet your unique business challenges — helping you focus on what truly matters."} />
      <ProblemSolution
  problemimg={businessimg}
  descheading="Inefficient Workflows Slow Down Progress"
  desccontent="Manual data handling, unorganized systems, and disconnected tools waste time and resources. Businesses need unified platforms that align technology with goals."
  imgheading="We Build Intelligent Business Ecosystems ⚙️"
  imgcontent="Our tailored ERP, CRM, and automation solutions connect every aspect of your business — from operations to analytics — enabling smarter decisions and seamless collaboration."
/>
<Pillars 
        eyebrow={strategyPillarsData.eyebrow}
        title={strategyPillarsData.title}
        subtitle={strategyPillarsData.subtitle}
        pillars={strategyPillarsData.pillars}
        circleSize={220} // tweak to 200–240 as per layout
      />

      <Steps stepsData={businessStepsData}
      heading={"Our Strategic Consulting Framework"} 
      />
      
      <Innovate
  heading={"Think Beyond. Execute Smart."}
  subheading={"We partner with businesses to craft winning strategies — aligning innovation, market insight, and technology for sustainable growth."}
  buttonText={"Unlock Growth"}
/>
      <section className="relative py-35 overflow-hidden">
      {/* Glowing Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full top-20 left-10 animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-blue-400/10 blur-[100px] rounded-full bottom-20 right-10 animate-pulse"></div>
      </div>

      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Industries We Serve
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Empowering <span className="text-blue-300 font-semibold">businesses across sectors</span> with smart finance, strategy, and technology solutions.
        </p>
      </div>

      {/* Infinite Carousel */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {duplicated.map((industry, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="relative group flex flex-col items-center justify-center min-w-[160px]"
            >
              {/* Card */}
              <div
                className="relative bg-[#338e94] border border-gray-500 backdrop-blur-xl rounded-2xl p-6 transition transform group-hover:scale-110"
              >
                <img
                  src={industry.logo}
                  alt={industry.name}
                  className="h-14 mx-auto mb-2"
                />
                <p className="text-black text-sm font-medium text-center">
                  {industry.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  
     
      <section id="faq" className="pb-20 bg-gradient-to-b from-gray-900 via-[#0f172a] to-gray-900 text-white"><div className="max-w-5xl border-t border-gray-500 pt-20 mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {businessFaqData.map((qa, i) => (
              <FaqItem key={i} {...qa} />
            ))}
          </div>
        </div></section>
      </div>
    </>
  );
}
const businessStepsData = [
  {
    id: 1,
    title: "Market Research and Analysis",
    description: [
      "We begin by studying your industry landscape, target audience, and competitors.",
      "This helps identify market trends, customer needs, and areas of opportunity for growth.",
    ],
  },
  {
    id: 2,
    title: "Goal Definition and Roadmap",
    description: [
      "We collaborate to define clear business goals aligned with your vision and capabilities.",
      "A strategic roadmap is created to guide your short-term actions and long-term outcomes.",
    ],
  },
  {
    id: 3,
    title: "Strategy Development",
    description: [
      "Our experts develop customized strategies for operations, branding, marketing, and digital transformation.",
      "Every plan is data-driven and focused on measurable impact.",
    ],
  },
  {
    id: 4,
    title: "Implementation and Execution",
    description: [
      "We support your team through the implementation phase, ensuring smooth execution across departments.",
      "Our consultants help align people, processes, and technology for consistent progress.",
    ],
  },
  {
    id: 5,
    title: "Performance Tracking and Optimization",
    description: [
      "After execution, we track KPIs and evaluate performance against the roadmap.",
      "Continuous improvement ensures agility and long-term business success.",
    ],
  },
];
const financeIndustriesServed = [
  // 🏭 Manufacturing & Industrial
  {
    name: "Manufacturing & Industrial",
    logo: "https://cdn-icons-png.flaticon.com/512/7431/7431184.png",
  },

  // 🏬 Retail & E-Commerce
  {
    name: "Retail & E-Commerce",
    logo: "https://cdn-icons-png.flaticon.com/512/1170/1170678.png",
  },

  // 🏦 Banking & Financial Services
  {
    name: "Banking & Financial Services",
    logo: "https://cdn-icons-png.flaticon.com/512/3135/3135706.png",
  },

  // 🚚 Logistics & Supply Chain
  {
    name: "Logistics & Supply Chain",
    logo: "https://cdn-icons-png.flaticon.com/512/3262/3262276.png",
  },

  // 🏗️ Construction & Real Estate
  {
    name: "Construction & Real Estate",
    logo: "https://cdn-icons-png.flaticon.com/512/1973/1973929.png",
  },

  // 🏥 Healthcare & Pharmaceuticals
  {
    name: "Healthcare & Pharmaceuticals",
    logo: "https://cdn-icons-png.flaticon.com/512/2966/2966481.png",
  },

  // 🎓 Education & EdTech
  {
    name: "Education & EdTech",
    logo: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png",
  },

  // 💼 Professional & Consulting Services
  {
    name: "Professional & Consulting Services",
    logo: "https://cdn-icons-png.flaticon.com/512/3135/3135675.png",
  },

  // ⚙️ IT & SaaS Companies
  {
    name: "IT & SaaS Companies",
    logo: "https://cdn-icons-png.flaticon.com/512/2721/2721290.png",
  },

  // 🌾 Agriculture & Food Processing
  {
    name: "Agriculture & Food Processing",
    logo: "https://cdn-icons-png.flaticon.com/512/992/992700.png",
  },
];
const businessFaqData = [
  {
    q: "What types of business solutions do you provide?",
    a: "We deliver end-to-end solutions including process automation, digital transformation, workflow optimization, and custom enterprise software tailored to your operations."
  },
  {
    q: "How do you identify the right solution for a business?",
    a: "Our approach starts with a detailed business analysis and goal mapping. We then design scalable, technology-driven strategies aligned with your objectives."
  },
  {
    q: "Do you work with both SMEs and large enterprises?",
    a: "Yes. We collaborate with startups, SMEs, and global enterprises—customizing our solutions to fit their size, structure, and industry challenges."
  },
  {
    q: "Can you integrate your solutions with our existing systems?",
    a: "Absolutely. We specialize in seamless API integrations and system modernization to ensure compatibility and minimal disruption."
  },
  {
    q: "Do you provide ongoing support and updates?",
    a: "Yes. We offer continuous support, performance tracking, and regular optimization to keep your business solution future-ready."
  },
];
