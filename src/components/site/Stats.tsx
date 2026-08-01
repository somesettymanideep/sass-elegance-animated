import { Scissors, Users, Store, Star } from "lucide-react";
import { useCounter, useReveal } from "@/lib/motion";

const stats = [
  { icon: Users, value: 42000, suffix: "+", label: "Happy clients" },
  { icon: Store, value: 3, suffix: "", label: "Flagship branches" },
  { icon: Scissors, value: 15, suffix: " yrs", label: "Of craft" },
  { icon: Star, value: 4.9, suffix: "/5", label: "Google rating", decimals: 1 },
];

function Stat({ s }: { s: (typeof stats)[number] & { decimals?: number } }) {
  const ref = useCounter(s.value, s.decimals ?? 0);
  const Icon = s.icon;
  return (
    <div className="stat-item group text-center">
      <Icon className="mx-auto size-7 text-gold transition-transform duration-700 group-hover:-translate-y-1.5" />
      <p className="mt-5 font-display text-[clamp(2.4rem,5vw,4rem)] leading-none text-gold-gradient">
        <span ref={ref}>0</span>
        {s.suffix}
      </p>
      <p className="mt-3 text-xs uppercase tracking-[0.24em] text-cream/55">{s.label}</p>
    </div>
  );
}

export function Stats() {
  const ref = useReveal<HTMLDivElement>({ selector: ".stat-item", stagger: 0.12 });
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-cream">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gold-gradient opacity-40" />
      <div ref={ref} className="mx-auto grid max-w-[1400px] grid-cols-2 gap-12 px-6 lg:px-10 md:grid-cols-4">
        {stats.map((s) => (
          <Stat key={s.label} s={s} />
        ))}
      </div>
    </section>
  );
}
