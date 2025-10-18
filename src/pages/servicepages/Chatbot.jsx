
// "use client";
// import {
//   MessageSquare,
//   Sparkles,
//   Bot,
//   ShieldCheck,
//   Info,
//   Brain,
//   Clock,
//   RefreshCw,
//   Send,
// } from "lucide-react";
// import Steps from "../../components/services/Steps"; // keep if you already have this component
// import AIIndustry from "../../components/services/AIIndustry"; // keep if you already have this component
// import WhyChooseSoseoBot from '../../components/WhyChooseBot';
// import { motion } from "framer-motion";
// import KeyFeaturesTabs from "../../components/services/FeatureAi";
// import video from "../../assets/videos/chatbot.mp4";


// export default function ChatbotServicePage() {
//   const features = [
//     {
//       icon: <MessageSquare className="w-6 h-6" />,
//       title: "Human-like Conversations",
//       desc: "Provides quick and human-like responses to customers, ensuring natural engagement.",
//     },
//     {
//       icon: <Info className="w-6 h-6" />,
//       title: "Accurate Information Sharing",
//       desc: "Shares precise details about services, pricing, and support instantly.",
//     },
//     {
//       icon: <Brain className="w-6 h-6" />,
//       title: "Natural Language Understanding",
//       desc: "Understands user messages naturally and replies contextually using AI.",
//     },
//     {
//       icon: <Bot className="w-6 h-6" />,
//       title: "Handles Multiple Queries",
//       desc: "Easily manages greetings, service questions, and company information.",
//     },
//     {
//       icon: <ShieldCheck className="w-6 h-6" />,
//       title: "Smart Error Handling",
//       desc: "Automatically guides users when unclear messages are sent.",
//     },
//     {
//       icon: <Clock className="w-6 h-6" />,
//       title: "24/7 Availability",
//       desc: "Operates round-the-clock to improve customer satisfaction and experience.",
//     },
//     {
//       icon: <RefreshCw className="w-6 h-6" />,
//       title: "Easily Updatable",
//       desc: "Can be updated effortlessly as business needs evolve.",
//     },
//   ];

//   return (
//     <>
//     <main className="min-h-screen bg-gradient-to-b from-[#0a1220] via-[#0b1a2e] to-[#06101c]

//  text-white">
//       {/* HERO */}
//       <section className="relative overflow-hidden">
//         {/* background glows */}
//         <div className="pointer-events-none absolute inset-0 -z-10">
//           <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[120px]" />
//           <div className="absolute -bottom-24 -right-24 h-[520px] w-[520px] rounded-full bg-indigo-400/10 blur-[140px]" />
//         </div>

//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
//           <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-4">
//             {/* 3/4 TEXT SIDE */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="lg:col-span-3"
//             >
//               <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/4 px-3 py-1 text-sm font-medium text-white/80">
//                 <Sparkles className="w-4 h-4" /> AI Chatbot Service
//               </span>
//               <h1 className="mt-5 text-4xl leading-tight font-bold md:text-5xl md:leading-[1.15]">
//                 SoseoBot — Smart WhatsApp Business Assistant
//               </h1>
//               <p className="mt-4 text-base md:text-lg text-white/75 max-w-2xl">
//                 SoseoBot is an intelligent WhatsApp chatbot developed by Soseotech to help businesses
//                 communicate seamlessly with their customers. It assists users by answering questions, sharing
//                 service information, and providing instant, friendly responses anytime.
//               </p>

//               <div className="mt-8 flex flex-wrap items-center gap-3">
//                 <a
//                   href="#get-started"
//                   className="inline-flex items-center gap-2 rounded-2xl bg-blue-500/90 px-5 py-3 text-sm font-semibold shadow-lg shadow-blue-500/20 ring-1 ring-blue-400/40 transition hover:bg-blue-500"
//                 >
//                   <Send className="w-4 h-4" /> Get a Demo
//                 </a>
//                 <a
//                   href="#features"
//                   className="inline-flex items-center gap-2 rounded-2xl bg-white/4 px-5 py-3 text-sm font-semibold ring-1 ring-white/15 hover:bg-white/10"
//                 >
//                   View Features
//                 </a>
//               </div>

