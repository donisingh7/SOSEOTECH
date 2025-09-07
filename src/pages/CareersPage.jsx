import React, { useState } from "react";
import { BriefcaseBusiness, Rocket, Users } from "lucide-react";

export default function CareersPage() {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const data = new FormData(formEl);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/careers`,
        {
          method: "POST",
          body: data,
        }
      );

      if (res.ok) {
        alert("Application submitted successfully!");
        formEl.reset();
        setShowForm(false);
      } else {
        const j = await res.json().catch(() => ({}));
        alert(j.error || "Failed to submit application. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again.");
    }
  };

  return (
    <main id="careers" className="bg-gradient-to-b from-white to-stone-50">
      {/* Hero */}
      <section className="py-12 md:py-16 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Careers at <span className="text-yellow-600">SOSEOTECH</span>
          </h1>
          <p className="mt-3 text-base md:text-lg text-slate-700 max-w-xl mx-auto text-justify">
            Join our team of engineers, designers, and strategists shaping the
            future of technology, marketing, and business solutions.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-6">
            Why Work With Us?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Rocket,
                title: "Fast Growth",
                desc: "Work on cutting-edge projects and accelerate your career with real-world experience.",
              },
              {
                icon: Users,
                title: "Collaborative Culture",
                desc: "Learn from peers and mentors in a supportive and open environment.",
              },
              {
                icon: BriefcaseBusiness,
                title: "Diverse Opportunities",
                desc: "From development to marketing, explore roles across industries and technologies.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-md transition"
              >
                <f.icon className="h-8 w-8 text-yellow-600 mb-2" />
                <h3 className="text-lg font-semibold text-slate-900">
                  {f.title}
                </h3>
                <p className="text-slate-700 text-sm mt-1 leading-relaxed text-justify">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-10 bg-yellow-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-6">
            Open Roles
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "SDE Intern",
                intro: "Contribute to front-end and back-end development projects.",
              },
              {
                title: "UI/UX Designer",
                intro: "Design seamless and engaging digital experiences for our clients.",
              },
              {
                title: "Marketing Intern",
                intro: "Support campaigns, content creation, and digital marketing strategies.",
              },
            ].map((r, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {r.title}
                </h3>
                <p className="mt-3 text-slate-700 text-justify">{r.intro}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => setShowForm(!showForm)}
              className="inline-block rounded-full bg-yellow-500 px-6 py-2 text-sm font-semibold text-white hover:bg-yellow-600 transition"
            >
              {showForm ? "Close Form" : "Apply Now"}
            </button>
          </div>

          {showForm && (
            <form
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              className="mt-6 mx-auto max-w-2xl bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-4"
            >
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-semibold text-slate-700"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-slate-700"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label
                  htmlFor="resume"
                  className="block text-sm font-semibold text-slate-700"
                >
                  Resume
                </label>
                <input
                  id="resume"
                  name="resume"
                  type="file"
                  required
                  className="mt-1 w-full text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="cover"
                  className="block text-sm font-semibold text-slate-700"
                >
                  Cover Letter
                </label>
                <textarea
                  id="cover"
                  name="cover"
                  rows={4}
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-yellow-500 px-5 py-2 text-sm font-semibold text-white hover:bg-yellow-600 transition"
              >
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
