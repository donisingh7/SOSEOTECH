
import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

import {
  Cloud,
  Code2,
  Database,
  Layers,
  Layout,
  Server,
  Settings,
} from "lucide-react";

/* Smooth scroll helper that also respects ?section=slug or #hash */
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

/** Reusable wrapper: fade-in + slide-up on enter, smooth fade-out as you scroll past */
function Reveal({ children, className = "", y = 24 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.2]);
  const translateY = useTransform(scrollYProgress, [0, 0.2], [y, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y: translateY }}
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

/* small external link icon */
function ExternalLinkIcon({ className = "inline-block w-4 h-4 ml-2" }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 3h7v7m0 0L10 21M21 10L10 21"
      />
    </svg>
  );
}

/* hero images (existing) */
const HERO = {
  mean: "/technology/mean.jpg",
  mern: "/technology/mern.jpg",
  cloud: "/technology/cloud.jpg",
  microsoft: "/technology/MS.jpg",
  "ui-frameworks": "/technology/UIUX.jpg",
  database: "/technology/database.jpg",
  "python-django": "/technology/pythonDjango.jpg",
  "java-spring": "/technology/javaSpringboot.jpg",
  "php-laravel": "/technology/tech.jpg",
  "mobile-apps": "/technology/mobileApps.jpg",
  devops: "/technology/devOps.jpg",
  "ai-ml": "/technology/AIML.jpg",
};

/* flowchart / architecture image placeholders */
const FLOW_IMG = {
  mean: "/technology/mean-flows.jpg",
  mern: "/technology/mern-flow.webp",
  cloud: "/technology/cloud-flow.png",
  microsoft: "/technology/micro-flow.webp",
  "ui-frameworks": "/technology/ui-flow.avif",
  database: "/technology/database-flow.webp",
  "python-django": "/technology/python-flows.webp",
  "java-spring": "/technology/java-flow.png",
  "php-laravel": "/technology/php-flow.png",
  "mobile-apps": "/technology/mobile-flow.png",
  devops: "/technology/devops-flow.png",
  "ai-ml": "/technology/ai-flow.png",
};

/* TECH ICON MAP */
const TECH_ICON_MAP = {
  Angular: "/tech-icons/angular.png",
  "Node.js": "/tech-icons/nodej.png",
  Express: "/tech-icons/express.png",
  MongoDB: "/tech-icons/mangodb.png",
  Redis: "/tech-icons/redis.png",
  Nginx: "/tech-icons/nginx.png",
  React: "/tech-icons/react.png",
  Vue: "/tech-icons/vuejs.png",
  Nextjs: "/tech-icons/nextjs.png",
  Tailwind: "/tech-icons/tailwind.png",
  AWS: "/tech-icons/aws.png",
  Azure: "/tech-icons/azure.png",
  GCP: "/tech-icons/gcp.png",
  Terraform: "/tech-icons/terraform.png",
  Kubernetes: "/tech-icons/kubernetes.png",
  Postgres: "/tech-icons/postgre.png",
  MySQL: "/tech-icons/mysql.png",
  Django: "/tech-icons/django.png",
  FastAPI: "/tech-icons/FastAPI.png",
  Spring: "/tech-icons/spring.png",
  Laravel: "/tech-icons/laravel.png",
  Docker: "/tech-icons/docker.png",
  Prometheus: "/tech-icons/prometheus.png",
  TensorFlow: "/tech-icons/tensorflow.png",
  PyTorch: "/tech-icons/pytorch.png",
  Storybook: "/tech-icons/storybook.png",
  Grafana: "/tech-icons/grafana.png",
  Android: "/tech-icons/android.png",
  ios: "/tech-icons/ios.png",
  Github: "/tech-icons/github.png",
  Flutter: "/tech-icons/flutter.png",
  Scikit: "/tech-icons/scikit.png",
  MLflow: "/tech-icons/mlflow.png",
  OpenAi: "/tech-icons/openai.png",
  Crashlytics: "/tech-icons/crashlytics.png",
  Pydantic: "/tech-icons/Pydantic.png",
  PowerApps: "/tech-icons/mspower.png",
  ".Net":"/tech-icons/net.png"
};

const techStack = [
  { name: "React", logo: "/tech-icons/react.png" },
  { name: "Node.js", logo: "/tech-icons/nodej.png" },
  { name: "Express", logo: "/tech-icons/express.png" },
  { name: "MongoDB", logo: "/tech-icons/mangodb.png" },
  { name: "Tailwind CSS", logo: "/tech-icons/tailwind.png" },
  { name: "AWS", logo: "/tech-icons/aws.png" },
  { name: "Docker", logo: "/tech-icons/docker.png" },
  { name: "Kubernetes", logo: "/tech-icons/kubernetes.png" },
  { name: "Python", logo: "/tech-icons/django.png" },
  { name: "TypeScript", logo: "/tech-icons/nextjs.png" },
  { name: "Mysql", logo: "/tech-icons/mysql.png" },
  { name: "TensorFlow", logo: "/tech-icons/tensorflow.png" },
  { name: "OpenAi", logo: "/tech-icons/openai.png" },
  { name: "Azure", logo: "/tech-icons/azure.png" },
];

