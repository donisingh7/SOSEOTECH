import Hero from '../../components/services/Hero.jsx';
import Steps from '../../components/services/Steps.jsx';
import Innovate from '../../components/services/Innovate.jsx';
import ProblemSolution from '../../components/services/ProblemSol.jsx';
import webimg from '../../assets/images/web.jpeg';
import SubServices from '../../components/services/SubServices.jsx';
import FaqItem from '../../components/services/FaqItems.jsx';
import TechStackGrid from '../../components/services/TechStack.jsx';



export default function WebsiteDevelopment() {
  return (
    <div className="bg-[#0b1320]">
      <Hero servicetitle={"Website Development"} 
      heading= {"Web Experiences That Inspire"}
      // subheading={ "From dynamic websites to enterprise-grade web applications, we create platforms that are fast, responsive, and visually stunning — designed to engage your audience and drive measurable results."}
      />
      <ProblemSolution 
      problemimg={webimg}
      descheading="Outdated Solutions Are Holding You Back "
      desccontent="Slow websites, unscalable systems, and poor online presence make businesses lose customers every single day. Without the right technology, your growth stalls before it begins."
      imgheading="We Build Smarter Solutions 🚀"
      imgcontent={"Our team delivers cutting-edge technology solutions designed to scale with your business. We focus on efficiency, performance, and seamless user experiences."} />

      <SubServices heading={"Your Vision, Our Web Expertise"} subservices={websiteSubServices} />
       <Steps
      heading={"Our Corporate Website Development Process"}
      stepsData={webstepsData} />
   <Innovate
  heading={"Build. Launch. Impress."}
  subheading={"We design fast, responsive, and SEO-optimized websites that captivate audiences and convert visitors into customers."}
  buttonText={"Explore Web Solutions"}
/>

      <TechStackGrid techStack={webDevTechStack} />

      <section id="faq" className="pb-20 bg-gradient-to-b from-gray-900 via-[#0f172a] to-gray-900 text-white">
        <div className="max-w-5xl border-t border-gray-500 pt-20 mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqData.map((qa, i) => (
              <FaqItem key={i} {...qa} />
            ))}
          </div>
        </div>
      </section>



        
    </div>
  );
}

const webstepsData = [
  {
    id: 1,
    title: "Discovery and Strategy",
    description: [
      "The first step involves understanding your brand's identity, values, and objectives. We conduct research on your industry, target audience, and competitors to build a customized strategy.",
      "This lays the foundation for a website that reflects your brand and drives business results.",
    ],
  },
  {
    id: 2,
    title: "Design and Development",
    description: [
      "We translate your brand’s vision into a responsive design that is visually appealing and functional. Seamless navigation is ensured across all devices.",
    ],
  },
  {
    id: 3,
    title: "Integration and Customization",
    description: [
      "At this stage, we integrate your website with the necessary tools and software to improve efficiency. Whether it's CRM, CMS, or custom features, we provide a seamless experience.",
      "Custom solutions ensure flexibility and scalability as your business evolves.",
    ],
  },
  {
    id: 4,
    title: "Testing and Launch",
    description: [
      "Before going live, we thoroughly test performance, compatibility, and security. After QA, your site launches smoothly.",
    ],
  },
];

const websiteSubServices = {
  "Custom Corporate Websites": {
    desc: [
       "Your Brand, Your Vision—Digitally Transformed: Our corporate website design services ensure your company’s identity, values, and goals are reflected in a professional, high-quality website. ",
       'Tailor-Made for Your Business Needs: From financial firms and enterprises to startups and multinational corporations, we design websites that align with industry standards.',
       'Modern, Elegant & Professional Designs: Our corporate website design company creates visually stunning websites that convey trust, authority, and credibility.'  ,
       'Seamless User Experience & Engaging Layouts: Our corporate web design experts craft intuitive, structured, and easy-to-navigate websites that enhance user engagement and retention.' ,  
    ],
  },
   "Responsive Design": {
    desc: ["Impeccable Performance on Any Device: Our corporate website design services ensure seamless performance across desktops, tablets, and mobile devices.",
          "Mobile-First Approach for Better User Engagement: We optimize layouts, fonts, images, and interactive elements for a smooth, touch-friendly experience.",
          "Cross-Browser Compatibility for Maximum Accessibility: Your website will function flawlessly on Chrome, Firefox, Safari, and Edge, ensuring uninterrupted access.",
          "Speed Optimization for Lightning-Fast Load Times: Our corporate website design company focuses on reducing load times, improving performance, and boosting search rankings.",
    ],
  },
  "Content-Driven Design": {
     desc:["Showcase Your Business Message with Clarity & Impact: Our corporate website design experts prioritize well-structured content layouts for maximum engagement.",
        "Strategic Placement of Key Information: We highlight company profiles, leadership, achievements, and services in an organized, professional manner.",
        "SEO-Optimized Content for Higher Search Rankings: Our corporate website design services ensure keyword-rich content that enhances search engine visibility.",
        "User-Friendly Interface for Easy Navigation: Our corporate web design solutions create a well-organized layout that allows stakeholders, employees, and customers to find information quickly.",
    ],
  },
 "Technology Integration": {
    desc: ["Seamless API & Third-Party Tool Integrations: Our corporate website design company ensures smooth integration with CRMs, ERPs, and marketing tools.",
      "Advanced Analytics & Tracking Capabilities: Integrate Google Analytics, heatmaps, and performance tracking tools to gain insights into visitor behavior.",
      "Enterprise-Level Functionality & Business Process Automation: Connect your website with HR, finance, and project management systems for a streamlined workflow.",
      "Cloud-Based & AI-Powered Enhancements: Implement AI-driven chatbots, automated forms, and cloud storage solutions to enhance user experience and efficiency.",
   ],
    },
  "Secure and Scalable Solutions": {
    desc: [
      "Enterprise-Grade Security & Data Protection: Our corporate website design services include SSL encryption, firewall protection, and multi-layer security measures.",
      "Regular Security Updates & Performance Monitoring: Our corporate website design company ensures continuous security updates, performance optimizations, and risk mitigation.",
      "Future-Proof Development for Business Growth: Build a scalable website that adapts to expanding teams, new services, and global audiences.",
      "Compliance with Industry Standards & Regulations: We develop corporate websites that meet GDPR, ISO, and other industry compliance requirements for data privacy and protection.",
    ], },
};
const webDevTechStack = [
  { name: "React", color: "#61DAFB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind CSS", color: "#38BDF8", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "JavaScript", color: "#F7DF1E", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", color: "#3178C6", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", color: "#3C873A", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", color: "#F0DB4F", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", color: "#4DB33D", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Firebase", color: "#FFA611", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "MySQL", color: "#00758F", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Docker", color: "#2496ED", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Linux", color: "#FCC624", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "GitHub", color: "#fff", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
];


const faqData = [
  { q: "How do you price a new build?",
    a: "We estimate in milestones with clear deliverables. Typical builds start with discovery, then sprint-based execution." },
  { q: "Can you work with our existing stack?",
    a: "Yes—React/Next.js, Node/Java/Python backends, Postgres/Mongo, and AWS/Azure/GCP." },
  { q: "What’s the usual timeline?",
    a: "MVPs often ship in 6–10 weeks, depending on scope and integrations." },
  { q: "Do you support after launch?",
    a: "Yes—SLA support, SRE, cost audits, and iterative roadmaps." },
];