//               {/* Trust badges */}
//               <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl text-white/75">
//                 <div className="rounded-xl border border-white/15 bg-white/4 px-4 py-3">
//                   <p className="text-2xl font-bold text-white">24/7</p>
//                   <p className="text-xs">Availability</p>
//                 </div>
//                 <div className="rounded-xl border border-white/15 bg-white/4 px-4 py-3">
//                   <p className="text-2xl font-bold text-white">-40%</p>
//                   <p className="text-xs">Ticket volume</p>
//                 </div>
//                 <div className="rounded-xl border border-white/15 bg-white/4 px-4 py-3">
//                   <p className="text-2xl font-bold text-white">+3×</p>
//                   <p className="text-xs">Lead capture</p>
//                 </div>
//               </div>
//             </motion.div>

//             {/* 1/4 PHONE PREVIEW SIDE (like screenshot) */}
// <motion.div
//   initial={{ opacity: 0, scale: 0.97 }}
//   animate={{ opacity: 1, scale: 1 }}
//   transition={{ duration: 0.6, delay: 0.05 }}
//   className="lg:col-span-1"
// >
//   <div className="relative mx-auto w-[260px] sm:w-[280px] lg:w-[320px]">
//     {/* subtle outer glow to match the mock */}
//     <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[48px] bg-gradient-to-b from-[#c8c3ff]/25 to-[#78a4ff]/25 blur-2xl" />

//     {/* Outer shiny device frame */}
//     <div className="relative rounded-[42px] p-2 bg-gradient-to-b from-[#cfcaff] to-[#7eabff] shadow-[0_18px_60px_rgba(78,102,255,.35)]">
//       {/* Inner plastic rim */}
//       <div className="rounded-[36px] bg-white p-1">
//         {/* Bezel with light gradient like the screenshot */}
//         <div className="rounded-[32px] bg-gradient-to-b from-white via-[#eef2ff] to-[#e6e0ff] p-2">
//           {/* Actual screen (tall like a modern phone) */}
//           <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[26px] bg-[#F7F9FF] shadow-inner ring-1 ring-black/5">
//             {/* Video fills the screen; no browser controls */}
//             <video
//               className="h-full w-full object-cover"
//               src={video}
//               autoPlay
//               muted
//               loop
//               playsInline
//               // fallback poster (keeps bright look before play)
//               poster="https://images.unsplash.com/photo-1529336953121-a3b1b64f7c9d?q=80&w=1400&auto=format&fit=crop"
//             />
//             {/* A soft highlight overlay to get that glassy look */}
//             <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_-10%,rgba(255,255,255,0.75),transparent_55%)]" />

//             {/* Floating chip (bottom-right) like in the mock */}
//             <div className="absolute bottom-6 right-5 rounded-xl bg-[#6B63FF] px-3 py-2 text-[10px] font-semibold text-white shadow-lg shadow-indigo-500/40">
//               Book Test Drive
//               <span className="ml-2 opacity-90">05:41pm</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* Caption under the phone */}
//     <p className="mt-3 text-center text-xs text-white/70">
//       Product walkthrough (1:12)
//     </p>
//   </div>
// </motion.div>


//           </div>
//         </div>
//       </section>

//       {/* KEY FEATURES — Zig-Zag Timeline */}
//       <KeyFeaturesTabs heading="Key Features" features={features} />
//       {/* CTA band */}
//       <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div id="get-started" className="mt-14 md:mt-16">
//           <div className="relative isolate overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-r from-indigo-900/30 via-blue-900/20 to-cyan-900/20 p-6 md:p-8">
//             <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
//             <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
//             <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//               <div>
//                 <p className="text-xl font-semibold">Ready to launch your AI Chatbot?</p>
//                 <p className="text-white/75 text-sm md:text-base">
//                   We can connect it to WhatsApp Cloud API, your CRM, and your website widget.
//                 </p>
//               </div>
//               <div className="flex gap-3">
//                 <a
//                   href="#"
//                   className="inline-flex items-center gap-2 rounded-xl bg-white text-[#0b1220] px-4 py-3 text-sm font-semibold"
//                 >
//                   <Send className="w-4 h-4" /> Request Proposal
//                 </a>
//                 <a
//                   href="#"
//                   className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold ring-1 ring-white/20 hover:bg-white/15"
//                 >
//                   Live Demo
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* HOW IT WORKS */}
//       <Steps stepsData={chatbotStepsData} heading={"How SoseoBot Works"} />
//       <AIIndustry />
//       <div className="mt-6 h-px w-full flex justify-center bg-[linear-gradient(90deg,transparent,white,transparent)]" />
          
