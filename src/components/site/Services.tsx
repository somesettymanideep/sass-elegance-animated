import { ArrowUpRight } from "lucide-react";
import { useReveal } from "@/lib/motion";
import interior from "@/assets/interior.jpg";
import bridal from "@/assets/bridal.jpg";
import hero from "@/assets/hero.jpg";

const services = [
  {
    title: "Precision Cutting",
    copy: "Face-mapped haircuts, dry-cut finishing and texture work tailored to your hair fall.",
    price: "from ₹899",
    img: hero,
  },
  {
    title: "Couture Colour",
    copy: "Balayage, global gloss, root melts and colour correction using bond-protecting systems.",
    price: "from ₹2,499",
    img: interior,
  },
  {
    title: "Bridal & Occasion",
    copy: "HD and airbrush artistry, draping, and trials designed for South Indian ceremonies.",
    price: "from ₹9,999",
    img: bridal,
  },
  {
    title: "Hair Spa & Repair",
    copy: "Kérastase rituals, Olaplex bond therapy and scalp treatments for damaged hair.",
    price: "from ₹1,299",
    img: interior,
  },
  {
    title: "Advanced Skin",
    copy: "Hydra-glow facials, chemical peels and dermaplaning by certified aestheticians.",
    price: "from ₹1,999",
    img: hero,
  },
  {
    title: "Nails & Grooming",
    copy: "Gel extensions, luxury pedicures and men's grooming in a dedicated studio.",
    price: "from ₹699",
    img: bridal,
  },
];

export function Services() {
  const ref = useReveal<HTMLDivElement>({ selector: ".svc-card, .reveal-head", stagger: 0.1 });

  return (
    <section id="services" className="relative overflow-hidden bg-ink py-28 text-cream md:py-36">
      <div className="pointer-events-none absolute -left-24 top-1/3 size-72 rounded-full bg-gold/10 blur-[110px]" />
      <div ref={ref} className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="reveal-head flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow text-gold">Featured Services</p>
            <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05] text-cream">
              Signature rituals from our menu
            </h2>
          </div>
          <a href="#contact" className="link-underline text-sm tracking-[0.2em] text-cream/70">
            VIEW FULL MENU
          </a>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="svc-card group relative overflow-hidden rounded-[1.5rem] border border-gold/15 bg-white/[0.03] transition-[transform,box-shadow,border-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2.5 hover:border-gold/60 hover:shadow-gold"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={800}
                  height={560}
                  className="size-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <span className="absolute right-4 top-4 rounded-full border border-gold/40 bg-black/40 px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-gold backdrop-blur">
                  {s.price}
                </span>
              </div>
              <div className="p-7">
                <h3 className="text-2xl text-cream">{s.title}</h3>
                <span className="mt-3 block h-px w-10 origin-left bg-gold-gradient transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-[5]" />
                <p className="mt-5 text-sm leading-relaxed text-cream/60">{s.copy}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex translate-y-2 items-center gap-2 text-[0.7rem] uppercase tracking-[0.22em] text-gold opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  Book this <ArrowUpRight className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
