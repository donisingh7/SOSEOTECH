import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border border-gray-700 rounded-2xl transition-all duration-300 overflow-hidden 
        ${open ? "bg-white/10 backdrop-blur-lg shadow-lg" : "bg-gray-800/30"}`
      }
    >
      {/* Question Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full p-5 text-left"
      >
        <span className="text-lg font-semibold text-cyan-300">{q}</span>
        {open ? (
          <ChevronUp className="text-cyan-300 transition-transform duration-300" />
        ) : (
          <ChevronDown className="text-gray-400 transition-transform duration-300" />
        )}
      </button>

      {/* Answer */}
      <div
        className={`px-5 pb-5 text-gray-300 text-base leading-relaxed transition-all duration-500 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {a}
      </div>
    </div>
  );
}

export default FaqItem;
