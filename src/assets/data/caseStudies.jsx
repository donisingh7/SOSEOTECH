// src/assets/data/caseStudies.js
export const caseStudies = [
    {
      id: 5,
      client: "Wilderbeast",
      industry: "Travel & Hospitality",
      tags: ["Booking Platform", "UX/UI", "API", "Automation"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80",
      videoUrl: "",
      title: "Wilderbeast Success Story: Streamlining a Booking Platform",
      description:
        "How we engineered a modern UI and reliable backend to streamline the entire booking process.",
      background:
        "Wilderbeast runs a multi-vendor booking marketplace with legacy APIs and inconsistent SLAs. Manual reconciliations and slow search degraded conversions.",
      problem:
        "Slow search (p95 > 4.2s), booking failures from vendor timeouts, and heavy support load.",
      solution: [
        "Caching + async enrichment for perceived speed; optimistic UI on search.",
        "Unified vendor gateway with circuit breakers, retries, and backoff.",
        "Frictionless booking flow with clearer error/empty states.",
        "Ops console for real-time health, SLAs, and replay tooling.",
      ],
      results: [
        { label: "Search p95", before: "4.2s", after: "1.1s", change: "-74%" },
        { label: "Booking success", before: "88%", after: "97%", change: "+9pp" },
        { label: "Support tickets", before: "1.0x", after: "0.58x", change: "-42%" },
        { label: "Conversion", before: "—", after: "+18%", change: "+18%" },
      ],
      process: [
        { step: "Discovery", detail: "Mapped latency/failure modes; shadowed CS & Ops." },
        { step: "Design", detail: "Lo-fi → hi-fi; validated on drop-off cohorts." },
        { step: "Build", detail: "Shipped in thin slices: gateway, search, UI." },
        { step: "Stabilize", detail: "Health dashboards, circuit breakers, alert tuning." },
      ],
      learnings: [
        "Perceived performance moves the needle faster than raw throughput.",
        "Circuit breakers around flaky vendors protect UX & revenue.",
        "Ops tooling that reduces MTTR has compounding ROI.",
      ],
      quotes: [
        {
          name: "Nora B.",
          role: "Head of Product, Wilderbeast",
          text: "Bookings are up, support is down — the platform finally feels predictable.",
          avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        },
      ],
      cta: { text: "Discuss a platform overhaul", link: "/contact" },
    },
    {
      id: 7,
      client: "Finance Saarthi",
      industry: "FinTech",
      tags: ["Compliance", "Automation", "Security", "Scalability"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1600&q=80",
      videoUrl: "",
      title: "How Finance Saarthi Achieved Scalable and Secure Workflows",
      description:
        "Secure, automated compliance workflows that cut onboarding time and simplified audits.",
      background:
        "High-volume client onboarding, KYC/AML checks, and time-bound filings were manual and error-prone, risking delays and audit pain.",
      problem:
        "Onboarding took 4–7 days; inconsistent evidence trails; exception handling slowed teams.",
      solution: [
        "Policy-driven KYC/AML orchestration with auto evidence capture.",
        "Unified data model across CRM/ledger/docs with trace IDs.",
        "RBAC + approvals and immutable audit trails.",
        "Dashboard for deadlines, exceptions, and automated reminders.",
      ],
      results: [
        { label: "Onboarding time", before: "4–7 days", after: "24–48 hrs", change: "-70%" },
        { label: "Audit prep", before: "10 days", after: "3 days", change: "-70%" },
        { label: "Exception rate", before: "1.0x", after: "0.6x", change: "-40%" },
        { label: "Compliance errors", before: "—", after: "-55%", change: "-55%" },
      ],
      process: [
        { step: "Process Mapping", detail: "Documented all paths and exception branches." },
        { step: "Policy Engine", detail: "Encoded rules; attached evidence by default." },
        { step: "Rollout", detail: "Phased teams; trained analysts & auditors." },
        { step: "Scale", detail: "Autoscaling workers; real-time monitoring/alerting." },
      ],
      learnings: [
        "Evidence by default removes audit scramble.",
        "Traceability across systems slashes reconciliation time.",
        "Small automations compound into big cycle-time wins.",
      ],
      quotes: [
        {
          name: "Arun K.",
          role: "COO, Finance Saarthi",
          text: "Audits went from stressful to straightforward. The dashboards changed our weeks.",
          avatar: "https://randomuser.me/api/portraits/men/64.jpg",
        },
      ],
      cta: { text: "Automate compliance with us", link: "/contact" },
    },
  
    /* --- New entries below --- */
  
    {
      id: 9,
      client: "ShopLynx",
      industry: "E-commerce",
      tags: ["Personalization", "Recommendations", "Data Pipeline"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80",
      videoUrl: "",
      title: "Boosting AOV with Real-Time Personalization",
      description:
        "Implemented a streaming data pipeline and a lightweight recommender to lift AOV and repeat purchases.",
      background:
        "ShopLynx had traffic but low AOV and limited repeat behavior. Batch ETL delayed insights; merchandising was manual.",
      problem:
        "Static recommendations, slow insights (T+24h), and limited segmentation led to generic experiences.",
      solution: [
        "Event collection with streaming ingestion (Kafka/Kinesis) and session stitching.",
        "Real-time feature store and ‘next-best’ recommender with fallback rules.",
        "On-site widgets + triggered campaigns integrated with ESP/CDP.",
        "Dashboards for cohort/LTV tracking and experiment reviews.",
      ],
      results: [
        { label: "AOV", before: "$62", after: "$74", change: "+19%" },
        { label: "Repeat rate (60d)", before: "21%", after: "29%", change: "+8pp" },
        { label: "Time-to-insight", before: "24h", after: "5m", change: "-96%" },
        { label: "Merch ops time", before: "1.0x", after: "0.55x", change: "-45%" },
      ],
      process: [
        { step: "Discovery", detail: "Mapped data sources; defined KPIs and governance." },
        { step: "MVP", detail: "Shipped one placement + one trigger end-to-end." },
        { step: "Scale", detail: "Rolled to 6 placements; added seasonal models." },
        { step: "Optimize", detail: "A/B tested creatives and model thresholds." },
      ],
      learnings: [
        "A single high-impact placement can fund the whole program.",
        "Real-time features matter more than exotic models at the start.",
        "Dashboards must tie to revenue, not just clicks.",
      ],
      quotes: [
        {
          name: "Dana R.",
          role: "VP Growth, ShopLynx",
          text: "We finally see lift we can trust. Experiments are faster and clearer.",
          avatar: "https://randomuser.me/api/portraits/women/32.jpg",
        },
      ],
      cta: { text: "Personalize your store", link: "/contact" },
    },
    {
      id: 10,
      client: "MediNote Health",
      industry: "Healthcare",
      tags: ["EMR", "Interoperability", "HIPAA", "DevOps"],
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1600&q=80",
      videoUrl: "",
      title: "Interoperable EMR Integrations with Zero-Downtime Deploys",
      description:
        "Standardized EMR integrations (HL7/FHIR), improved uptime, and accelerated releases under HIPAA constraints.",
      background:
        "Clinics needed data exchange across heterogeneous EMR systems. Releases were risky; audits were painful.",
      problem:
        "Fragmented interfaces, deployment windows at night/weekends, and missing audit artifacts.",
      solution: [
        "API gateway with FHIR mapping, validation, and consent enforcement.",
        "Blue/green deploys with automated smoke tests and database migrations.",
        "Centralized audit logging, PHI tokenization, and fine-grained RBAC.",
        "Runbooks, dashboards, and alerting tied to SLOs/SLAs.",
      ],
      results: [
        { label: "Deployment frequency", before: "Monthly", after: "Weekly", change: "↑ 4x" },
        { label: "Change failure rate", before: "9.5%", after: "2.1%", change: "-7.4pp" },
        { label: "Uptime", before: "99.3%", after: "99.95%", change: "+0.65pp" },
        { label: "Audit prep", before: "15 days", after: "4 days", change: "-73%" },
      ],
      process: [
        { step: "Assess", detail: "Cataloged interfaces, auth flows, data maps." },
        { step: "Design", detail: "Defined gateway policies and observability." },
        { step: "Implement", detail: "Iterative rollouts with blue/green and smoke suites." },
        { step: "Harden", detail: "Chaos drills and audit artifact automation." },
      ],
      learnings: [
        "Safer deploys unlock faster roadmaps.",
        "Observability is mandatory for regulated environments.",
        "Automated audit trails save real time and stress.",
      ],
      quotes: [
        {
          name: "Dr. Keira J.",
          role: "CMIO, MediNote",
          text: "Deploys stopped being scary. Clinicians finally trust the data flows.",
          avatar: "https://randomuser.me/api/portraits/women/21.jpg",
        },
      ],
      cta: { text: "Integrate EMRs safely", link: "/contact" },
    },
    {
      id: 11,
      client: "EduSpark LMS",
      industry: "EdTech",
      tags: ["Learning Analytics", "Gamification", "Scalability"],
      image: "https://images.unsplash.com/photo-1604964432806-254d07c11f32?w=1600&q=80",
      videoUrl: "",
      title: "Driving Course Completion with Learning Analytics",
      description:
        "Launched analytics and gamified nudges that improved course completion and reduced churn.",
      background:
        "Students stalled mid-course; instructors lacked insight into blockers; interventions were manual.",
      problem:
        "Flat completion rates, low instructor visibility, and inconsistent engagement.",
      solution: [
        "Engagement scoring with module-level telemetry and risk flags.",
        "Nudge engine for timely reminders, badges, and social proof.",
        "Instructor dashboards with cohort drill-downs and interventions.",
        "Autoscaling infra for semester spikes.",
      ],
      results: [
        { label: "Completion rate", before: "54%", after: "67%", change: "+13pp" },
        { label: "Churn (90d)", before: "22%", after: "15%", change: "-7pp" },
        { label: "Instructor time", before: "1.0x", after: "0.7x", change: "-30%" },
        { label: "Peak handling", before: "—", after: "2x capacity", change: "2x" },
      ],
      process: [
        { step: "Research", detail: "Interviewed students/instructors; mapped drop-off." },
        { step: "MVP", detail: "One course, two nudges, one dashboard." },
        { step: "Scale", detail: "Rolled to 18 courses; added badges." },
        { step: "Optimize", detail: "A/B tested cadence and thresholds." },
      ],
      learnings: [
        "Nudges work when they’re timely and specific.",
        "Instructor tooling turns data into outcomes.",
        "Start narrow; expand after proving lift.",
      ],
      quotes: [
        {
          name: "Paul S.",
          role: "Program Director, EduSpark",
          text: "Our cohorts are more engaged, and teachers know exactly who needs help.",
          avatar: "https://randomuser.me/api/portraits/men/29.jpg",
        },
      ],
      cta: { text: "Level up your LMS", link: "/contact" },
    },
    {
      id: 12,
      client: "AgriGrid",
      industry: "Supply Chain",
      tags: ["IoT", "Telemetry", "Predictive"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1600&q=80",
      videoUrl: "",
      title: "Cutting Cold-Chain Spoilage with IoT Telemetry",
      description:
        "End-to-end cold-chain visibility, predictive alerts, and automated claims prevention.",
      background:
        "Perishables frequently spoiled due to temperature excursions and route delays; root-cause analysis was slow.",
      problem:
        "Limited visibility, reactive interventions, and rising claims.",
      solution: [
        "Deployed IoT sensors; unified telemetry lake with device health checks.",
        "Predictive models for excursion risk; alerting to drivers and dispatch.",
        "Route analytics and SLA dashboards for partners.",
        "Automated exception workflows with photo evidence.",
      ],
      results: [
        { label: "Spoilage", before: "1.0x", after: "0.62x", change: "-38%" },
        { label: "Claims", before: "1.0x", after: "0.57x", change: "-43%" },
        { label: "Intervention time", before: "2h+", after: "18m", change: "-75%" },
        { label: "On-time delivery", before: "86%", after: "94%", change: "+8pp" },
      ],
      process: [
        { step: "Pilot", detail: "Instrumented 12 routes across 3 regions." },
        { step: "Platform", detail: "Built telemetry ingestion and alert rules." },
        { step: "Rollout", detail: "Scaled to 200+ routes; partner onboarding." },
        { step: "Refine", detail: "Added weather + traffic to risk scoring." },
      ],
      learnings: [
        "Data freshness beats model complexity early on.",
        "Make alerts actionable for frontline teams.",
        "SLA dashboards align incentives with partners.",
      ],
      quotes: [
        {
          name: "Marta V.",
          role: "Operations Lead, AgriGrid",
          text: "Spoilage dropped dramatically. The team trusts the alerts now.",
          avatar: "https://randomuser.me/api/portraits/women/14.jpg",
        },
      ],
      cta: { text: "Protect your cold chain", link: "/contact" },
    },
    {
      id: 13,
      client: "LogiFlow",
      industry: "Logistics",
      tags: ["Fleet", "Routing", "Cost Optimization"],
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1600&q=80",
      videoUrl: "",
      title: "Optimizing Fleet Routes to Cut Fuel & Time",
      description:
        "Dynamic routing and dispatch tooling that trimmed miles, fuel, and late deliveries.",
      background:
        "Drivers followed static routes; dispatchers had limited real-time levers; costs were rising.",
      problem:
        "Excess miles, late windows, and manual reassignments during incidents.",
      solution: [
        "Routing engine with traffic/weather feeds and depot constraints.",
        "Mobile app for drivers with live updates and proof-of-delivery.",
        "Dispatcher console for replans, load balancing, and alerts.",
        "Post-route analytics with cost and service KPIs.",
      ],
      results: [
        { label: "Fuel cost", before: "1.0x", after: "0.82x", change: "-18%" },
        { label: "Late deliveries", before: "12.5%", after: "6.3%", change: "-6.2pp" },
        { label: "Miles driven", before: "1.0x", after: "0.86x", change: "-14%" },
        { label: "Dispatcher load", before: "1.0x", after: "0.72x", change: "-28%" },
      ],
      process: [
        { step: "Discovery", detail: "Ride-alongs; bottleneck and constraint mapping." },
        { step: "Prototype", detail: "Simulated routes; validated on 2 depots." },
        { step: "Rollout", detail: "Phased regions; driver training and incentives." },
        { step: "Optimize", detail: "Continuous tuning with feedback loops." },
      ],
      learnings: [
        "Driver experience can make or break routing impact.",
        "Dispatcher tools need speed and clarity more than anything.",
        "Align incentives to sustain the gains.",
      ],
      quotes: [
        {
          name: "Hector L.",
          role: "VP Logistics, LogiFlow",
          text: "The savings were obvious in month one, and service complaints dropped too.",
          avatar: "https://randomuser.me/api/portraits/men/18.jpg",
        },
      ],
      cta: { text: "Optimize your fleet", link: "/contact" },
    },
  ];
  
  export const slugify = (str = "") =>
    str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
  