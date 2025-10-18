// src/assets/data/newsletters.js
export const newsletters = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=1600&q=80",
      title: "The Cloud Shift: Why 2025 Belongs to SaaS Platforms",
      description:
        "Cloud-native architectures are winning on speed, cost, and reliability. Here’s where we see the biggest upside next.",
      date: "Sep 26, 2025",
      category: "Cloud",
      tags: ["SaaS", "Kubernetes", "Serverless"],
      author: { name: "Sarah Lee", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
      content: [
        "Cloud-native isn’t just infra—it’s an operating model. Teams ship smaller, safer changes and scale on demand.",
        "We outline a pragmatic path from VMs to containers to managed serverless, and share a simple TCO calculator.",
        "Case studies highlight reduced lead times, improved MTTR, and better cost predictability for growth teams.",
      ],
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80",
      title: "Automation First: Finance Tools That Save Time & Reduce Errors",
      description:
        "From reconciliations to filings, we review tools and playbooks that cut cycle time and eliminate manual mistakes.",
      date: "Sep 18, 2025",
      category: "Finance",
      tags: ["Automation", "Compliance", "AP/AR"],
      author: { name: "John Doe", avatar: "https://randomuser.me/api/portraits/men/46.jpg" },
      content: [
        "We break down a reference flow for AP/AR: ingestion → normalization → policy checks → approvals → export.",
        "Tooling picks by maturity stage, plus a checklist to avoid audit pain later.",
      ],
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1600&q=80",
      title: "SOSEOTECH Monthly: The Latest in SaaS and API Development",
      description:
        "A curated digest of frameworks, libraries, and the patterns we see working in modern product teams.",
      date: "Sep 12, 2025",
      category: "Engineering",
      tags: ["APIs", "DX", "Performance"],
      author: { name: "Emily Carter", avatar: "https://randomuser.me/api/portraits/women/47.jpg" },
      content: [
        "From HTTP/3 adoption to typed API clients, here are the developer experience moves that compound velocity.",
        "Includes a mini ‘what to read’ list and our favorite OSS of the month.",
      ],
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1604964432806-254d07c11f32?w=1600&q=80",
      title: "The Insider's Guide: Trends in Financial Automation & Compliance",
      description:
        "What’s changing in compliance automation and how to future-proof your reporting stack.",
      date: "Aug 30, 2025",
      category: "Finance",
      tags: ["Compliance", "Reporting", "Workflows"],
      author: { name: "Sophia Patel", avatar: "https://randomuser.me/api/portraits/women/33.jpg" },
      content: [
        "Evidence-by-default and immutable logs are now baseline. We share a minimal reference architecture.",
        "Bonus: A 10-point ‘audit readiness’ rubric you can copy.",
      ],
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80",
      title: "AI & Marketing: Where Data Meets Creativity",
      description:
        "Personalization that respects brand and privacy—how to blend LLMs with editorial standards.",
      date: "Aug 15, 2025",
      category: "Marketing",
      tags: ["LLM", "Personalization", "Attribution"],
      author: { name: "Michael Ross", avatar: "https://randomuser.me/api/portraits/men/55.jpg" },
      content: [
        "We compare creative briefing patterns for AI tools and show what actually improves CTR and CVR.",
        "Attribution pitfalls (and fixes) when AI expands your content surface area.",
      ],
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=1600&q=80",
      title: "Developer Productivity Hacks for 2025",
      description:
        "From smart code review to containerized pipelines, these practices lift team throughput without burnout.",
      date: "Jul 29, 2025",
      category: "Engineering",
      tags: ["CI/CD", "Code Review", "Tooling"],
      author: { name: "Anna Smith", avatar: "https://randomuser.me/api/portraits/women/25.jpg" },
      content: [
        "CI tips that pay for themselves: SBOMs, dependency gates, and faster feedback loops.",
        "A practical code review rubric and how to automate the boring parts.",
      ],
    },
  ];
  
  export const slugify = (str = "") =>
    str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
  