import { useEffect, useRef, useState } from "react";
import {
  Sparkles, BadgeCheck, Crown, Droplets, Palette, ShieldCheck, Gem, MessageCircle,
  Scissors, Waves, Flower2, Feather, Wind, Smile, Hand, Star, MoveHorizontal, X,
  ChevronLeft, ChevronRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useReveal } from "@/lib/motion";
import type { Branch } from "@/lib/branches";
import haircut from "@/assets/svc-haircut.jpg";
import colour from "@/assets/svc-colour.jpg";
import keratin from "@/assets/svc-keratin.jpg";
import smoothening from "@/assets/svc-smoothening.jpg";
import bridalMakeup from "@/assets/svc-bridal.jpg";
import bridalHair from "@/assets/bridal.jpg";
import pedicure from "@/assets/svc-pedicure.jpg";
import threading from "@/assets/svc-threading.jpg";
import interior from "@/assets/interior.jpg";
import hero from "@/assets/hero.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import before from "@/assets/before.jpg";
import after from "@/assets/after.jpg";

/* ---------------- Section 2 — Why Choose SASS ---------------- */

const reasons: { Icon: LucideIcon; title: string }[] = [
  { Icon: Gem, title: "Premium Salon Experience" },
  { Icon: BadgeCheck, title: "Certified Hair Stylists" },
  { Icon: Crown, title: "Bridal Makeup Experts" },
  { Icon: Droplets, title: "Luxury Hair Treatments" },
  { Icon: Palette, title: "International Colour Techniques" },
  { Icon: ShieldCheck, title: "Hygiene & Safety Standards" },
  { Icon: Sparkles, title: "Premium Imported Products" },
  { Icon: MessageCircle, title: "Personalised Consultation" },
];