//       <WhyChooseSoseoBot />

//       {/* FAQ */}
//       <section className="mx-auto max-w-7xl px-4 sm:px-6 bg-gray-700 rounded-3xl lg:px-8 py-16">
//         <div className="grid gap-10 lg:grid-cols-2  items-center">
//           <div >
//             <h3 className="text-4xl font-bold">Frequently asked</h3>
//             <p className="mt-2 font-semibold text-2xl text-white/75">A quick primer on setup and integration.</p>
//           </div>
//           <div className="space-y-5">
//             <details className="group rounded-xl border border-white/15 bg-white/[0.04] p-4 open:bg-white/[0.06]">
//               <summary className="flex cursor-pointer list-none items-center justify-between">
//                 <span className="font-medium">How fast can we go live?</span>
//                 <span className="text-white/60">~3–7 days*</span>
//               </summary>
//               <p className="mt-2 text-sm text-white/75">
//                 Depends on channel approvals (e.g., WhatsApp) and how ready your knowledge base is.
//               </p>
//             </details>
//             <details className="group rounded-xl border border-white/15 bg-white/[0.04] p-4 open:bg-white/[0.06]">
//               <summary className="flex cursor-pointer list-none items-center justify-between">
//                 <span className="font-medium">Can it talk to our CRM/helpdesk?</span>
//                 <span className="text-white/60">Yes</span>
//               </summary>
//               <p className="mt-2 text-sm text-white/75">
//                 We integrate with HubSpot, Zoho, Freshdesk, and custom APIs via webhooks.
//               </p>
//             </details>

//             <details className="group rounded-xl border border-white/15 bg-white/[0.04] p-4 open:bg-white/[0.06]">
//             <summary className="flex cursor-pointer list-none items-center justify-between">
//                 <span className="font-medium">Does it integrate with WhatsApp and websites?</span>
//                 <span className="text-white/60">Absolutely</span>
//             </summary>
//             <p className="mt-2 text-sm text-white/75">
//                 SoseoBot connects to WhatsApp Cloud API, website widgets, CRMs, and support systems for a unified experience.
//             </p>
//             </details>

            

//             <details className="group rounded-xl border border-white/15 bg-white/[0.04] p-4 open:bg-white/[0.06]">
//             <summary className="flex cursor-pointer list-none items-center justify-between">
//                 <span className="font-medium">Can SoseoBot send media or documents?</span>
//                 <span className="text-white/60">Yes</span>
//             </summary>
//             <p className="mt-2 text-sm text-white/75">
//                 It can share PDFs, images, videos, and links directly through WhatsApp or your website chat, enhancing user experience.
//             </p>
//             </details>

            

               

//                 <details className="group rounded-xl border border-white/15 bg-white/[0.04] p-4 open:bg-white/[0.06]">
//                 <summary className="flex cursor-pointer list-none items-center justify-between">
//                     <span className="font-medium">Can it schedule demos or appointments automatically?</span>
//                     <span className="text-white/60">Yes</span>
//                 </summary>
//                 <p className="mt-2 text-sm text-white/75">
//                     SoseoBot can handle calendar bookings, send reminders, and update CRM events automatically.
//                 </p>
//                 </details>

//           </div>
//         </div>
//       </section>
//     </main>
//     </>
//   );
// }