/* icons for section headers */
const ICONS = {
  mean: { Icon: Server, bg: "bg-indigo-200/20", fg: "text-indigo-400" },
  mern: { Icon: Layers, bg: "bg-pink-200/20", fg: "text-pink-400" },
  cloud: { Icon: Cloud, bg: "bg-blue-200/20", fg: "text-blue-400" },
  microsoft: { Icon: Code2, bg: "bg-green-200/20", fg: "text-green-400" },
  "ui-frameworks": { Icon: Layout, bg: "bg-amber-200/20", fg: "text-amber-400" },
  database: { Icon: Database, bg: "bg-purple-200/20", fg: "text-purple-400" },
  "python-django": { Icon: Code2, bg: "bg-red-200/20", fg: "text-red-400" },
  "java-spring": { Icon: Code2, bg: "bg-orange-200/20", fg: "text-orange-400" },
  "php-laravel": { Icon: Code2, bg: "bg-yellow-200/20", fg: "text-yellow-400" },
  "mobile-apps": { Icon: Layout, bg: "bg-sky-200/20", fg: "text-sky-400" },
  devops: { Icon: Settings, bg: "bg-cyan-200/20", fg: "text-cyan-400" },
  "ai-ml": { Icon: Layers, bg: "bg-fuchsia-200/20", fg: "text-fuchsia-400" },
};

/* --- NEW: canonical short descriptions for commonly used techs --- */
const TECH_NOTES = {
  // Frontend
  React: "React is a declarative and component-based JavaScript library for building user interfaces (UIs), maintained by Meta and a community of open-source developers. It's often referred to as React.js or ReactJS.Component-based UI library with virtual DOM and rich ecosystem.",
  Angular:
    "Angular is a framework for building client applications in HTML and TypeScript.Full-featured framework with RxJS, DI, and strong conventions.",
  Vue: "Vue is a progressive JavaScript framework used for building user interfaces and single-page applications (SPAs). Created by Evan You, it's known for being lightweight, flexible, and easy to learn for developers familiar with HTML, CSS, and JavaScript.Progressive framework focusing on approachability and performance.",
  Nextjs: "Next.js is an open-source React framework that enables developers to build fast, scalable, and SEO-friendly web applications.React meta-framework for SSR/SSG, routing, and edge rendering.",
  Tailwind: "Utility-first CSS for rapid, consistent styling.",
  Android: "Android is a Linux-based mobile operating system developed by Google, used for smartphones, tablets, smartwatches, and other devices.Native Android apps with Kotlin/Java and Jetpack.",
  ios: "iOS is Apple's mobile operating system for devices like the iPhone, first released in 2007. Based on macOS, it features a touch-based interface with gestures and is known for its integration within the Apple ecosystem.Native iOS apps with Swift/Objective-C and UIKit/SwiftUI.",
  Flutter: "Flutter is an open-source UI toolkit from Google used for building natively compiled applications for mobile, web, and desktop from a single codebase. Cross-platform UI toolkit compiling to mobile/web/desktop.",
  // Backend
  "Node.js":
    "Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to execute JavaScript code outside of a web browser.Event-driven runtime ideal for I/O heavy APIs and real-time.",
  Express:
    "Express.js, often referred to simply as Express, is a fast, unopinionated, and minimalist web application framework for Node.js. It simplifies the process of building web applications and APIs by providing a robust set of features and tools. Minimal Node web framework with middleware pattern.",
  Django: "Django is a high-level, open-source web framework written in Python, designed to enable rapid development of secure, scalable, and maintainable web applications. Python batteries-included framework with ORM and admin.",
  FastAPI: "FastAPI is a modern, high-performance Python web framework designed for building APIs. It leverages standard Python type hints and is built upon Starlette (for the web parts) and Pydantic (for data validation and serialization). Python async framework with type hints and OpenAPI by default.",
  Spring: "Spring Boot is an open-source, opinionated Java framework built on top of the Spring Framework, designed to simplify and accelerate the development of standalone, production-grade Spring applications. Enterprise Java framework with Boot, Data, and Cloud integrations.",
  Laravel: "Laravel is a free, open-source PHP-based web framework designed for building web applications. It was created by Taylor Otwell and is widely used for developing applications following the Model-View-Controller (MVC) architectural pattern. Expressive PHP framework with Eloquent ORM and queues.",
  // Database / Cache
  MongoDB:
    "MongoDB is a popular open-source NoSQL database that stores data in flexible, JSON-like BSON (Binary JSON) documents, making it ideal for modern, large-scale, and evolving applications. Document database with flexible schema and horizontal scaling.",
  Postgres: "PostgreSQL is a powerful, open-source, object-relational database management system (RDBMS) known for its reliability, robustness, and flexibility. Relational DB with strong SQL, JSONB, and extensibility.",
  MySQL: "MySQL is a widely used open-source relational database management system (RDBMS) that utilizes Structured Query Language (SQL) for managing and manipulating data. It is developed, distributed, and supported by Oracle Corporation.Widely used relational DB optimized for OLTP workloads.",
  Redis: "Redis is an open-source, in-memory data structure store used as a database, cache, and message broker. In-memory datastore for caching, queues, and rate limiting.",
  // Infra / DevOps
  Docker: "Docker is an open-source platform that enables developers to build, deploy, run, update, and manage applications in a standardized and isolated environment called containers.Containerization for reproducible builds and deployments.",
  Kubernetes: "Kubernetes, often abbreviated as K8s, is an open-source platform designed to automate the deployment, scaling, and management of containerized applications. It provides a robust system for orchestrating containers across clusters of machines, whether these are physical, virtual, on-premise, or in cloud environments. Orchestrates containers, scaling, and service discovery.",
  Terraform: "Declarative IaC for consistent cloud environments.",
  AWS: "Amazon Web Services (AWS) is a comprehensive cloud computing platform that offers on-demand IT services like storage, compute power, and databases over the internet on a pay-as-you-go basis.Cloud provider with rich managed services and global regions.",
  Azure: "Microsoft Azure is a cloud computing platform that provides a vast range of services, including computing, networking, storage, and analytics, to help businesses build, deploy, and manage applications and solutions.Microsoft cloud integrated with AD, DevOps, and enterprise tools.",
  GCP: "GCP stands for Google Cloud Platform, a suite of cloud computing services from Google that allows users to build, deploy, and scale applications on Google's infrastructure.Google cloud with strong data/ML and global network.",
  Github: "GitHub is a web-based platform that provides a collaborative environment for software development, built on top of the Git version control system.Code hosting with Actions CI/CD and collaboration.",
  Prometheus: "Prometheus is an open-source monitoring and alerting system that collects and stores time-series data from applications and infrastructure. Metrics collection with powerful time-series querying.",
  Grafana: "Dashboards and alerting across metrics/logs/traces.",
  MLflow: "MLflow is an open-source platform for managing the entire machine learning (ML) lifecycle. Created by Databricks, it provides a centralized system to track, reproduce, and deploy ML projects, from initial experimentation to production. Experiment tracking, models registry, and deployment.",
  TensorFlow: "TensorFlow is an open-source platform developed by Google for machine learning and artificial intelligence. It provides a comprehensive ecosystem of tools, libraries, and community resources to facilitate the building, training, and deployment of machine learning models.End-to-end ML platform for training and inference.",
  PyTorch: "PyTorch is an open-source machine learning framework based on the Python programming language and the Torch library. It is widely used for building and training deep learning models, particularly neural networks. Flexible tensor library for research and production.",
  Storybook: "Isolated UI component dev, docs, and visual tests.",
  OpenAi: "LLM APIs for chat, embeddings, and multimodal tasks.",
  Pydantic: "Pydantic is a Python library primarily used for data validation, parsing, and settings management using Python type hints.Typed data validation and settings management for Python.",
  Crashlytics: "Mobile crash reporting with real-time insights.",
  Nginx: "High-performance reverse proxy and web server.",
  PowerApps: "Microsoft Power Platform is a low-code development platform that allows users to build custom business solutions by creating apps, automating workflows, and analyzing data.Low-code platform for rapid internal business apps.",
  Scikit: "Scikit-learn, often referred to as sklearn, is an open-source Python library for machine learning. It provides a wide range of tools for data analysis and modeling, built upon other fundamental Python libraries like NumPy, SciPy, and Matplotlib.Classic ML algorithms and preprocessing in Python",
  ".Net":".NET can refer to a software development framework for building applications across multiple platforms, a specific internet domain name, or a textile product used for catching things. The Microsoft-supported .NET software platform offers tools, languages, and libraries for building web, mobile, desktop, and gaming applications."
};



