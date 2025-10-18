import Hero from '../../components/services/Hero.jsx';
import Steps from '../../components/services/Steps.jsx';
import ProblemSolution from '../../components/services/ProblemSol.jsx';
import softwareimg from '../../assets/images/software.jpg';
import SubServices from '../../components/services/SubServices.jsx';
import Innovate from '../../components/services/Innovate.jsx';
import TechStackGrid from '../../components/services/TechStack.jsx';
import FaqItem from '../../components/services/FaqItems.jsx';




export default function SoftwareDevelopment() {
  return (
    <>
    <div className='bg-[#0b1320]'>
      <Hero
        servicetitle={"Software Development"}
        heading={"Turning Ideas Into Intelligent Software"}
        subheading={"We build custom software solutions tailored to your vision — from concept to deployment. Scalable, secure, and high-performing applications that give your business the digital edge it needs."}
      />
      
      <ProblemSolution
  problemimg={softwareimg}
  descheading="Outdated Systems Can’t Keep Up With Modern Business"
  desccontent="Legacy software, manual processes, and fragmented systems slow your business down. When your software can’t evolve, your growth, productivity, and customer satisfaction take the hit."
  imgheading="We Engineer Future-Ready Software 💡"
  imgcontent="From concept to deployment, we build scalable, high-performance software tailored to your operations. With modern architectures and agile development, your business stays ahead of the curve."
/>

      <SubServices heading={"Our Custom Software Development Expertise"} subservices={softwareSubServices} />
       <Innovate heading={"SoseoTech — Code. Create. Elevate."} subheading={"We craft intelligent software solutions that accelerate innovation and drive business growth."} buttonText={"Explore Now"} />
      <Steps
        heading={"Our Software Development Lifecycle"}
        stepsData={softwareStepsData}
      />
      <TechStackGrid techStack={softwareDevTechStack} />
      
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
    </>
  );
}

const softwareStepsData = [
  {
    id: 1,
    title: "Requirement Analysis",
    description: [
      "We collaborate with you to understand your business needs, project goals, and user expectations.",
      "A detailed requirement document is created to define scope and functionality clearly.",
    ],
  },
  {
    id: 2,
    title: "Design and Prototyping",
    description: [
      "Our UI/UX designers craft wireframes and prototypes to visualize your product’s look and flow.",
      "This ensures a user-friendly interface before actual development begins.",
    ],
  },
  {
    id: 3,
    title: "Development and Integration",
    description: [
      "Using modern tech stacks, our developers build scalable, maintainable, and high-performance software.",
      "We integrate APIs, databases, and third-party services seamlessly.",
    ],
  },
  {
    id: 4,
    title: "Testing and Deployment",
    description: [
      "Each module undergoes rigorous QA testing to ensure performance, security, and stability.",
      "After approval, the product is deployed smoothly into the target environment.",
    ],
  },
  {
    id: 5,
    title: "Support and Maintenance",
    description: [
      "We provide continuous support, updates, and performance monitoring.",
      "Our goal is to ensure your software evolves alongside your business.",
    ],
  },
];

const softwareSubServices = {
  "Custom Application Development": {
    desc: [
      "Tailored Software for Your Business Goals: We design and develop applications built specifically around your operational needs and objectives.",
      "From Idea to Implementation: Our software development experts handle planning, architecture, coding, and deployment with precision.",
      "Scalable & High-Performance Systems: Applications are designed to grow with your business while maintaining top-tier performance.",
      "Cross-Platform Accessibility: Whether it’s web, mobile, or desktop, we ensure consistent experience and functionality everywhere.",
    ],
  },

  "API & System Integration": {
    desc: [
      "Seamless System Connectivity: We integrate CRMs, ERPs, and third-party services for unified business operations.",
      "Automated & Streamlined Workflows: Our integration services reduce manual work by enabling intelligent data flow between tools.",
      "Secure API Architecture: We prioritize encryption, authentication, and error handling for safe and reliable communication.",
      "Custom Integration Solutions: Built to fit your existing systems and optimize data synchronization across departments.",
    ],
  },

  "Enterprise Software Solutions": {
    desc: [
      "Large-Scale, Reliable Systems: We build enterprise-grade software that supports complex data, user management, and multi-department operations.",
      "Centralized Business Management: Combine analytics, reporting, and automation into a unified platform for better decision-making.",
      "Modular & Flexible Design: Develop ERP, CRM, or HRM systems customized for your internal processes and business structure.",
      "Security & Compliance Built-In: Meet industry standards with role-based access, encrypted data handling, and audit-ready solutions.",
    ],
  },

  "Automation & Workflow Tools": {
    desc: [
      "Accelerate Efficiency through Automation: We develop tools that minimize manual work and enhance productivity.",
      "Smart Triggers & Rule-Based Actions: Build automation workflows that respond to real-time business events.",
      "Data-Driven Decision Support: Integrate analytics and AI to power intelligent task management and reporting.",
      "Reduced Costs, Increased Output: Simplify complex workflows, save time, and optimize team collaboration.",
    ],
  },

  "Maintenance & Support": {
    desc: [
      "Continuous Improvement & Optimization: We monitor and refine software for performance, security, and compatibility.",
      "Quick Issue Resolution: Our support team ensures minimal downtime with timely fixes and proactive monitoring.",
      "Version Upgrades & Feature Enhancements: Keep your software updated with the latest technology advancements.",
      "24/7 Technical Assistance: We provide dedicated support channels for smooth, uninterrupted operations.",
    ],
  },
};
const softwareDevTechStack = [
  // 🧠 Programming Languages
  { name: "Python", color: "#3776AB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C++", color: "#00599C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Java", color: "#E34A86", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "TypeScript", color: "#3178C6", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", color: "#F7DF1E", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },

  // ⚙️ Backend & Frameworks
  { name: "Node.js", color: "#3C873A", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", color: "#F0DB4F", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "FastAPI", color: "#009688", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "Django", color: "#092E20", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "Flask", color: "#000000", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },

  // 🗄️ Databases
  { name: "MySQL", color: "#00758F", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", color: "#336791", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", color: "#4DB33D", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Redis", color: "#DC382D", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },

  // ☁️ DevOps & Infrastructure
  { name: "Docker", color: "#2496ED", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", color: "#326CE5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Linux", color: "#FCC624", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "GitHub", color: "#fff", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Git", color: "#F05032", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "AWS", color: "#FF9900", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },];



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
