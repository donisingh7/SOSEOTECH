import React from "react";
import { Send, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (res.ok) {
        alert("Thanks! Your message has been sent.");
        e.target.reset();
      } else {
        alert("Failed to send. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form.");
    }
  };

  return (
    <main className="bg-[#F6F5F3] text-slate-900">
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-10 md:py-14">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div className="rounded-3xl bg-white p-6 md:p-8 ring-1 ring-slate-200 shadow-sm">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Contact Us
            </h1>
            <p className="mt-2 text-slate-600 text-justify">
              Tell us about your goals—engineering, marketing, or business.
              We’ll get back within 1 business day.
            </p>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold text-slate-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-slate-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-semibold text-slate-700"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  placeholder="+91 9XXXXXXXXX"
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-slate-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="How can we help?"
                  required
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-yellow-500 px-5 py-2.5 font-semibold text-black hover:bg-yellow-400 transition"
              >
                <Send className="h-4 w-4" /> Send Message
              </button>

              <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-slate-700">
                <span className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4" /> soseotech@gmail.com
                </span>
                <span className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4" /> 8769388932
                </span>
              </div>
            </form>
          </div>

          <div className="relative h-[320px] md:h-[560px]">
            <img
              src="/contact.jpg"
              alt="Contact SOSEOTECH"
              className="absolute right-0 top-0 h-full w-auto max-w-full rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.10)] object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
