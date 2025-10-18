// HorizontalZigZagRail.jsx — Dark-only + drag-to-scroll (no buttons)
import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

export default function HorizontalZigZagRail({
  eyebrow,
  title,
  subtitle,
  items = [],
  cardWidth = 340,
  gap = 18,
  offset = 28,
}) {
  const railRef = useRef(null);

  // drag-to-scroll state
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  const onPointerDown = useCallback((e) => {
    const rail = railRef.current;
    if (!rail) return;
    setDragging(true);
    rail.setPointerCapture?.(e.pointerId);
    startX.current = e.clientX || e.touches?.[0]?.clientX || 0;
    startScrollLeft.current = rail.scrollLeft;
  }, []);

  const onPointerMove = useCallback((e) => {
    if (!dragging) return;
    const rail = railRef.current;
    if (!rail) return;
    const clientX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    const dx = clientX - startX.current;
    rail.scrollLeft = startScrollLeft.current - dx;
  }, [dragging]);

  const endDrag = useCallback((e) => {
    if (!dragging) return;
    const rail = railRef.current;
    rail?.releasePointerCapture?.(e.pointerId);
    setDragging(false);
  }, [dragging]);

  return (
    <section className="w-full py-16 bg-[var(--bg)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title || subtitle) && (
          <header className="mx-auto max-w-3xl text-center">
            {eyebrow && (
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text)]">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 text-[var(--text-muted)]">{subtitle}</p>
            )}
          </header>
        )}

        <div className="relative mt-10">
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-[linear-gradient(to_right,var(--bg),rgba(13,18,22,0))] z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-[linear-gradient(to_left,var(--bg),rgba(13,18,22,0))] z-10" />

          {/* horizontal rail — drag to scroll */}
          <div
            ref={railRef}
            className={`flex snap-x snap-mandatory overflow-x-auto no-scrollbar gap-4 sm:gap-5 select-none ${
              dragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            style={{ scrollBehavior: "smooth", paddingBottom: 4 }}
            aria-label="Zig-zag highlights"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onPointerLeave={endDrag}
            // optional touch events for older browsers
            onTouchStart={(e) => onPointerDown(e)}
            onTouchMove={(e) => onPointerMove(e)}
            onTouchEnd={(e) => endDrag(e)}
          >
            {items.map((item, idx) => {
              const isUp = idx % 2 === 0;
              const translateY = isUp ? -offset : offset;

              return (
                <motion.article
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="snap-center shrink-0"
                  style={{
                    width: cardWidth,
                    marginRight: gap,
                    transform: `translateY(${translateY}px)`,
                  }}
                >
                  <div className="relative h-full rounded-2xl border bg-[var(--surface)] border-[var(--border)] shadow-sm hover:shadow-md transition-shadow">
                    {/* top accent */}
                    <div className="absolute inset-x-0 -top-px h-px bg-[linear-gradient(90deg,transparent,var(--border),transparent)]" />

                    <div className="p-6">
                      {/* ICON */}
                      <div className="flex items-center justify-start">
                        <div className="h-12 w-12 rounded-xl bg-[var(--muted)] ring-1 ring-[var(--border)] flex items-center justify-center">
                          <span className="text-[var(--text)]">{item.icon}</span>
                        </div>
                      </div>

                      {/* HEADING + (optional badge) */}
                      <div className="mt-3 flex items-center gap-2">
                        <h3 className="text-base sm:text-lg font-semibold text-[var(--text)]">
                          {item.title}
                        </h3>
                        {item.badge && (
                          <span className="text-[10px] rounded-md px-2 py-0.5 font-medium bg-[color-mix(in_oklab,var(--accent)_18%,transparent)] text-[var(--accent)]">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      {/* DESCRIPTION */}
                      <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                        {item.desc}
                      </p>

                      {/* Optional link */}
                      {item.href && (
                        <a
                          href={item.href}
                          className="mt-3 inline-flex items-center text-sm font-medium text-[var(--text)] underline underline-offset-4 decoration-[color-mix(in_oklab,var(--border)_60%,transparent)] hover:text-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
                        >
                          Learn more →
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
