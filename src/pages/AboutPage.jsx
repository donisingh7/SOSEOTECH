import React from "react";
import { Building2, Target, Eye, Award, Rocket } from "lucide-react";

function SectionTitle({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="h-6 w-6 text-yellow-500" aria-hidden="true" />
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{title}</h2>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main id="about" className="bg-gradient-to-b from-white to-stone-50">
      <section className="relative isolate overflow-hidden py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                About <span className="text-yellow-600">SOSEOTECH</span>
              </h1>
              <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-700 text-justify">
                <strong>SOSEO-TECH ADVISORY LLP</strong> is a Limited Liability
                Partnership (LLP) governed by the LLP Act, 2008. Registered
                under the Registrar of Companies RoC-Delhi, it operates as a
                non-government entity. According to the Ministry of Corporate
                Affairs (MCA), this LLP was incorporated on{" "}
                <strong>20-04-2025</strong> and its records were last updated on{" "}
                <strong>22-05-2025</strong>. Its eFiling status is currently
                listed as <strong>“Active”</strong> as per MCA records.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-700 text-justify">
                The firm is dedicated to delivering innovative technology
                solutions, digital transformation strategies, and consulting
                services that empower businesses to grow in today’s competitive
                environment.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="/aboutus.jpg"
                alt="About SOSEOTECH"
                className="w-full max-w-lg rounded-2xl shadow-lg"
                loading="eager"
                fetchpriority="high"
              />
            </div>
          </div>

          <section id="legal" className="mt-16 md:mt-20">
            <SectionTitle icon={Building2} title="Legal Information" />
            <div className="mt-6 space-y-4 text-gray-700 leading-relaxed text-justify">
              <p>
                <strong>CIN:</strong> AAZ-1234 | <strong>ROC:</strong> Delhi
              </p>
              <p>
                <strong>Date of Incorporation:</strong> 20th April 2025
              </p>
              <p>
                <strong>Last Updated:</strong> 22nd May 2025
              </p>
              <p>
                <strong>Status:</strong> Active
              </p>
            </div>
          </section>

          <section id="mission" className="mt-16 md:mt-20">
            <SectionTitle icon={Target} title="Our Mission" />
            <p className="mt-6 text-gray-700 leading-relaxed text-justify">
              To empower businesses with cutting-edge digital solutions that
              drive growth, efficiency, and transformation. We combine
              engineering expertise, marketing strategies, and business
              consulting into one seamless service.
            </p>
          </section>

          <section id="vision" className="mt-16 md:mt-20">
            <SectionTitle icon={Eye} title="Our Vision" />
            <p className="mt-6 text-gray-700 leading-relaxed text-justify">
              To become a global leader in providing digital transformation
              services, enabling startups, enterprises, and organizations to
              thrive in an increasingly competitive world.
            </p>
          </section>

          <section id="values" className="mt-16 md:mt-20">
            <SectionTitle icon={Award} title="Core Values" />
            <ul className="mt-6 list-disc pl-6 space-y-3 text-gray-700 leading-relaxed text-justify">
              <li>Integrity & Transparency</li>
              <li>Innovation & Excellence</li>
              <li>Customer Centricity</li>
              <li>Collaboration & Growth</li>
              <li>Sustainability & Responsibility</li>
            </ul>
          </section>

          <section id="capabilities" className="mt-16 md:mt-20">
            <SectionTitle icon={Rocket} title="Our Capabilities" />
            <div className="mt-6 space-y-4 text-gray-700 leading-relaxed text-justify">
              <p>
                We specialize in custom software development, web and mobile
                applications, cloud solutions, marketing services, finance &
                accounting, and business consulting.
              </p>
              <p>
                Our team blends technology with creativity to deliver practical,
                scalable, and future-ready solutions.
              </p>
            </div>
          </section>

          <section id="timeline" className="mt-16 md:mt-20">
            <SectionTitle icon={Rocket} title="Our Journey" />
            <ol className="mt-6 relative border-l border-gray-200 pl-6 space-y-8 text-justify">
              <li>
                <div className="absolute -left-2 top-1 w-3 h-3 rounded-full bg-yellow-500"></div>
                <h3 className="text-lg font-semibold text-gray-900">
                  2025 – Company Founded
                </h3>
                <p className="text-gray-600">
                  SOSEOTECH was established to provide innovative technology
                  advisory and development services.
                </p>
              </li>
              <li>
                <div className="absolute -left-2 top-1 w-3 h-3 rounded-full bg-yellow-500"></div>
                <h3 className="text-lg font-semibold text-gray-900">
                  2026 – Expansion
                </h3>
                <p className="text-gray-600">
                  Expanded into cloud, marketing, and financial consulting
                  services.
                </p>
              </li>
              <li>
                <div className="absolute -left-2 top-1 w-3 h-3 rounded-full bg-yellow-500"></div>
                <h3 className="text-lg font-semibold text-gray-900">
                  2027 – Global Reach
                </h3>
                <p className="text-gray-600">
                  Established partnerships with global enterprises and startups
                  alike.
                </p>
              </li>
            </ol>
          </section>
        </div>
      </section>
    </main>
  );
}
