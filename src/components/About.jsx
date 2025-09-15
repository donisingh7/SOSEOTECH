import React from "react";

export default function About() {
  return (
    <section id="about" className="p-12 bg-gray-50">
      <div className="mx-auto md:px-0 lg:px-0 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT: Full Image */}
        <div className="flex justify-center items-center h-full w-full">
          <img
            src="/about.jpg"
            alt="About SOSEOTECH"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* RIGHT: Content */}
        <div className="px-6 md:px-12 lg:px-20">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-left">
            About <span className="text-yellow-500">SOSEOTECH</span>
          </h2>

          {/* Theory Content */}
          <div>
            <p className="text-gray-700 leading-relaxed mb-4 text-justify">
              <strong>SOSEO-TECH ADVISORY LLP</strong> is a Limited Liability
              Partnership (LLP) governed by the LLP Act, 2008. Registered under
              the Registrar of Companies RoC-Delhi, it operates as a
              non-government entity. According to the Ministry of Corporate
              Affairs (MCA), this LLP was incorporated on{" "}
              <strong>20-04-2025</strong> and its records were last updated on{" "}
              <strong>22-05-2025</strong>. Its eFiling status is currently listed
              as <strong>“Active”</strong> as per MCA records.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify">
              The firm is dedicated to delivering innovative technology
              solutions, digital transformation strategies, and consulting
              services that empower businesses to grow in today’s competitive
              environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
