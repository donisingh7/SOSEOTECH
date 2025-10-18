// StrategyPillars.jsx — Dark-only layout: left text / right 4 big circles
import { motion } from "framer-motion";


export default function StrategyPillars({
  eyebrow,
  title,
  subtitle,
  pillars = [],
  circleSize = 220,
}) {
  const Circle = ({ item, idx }) => (
    <motion.div
  /* ...motion props... */
  className="relative mx-auto flex items-center justify-center rounded-full border bg-gray-800 border-blue-800 shadow-sm text-center"
  style={{
    width: circleSize,
    height: circleSize,     // ⬅️ fixed height matches gridAutoRows
  }}
>
  {/* inner content */}
  <div className="flex h-full w-full flex-col items-center justify-center px-6 text-center">
    {/* icon */}
    <div className="relative -top-8 mb-3 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gray-800 ring-1 ring-[var(--border)]">
      <span className="text-[var(--text)]">{item.icon}</span>
    </div>

    {/* title + badge */}
    <div className="relative -top-6">
    <div className="flex items-center justify-center gap-2 leading-tight">
      <h3 className="text-base sm:text-lg font-semibold leading-tight text-[var(--text)]">
        {item.title}
      </h3>
      {item.badge && (
        <span className="text-[10px] rounded-md px-2 py-0.5 font-medium bg-[color-mix(in_oklab,var(--accent)_18%,transparent)] text-[var(--accent)]">
          {item.badge}
        </span>
      )}
    </div>

    {/* desc */}
    {item.desc && (
      <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
        {item.desc}
      </p>
    )}
  </div></div>

  {/* subtle ring accent */}
  <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-[color-mix(in_oklab,var(--border)_70%,transparent)]" />
</motion.div>

  );

  return (
    <section className="w-full bg-[var(--bg)] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12  gap-10 lg:gap-14 items-center">
          {/* LEFT: heading */}
          <div className="lg:col-span-5  p-6 rounded-lg">
            {eyebrow && (
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
                {eyebrow}
              </p>
            )}
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text)]">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 text-[var(--text-muted)]">{subtitle}</p>
            )}
            {/* optional decorative divider */}
            <div className="mt-6 h-px w-100 bg-[linear-gradient(90deg,transparent,white,transparent)]" />
          </div>

          {/* RIGHT: 4 big circles (2×2) */}
          <div className="lg:col-span-7">
            <div
              className="grid grid-cols-2 gap-6 sm:gap-8 place-items-center"
              role="list"
              aria-label="Pillars"
              style={{ gridAutoRows: `${circleSize}px` }}  // ⬅️ equal row height
            >
              {pillars.slice(0, 4).map((p, i) => (
                <Circle key={i} item={p} idx={i} />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