// /* -----------------------------------------
//    How It Works (data only)
// ------------------------------------------*/
// export const chatbotStepsData = [
//   {
//     id: 1,
//     title: "User Initiation",
//     description: [
//       "Customers send a message on WhatsApp to start a conversation.",
//       "The chatbot instantly recognizes that a user has reached out and begins engagement.",
//     ],
//   },
//   {
//     id: 2,
//     title: "Intent Recognition",
//     description: [
//       "The chatbot uses AI to understand what the customer is asking for — services, pricing, or general inquiries.",
//       "It processes user intent in real-time to decide the best possible response path.",
//     ],
//   },
//   {
//     id: 3,
//     title: "Instant & Accurate Response",
//     description: [
//       "Once intent is recognized, the chatbot provides the most accurate and relevant information.",
//       "Responses are generated in a friendly, conversational manner that matches your brand tone.",
//     ],
//   },
//   {
//     id: 4,
//     title: "Interactive & Guided Conversation",
//     description: [
//       "If the message is unclear, the chatbot automatically guides users with helpful suggestions.",
//       "This ensures every interaction remains smooth, efficient, and user-friendly.",
//     ],
//   },
//   {
//     id: 5,
//     title: "Continuous Support",
//     description: [
//       "The chatbot operates 24/7, ensuring no customer query goes unanswered.",
//       "It continuously enhances customer experience through instant, automated communication.",
//     ],
//   },
// ];


"use client";
import {
  MessageSquare,
  Sparkles,
  Bot,
  ShieldCheck,
  Info,
  Brain,
  Clock,
  RefreshCw,
  Send,
} from "lucide-react";
import Steps from "../../components/services/Steps"; // keep if you already have this component
import AIIndustry from "../../components/services/AIIndustry"; // keep if you already have this component
import WhyChooseSoseoBot from "../../components/WhyChooseBot";
import { motion } from "framer-motion";
import KeyFeaturesTabs from "../../components/services/FeatureAi";
import video from "../../assets/videos/chatbot.mp4";