/* categorize components */
const CATEGORIES = {
  Frontend: new Set(["React", "Angular", "Vue", "Nextjs", "Android", "ios", "Flutter",".Net"]),
  Backend: new Set(["Node.js", "Django", "FastAPI", "Spring", "Laravel", "TensorFlow", "Scikit", "Express", "Pydantic"]),
  Database: new Set(["MongoDB", "Postgres", "MySQL", "Redis"]),
  Infra: new Set(["AWS", "Azure", "GCP", "Docker", "PowerApps", "Kubernetes", "PyTorch", "Prometheus", "Github", "MLflow"]),
};

function categorizeComponents(components = []) {
  const buckets = { Frontend: [], Backend: [], Database: [], Infra: [] };
  components.forEach((c) => {
    Object.entries(CATEGORIES).forEach(([cat, set]) => {
      if (set.has(c)) {
        buckets[cat].push({
          name: c,
          desc: TECH_NOTES[c] || "—",
          icon: TECH_ICON_MAP[c],
        });
      }
    });
  });
  Object.keys(buckets).forEach((k) => {
    if (!buckets[k].length) delete buckets[k];
  });
  return buckets;
}

/* TECHNOLOGIES DATA (unchanged content) */
const TECHNOLOGIES = [
  {
    slug: "mean",
    title: "MEAN Stack",
    subtitle: "MongoDB • Express • Angular • Node.js",
    summary:
      "MEAN uses a single language—JavaScript—across the entire stack. Angular powers a structured, component-driven UI; Express and Node provide a lightweight HTTP layer; MongoDB offers flexible document storage.",
    approach:
      "At Soseotech, we start with a modular Angular design system and a typed API contract. We set up Node/Express services with clear domain boundaries, implement JWT/OAuth2 authentication, write performance-aware MongoDB schemas and indexes, and ship with CI/CD plus logging/monitoring so teams can iterate safely.",
    extras: {
      components: ["Angular", "Node.js", "Express", "MongoDB", "Redis", "Nginx"],
      stats: [
        { label: "Prototype speed", value: "≈40% faster" },
        { label: "Typical scale", value: "100k+ active users" },
        { label: "Latency (p95)", value: "< 120ms" },
      ],
      links: [
        { title: "Official MongoDB MEAN Tutorial", href: "https://www.mongodb.com/resources/languages/mean-stack-tutorial" },
        { title: "Angular + Node.js (Okta tutorial)", href: "https://developer.okta.com/blog/2018/10/30/basic-crud-angular-and-node" },
        { title: "MEAN Stack Overview — freeCodeCamp", href: "https://www.freecodecamp.org/news/cjn-understanding-mean-stack-through-diagrams/" },
        { title: "MongoDB Customer Case Studies", href: "https://www.mongodb.com/solutions/customer-case-studies" },
        { title: "Okta Angular + Node Example (GitHub)", href: "https://github.com/oktadev/okta-angular-node-example" },
      ],
    },
  },
  {
    slug: "mern",
    title: "MERN Stack",
    subtitle: "MongoDB • Express • React • Node.js",
    summary:
      "MERN combines React’s UI ergonomics with Node/Express APIs and MongoDB for data. It’s ideal for teams who want rapid iteration and modern UX patterns.",
    approach:
      "We scaffold React apps with accessibility and routing patterns, adopt sensible state management, and build Express APIs with validation and rate-limits. Background workers handle email, webhooks and analytics. We add tracing and error reporting from day one.",
    extras: {
      components: ["React", "Node.js", "Express", "MongoDB", "Redis"],
      stats: [
        { label: "Developer velocity", value: "High" },
        { label: "Typical scale", value: "500k+ monthly users" },
        { label: "TTI (core)", value: "< 1s with SSR/SSG" },
      ],
      links: [
        { title: "Official MERN guide — MongoDB", href: "https://www.mongodb.com/resources/languages/mern-stack-tutorial" },
        { title: "MERN production guide — freeCodeCamp", href: "https://www.freecodecamp.org/news/how-to-build-production-ready-full-stack-apps-with-the-mern-stack/" },
        { title: "Deploy a MERN App (Dev.to)", href: "https://dev.to/stlnick/how-to-deploy-a-full-stack-mern-app-with-heroku-netlify-ncb" },
        { title: "MongoDB Customer Case Studies", href: "https://www.mongodb.com/solutions/customer-case-studies" },
      ],
    },
  },
  {
    slug: "cloud",
    title: "Cloud",
    subtitle: "AWS • Azure • GCP",
    summary:
      "Cloud platforms provide elasticity, security tooling and managed services. Architecture balances cost, operability and performance.",
    approach:
      "We define environments with Terraform/IaC, isolate networks, and choose the right mix of containers and serverless. Pipelines build immutable images, policies enforce least-privilege, and budgets/alerts keep costs predictable. DR strategies and runbooks are prepared before go-live.",
    extras: {
      components: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes"],
      stats: [
        { label: "Cost reduction", value: "up to 30% with right-sizing" },
        { label: "SLA options", value: "99.95%+" },
        { label: "Infra pattern", value: "Containers + managed DBs" },
      ],
      links: [
        { title: "AWS Well-Architected", href: "https://aws.amazon.com/architecture/well-architected/" },
        { title: "Terraform docs", href: "https://www.terraform.io/docs/" },
        { title: "GCP Architecture Center", href: "https://cloud.google.com/architecture" },
        { title: "AWS Customer Success Stories", href: "https://aws.amazon.com/solutions/case-studies/" },
        { title: "HashiCorp Terraform Case Studies", href: "https://www.hashicorp.com/en/case-studies" },
        { title: "Google Cloud Customers", href: "https://cloud.google.com/customers" },
      ],
    },
  },
  {
    slug: "microsoft",
    title: "Microsoft",
    subtitle: ".NET • Azure • Power Platform",
    summary:
      "Microsoft ecosystem enables robust enterprise solutions—ASP.NET Core for APIs, Azure for hosting and messaging, and Power Platform for rapid internal tools.",
    approach:
      "Our .NET work focuses on clean API layers with EF/Dapper, async messaging via Service Bus, and identity with Azure AD B2C/Graph. For Power Platform we design governed solutions—role-based access, environment strategies and ALM.",
    extras: {
      components: ["Azure", "PowerApps",".Net"],
      stats: [
        { label: "Enterprise readiness", value: "Mature tooling" },
        { label: "Monitoring", value: "Application Insights" },
        { label: "Auth", value: "Azure AD B2C" },
      ],
      links: [
        { title: "ASP.NET Core docs", href: "https://docs.microsoft.com/aspnet/core" },
        { title: "Azure architecture", href: "https://learn.microsoft.com/azure/architecture/" },
        { title: "Power Platform", href: "https://learn.microsoft.com/power-platform/" },
        { title: "Azure Customer Stories", href: "https://azure.microsoft.com/en-us/resources/customer-stories" },
        { title: "Power Platform Case Studies (MS Learn)", href: "https://learn.microsoft.com/en-us/power-platform/guidance/case-studies/" },
        { title: "Power Platform & Copilot Stories (Blog)", href: "https://www.microsoft.com/en-us/power-platform/blog/2024/12/15/power-platform-stories/" },
      ],
    },
  },
  {
    slug: "ui-frameworks",
    title: "UI Frameworks",
    subtitle: "React • Vue • Angular • Next.js",
    summary:
      "UI frameworks make it possible to build accessible, consistent and fast interfaces at scale. SSR/SSG improves perf and SEO; design systems reduce churn.",
    approach:
      "We define tokens, components and documentation (Storybook) early. Accessibility and keyboard navigation are non-negotiable. Build budgets and Web Vitals are monitored in CI while visual regression tests protect design quality.",
    extras: {
      components: ["React", "Vue", "Angular", "Nextjs", "Storybook", "Tailwind"],
      stats: [
        { label: "Accessibility", value: "WCAG focus" },
        { label: "Perf", value: "Lighthouse audits" },
        { label: "Deployment", value: "Edge/SSR options" },
      ],
      links: [
        { title: "React docs", href: "https://reactjs.org/docs/getting-started.html" },
        { title: "Next.js docs", href: "https://nextjs.org/docs" },
        { title: "Storybook", href: "https://storybook.js.org/docs" },
        { title: "Next.js Showcase (Production sites)", href: "https://nextjs.org/showcase" },
        { title: "5 Storybook Examples (UXPin)", href: "https://www.uxpin.com/studio/blog/storybook-examples/" },
        { title: "Top Storybook Docs Examples (Supernova)", href: "https://www.supernova.io/blog/top-storybook-documentation-examples-and-the-lessons-you-can-learn" },
      ],
    },
  },
  {
    slug: "database",
    title: "Database",
    subtitle: "Postgres • MySQL • MongoDB • Redis",
    summary:
      "Strong data design underpins reliable software: schemas, constraints, indexes and a plan for migrations and backups.",
    approach:
      "We model entities for real access patterns, add observability for slow queries, and use queues to smooth write hotspots. Backup/restore and PITR are rehearsed. Partitioning or analytics pipelines are introduced when needed.",
    extras: {
      components: ["Postgres", "MySQL", "MongoDB", "Redis"],
      stats: [
        { label: "RPO/RTO", value: "Configurable" },
        { label: "Query perf", value: "Indexes & EXPLAIN" },
        { label: "Scaling", value: "Read replicas / partitioning" },
      ],
      links: [
        { title: "PostgreSQL docs", href: "https://www.postgresql.org/docs/" },
        { title: "MongoDB sharding", href: "https://www.mongodb.com/docs/manual/sharding/" },
        { title: "Redis docs", href: "https://redis.io/docs/" },
        { title: "MongoDB Customer Case Studies", href: "https://www.mongodb.com/solutions/customer-case-studies" },
        { title: "EDB Postgres Success Stories", href: "https://www.enterprisedb.com/resources/customer-story" },
        
        { title: "Django Case study", href: "https://www.djangoproject.com/community/success-stories/" },
      ],
    },
  },
  {
    slug: "python-django",
    title: "Python & Django",
    subtitle: "Django • FastAPI • Flask",
    summary:
      "Django accelerates backend development with batteries-included tooling; FastAPI brings modern async performance.",
    approach:
      "We structure projects with clear apps/modules, DRF for APIs, typed pydantic models, and Celery/Redis for background jobs. Tests are fast and deterministic, and containers are tuned for production.",
    extras: {
      components: ["Django", "FastAPI", "Pydantic", "Postgres"],
      stats: [
        { label: "Developer productivity", value: "Very high" },
        { label: "API speed", value: "Fast with FastAPI" },
        { label: "Deployment", value: "Docker + Gunicorn/Uvicorn" },
        
      ],
      links: [
        { title: "Django docs", href: "https://docs.djangoproject.com/en/stable/" },
        { title: "FastAPI docs", href: "https://fastapi.tiangolo.com/" },
        { title: "Deploy Django (DigitalOcean)", href: "https://www.digitalocean.com/community/tutorials/how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu" },
        { title: "Popular Django Sites (roundup)", href: "https://djangostars.com/blog/10-popular-sites-made-on-django/" },
        { title: "Companies using FastAPI (roundup)", href: "https://www.planeks.net/companies-using-fastapi/" },
         { title: "Django Case study", href: "https://www.djangoproject.com/community/success-stories/" },
        { title: "Django stars case study", href: "https://djangostars.com/blog/tag/case-study/" },
      ],
    },
  },
  {
    slug: "java-spring",
    title: "Java & Spring Boot",
    subtitle: "Spring • JVM • Microservices",
    summary:
      "Spring Boot is ideal for large systems that need strict contracts, resilience and long-term maintainability.",
    approach:
      "Soseotech delivers Spring services with config management, OpenAPI clients/servers, circuit-breakers and retry policies. We containerize builds, add metrics/tracing, and define SLOs with alerts that map to business impact.",
    extras: {
      components: ["Spring", "OpenAi", "Prometheus", "Grafana"],
      stats: [
        { label: "Enterprise usage", value: "High" },
        { label: "Resilience", value: "Circuit breakers & retries" },
        { label: "Observability", value: "Metrics + Tracing" },
      ],
      links: [
        { title: "Spring Boot", href: "https://spring.io/projects/spring-boot" },
        { title: "Spring guides", href: "https://spring.io/guides" },
        { title: "Spring Cloud", href: "https://spring.io/projects/spring-cloud" },
        { title: "Spring Case Study: HTTP Request Function", href: "https://spring.io/blog/2020/08/17/case-study-http-request-function-and-processor/" },
        { title: "Spring Case Study: Streaming App", href: "https://spring.io/blog/2020/08/10/case-study-build-and-run-a-streaming-application-using-an-http-source-and-a-jdbc-sink" },
      ],
    },
  },
  {
    slug: "php-laravel",
    title: "PHP & Laravel",
    subtitle: "Laravel • Lumen",
    summary:
      "Laravel provides an expressive developer experience for APIs, portals and SaaS.",
    approach:
      "We keep Laravel codebases modular with DTOs and policies, use queues/Horizon for non-blocking flows, and tune Octane/opcache for performance. Deploys are automated with health checks and zero-downtime strategies.",
    extras: {
      components: ["Laravel", "MySQL", "Postgres"],
      stats: [
        { label: "Developer ergonomics", value: "Very pleasant" },
        { label: "Common uses", value: "SaaS & portals" },
        { label: "Scale", value: "Horizontally with caching" },
      ],
      links: [
        { title: "Laravel docs", href: "https://laravel.com/docs" },
        { title: "Laravel deployment", href: "https://laravel.com/docs/deployment" },
        { title: "Laracasts", href: "https://laracasts.com/series/laravel-8-from-scratch" },
        { title: "Made with Laravel (Showcase)", href: "https://madewithlaravel.com/" },
      ],
    },
  },
  {
    slug: "mobile-apps",
    title: "Mobile Apps",
    subtitle: "Android • iOS • Cross-platform",
    summary:
      "Mobile requires great UX, offline strategies and careful release management.",
    approach:
      "We design navigation and state up-front, support offline-first sync, and integrate analytics/feature flags. CI produces signed builds, runs device tests and staged releases to protect UX.",
    extras: {
      components: ["Android", "ios", "React", "Flutter", "Crashlytics"],
      stats: [
        { label: "Release cadence", value: "Staged rollouts recommended" },
        { label: "Offline support", value: "Critical for retention" },
        { label: "Telemetry", value: "Crashlytics + analytics" },
      ],
      links: [
        { title: "Android docs", href: "https://developer.android.com/docs" },
        { title: "Apple Developer", href: "https://developer.apple.com/documentation/" },
        { title: "React Native docs", href: "https://reactnative.dev/docs/getting-started" },
         { title: "Android developer case studies", href: "https://developer.android.com/stories" },
        { title: "Apple Developer — case studies", href: "https://developer.apple.com/app-store/stories/" },
      ],
    },
  },
  {
    slug: "devops",
    title: "DevOps Tools",
    subtitle: "Docker • K8s • Jenkins • CI/CD",
    summary:
      "DevOps is about reliable, repeatable delivery: reproducible builds, secure supply chains and operational visibility.",
    approach:
      "We containerize services, standardize pipelines (GitHub Actions/Jenkins), scan dependencies, and ship with blue-green/canary. Grafana/Prometheus/ELK provide metrics, logs and traces so teams can act before users feel issues.",
    extras: {
      components: ["Docker", "Kubernetes", "Github", "Prometheus", "Grafana"],
      stats: [
        { label: "Deployment confidence", value: "Increased with CI/CD" },
        { label: "Ops MTTR", value: "Reduced via observability" },
        { label: "Automation", value: "Pipelines + IaC" },
      ],
      links: [
        { title: "Kubernetes docs", href: "https://kubernetes.io/docs/home/" },
        { title: "Docker docs", href: "https://docs.docker.com/" },
        { title: "GitHub Actions", href: "https://docs.github.com/en/actions" },
        { title: "AWS — This is My Architecture", href: "https://aws.amazon.com/solutions/case-studies/browse-customer-success-stories/" },
      ],
    },
  },
  {
    slug: "ai-ml",
    title: "AI & ML",
    subtitle: "TensorFlow • PyTorch • Scikit-learn",
    summary:
      "ML applications span data prep, training, evaluation and monitored inference. LLMs introduce retrieval and guardrails.",
    approach:
      "We build datasets and eval suites, prototype models, and operationalize them with MLOps (versioning, drift detection). For LLMs we add RAG, prompt tooling and safety layers.",
    extras: {
      components: ["TensorFlow", "PyTorch", "Scikit", "MLflow"],
      stats: [
        { label: "Model ops", value: "Versioned + monitored" },
        { label: "RAG readiness", value: "Integrated" },
        { label: "Inference", value: "Batch & streaming" },
      ],
      links: [
        { title: "TensorFlow", href: "https://www.tensorflow.org/" },
        { title: "PyTorch", href: "https://pytorch.org/docs/stable/index.html" },
        { title: "Hugging Face", href: "https://huggingface.co/docs" },
        { title: "TensorFlow Case Studies", href: "https://www.tensorflow.org/about/case-studies" },
        { title: "GCP: Max Kelsen & TF Research Cloud", href: "https://cloud.google.com/customers/max-kelsen" },
      ],
    },
  },
];

