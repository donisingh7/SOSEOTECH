import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Cloud,
  Code2,
  Database,
  Layers,
  Layout,
  Server,
  Settings,
} from "lucide-react";

/* Smooth-scroll that works with either #hash or ?section=slug */
function useSmartScroll() {
  const { hash, search } = useLocation();
  useEffect(() => {
    let id = null;
    const params = new URLSearchParams(search);
    if (params.get("section")) id = params.get("section");
    else if (hash) id = decodeURIComponent(hash.slice(1));
    if (!id) return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash, search]);
}

/* Images from /public/technology */
const HERO = {
  mean: "/technology/mean.jpg",
  mern: "/technology/mern.jpg",
  cloud: "/technology/cloud.jpg",
  microsoft: "/technology/MS.jpg",
  "ui-frameworks": "/technology/UIUX.jpg",
  database: "/technology/database.jpg",
  "python-django": "/technology/pythonDjango.jpg",     // renamed for simplicity
  "java-spring": "/technology/javaSpringboot.jpg",     // renamed for simplicity
  "php-laravel": "/technology/tech.jpg",
  "mobile-apps": "/technology/mobileApps.jpg",
  devops: "/technology/devOps.jpg",
  "ai-ml": "/technology/AIML.jpg",
};

/* Colorful heading icons per section */
const ICONS = {
  mean: { Icon: Server, bg: "bg-indigo-100", fg: "text-indigo-600" },
  mern: { Icon: Layers, bg: "bg-pink-100", fg: "text-pink-600" },
  cloud: { Icon: Cloud, bg: "bg-blue-100", fg: "text-blue-600" },
  microsoft: { Icon: Code2, bg: "bg-green-100", fg: "text-green-600" },
  "ui-frameworks": { Icon: Layout, bg: "bg-amber-100", fg: "text-amber-600" },
  database: { Icon: Database, bg: "bg-purple-100", fg: "text-purple-600" },
  "python-django": { Icon: Code2, bg: "bg-red-100", fg: "text-red-600" },
  "java-spring": { Icon: Code2, bg: "bg-orange-100", fg: "text-orange-600" },
  "php-laravel": { Icon: Code2, bg: "bg-yellow-100", fg: "text-yellow-600" },
  "mobile-apps": { Icon: Layout, bg: "bg-sky-100", fg: "text-sky-600" },
  devops: { Icon: Settings, bg: "bg-cyan-100", fg: "text-cyan-600" },
  "ai-ml": { Icon: Layers, bg: "bg-fuchsia-100", fg: "text-fuchsia-600" },
};