export function BranchWhy({ branch }: { branch: Branch }) {
  const ref = useReveal<HTMLDivElement>({ selector: ".bw-item, .bw-head", stagger: 0.07 });
  return (
    <section className="bg-background py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="bw-head mx-auto max-w-2xl text-center">
          <p className="section-eyebrow text-gold">Why Choose SASS {branch.city}</p>
          <h2 className="mt-4 text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.06]">
            A salon built on <span className="italic text-gold-gradient">detail</span>
          </h2>
          <div className="mt-5 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold/40" />
            <span className="size-1.5 rotate-45 bg-gold" />
            <span className="h-px w-12 bg-gold/40" />
          </div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ Icon, title }) => (
            <article
              key={title}
              className="bw-item group rounded-[20px] border border-gold/20 bg-card/70 p-7 backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:border-gold hover:shadow-gold"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-ink text-gold transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">
                <Icon className="size-5" strokeWidth={1.5} />
              </span>
              <h3 className="mt-6 font-display text-lg leading-snug">{title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 3 — Signature Services ---------------- */

const services: { title: string; copy: string; image: string; Icon: LucideIcon }[] = [
  { title: "Hair Cuts", copy: "Precision cuts shaped to your face and lifestyle.", image: haircut, Icon: Scissors },
  { title: "Hair Styling", copy: "Blow-dries, curls and editorial finishes for any occasion.", image: hero, Icon: Wind },
  { title: "Threading", copy: "Perfectly shaped brows with gentle, precise threading.", image: threading, Icon: Feather },
  { title: "Fashion Colours", copy: "Balayage, global colour and creative fashion shades.", image: colour, Icon: Palette },
  { title: "Hair Smoothening", copy: "Silky, manageable hair with lasting smoothness.", image: smoothening, Icon: Waves },
  { title: "Keratin Treatment", copy: "Frizz-free shine with salon-grade keratin therapy.", image: keratin, Icon: Droplets },
  { title: "Hair Spa", copy: "Deep-conditioning rituals that restore scalp health.", image: g1, Icon: Sparkles },
  { title: "Facials", copy: "Advanced facials tailored to your skin type.", image: g2, Icon: Smile },
  { title: "Pedicure", copy: "Luxury foot care in our dedicated lounge.", image: pedicure, Icon: Flower2 },
  { title: "Manicure", copy: "Immaculate nails with premium finishes.", image: pedicure, Icon: Hand },
  { title: "Bridal Makeup", copy: "HD bridal artistry that lasts the whole muhurtham.", image: bridalMakeup, Icon: Crown },
  { title: "Party Makeup", copy: "Occasion glam with a soft, camera-ready finish.", image: bridalHair, Icon: Star },
  { title: "Advanced Hair Treatments", copy: "Olaplex bond therapy and scalp correction protocols.", image: interior, Icon: Gem },
];

export function BranchServices() {
  const ref = useReveal<HTMLDivElement>({ selector: ".bs-card, .bs-head", stagger: 0.06 });
  return (
    <section id="services" className="bg-cream py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="bs-head mx-auto max-w-2xl text-center">
          <p className="section-eyebrow text-gold">Signature Services</p>
          <h2 className="mt-4 text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.06]">
            The full luxury menu
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, copy, image, Icon }) => (
            <article
              key={title}
              className="bs-card group relative flex flex-col overflow-hidden rounded-[22px] border border-gold/25 bg-background p-3 text-center shadow-luxe transition-[transform,box-shadow,border-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:border-gold hover:shadow-gold"
            >
              <div className="overflow-hidden rounded-[18px]">
                <img
                  src={image}
                  alt={`${title} at SASS Hair & Beauty`}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="aspect-4/5 w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
              </div>
              <div className="relative -mt-7 flex justify-center">
                <span className="flex size-14 items-center justify-center rounded-full border border-gold/60 bg-ink text-gold shadow-gold transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">
                  <Icon className="size-6" strokeWidth={1.4} />
                </span>
              </div>
              <div className="flex flex-1 flex-col px-4 pb-6 pt-3">
                <h3 className="font-display text-lg uppercase tracking-[0.06em]">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                <a
                  href="#consultation"
                  className="mx-auto mt-5 inline-block font-button text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-gold transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100"
                >
                  Learn more
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 4 — Transformations ---------------- */

function Slider() {
  const [pos, setPos] = useState(42);
  const wrap = useRef<HTMLDivElement | null>(null);
  const move = (clientX: number) => {
    const rect = wrap.current?.getBoundingClientRect();
    if (!rect) return;
    setPos(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  };
  return (
    <div
      ref={wrap}
      className="relative aspect-4/5 w-full select-none overflow-hidden rounded-[24px] border border-gold/25 sm:aspect-16/10"
      onPointerMove={(e) => e.buttons === 1 && move(e.clientX)}
      onPointerDown={(e) => move(e.clientX)}
      onTouchMove={(e) => e.touches[0] && move(e.touches[0].clientX)}
    >
      <img src={after} alt="After transformation" loading="lazy" className="absolute inset-0 size-full object-cover object-top" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={before} alt="Before transformation" loading="lazy" className="size-full object-cover object-top" />
      </div>
      <div className="absolute inset-y-0 w-px bg-gold-gradient" style={{ left: `${pos}%` }}>
        <span className="absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold-gradient text-ink shadow-gold">
          <MoveHorizontal className="size-5" />
        </span>
      </div>
    </div>
  );
}

const transformations = [
  { title: "Hair Colour", image: colour },
  { title: "Keratin", image: keratin },
  { title: "Smoothening", image: smoothening },
  { title: "Haircut", image: haircut },
  { title: "Bridal Makeover", image: bridalMakeup },
];

export function BranchTransformations() {
  const ref = useReveal<HTMLDivElement>({ selector: ".bt-item, .bt-head", stagger: 0.08 });
  return (
    <section className="bg-background py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="bt-head mx-auto max-w-2xl text-center">
          <p className="section-eyebrow text-gold">Before &amp; After</p>
          <h2 className="mt-4 text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.06]">Transformations we love</h2>
          <p className="mt-4 text-sm text-muted-foreground">Drag the handle to reveal the difference.</p>
        </div>

        <div className="bt-item mt-12"><Slider /></div>

        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-5">
          {transformations.map((t) => (
            <figure key={t.title} className="bt-item group relative overflow-hidden rounded-[18px] border border-gold/20">
              <img
                src={t.image}
                alt={`${t.title} transformation`}
                loading="lazy"
                className="aspect-4/5 w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-center text-[0.62rem] uppercase tracking-[0.2em] text-cream">
                {t.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 5 — Testimonials ---------------- */

const reviews = [
  { name: "Sravani Reddy", service: "Balayage & Gloss", text: "The consultation alone was worth it — they matched the tone to my skin, not to a chart. Best colour I've had." },
  { name: "Anusha Kolli", service: "Bridal Package", text: "They handled my entire bridal party across two days. The makeup held through a 14-hour muhurtham." },
  { name: "Divya Prasad", service: "Olaplex Bond Therapy", text: "Genuinely rescued my hair after a bad smoothening elsewhere. Six months in and it still feels new." },
  { name: "Karthik Varma", service: "Precision Cut", text: "Cleanest, most professional studio in the city. Booking is effortless and the stylists actually listen." },
];

export function BranchTestimonials({ branch }: { branch: Branch }) {
  const ref = useReveal<HTMLDivElement>({ selector: ".br-head", stagger: 0.1 });
  const [i, setI] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) setI((v) => (v + 1) % reviews.length);
    }, 5200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-ink py-20 text-cream md:py-28">
      <div ref={ref} className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="br-head text-center">
          <p className="section-eyebrow text-gold">Client Testimonials</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.06]">
            Loved by {branch.city}
          </h2>
        </div>

        <div
          className="relative mt-12 overflow-hidden"
          onMouseEnter={() => (paused.current = true)}
          onMouseLeave={() => (paused.current = false)}
        >
          <div
            className="flex transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translate3d(-${i * 100}%, 0, 0)` }}
          >
            {reviews.map((r) => (
              <figure key={r.name} className="w-full shrink-0 px-1 md:px-10">
                <div className="mx-auto max-w-3xl rounded-[24px] border border-gold/25 bg-white/5 p-10 text-center backdrop-blur-md md:p-14">
                  <span className="mx-auto flex size-16 items-center justify-center rounded-full border border-gold/40 bg-gold/10 font-display text-2xl text-gold">
                    {r.name.charAt(0)}
                  </span>
                  <div className="mt-5 flex justify-center gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <blockquote className="mt-6 font-display text-xl leading-relaxed md:text-2xl">
                    “{r.text}”
                  </blockquote>
                  <figcaption className="mt-7 text-sm uppercase tracking-[0.2em] text-cream/70">
                    {r.name} · <span className="text-gold">{r.service}</span>
                  </figcaption>
                  <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-[0.6rem] uppercase tracking-[0.18em]">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 px-3 py-1.5 text-gold">
                      <BadgeCheck className="size-3.5" /> Verified client
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-cream/20 px-3 py-1.5 text-cream/70">
                      <Star className="size-3.5 fill-gold text-gold" /> Google review
                    </span>
                  </div>
                </div>
              </figure>
            ))}
          </div>

          <div className="mt-9 flex justify-center gap-2">
            {reviews.map((_, d) => (
              <button
                key={d}
                aria-label={`Go to review ${d + 1}`}
                onClick={() => setI(d)}
                className={`h-1 rounded-full transition-all duration-500 ${d === i ? "w-10 bg-gold-gradient" : "w-4 bg-cream/25"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 6 — Gallery ---------------- */

const shots = [
  { src: interior, alt: "Salon interior", cat: "Salon Interior", span: "row-span-2" },
  { src: hero, alt: "Hair styling", cat: "Hair Styling", span: "" },
  { src: colour, alt: "Hair colours", cat: "Hair Colours", span: "" },
  { src: bridalMakeup, alt: "Bridal makeup", cat: "Bridal Makeup", span: "row-span-2" },
  { src: g2, alt: "Facials", cat: "Facials", span: "" },
  { src: pedicure, alt: "Pedicure & manicure", cat: "Pedicure", span: "" },
  { src: keratin, alt: "Hair treatments", cat: "Hair Treatments", span: "row-span-2" },
  { src: g1, alt: "Manicure detail", cat: "Manicure", span: "" },
];

export function BranchGallery() {
  const ref = useReveal<HTMLDivElement>({ selector: ".bg-item, .bg-head", stagger: 0.07 });
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((v) => ((v ?? 0) + 1) % shots.length);
      if (e.key === "ArrowLeft") setLightbox((v) => ((v ?? 0) - 1 + shots.length) % shots.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <section className="bg-cream py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="bg-head mx-auto max-w-2xl text-center">
          <p className="section-eyebrow text-gold">Gallery</p>
          <h2 className="mt-4 text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.06]">Inside the studio</h2>
        </div>

        <div className="mt-12 grid auto-rows-[170px] grid-cols-2 gap-4 md:auto-rows-[210px] md:grid-cols-4">
          {shots.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setLightbox(idx)}
              className={`bg-item group relative overflow-hidden rounded-[18px] border border-gold/20 ${s.span}`}
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="size-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
              />
              <span className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-transparent p-4 text-[0.6rem] uppercase tracking-[0.2em] text-cream opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {s.cat}
              </span>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/92 p-6 backdrop-blur-sm"
          style={{ animation: "fade-in 0.35s ease-out both" }}
          onClick={() => setLightbox(null)}
        >
          <button aria-label="Close" className="absolute right-6 top-6 rounded-full border border-gold/30 p-3 text-cream">
            <X className="size-5" />
          </button>
          <button
            aria-label="Previous"
            onClick={(e) => { e.stopPropagation(); setLightbox((v) => ((v ?? 0) - 1 + shots.length) % shots.length); }}
            className="absolute left-4 rounded-full border border-gold/30 p-3 text-cream md:left-10"
          >
            <ChevronLeft className="size-5" />
          </button>
          <img
            src={shots[lightbox]!.src}
            alt={shots[lightbox]!.alt}
            className="max-h-[84vh] max-w-[90vw] rounded-2xl object-contain"
            style={{ animation: "scale-in 0.45s cubic-bezier(0.22,1,0.36,1) both" }}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            aria-label="Next"
            onClick={(e) => { e.stopPropagation(); setLightbox((v) => ((v ?? 0) + 1) % shots.length); }}
            className="absolute right-4 rounded-full border border-gold/30 p-3 text-cream md:right-10"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      )}
    </section>
  );
}
