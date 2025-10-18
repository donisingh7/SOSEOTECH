import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  // ----- Smart Quick Links handler -----
  const goSection = (id) => {
    const onHome =
      window.location.hash === "#/" ||
      window.location.hash === "" ||
      window.location.hash === "#";
    if (onHome) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = `#/${id}`;
    }
  };

  const goRoute = (path) => {
    navigate(path);
  };

  return (
    <footer className="w-full bg-[#0B0F14] text-white">
      {/* Main footer */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-10 grid gap-10 lg:grid-cols-4">
        {/* Brand + address */}
        <div>
          <h4 className="text-lg font-extrabold">SOSEO-TECH</h4>
          <p className="mt-2 text-sm text-gray-300">
            Driving digital transformation with innovative solutions in software,
            marketing, and business consulting.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li>
              <strong>Email:</strong>{" "}
              <span className="text-yellow-400">soseotech@gmail.com</span>
            </li>
            <li>
              <strong>Phone:</strong> 8769388932
            </li>
            <li>
              <strong>Address:</strong> 205, Plot No-25, KP Block Comm. Complex,
              Pitampura Maurya Enclave, North West Delhi, Delhi, 110034
            </li>
          </ul>

          {/* Follow Us (icons clickable) */}
          <div className="mt-6">
            <h5 className="text-sm font-semibold mb-2">Follow Us</h5>
            <div className="flex items-center gap-3 text-gray-300">
              <a
                href="https://www.instagram.com/soseotechadvisory?igsh=ZnFtc3RkODR4bG5w"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-yellow-500 hover:text-white transition"
              >
                <Instagram className="h-5 w-5" aria-label="Instagram" />
              </a>
              <a
                href="https://x.com/SoseoTech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-yellow-500 hover:text-white transition"
              >
                <Twitter className="h-5 w-5" aria-label="Twitter" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61568028737057"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-yellow-500 hover:text-white transition"
              >
                <Facebook className="h-5 w-5" aria-label="Facebook" />
              </a>
              <a
                href="https://www.linkedin.com/company/soseotech-private-limited"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-yellow-500 hover:text-white transition"
              >
                <Linkedin className="h-5 w-5" aria-label="LinkedIn" />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="justify-self-center text-center">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-gray-300 text-sm">
            <li>
              <button
                type="button"
                onClick={() => goRoute("/about")}
                className="hover:text-white"
              >
                About
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => goRoute("technologies")}
                className="hover:text-white"
              >
                Technologies
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => goRoute("/careers")}
                className="hover:text-white"
              >
                Careers
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => goRoute("/contact")}
                className="hover:text-white"
              >
                Contact
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => goRoute("/blogs")}
                className="hover:text-white"
              >
                Blogs
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => goRoute("/resources/newsletter")}
                className="hover:text-white"
              >
                Newsletter
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => goRoute("/resources/case-studies")}
                className="hover:text-white"
              >
                Case Studies
              </button>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="text-lg font-semibold">Our Services</h4>
          <ul className="mt-3 space-y-2 text-gray-300 text-sm">
            <li>
              <button
                type="button"
                onClick={() => goRoute("services/software-development")}
                className="hover:text-white"
              >
                Software Development
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => goRoute("services/web-development")}
                className="hover:text-white"
              >
                Web Development
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => goRoute("services/cloud-solutions")}
                className="hover:text-white"
              >
                Cloud Solutions
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => goRoute("services/social-media-marketing")}
                className="hover:text-white"
              >
                Social Media Marketing
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => goRoute("services/finance-accounting")}
                className="hover:text-white"
              >
                Finance &amp; Accounting
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => goRoute("services/business-solutions")}
                className="hover:text-white"
              >
                Business Solutions
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => goRoute("services/ai-chatbot")}
                className="hover:text-white"
              >
                AI ChatBot
              </button>
            </li>
          </ul>
        </div>

        {/* Map */}
        <div className="rounded-xl overflow-hidden ring-1 ring-white/10 min-h-[320px]">
          <iframe
            title="SOSEOTECH Location"
            src="https://www.google.com/maps?q=205%2C%20Plot%20No-25%2C%20KP%20Block%20Comm.%20Complex%2C%20Pitampura%20Maurya%20Enclave%20North%20West%20Delhi%2C%20Delhi%2C%20110034&output=embed"
            className="w-full h-full min-h-[320px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-400">
        Copyright © {year} SOSEO-TECH ADVISORY LLP. All rights reserved.
      </div>
    </footer>
  );
}
