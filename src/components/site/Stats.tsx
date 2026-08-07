import { Scissors, Users, Store, Star } from "lucide-react";
import { useCounter, useReveal } from "@/lib/motion";

const stats = [
  { icon: Users, value: 42000, suffix: "+", label: "Happy clients" },
  { icon: Store, value: 3, suffix: "", label: "Flagship branches" },
  { icon: Scissors, value: 15, suffix: " yrs", label: "Of craft" },
  { icon: Star, value: 4.9, suffix: "/5", label: "Google rating", decimals: 1 },
];

function Stat({ s, index }: { s: (typeof stats)[number] & { decimals?: number }; index: number }) {
  const ref = useCounter(s.value, s.decimals ?? 0);
  const Icon = s.icon;
  const [num, unit] = s.suffix.startsWith(" ") ? ["", s.suffix.trim()] : [s.suffix, ""];

  return (
    <div className="stat-item group relative flex flex-col items-center px-4 py-2 text-center">
      {/* ghost index */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-2 top-0 select-none font-display text-[clamp(3.5rem,7vw,5.5rem)] font-bold leading-none text-cream/[0.055] transition-all duration-700 group-hover:text-gold/15"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <span className="relative flex size-[4.2rem] items-center justify-center rounded-full border border-gold/45 transition-all duration-500 ease-out group-hover:border-gold group-hover:shadow-[0_0_28px_-4px_rgba(231,185,97,0.55)] md:size-[4.7rem]">
        <Icon className="size-7 text-gold transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
      </span>

      <p className="mt-6 font-sans text-[clamp(1.9rem,4.2vw,3rem)] font-bold leading-none tracking-tight text-cream">
        <span ref={ref}>0</span>
        {num}
        {unit && <span className="ml-1.5 text-[0.5em] font-semibold uppercase tracking-[0.08em]">{unit}</span>}
      </p>

      <span className="mt-4 block h-[3px] w-10 rounded-full bg-gold transition-all duration-500 group-hover:w-16" />

      <p className="mt-4 font-button text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-cream/70 transition-colors duration-500 group-hover:text-gold">
        {s.label}
      </p>
    </div>
  );
}

export function Stats() {
  const ref = useReveal<HTMLDivElement>({ selector: ".stat-item", stagger: 0.14 });

  return (
    <section className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-4 py-12 shadow-luxe md:px-10 md:py-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_140%_at_50%_0%,rgba(231,185,97,0.10),transparent_60%)]" />
          <div ref={ref} className="relative grid grid-cols-2 gap-y-12 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={[
                  "relative",
                  i % 2 === 1 ? "border-l border-cream/12" : "",
                  "md:border-l md:first:border-l-0",
                  i === 2 ? "border-l-0 md:border-l" : "",
                ].join(" ")}
              >
                <Stat s={s} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
