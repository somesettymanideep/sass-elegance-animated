import { useCounter, useReveal } from "@/lib/motion";

const stats = [
  { value: 15, suffix: "+", label: "Years of experience" },
  { value: 32, suffix: "+", label: "Professional stylists" },
  { value: 42000, suffix: "+", label: "Happy clients" },
  { value: 3, suffix: "", label: "Flagship branches" },
  { value: 4.9, suffix: "/5", label: "Google rating", decimals: 1 },
];

function Stat({ s, dark }: { s: (typeof stats)[number] & { decimals?: number }; dark: boolean }) {
  const ref = useCounter(s.value, s.decimals ?? 0);
  return (
    <div className="ab-stat flex flex-col items-center text-center">
      <div className="rounded-full bg-cream/10 p-2 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)]">
        <div
          className={[
            "flex size-[9.5rem] items-center justify-center rounded-full md:size-[11rem]",
            dark ? "bg-ink text-cream" : "bg-gold-gradient text-ink",
          ].join(" ")}
        >
          <p className="font-display text-[clamp(1.5rem,3.4vw,2.6rem)] font-semibold leading-none">
            <span ref={ref}>0</span>
            {s.suffix}
          </p>
        </div>
      </div>
      <p className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-cream">
        {s.label}
      </p>
      <span className="mt-3 block h-[3px] w-12 rounded-full bg-gold" />
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
          <h2 className="mt-2 font-semibold text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05] text-cream">
            Numbers we are quietly proud of
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-y-14 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={[
                "flex justify-center px-2",
                i % 2 === 1 ? "border-l border-dashed border-cream/20" : "",
                "md:border-l md:border-dashed md:border-cream/20",
                i % 3 === 0 ? "md:border-l-0 lg:border-l" : "",
                i === 0 ? "lg:border-l-0" : "",
              ].join(" ")}
            >
              <Stat s={s} dark={i % 3 === 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
