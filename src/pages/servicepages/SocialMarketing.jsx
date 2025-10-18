import Hero from '../../components/services/Hero.jsx';
import Steps from '../../components/services/Steps.jsx';
import SubServices from '../../components/services/SubServices.jsx';  
import TechStackGrid from '../../components/services/TechStack.jsx';
import Innovate from '../../components/services/Innovate.jsx';
import FaqItem from '../../components/services/FaqItems.jsx';
import ProblemSolution from '../../components/services/ProblemSol.jsx';
import socialimg from '../../assets/images/social.jpeg';


export default function SocialMediaMarketing() {
  return (
    <><div className="bg-[#0b1320]">
      <Hero 
      servicetitle={"Social Media Marketing"}
      heading={ "Transform Presence into Power."} 
      subheading={" We design impactful campaigns that amplify your brand voice, drive engagement, and convert followers into loyal customers — ensuring your story reaches the right people at the right time."} />
      <ProblemSolution
  problemimg={socialimg}
  descheading="Invisible Brands Don’t Grow"
  desccontent="Without the right digital presence, even great products fail to reach audiences. Inconsistent branding, low engagement, and poor targeting hurt credibility."
  imgheading="We Amplify Your Brand’s Voice 📣"
  imgcontent="Our creative social media strategies, data-driven campaigns, and content marketing help you reach, engage, and convert your audience — building lasting digital impact."
/>

      <SubServices subservices={socialSubservices} heading={"Our Social Media Marketing Services"} />
      <Steps stepsData={socialStepsData} 
      heading={"Our Social Media Growth Process"} />
      <Innovate
  heading={"Go Viral. Go Global."}
  subheading={"Our marketing experts build strategies that transcend borders and position your brand for international impact."}
  buttonText={"Expand Reach"}
/>
 <TechStackGrid techStack={socialMediaMarketingTechStack} />
     <section id="faq" className="pb-20 bg-gradient-to-b from-gray-900 via-[#0f172a] to-gray-900 text-white"><div className="max-w-5xl border-t border-gray-500 pt-20 mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {smmFaqData.map((qa, i) => (
              <FaqItem key={i} {...qa} />
            ))}
          </div>
        </div></section>
    </div>
    </>
  );
}

const socialStepsData = [
  {
    id: 1,
    title: "Research and Strategy",
    description: [
      "We start by understanding your brand, audience, and competitors to design a data-driven marketing strategy.",
      "This helps identify the best platforms and content style for your audience.",
    ],
  },
  {
    id: 2,
    title: "Content Creation",
    description: [
      "Our creative team crafts engaging visuals, captions, and campaigns that align with your brand’s voice.",
      "We focus on storytelling that captures attention and builds trust.",
    ],
  },
  {
    id: 3,
    title: "Campaign Execution",
    description: [
      "We launch targeted ad campaigns across platforms like Instagram, LinkedIn, and Meta Ads Manager.",
      "Continuous tracking ensures your content reaches the right audience at the right time.",
    ],
  },
  {
    id: 4,
    title: "Analytics and Optimization",
    description: [
      "We monitor performance using analytics tools to measure reach, engagement, and ROI.",
      "Based on insights, strategies are refined to maximize results.",
    ],
  },
];

const socialSubservices = {
  "Content Creation & Branding": {
    desc: [
      "Engaging Visuals and Copy: Craft creative posts, graphics, and videos that reflect your brand identity.",
      "Consistent Brand Voice: Ensure all social media content resonates with your brand’s tone and values.",
      "Storytelling That Connects: Build emotional connections with your audience through compelling narratives.",
      "Optimized for Engagement: Content designed to increase likes, shares, comments, and overall reach.",
    ],
  },

  "Paid Ad Campaigns": {
    desc: [
      "Targeted Advertising for Maximum Impact: Reach the right audience with optimized campaigns on Meta, LinkedIn, and Google.",
      "Budget Optimization: Get more conversions at lower costs with smart bidding and ad placement strategies.",
      "A/B Testing & Creative Optimization: Continuously test visuals, copy, and targeting to improve performance.",
      "Measurable Results: Track impressions, clicks, and ROI to evaluate campaign success.",
    ],
  },

  "Influencer Collaborations": {
    desc: [
      "Partner with Relevant Influencers: Connect with influencers that align with your brand and target audience.",
      "Campaign Planning & Execution: From outreach to content approval, we manage the influencer process end-to-end.",
      "Authentic Brand Promotion: Leverage trusted voices to enhance brand credibility and awareness.",
      "Performance Tracking: Analyze engagement and conversions to measure influencer ROI.",
    ],
  },

  "Analytics & Reporting": {
    desc: [
      "Comprehensive Performance Insights: Track key metrics like engagement, reach, and conversions across platforms.",
      "Actionable Recommendations: Use data to refine content strategy, posting schedules, and ad targeting.",
      "Custom Dashboards: Easily visualize performance trends for faster decision-making.",
      "Continuous Optimization: Adjust campaigns based on insights for maximum growth and ROI.",
    ],
  },

  "Community Management": {
    desc: [
      "Engage & Nurture Your Audience: Respond to comments, messages, and reviews to build strong relationships.",
      "Moderation & Brand Safety: Ensure discussions remain positive and aligned with brand values.",
      "User Feedback Integration: Gather insights from your audience to improve products or services.",
      "Build Brand Loyalty: Foster trust and long-term engagement through consistent community interactions.",
    ],
  },
};
const socialMediaMarketingTechStack = [
 
  { name: "Instagram", color: "#E4405F", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" },
  { name: "Facebook", color: "#1877F2", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" },
  { name: "LinkedIn", color: "#0077B5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" },
  { name: "Twitter (X)", color: "#000000", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" },
  { name: "YouTube", color: "#FF0000", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg" },

  // 🎨 Design & Content Creation
  { name: "Canva", color: "#00C4CC", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
  { name: "Adobe Photoshop", color: "#31A8FF", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
  { name: "Figma", color: "#F24E1E", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },

  // 📊 Analytics & Scheduling
  { name: "Meta Business Suite", color: "#1877F2", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968764.png" },
  { name: "Google Analytics", color: "#E37400", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
  { name: "Hootsuite", color: "#000000", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968906.png" },
  { name: "Buffer", color: "#000000", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968703.png" },

  // 💰 Ads & Marketing Tools
  { name: "Google Ads", color: "#4285F4", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
  { name: "Meta Ads Manager", color: "#1877F2", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968764.png" },
  { name: "Mailchimp", color: "#FFD400", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mailchimp/mailchimp-original.svg" },

  // 🔍 SEO & Automation
  { name: "Ahrefs", color: "#2557D6", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968883.png" },
  { name: "SEMrush", color: "#FF642D", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968845.png" },
  { name: "Zapier", color: "#FF4A00", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zapier/zapier-original.svg" },
];

const smmFaqData = [
  {
    q: "Which social media platforms do you manage?",
    a: "We handle campaigns across Facebook, Instagram, LinkedIn, Twitter, and TikTok to reach your target audience effectively."
  },
  {
    q: "How do you measure campaign performance?",
    a: "We track KPIs like engagement, reach, clicks, conversions, and ROI using analytics and reporting tools."
  },
  {
    q: "Do you create content for campaigns?",
    a: "Yes, we provide custom graphics, videos, copywriting, and scheduling to ensure a consistent brand presence."
  },
  {
    q: "Can you run paid ad campaigns?",
    a: "Absolutely. We manage PPC campaigns, ad optimization, and budget allocation to maximize results."
  },
];
