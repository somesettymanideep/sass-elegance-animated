import { Award, Sparkles, HeartHandshake, ShieldCheck } from "lucide-react";
import { useReveal, useCounter } from "@/lib/motion";

const items = [
  {
    icon: Award,
    title: "Award-Winning Artistry",
    copy: "Stylists trained in London and Milan technique, refreshed every season.",
    value: 18,
    suffix: "+",
    label: "Industry awards",
  },
  {
    icon: Sparkles,
    title: "Luxury Product House",
    copy: "Only Kérastase, Olaplex, L'Oréal Professionnel and Schwarzkopf on our shelves.",
    value: 12,
    suffix: "",
    label: "Global brands",
  },
  {
    icon: ShieldCheck,
    title: "Hygiene, Uncompromised",
    copy: "Single-use tools, sterilised stations and medical-grade sanitisation.",
    value: 100,
    suffix: "%",
    label: "Sterilised tools",
  },
  {
    icon: HeartHandshake,
    title: "Consultation First",
    copy: "Every service begins with a face-shape, tone and lifestyle consultation.",
    value: 30,
    suffix: " min",
    label: "Free consultation",
  },
];

function Card({ item, index }: { item: (typeof items)[number]; index: number }) {
  const counter = useCounter(item.value);
  const Icon = item.icon;
  return (
    <article
      className="reveal-card luxe-card group bg-card/70 p-8 backdrop-blur-sm"
      style={{ transitionDelay: `${index * 20}ms` }}
    >
      <Icon className="size-8 text-gold transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-12 group-hover:scale-110" />
      <h3 className="mt-6 text-2xl">{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
      <div className="mt-7 flex items-baseline gap-2 border-t border-gold/15 pt-5">
        <span className="font-display text-3xl text-gold-gradient">
          <span ref={counter}>0</span>
          {item.suffix}
        </span>
        <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {item.label}
        </span>
      </div>
    </article>
  );
}

export function WhyChoose() {
  const ref = useReveal<HTMLDivElement>({ selector: ".reveal-card, .reveal-head", stagger: 0.14 });

  return (
    <section id="why" className="relative bg-background py-28 md:py-36">
      <div ref={ref} className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="reveal-head max-w-2xl">
          <p className="eyebrow text-gold">Why Choose SASS</p>
          <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05]">
            A salon experience engineered around <em className="italic">you</em>
          </h2>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Card key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