export default function ChatbotServicePage() {
  const features = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Human-like Conversations",
      desc: "Provides quick and human-like responses to customers, ensuring natural engagement.",
    },
    {
      icon: <Info className="w-6 h-6" />,
      title: "Accurate Information Sharing",
      desc: "Shares precise details about services, pricing, and support instantly.",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Natural Language Understanding",
      desc: "Understands user messages naturally and replies contextually using AI.",
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Handles Multiple Queries",
      desc: "Easily manages greetings, service questions, and company information.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Smart Error Handling",
      desc: "Automatically guides users when unclear messages are sent.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Availability",
      desc: "Operates round-the-clock to improve customer satisfaction and experience.",
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Easily Updatable",
      desc: "Can be updated effortlessly as business needs evolve.",
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-[#0a1220] via-[#0b1a2e] to-[#06101c] text-white">
        {/* HERO */}
        <section className="relative overflow-hidden">
          {/* background glows */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[120px]" />
            <div className="absolute -bottom-24 -right-24 h-[520px] w-[520px] rounded-full bg-indigo-400/10 blur-[140px]" />
          </div>

          {/* increased right padding on lg+ so phone never hugs edge */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 py-10 lg:py-16">
            <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-4">
              {/* 3/4 TEXT SIDE */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/4 px-3 py-1 text-sm font-medium text-white/80">
                  <Sparkles className="w-4 h-4" /> AI Chatbot Service
                </span>
                <h1 className="mt-5 text-4xl leading-tight font-bold md:text-5xl md:leading-[1.15]">
                  SoseoBot — Smart WhatsApp <br /> Business Assistant
                </h1>
                <p className="mt-4 text-base md:text-lg text-white/75 max-w-2xl">
                  SoseoBot is an intelligent WhatsApp chatbot developed by
                  Soseotech to help businesses communicate seamlessly with their
                  customers. It assists users by answering questions, sharing
                  service information, and providing instant, friendly responses
                  anytime.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-2xl bg-blue-500/90 px-5 py-3 text-sm font-semibold shadow-lg shadow-blue-500/20 ring-1 ring-blue-400/40 transition hover:bg-blue-500"
                  >
                    <Send className="w-4 h-4" /> Get a Demo
                  </a>
                  <a
                    href="#features"
                    className="inline-flex items-center gap-2 rounded-2xl bg-white/4 px-5 py-3 text-sm font-semibold ring-1 ring-white/15 hover:bg-white/10"
                  >
                    View Features
                  </a>
                </div>

                {/* Trust badges */}
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl text-white/75">
                  <div className="rounded-xl border border-white/15 bg-white/4 px-4 py-3">
                    <p className="text-2xl font-bold text-white">24/7</p>
                    <p className="text-xs">Availability</p>
                  </div>
                  <div className="rounded-xl border border-white/15 bg-white/4 px-4 py-3">
                    <p className="text-2xl font-bold text-white">-40%</p>
                    <p className="text-xs">Ticket volume</p>
                  </div>
                  <div className="rounded-xl border border-white/15 bg-white/4 px-4 py-3">
                    <p className="text-2xl font-bold text-white">+3×</p>
                    <p className="text-xs">Lead capture</p>
                  </div>
                </div>
              </motion.div>

              {/* 1/4 PHONE PREVIEW SIDE (like screenshot) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="lg:col-span-1"
              >
                <div className="relative mx-auto w-[240px] sm:w-[280px] lg:w-[300px] xl:w-[320px] max-w-full">
                  {/* subtle outer glow kept inside the column */}
                  <div className="pointer-events-none absolute inset-2 -z-10 rounded-[48px] bg-gradient-to-b from-[#c8c3ff]/25 to-[#78a4ff]/25 blur-xl" />

                  {/* Outer shiny device frame */}
                  <div className="relative rounded-[42px] p-2 bg-gradient-to-b from-[#cfcaff] to-[#7eabff] shadow-[0_18px_60px_rgba(78,102,255,.35)]">
                    {/* Inner plastic rim */}
                    <div className="rounded-[36px] bg-white p-1">
                      {/* Bezel with light gradient like the screenshot */}
                      <div className="rounded-[32px] bg-gradient-to-b from-white via-[#eef2ff] to-[#e6e0ff] p-2">
                        {/* Actual screen (tall like a modern phone) */}
                        <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[26px] bg-[#F7F9FF] shadow-inner ring-1 ring-black/5">
                          {/* Video fills the screen; no browser controls */}
                          <video
                            className="h-full w-full object-cover"
                            src={video}
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster="https://images.unsplash.com/photo-1529336953121-a3b1b64f7c9d?q=80&w=1400&auto=format&fit=crop"
                          />
                          {/* a soft highlight overlay to get that glassy look */}
                          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_-10%,rgba(255,255,255,0.75),transparent_55%)]" />

                          {/* Floating chip (bottom-right) like in the mock */}
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* KEY FEATURES — Zig-Zag Timeline */}
        <KeyFeaturesTabs heading="Key Features" features={features} />

        {/* CTA band */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div id="get-started" className="mt-14 md:mt-16">
            <div className="relative isolate overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-r from-indigo-900/30 via-blue-900/20 to-cyan-900/20 p-6 md:p-8">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xl font-semibold">
                    Ready to launch your AI Chatbot?
                  </p>
                  <p className="text-white/75 text-sm md:text-base">
                    We can connect it to WhatsApp Cloud API, your CRM, and your
                    website widget.
                  </p>
                </div>
                <div className="flex gap-3">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-white text-[#0b1220] px-4 py-3 text-sm font-semibold"
                  >
                    <Send className="w-4 h-4" /> Request Proposal
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold ring-1 ring-white/20 hover:bg-white/15"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <Steps stepsData={chatbotStepsData} heading={"How SoseoBot Works"} />
        <AIIndustry />
        <div className="mt-6 h-px w-full flex justify-center bg-[linear-gradient(90deg,transparent,white,transparent)]" />

        <WhyChooseSoseoBot />

        {/* FAQ */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 bg-gray-700 rounded-3xl lg:px-8 py-16">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <h3 className="text-4xl font-bold">Frequently asked</h3>
              <p className="mt-2 font-semibold text-2xl text-white/75">
                A quick primer on setup and integration.
              </p>
            </div>
            <div className="space-y-5">
              <details className="group rounded-xl border border-white/15 bg-white/[0.04] p-4 open:bg-white/[0.06]">
                <summary className="flex cursor-pointer list-none items-center justify-between">
                  <span className="font-medium">How fast can we go live?</span>
                  <span className="text-white/60">~3–7 days*</span>
                </summary>
                <p className="mt-2 text-sm text-white/75">
                  Depends on channel approvals (e.g., WhatsApp) and how ready
                  your knowledge base is.
                </p>
              </details>
              <details className="group rounded-xl border border-white/15 bg-white/[0.04] p-4 open:bg-white/[0.06]">
                <summary className="flex cursor-pointer list-none items-center justify-between">
                  <span className="font-medium">
                    Can it talk to our CRM/helpdesk?
                  </span>
                  <span className="text-white/60">Yes</span>
                </summary>
                <p className="mt-2 text-sm text-white/75">
                  We integrate with HubSpot, Zoho, Freshdesk, and custom APIs
                  via webhooks.
                </p>
              </details>

              <details className="group rounded-xl border border-white/15 bg-white/[0.04] p-4 open:bg-white/[0.06]">
                <summary className="flex cursor-pointer list-none items-center justify-between">
                  <span className="font-medium">
                    Does it integrate with WhatsApp and websites?
                  </span>
                  <span className="text-white/60">Absolutely</span>
                </summary>
                <p className="mt-2 text-sm text-white/75">
                  SoseoBot connects to WhatsApp Cloud API, website widgets,
                  CRMs, and support systems for a unified experience.
                </p>
              </details>

              <details className="group rounded-xl border border-white/15 bg-white/[0.04] p-4 open:bg-white/[0.06]">
                <summary className="flex cursor-pointer list-none items-center justify-between">
                  <span className="font-medium">
                    Can SoseoBot send media or documents?
                  </span>
                  <span className="text-white/60">Yes</span>
                </summary>
                <p className="mt-2 text-sm text-white/75">
                  It can share PDFs, images, videos, and links directly through
                  WhatsApp or your website chat, enhancing user experience.
                </p>
              </details>

              <details className="group rounded-xl border border-white/15 bg-white/[0.04] p-4 open:bg-white/[0.06]">
                <summary className="flex cursor-pointer list-none items-center justify-between">
                  <span className="font-medium">
                    Can it schedule demos or appointments automatically?
                  </span>
                  <span className="text-white/60">Yes</span>
                </summary>
                <p className="mt-2 text-sm text-white/75">
                  SoseoBot can handle calendar bookings, send reminders, and
                  update CRM events automatically.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

/* -----------------------------------------
   How It Works (data only)
------------------------------------------*/
export const chatbotStepsData = [
  {
    id: 1,
    title: "User Initiation",
    description: [
      "Customers send a message on WhatsApp to start a conversation.",
      "The chatbot instantly recognizes that a user has reached out and begins engagement.",
    ],
  },
  {
    id: 2,
    title: "Intent Recognition",
    description: [
      "The chatbot uses AI to understand what the customer is asking for — services, pricing, or general inquiries.",
      "It processes user intent in real-time to decide the best possible response path.",
    ],
  },
  {
    id: 3,
    title: "Instant & Accurate Response",
    description: [
      "Once intent is recognized, the chatbot provides the most accurate and relevant information.",
      "Responses are generated in a friendly, conversational manner that matches your brand tone.",
    ],
  },
  {
    id: 4,
    title: "Interactive & Guided Conversation",
    description: [
      "If the message is unclear, the chatbot automatically guides users with helpful suggestions.",
      "This ensures every interaction remains smooth, efficient, and user-friendly.",
    ],
  },
  {
    id: 5,
    title: "Continuous Support",
    description: [
      "The chatbot operates 24/7, ensuring no customer query goes unanswered.",
      "It continuously enhances customer experience through instant, automated communication.",
    ],
  },
];