export default function Technologies() {
  useSmartScroll();

  const [activeTech, setActiveTech] = useState(TECHNOLOGIES?.[0]?.slug ?? "mean");
  const previewRef = useRef(null);

  const activeData =
    TECHNOLOGIES.find((t) => t.slug === activeTech) ?? TECHNOLOGIES[0];

  const iconInfo =
    ICONS[activeTech] || { Icon: Code2, bg: "bg-gray-800", fg: "text-gray-300" };
  const Icon = iconInfo.Icon;

  useEffect(() => {
    if (previewRef.current && typeof window !== "undefined") {
      const top =
        previewRef.current.getBoundingClientRect().top +
        window.pageYOffset -
        24;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, [activeTech]);

  function shortBulletsFor(tech) {
    const bullets = [];
    const firstSentence = (tech?.summary || "").split(".")[0];
    if (firstSentence) bullets.push(firstSentence.trim());
    if (tech?.extras?.stats) {
      tech.extras.stats.slice(0, 2).forEach((s) =>
        bullets.push(`${s.label}: ${s.value}`)
      );
    }
    return bullets;
  }

  const categorized = categorizeComponents(activeData?.extras?.components || []);

  const pageGradient = {
    backgroundColor: "#0b1320",
    backgroundImage:
      "linear-gradient(120deg, rgba(64, 2, 130, 0.42) 0%, rgba(147, 55, 245, 0.23) 22%, rgba(11,19,32,0.96) 55%, rgba(11,19,32,1) 100%)",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  };

  if (!activeData) return null;

  return (
    <main className="min-h-screen text-gray-100 pb-24" style={pageGradient}>
      {/* Header */}
      <Reveal>
        <div className="relative overflow-hidden h-[280px] flex items-center justify-center mb-8">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 "
          >
            <source src="/videos/bg-tech.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/55 z-10" />
          <div className="relative z-20 text-white text-center flex flex-col items-center justify-center px-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm mb-4">
              <Layers className="h-6 w-6 text-yellow-400" />
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 ">
              Technologies
            </h1>
            <p className="text-[16px] md:text-[17px] leading-8 max-w-5xl ">
              Our expertise spans mainstream, complex, and niche technologies — pick a technology to view the short summary and the full details below.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Why Our Tech Matters Section */}
      <Reveal>
        <div className="py-14 px-6 border-t border-slate-800">
          <Reveal>
            <motion.div
              className="max-w-6xl mx-auto text-center mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Why Our <span className="text-yellow-400">Tech</span> Matters
              </h2>
              <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
                We combine the right tools, patterns, and practices to build reliable, secure, and future-ready solutions.
              </p>
            </motion.div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: "🚀", title: "Scalable by Design", desc: "Built to grow with your business — fast and stable." },
              { icon: "🧱", title: "Modular Architecture", desc: "Reusable components and clean boundaries." },
              { icon: "🔒", title: "Secure & Reliable", desc: "Security baked in, not bolted on later." },
              { icon: "⚡", title: "Future-Ready", desc: "Modern frameworks and pipelines from day one." },
            ].map((item, i) => (
              <Reveal key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(253, 253, 252, 0.7)" }}
                  className="bg-[#003777] p-6 rounded-xl border border-slate-700 shadow-sm transition transform cursor-default"
                >
                  <motion.div
                    className="text-4xl mb-3"
                    animate={{ y: [0, -7, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-200 text-sm">{item.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Our Tech Stack Section */}
      <Reveal>
        <div className="bg-[#132043]/90 py-10 border-t border-b border-slate-700 mb-8 backdrop-blur-[2px]">
          <Reveal>
            <motion.div
              className="text-center mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
                Our <span className="text-yellow-400">Tech</span> Stack
              </h2>
              <p className="text-gray-200 mt-2 text-sm md:text-base">
                The technologies that power our solutions 🚀
              </p>
            </motion.div>
          </Reveal>

          <Reveal>
            <div className="relative overflow-hidden">
              <motion.div
                className="flex gap-10"
                animate={{ x: ["0%", "-100%"] }}
                transition={{ duration: 25, ease: "linear", repeat: Infinity }}
              >
                {[...techStack, ...techStack].map((tech, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.25, boxShadow: "0px 0px 15px rgba(253, 253, 252, 0.7)" }}
                    className="flex flex-col items-center justify-center min-w-[100px] h-30 transition cursor-pointer"
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-12 h-12 object-contain mb-2 transition"
                    />
                    <span className="text-gray-100 text-xs">{tech.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </Reveal>
        </div>
      </Reveal>

      {/* Tabs */}
      <Reveal>
        <div className="w-full bg-[#132043]/95 py-4 sticky top-0 z-40 backdrop-blur">
          <div className="max-w-7xl mx-auto px-6 h-20 pt-2">
            <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-1">
              {TECHNOLOGIES.map((tech) => (
                <button
                  key={tech.slug}
                  onClick={() => setActiveTech(tech.slug)}
                  className={`whitespace-nowrap flex-shrink-0 px-4 py-2 text-sm font-semibold rounded-md
                    ${
                      activeTech === tech.slug
                        ? "text-yellow-400 bg-white shadow-sm"
                        : "text-gray-200 hover:text-white hover:bg-[#0f263f]"
                    } transition`}
                >
                  {tech.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Active technology summary + details */}
      <div className="max-w-7xl mx-auto px-6 py-10" ref={previewRef}>
        {activeData && (
          <motion.div
            key={activeData.slug}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.40 }}
          >
            {/* Top card */}
            <Reveal>
              <div className="bg-[#132043]/95 border border-slate-800 rounded-2xl overflow-hidden mb-8 shadow-lg backdrop-blur">
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-3">
                      <span className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${iconInfo.bg}`}>
                        <Icon className={`h-6 w-6 ${iconInfo.fg}`} />
                      </span>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">
                          {activeData.title}
                        </h2>
                        <p className="text-sm text-gray-300">
                          {activeData.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="mt-3">
                      <ul className="list-inside list-disc text-gray-100 space-y-2 text-sm ">
                        {shortBulletsFor(activeData).map((b, i) => (
                          <li key={i} className="pl-1">
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="overflow-hidden">
                    <img
                      src={HERO[activeData.slug]}
                      alt={activeData.title}
                      className="w-full h-56 md:h-72 lg:h-80 object-cover"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Two-column: breakdown + links (image logos only) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 mb-8">
              <div className="space-y-6">
                {/* Tech Breakdown */}
                <Reveal>
                  <div className="bg-[#132043]/95 p-6 rounded-2xl border border-slate-800 backdrop-blur">
                    <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                      Tech Breakdown
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {activeData.extras.components.map((c) => (
                        <div
                          key={c}
                          className="w-12 h-12 p-1 bg-[#000000] rounded-lg border border-slate-700 flex items-center justify-center"
                        >
                          <img
                            src={TECH_ICON_MAP[c] || "/logos/default.png"}
                            alt={c}
                            className="object-contain w-full h-full"
                            onError={(e) => {
                              e.currentTarget.src = "/logos/default.png";
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>

                {/* Quick Stats (+ 1 extra box) */}
                <Reveal>
                  <div className="bg-[#132043]/95 rounded-2xl p-6 border border-slate-800 backdrop-blur">
                    <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                      Quick Stats
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3">
                      {activeData.extras.stats.map((s) => (
                        <div
                          key={s.label}
                          className="p-3 bg-[#91acf2] rounded-lg border border-slate-700 text-center"
                        >
                          <div className="text-xs font-semibold text-[#000000]">{s.label}</div>
                          <div className="text-grey-400 font-semibold mt-1">
                            {s.value}
                          </div>
                        </div>
                      ))}
                      {/* Extra stat (same sizing/style, applies to every stack) */}
                      <div className="p-3 bg-[#91acf2] rounded-lg border border-slate-700 text-center">
                        <div className="text-xs font-semibold text-[#000000]">Support</div>
                        <div className="text-grey-400 font-semibold mt-1">24/7 available</div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Right: Reading & Resources only */}
              <div className="space-y-6">
                {(() => {
                  const allLinks = activeData.extras.links || [];
                  const caseStudyLinks = allLinks.filter(
                    (lnk) => /case|customer/i.test(lnk.title) || /github/i.test(lnk.title)
                  );
                  const relatedLinks = allLinks.filter((lnk) => !caseStudyLinks.includes(lnk));

                  return (
                    <>
                      {/* Case Studies & Blogs */}
                      <Reveal>
                        <div className="bg-[#071824]/95 p-6 rounded-2xl border border-slate-800 backdrop-blur">
                          <h3 className="text-lg font-semibold text-yellow-400 mb-3">
                            Recommended Case Studies & Blogs
                          </h3>
                          <ul className="space-y-3">
                            {caseStudyLinks.map((lnk) => (
                              <li key={lnk.href}>
                                <a
                                  href={lnk.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-gray-100 hover:text-white inline-flex items-center gap-2"
                                >
                                  <span className="text-sm">{lnk.title}</span>
                                  <ExternalLinkIcon className="w-4 h-4 text-gray-400" />
                                </a>
                              </li>
                            ))}
                            {!caseStudyLinks.length && (
                              <li className="text-sm text-gray-300">No case studies or GitHub examples.</li>
                            )}
                          </ul>
                        </div>
                      </Reveal>

                      {/* Related Resources */}
                      <Reveal>
                        <div className="bg-[#071824]/95 p-6 rounded-2xl border border-slate-800 backdrop-blur">
                          <h3 className="text-lg font-semibold text-yellow-400 mb-3">
                            Related Resources
                          </h3>

                          <ul className="space-y-2 mb-4">
                            {relatedLinks.map((lnk) => (
                              <li key={lnk.href}>
                                <a
                                  href={lnk.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-gray-200 hover:text-white inline-flex items-center gap-2"
                                >
                                  <span className="text-sm">{lnk.title}</span>
                                  <ExternalLinkIcon className="w-4 h-4 text-gray-400" />
                                </a>
                              </li>
                            ))}
                            {!relatedLinks.length && (
                              <li className="text-sm text-gray-300">No related resources.</li>
                            )}
                          </ul>

                          {/* quick-access trio */}
                          <div className="flex flex-col gap-2 text-sm">
                            {relatedLinks[0] && (
                              <a
                                href={relatedLinks[0].href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-200 hover:text-white inline-flex items-center gap-2"
                              >
                                Official docs / tutorial
                                <ExternalLinkIcon className="w-4 h-4 text-gray-400" />
                              </a>
                            )}
                            {relatedLinks[1] && (
                              <a
                                href={relatedLinks[1].href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-200 hover:text-white inline-flex items-center gap-2"
                              >
                                Community guide
                                <ExternalLinkIcon className="w-4 h-4 text-gray-400" />
                              </a>
                            )}
                            {relatedLinks[2] && (
                              <a
                                href={relatedLinks[2].href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-200 hover:text-white inline-flex items-center gap-2"
                              >
                                Deep dive / walkthrough
                                <ExternalLinkIcon className="w-4 h-4 text-gray-400" />
                              </a>
                            )}
                          </div>
                        </div>
                      </Reveal>
                    </>
                  );
                })()}
              </div>
            </div>

            {/* Bottom: How Soseotech works WITH FLOW IMG on LEFT */}
            <Reveal>
  <div className="mt-6 bg-transparent">
    <div className="bg-[#000000]/80 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center backdrop-blur">
      
      {/* Left - Image EXACTLY touching border, but visually narrower */}
      <div className="flex justify-center">
        <div className="border border-slate-700 rounded-xl overflow-hidden w-full max-w-[85%]">
          <img
            src={FLOW_IMG[activeData.slug] || "/img.png"}
            alt={`${activeData.title} architecture`}
            className="
              w-full
              h-56 md:h-72 lg:h-80
              object-cover
              block
            "
            onError={(e) => {
              e.currentTarget.src = "/img.png";
            }}
          />
        </div>
      </div>

      {/* Right - Approach Text */}
      <div>
        <h3 className="text-2xl font-bold text-yellow-400 mb-4">
          How Soseotech works with {activeData.title}
        </h3>
        <p className="text-gray-100 leading-relaxed text-justify">
          {activeData.approach}
        </p>
      </div>
    </div>
  </div>
</Reveal>


            {/* Final: Stack Details */}
            <Reveal>
              <div className="mt-6">
                <div className="bg-[#132043]/95 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-sm backdrop-blur">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4 font-sans">
                    {activeData.title}: Stack Details
                  </h3>

                  <ul className="space-y-6">
                    {Object.entries(categorized).map(([category, items]) => (
                      <li key={category}>
                        <h4 className="text-xl font-[math] font-semibold text-white mb-3">{category}</h4>

                        {items.length ? (
                          <ul className="space-y-2">
                            {items.map((it) => (
                              <li key={it.name} className="flex items-start gap-3">
                                {/* Icon */}
                                <span className="inline-flex h-6 w-6 flex-none items-center justify-center rounded-md border border-slate-600 bg-[#0b213a] overflow-hidden">
                                  <img
                                    src={it.icon || "/logos/default.png"}
                                    alt={it.name}
                                    className="h-5 w-5 object-contain"
                                    onError={(e) => {
                                      e.currentTarget.src = "/logos/default.png";
                                    }}
                                  />
                                </span>

                                {/* Name + description */}
                                <div className="text-base leading-6 font-[math] ">
                                  <span className="font-medium text-gray-100">{it.name}</span>
                                  <span className="font-medium text-gray-300"> — {it.desc}</span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <div className="text-xs text-gray-400">—</div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </motion.div>
        )}
      </div>

      {/* CTA / Empowering Innovation box */}
      <Reveal>
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-6xl mx-auto px-4 mb-0 py-20"
        >
          <div className="relative h-[350px] sm:h-[250px] rounded-3xl overflow-hidden shadow-2xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/videos/tech-hero-poster.jpg"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/tech-heros.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Empowering <span className="text-yellow-400">Innovation</span> Through{" "}
                <span className="text-yellow-400">Technology</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-100 max-w-2xl mb-8">
                We deliver scalable digital solutions that transform businesses.
              </p>

              <a
                href="/contact"
                className="relative group px-8 py-3 rounded-full text-lg font-semibold
                           text-black bg-white/80 hover:bg-white
                           transition-all duration-300
                           shadow-lg hover:shadow-[0_8px_30px_rgba(250,204,21,0.45)]
                           hover:scale-[1.04] hover:-translate-y-0.5
                           focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
              >
                Get Started
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </motion.section>
      </Reveal>

      <div className="h-5"></div>
    </main>
  );
}