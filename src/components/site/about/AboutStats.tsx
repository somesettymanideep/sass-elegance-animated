import { Users, Store, Scissors, Star, Sparkles, HeartHandshake } from "lucide-react";
import { useCounter, useReveal } from "@/lib/motion";

const stats = [
  { icon: Users, value: 42000, suffix: "+", label: "Happy clients" },
  { icon: Scissors, value: 15, suffix: " yrs", label: "Years of craft" },
  { icon: HeartHandshake, value: 32, suffix: "", label: "Professional stylists" },
  { icon: Store, value: 3, suffix: "", label: "Flagship branches" },
  { icon: Sparkles, value: 186000, suffix: "+", label: "Treatments completed" },
  { icon: Star, value: 4.9, suffix: "/5", label: "Google rating", decimals: 1 },
];

function Stat({ s }: { s: (typeof stats)[number] & { decimals?: number } }) {
  const ref = useCounter(s.value, s.decimals ?? 0);
  const Icon = s.icon;
  return (
    <div className="ab-stat group luxe-card bg-white/[0.03] p-8 text-center">
      <Icon className="mx-auto size-6 text-gold transition-transform duration-700 group-hover:-translate-y-1.5" />
      <p className="mt-5 font-display text-[clamp(2rem,4vw,3.2rem)] leading-none text-gold-gradient">
        <span ref={ref}>0</span>
        {s.suffix}
      </p>
      <p className="mt-3 text-[0.68rem] uppercase tracking-[0.24em] text-cream/55">{s.label}</p>
    </div>
  );
}

export function AboutStats() {
  const ref = useReveal<HTMLDivElement>({ selector: ".ab-stat, .ab-head", stagger: 0.1 });

  return (
    <section className="relative overflow-hidden bg-ink py-28 text-cream md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gold-gradient opacity-40" />
      <div ref={ref} className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="ab-head mx-auto max-w-2xl text-center">
          <p className="section-eyebrow text-gold">Why Clients Love Us</p>
          <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05] text-cream">
            Numbers we are quietly proud of
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-3">
          {stats.map((s) => (
            <Stat key={s.label} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
