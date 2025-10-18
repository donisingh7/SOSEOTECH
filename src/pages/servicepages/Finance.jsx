import Hero from '../../components/services/Hero.jsx';
"use client";
import { motion } from "framer-motion";
import Steps from '../../components/services/Steps.jsx';
import FaqItem from '../../components/services/FaqItems.jsx';
import ProblemSolution from '../../components/services/ProblemSol.jsx';
import financeimg from '../../assets/images/finance.jpeg';
import Innovate from '../../components/services/Innovate.jsx';
// import Highlights from '../../components/services/Highlights.jsx';
import { Calculator,FileText,TrendingUp,  Scale,  FileCheck2, IndianRupee ,Landmark, Receipt} from "lucide-react";
import ZigZagFeatures from "../../components/services/Highlights.jsx";

export const financeItems = [
  { icon: <IndianRupee className="w-6 h-6" />, title: "Tax Planning & Optimization", desc: "Advance tax, deductions, 44AD/44ADA strategies, and TDS/TCS advisory.", badge: "Popular" },
  { icon: <FileCheck2 className="w-6 h-6" />, title: "Compliance & Filings", desc: "ITR, GST (GSTR-1/3B/9), TDS/TCS, PF/ESI, and MCA forms with end-to-end support." },
  { icon: <Scale className="w-6 h-6" />, title: "Audit & Controls", desc: "Internal/statutory audits, risk assessment, and control design." },
  { icon: <Landmark className="w-6 h-6" />, title: "Corporate Finance", desc: "Financial statements, cash-flow, board-ready MIS, and ratio analysis." },
  { icon: <Receipt className="w-6 h-6" />, title: "Indirect Tax & GST", desc: "E-invoicing, reconciliations, refunds, and SCN reply drafting." },
  { icon: <TrendingUp className="w-6 h-6" />, title: "CFO Services", desc: "Budgeting, forecasting, fundraising support, and KPI reviews." },
  { icon: <Calculator className="w-6 h-6" />, title: "Bookkeeping & Accounting", desc: "Clean books, ledger scrutiny, AR/AP aging, monthly closes (Tally/Zoho/QB)." },
  { icon: <FileText className="w-6 h-6" />, title: "Representation & Notices", desc: "Drafting replies, assessments, and liaison with authorities until closure." },
];

export default function FinanceConsulting({ industries = financeIndustriesServed })
 {const duplicated = [...industries, ...industries];
  return (
    <><div className="bg-[#0b1320]">
      <Hero
        servicetitle={"Finance Consulting"}
        heading={"Your Financial Growth Partner in Every Step"}
      subheading={"Simplify finances with expert accounting services that ensure accuracy, transparency, and compliance. From bookkeeping to financial strategy, we help you make confident, data-driven decisions."} />
       <ProblemSolution
  problemimg={financeimg}
  descheading="Financial Confusion Can Stall Smart Decisions"
  desccontent="Businesses often struggle with unclear financial insights, compliance issues, and inefficient bookkeeping — leading to poor decision-making and lost opportunities."
  imgheading="We Bring Clarity To Your Numbers 💼"
  imgcontent="Our experts simplify complex financial processes with strategic consulting, smart automation, and accurate reporting — giving you control and confidence in every business move."
/>
<ZigZagFeatures
        eyebrow="Finance & Accounting"
        title="Smart Strategy. Strong Finances."
        subtitle="Alternating feature rows for a clear narrative across 6–8 core finance and accounting services."
        items={financeItems}
        gap="relaxed"
      />
 <Innovate
  heading={"Plan. Comply. Prosper."}
  subheading={"We deliver comprehensive financial advisory — from tax and compliance to valuation and growth planning — for sustainable success."}
  buttonText={"Consult Now"}
/>
      <Steps stepsData={financeStepsData}
      heading={"Our Financial Consulting Approach"}/> 
      
  

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
            {financeFaqData.map((qa, i) => (
              <FaqItem key={i} {...qa} />
            ))}
          </div>
        </div></section>
      </div>
    </>
  );
}

const financeStepsData = [
  {
    id: 1,
    title: "Financial Assessment and Planning",
    description: [
      "We start by analyzing your current financial structure, cash flow, and growth goals.",
      "This helps us identify strengths, risks, and opportunities to design a solid financial roadmap.",
    ],
  },
  {
    id: 2,
    title: "Budgeting and Forecasting",
    description: [
      "Our experts create data-backed budgets and projections that help you plan smarter.",
      "We ensure realistic, measurable targets that align with your long-term objectives.",
    ],
  },
  {
    id: 3,
    title: "Process Optimization",
    description: [
      "We streamline financial processes by automating reports, audits, and expense tracking.",
      "This improves accuracy, reduces errors, and saves valuable time for your business.",
    ],
  },
  {
    id: 4,
    title: "Risk and Compliance Management",
    description: [
      "Our consultants identify potential financial and regulatory risks before they escalate.",
      "We ensure compliance with industry standards and implement effective control measures.",
    ],
  },
  {
    id: 5,
    title: "Performance Review and Strategy Refinement",
    description: [
      "We continuously monitor financial KPIs and refine strategies for maximum profitability.",
      "Data insights help you make informed decisions and sustain long-term growth.",
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


const financeFaqData = [
  {
    q: "What financial consulting services do you offer?",
    a: "We provide accounting setup, financial planning, cash flow management, tax compliance, and business valuation services tailored to your goals."
  },
  {
    q: "Can you help optimize our existing accounting process?",
    a: "Yes. We analyze your current financial systems, automate repetitive tasks, and implement modern accounting tools for better efficiency and accuracy."
  },
  {
    q: "Do you work with startups or established companies?",
    a: "We assist both. Startups benefit from strategic financial setup and forecasting, while established businesses get support in audit readiness and financial restructuring."
  },
  {
    q: "How secure is our financial data with your team?",
    a: "Your data is completely secure—we use encrypted channels, restricted access, and comply with global data privacy standards."
  },
  {
    q: "Do you offer ongoing financial consulting?",
    a: "Absolutely. We offer monthly or quarterly financial health reviews, reports, and advisory sessions to help your business stay financially strong."
  },
];