/* Theory + How Soseotech works */
const TECHNOLOGIES = [
  {
    slug: "mean",
    title: "MEAN Stack",
    subtitle: "MongoDB • Express • Angular • Node.js",
    summary:
      "MEAN uses a single language—JavaScript—across the entire stack. Angular powers a structured, component-driven UI, Express and Node provide a lightweight HTTP layer for REST/GraphQL, and MongoDB offers flexible document storage well-suited for rapidly evolving products.",
    approach:
      "At Soseotech, we start with a modular Angular design system and a typed API contract. We set up Node/Express services with clear domain boundaries, implement JWT/OAuth2 authentication, write performance-aware MongoDB schemas and indexes, and ship with CI/CD plus logging/monitoring so teams can iterate safely.",
  },
  {
    slug: "mern",
    title: "MERN Stack",
    subtitle: "MongoDB • Express • React • Node.js",
    summary:
      "MERN combines React’s UI ergonomics with Node/Express APIs and MongoDB for data. It’s great for product teams that value quick feedback cycles, modern UX patterns and a rich ecosystem of libraries.",
    approach:
      "We scaffold React apps with accessibility and routing patterns, adopt sensible state management, and build Express APIs with validation and rate-limits. Background workers handle email, webhooks or analytics. We add tracing and error reporting from day one for reliable, debuggable releases.",
  },
  {
    slug: "cloud",
    title: "Cloud",
    subtitle: "AWS • Azure • GCP",
    summary:
      "Cloud platforms provide elasticity, security tooling and managed services. Good architecture balances consumption cost, operability and performance while keeping recovery simple and well-tested.",
    approach:
      "We define environments with Terraform/IaC, isolate networks, and choose the right mix of containers and serverless. Pipelines build immutable images, policies enforce least-privilege, and budgets/alerts keep costs predictable. DR strategies and runbooks are prepared before go-live.",
  },
  {
    slug: "microsoft",
    title: "Microsoft",
    subtitle: ".NET • Azure • Power Platform",
    summary:
      "The Microsoft ecosystem enables robust enterprise solutions: ASP.NET Core for APIs, Azure for hosting and messaging, and Power Platform for rapid internal tools and reporting.",
    approach:
      "Our .NET work focuses on clean API layers with EF/Dapper, async messaging via Service Bus, and identity with Azure AD B2C/Graph. For Power Platform we design governed solutions—role-based access, environment strategies and ALM—so apps scale beyond the first team.",
  },
  {
    slug: "ui-frameworks",
    title: "UI Frameworks",
    subtitle: "React • Vue • Angular • Next.js",
    summary:
      "UI frameworks make it possible to build accessible, consistent and fast interfaces at scale. SSR/SSG improves performance and SEO; design systems reduce churn.",
    approach:
      "We define tokens, components and documentation (Storybook) early. Accessibility and keyboard navigation are non-negotiable. Build budgets and Web Vitals are monitored in CI, while visual regression tests protect design quality during rapid iteration.",
  },
  {
    slug: "database",
    title: "Database",
    subtitle: "Postgres • MySQL • MongoDB • Redis",
    summary:
      "Strong data design underpins reliable software: schemas, constraints, indexes and a plan for migrations and backups. Caching and read replicas address scaling without sacrificing correctness.",
    approach:
      "We model entities for real access patterns, add observability for slow queries, and use queues to smooth write hotspots. Backup/restore and PITR are rehearsed. When growth demands it, we introduce partitioning or analytics pipelines without disrupting core OLTP flows.",
  },
  {
    slug: "python-django",
    title: "Python & Django",
    subtitle: "Django • FastAPI • Flask",
    summary:
      "Django accelerates backend development with batteries-included tooling; FastAPI brings modern async performance. Both fit well for API-first products and admin workflows.",
    approach:
      "We structure projects with clear apps/modules, DRF for APIs, typed pydantic models, and Celery/Redis for background jobs. Tests are fast and deterministic, and containers are tuned for production so deploys are smooth and repeatable.",
  },
  {
    slug: "java-spring",
    title: "Java & Spring Boot",
    subtitle: "Spring • JVM • Microservices",
    summary:
      "Spring Boot is ideal for large systems that need strict contracts, resilience and long-term maintainability. Observability and predictable deployment are critical.",
    approach:
      "Soseotech delivers Spring services with config management, OpenAPI clients/servers, circuit-breakers and retry policies. We containerize builds, add metrics/tracing, and define SLOs with alerts that map to real business impact.",
  },
  {
    slug: "php-laravel",
    title: "PHP & Laravel",
    subtitle: "Laravel • Lumen",
    summary:
      "Laravel provides an expressive developer experience for APIs, portals and SaaS. Its ecosystem covers queues, caching, auth and templating for swift delivery.",
    approach:
      "We keep Laravel codebases modular with DTOs and policies, use queues/Horizon for non-blocking flows, and tune Octane/opcache for performance. Deploys are automated with health checks and zero-downtime strategies.",
  },
  {
    slug: "mobile-apps",
    title: "Mobile Apps",
    subtitle: "Android • iOS • Cross-platform",
    summary:
      "Mobile requires great UX, offline strategies and careful release management. Telemetry and crash reporting are essential for fast feedback.",
    approach:
      "We design navigation and state up-front, support offline-first sync, and integrate analytics/feature flags. CI produces signed builds, runs device tests and rolls out staged releases to protect user experience.",
  },
  {
    slug: "devops",
    title: "DevOps Tools",
    subtitle: "Docker • K8s • Jenkins • CI/CD",
    summary:
      "DevOps is about reliable, repeatable delivery: reproducible builds, secure supply chains and clear operational visibility.",
    approach:
      "We containerize services, standardize pipelines (GitHub Actions/Jenkins), scan dependencies, and ship with blue-green/canary. Grafana/Prometheus/ELK provide metrics, logs and traces so teams can act before users feel issues.",
  },
  {
    slug: "ai-ml",
    title: "AI & ML",
    subtitle: "TensorFlow • PyTorch • Scikit-learn",
    summary:
      "ML applications span data preparation, training, evaluation and safe, monitored inference. LLMs introduce retrieval, guardrails and cost controls.",
    approach:
      "Our team builds datasets and eval suites, prototypes models, and operationalizes them with MLOps (versioning, drift detection, cost/perf dashboards). For LLM apps we add RAG, prompt tooling and safety layers to deliver reliable user experiences.",
  },
];

export default function Technologies() {
  useSmartScroll();

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      {/* Header with icon */}
<div className="mx-auto max-w-7xl px-6 pt-28 pb-6">
  <div className="flex items-center gap-3">
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-fuchsia-100">
      <Layers className="h-6 w-6 text-fuchsia-600" />
    </span>
    <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900">Technologies</h1>
  </div>

  <p className="mt-2 max-w-3xl text-[16px] md:text-[17px] leading-8 text-neutral-700 text-justify">
    Our expertise spans mainstream, complex and niche technologies using which we take pride in hosting cutting-edge capabilities. The list of technologies encompass a wide array of tools and methods that developers use to design, build, test, and deploy software applications. These technologies include:
  </p>
</div>

      {/* Sections */}
      <div className="mx-auto max-w-7xl px-6 pb-16 space-y-14">
        {TECHNOLOGIES.map((t) => {
          const hero = HERO[t.slug] || "/technology/tech.jpg";
          const ic = ICONS[t.slug] || { Icon: Code2, bg: "bg-neutral-100", fg: "text-neutral-600" };
          const Icon = ic.Icon;

          return (
            <section key={t.slug} id={t.slug} className="scroll-mt-28">
              {/* FULL-WIDTH IMAGE */}
              <div className="w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
                <img
                  src={hero}
                  alt={t.title}
                  className="w-full h-auto object-cover"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </div>

              {/* TEXT + colorful icon heading */}
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${ic.bg}`}
                    aria-hidden="true"
                  >
                    <Icon className={`h-6 w-6 ${ic.fg}`} />
                  </span>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">{t.title}</h2>
                    <p className="text-[14px] md:text-[15px] text-neutral-500 mt-0.5">{t.subtitle}</p>
                  </div>
                </div>

                {/* bigger, justified paragraphs */}
                <p className="mt-4 text-[16px] md:text-[17px] leading-8 text-neutral-800 text-justify">
                  {t.summary}
                </p>

                <h3 className="mt-5 text-xl md:text-2xl font-semibold text-neutral-900">
                  How Soseotech works with {t.title}
                </h3>
                <p className="mt-2 text-[16px] md:text-[17px] leading-8 text-neutral-800 text-justify">
                  {t.approach}
                </p>
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
