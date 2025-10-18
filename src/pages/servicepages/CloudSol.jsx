
import Hero from '../../components/services/Hero.jsx';
import ProblemSolution from '../../components/services/ProblemSol.jsx';
import cloudimg from '../../assets/images/cloud.jpeg';
import SubServices from '../../components/services/SubServices.jsx';
import Innovate from '../../components/services/Innovate.jsx';
import Steps from '../../components/services/Steps.jsx';
import FaqItem from '../../components/services/FaqItems.jsx';
import TechStackGrid from '../../components/services/TechStack.jsx';
import WhyChoose from '../../pages/servicepages/WhyChoose.jsx';



export default function CloudSolutions() {
  return (
    <><div className="bg-[#0b1320]">
      <Hero 
      servicetitle={"Cloud Solutions"}
      heading={ "Empowering Your Business on the Cloud"} 
      />
      <ProblemSolution 
      problemimg={cloudimg}
      descheading="Legacy Infrastructure Slows Innovation"
  desccontent="Traditional on-prem systems create bottlenecks, limit scalability, and inflate costs. Many teams waste resources maintaining outdated servers instead of innovating."
  imgheading="We Modernize Your Cloud Journey ☁️"
  imgcontent="Our experts design secure, cost-efficient, and auto-scaling cloud architectures. We help you migrate, optimize, and manage workloads across AWS, Azure, and GCP for maximum performance."
/>
<WhyChoose/>
<SubServices heading={"Our Cloud Solutions & Services"} subservices={cloudSubservices} />
      
      <Steps 
      heading={"Our Cloud Transformation Journey"}
      stepsData={cloudStepsData}/>
      <Innovate
  heading={"Scale. Secure. Simplify."}
  subheading={"Empowering enterprises with cloud-native infrastructure, automation, and DevOps pipelines that ensure agility and reliability."}
  buttonText={"Discover Cloud Power"}
/>
 <TechStackGrid techStack={cloudSolutionTechStack} />
      <section id="faq" className="pb-20 bg-gradient-to-b from-gray-900 via-[#0f172a] to-gray-900 text-white"><div className="max-w-5xl border-t border-gray-500 pt-20 mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {cloudFaqData.map((qa, i) => (
              <FaqItem key={i} {...qa} />
            ))}
          </div>
        </div></section>
        
      </div>
    </>
  );
}

const cloudStepsData = [
  {
    id: 1,
    title: "Assessment and Planning",
    description: [
      "We begin by analyzing your current IT infrastructure, workloads, and business goals.",
      "Our experts identify opportunities for migration, optimization, and cost savings through a detailed cloud readiness assessment.",
    ],
  },
  {
    id: 2,
    title: "Architecture Design",
    description: [
      "Based on your needs, we design a secure, scalable, and high-performance cloud architecture.",
      "This ensures flexibility, efficiency, and alignment with your operational requirements.",
    ],
  },
  {
    id: 3,
    title: "Migration and Deployment",
    description: [
      "We seamlessly migrate your applications, databases, and systems to cloud platforms like AWS, Azure, or GCP.",
      "Every migration is handled with minimal downtime and maximum data integrity.",
    ],
  },
  {
    id: 4,
    title: "Optimization and Security",
    description: [
      "Post-deployment, we optimize resource usage, implement monitoring tools, and ensure compliance with best security practices.",
      "Our team continuously refines performance for cost-effectiveness and reliability.",
    ],
  },
];

