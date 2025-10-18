// --- Lightweight Top Carousel Component ---
import React, { useEffect, useRef, useState } from "react";

const Carousel = ({ slides = [] }) => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // Auto-advance every 5s
  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, [isPaused, slides.length]);

  const goTo = (i) => setIndex((i + slides.length) % slides.length);

  return (
    <div
      className="relative w-full h-[46vh] md:h-[56vh] lg:h-[64vh] rounded-2xl overflow-hidden  border-brand-border shadow-sm select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div
        className="h-full w-full flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((s, i) => (
          <a
            key={s.id || i}
            href={s.link || "#"}
            className="relative min-w-full h-full block group"
          >
            <img
              src={s.image}
              alt={s.title}
              className="absolute inset-0 h-full w-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

            {/* Text */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <span className="inline-block text-xs md:text-sm font-semibold tracking-wider uppercase text-brand-yellow">
                {s.category}
              </span>
              <h2 className="mt-2 text-white text-2xl md:text-4xl font-bold leading-snug">
                {s.title}
              </h2>
              <p className="mt-3 text-white/80 max-w-3xl hidden sm:block">
                {s.description}
              </p>
              {/* Author row */}
              {s.author?.name && (
                <div className="mt-4 flex items-center gap-3">
                  {s.author?.avatar && (
                    <img
                      src={s.author.avatar}
                      alt={s.author.name}
                      className="h-10 w-10 rounded-full object-cover border border-white/20"
                    />
                  )}
                  <div className="text-white/90 text-sm">
                    <div className="font-semibold">{s.author.name}</div>
                    <div className="text-white/70">{s.date}</div>
                  </div>
                </div>
              )}
            </div>
          </a>
        ))}
      </div>

      {/* Controls */}
      <button
        aria-label="Previous slide"
        onClick={() => goTo(index - 1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur px-3 py-2"
      >
        ‹
      </button>
      <button
        aria-label="Next slide"
        onClick={() => goTo(index + 1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur px-3 py-2"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-brand-yellow" : "w-2.5 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