const cloudSubservices = {
  "Cloud Infrastructure Setup": {
    desc: [
      "Build a Solid Cloud Foundation: We design and deploy scalable, secure, and high-performing cloud environments tailored to your business needs.",
      "Multi-Cloud and Hybrid Support: Whether AWS, Azure, or Google Cloud, we create flexible architectures that blend on-premise and cloud systems seamlessly.",
      "Optimized Resource Allocation: Our cloud engineers ensure efficient configuration to reduce costs and maximize performance.",
      "Future-Ready Infrastructure: Designed to grow with your organization and adapt to changing technology demands.",
    ],
  },

  "Cloud Migration Services": {
    desc: [
      "Seamless Transition to the Cloud: Move your data, applications, and workloads without downtime or data loss.",
      "Assessment & Strategy Planning: We evaluate your current setup and design a custom migration roadmap.",
      "Zero Disruption Guarantee: Our experts ensure smooth migration with minimal impact on ongoing operations.",
      "Post-Migration Optimization: Enhance performance, security, and cost-efficiency after migration completion.",
    ],
  },

  "Cloud Security & Compliance": {
    desc: [
      "Enterprise-Grade Data Protection: Implement firewalls, encryption, and identity management to secure your cloud ecosystem.",
      "Compliance with Global Standards: Ensure alignment with GDPR, ISO, and SOC-2 for regulatory confidence.",
      "Continuous Threat Monitoring: Detect and respond to vulnerabilities with proactive cloud monitoring systems.",
      "Access Control & Governance: Maintain transparency and security with strict access permissions and policies.",
    ],
  },

  "DevOps & Cloud Automation": {
    desc: [
      "Streamline Deployment Cycles: Automate CI/CD pipelines to accelerate delivery and reduce human errors.",
      "Infrastructure as Code (IaC): Manage scalable cloud environments using tools like Terraform and AWS CloudFormation.",
      "Continuous Monitoring & Optimization: Real-time insights ensure high performance and minimal downtime.",
      "Faster Time-to-Market: Combine automation, agility, and reliability to boost your development workflow.",
    ],
  },

  // "Cloud Cost Optimization": {
  //   desc: [
  //     "Maximize ROI on Cloud Investments: Identify cost-saving opportunities across compute, storage, and networking resources.",
  //     "Intelligent Resource Management: Auto-scale your environment based on real-time usage patterns.",
  //     "Transparent Billing Insights: We provide detailed analytics for better budgeting and forecasting.",
  //     "Sustainable Cloud Practices: Implement green and cost-effective cloud strategies for long-term savings.",
  //   ],
  // },

  "Disaster Recovery & Backup Solutions": {
    desc: [
      "Protect Your Business from Data Loss: Reliable backup and disaster recovery mechanisms for uninterrupted operations.",
      "Multi-Region Replication: Store data redundantly across secure global data centers.",
      "Quick Restoration & Minimal Downtime: Ensure business continuity even during unexpected failures.",
      "End-to-End Data Integrity: Regular testing and encryption guarantee safe and consistent recoveries.",
    ],
  },
};

const cloudSolutionTechStack = [
  // ☁️ Cloud Platforms
  { name: "AWS", color: "#FF9900", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazonwebservices.svg" },
  { name: "Microsoft Azure", color: "#0078D4", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "Google Cloud Platform", color: "#4285F4", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "DigitalOcean", color: "#0080FF", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg" },

  // ⚙️ Containerization & Orchestration
  { name: "Docker", color: "#2496ED", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", color: "#326CE5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Terraform", color: "#844FBA", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },

  // 🔄 CI/CD & Automation
  { name: "Jenkins", color: "#D24939", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  { name: "GitHub Actions", color: "#c5c3c3ff", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "GitLab CI", color: "#FC6D26", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
  { name: "Ansible", color: "#EE0000", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" },

  // 🧰 Monitoring, Security & Networking
  { name: "Prometheus", color: "#E6522C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
  { name: "Grafana", color: "#F46800", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
  { name: "NGINX", color: "#009639", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
];

const cloudFaqData = [
  {
    q: "Which cloud platforms do you support?",
    a: "We work with AWS, Azure, and Google Cloud Platform to provide scalable and secure cloud solutions."
  },
  {
    q: "How do you handle data security?",
    a: "We implement encryption, identity access management, and regular audits to ensure your data is protected."
  },
  {
    q: "Can you migrate our existing infrastructure to the cloud?",
    a: "Yes—our team performs a detailed assessment and ensures smooth migration with minimal downtime."
  },
  {
    q: "Do you provide post-migration support?",
    a: "Absolutely. We offer ongoing monitoring, maintenance, and optimization to keep your cloud infrastructure efficient."
  },
];
