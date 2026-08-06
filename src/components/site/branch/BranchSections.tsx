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
          <h2 className="mt-2 font-semibold text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.06]">
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
          <h2 className="mt-2 font-semibold text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.06]">
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
          <h2 className="mt-2 font-semibold text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.06]">Transformations we love</h2>
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
  { name: "Harika Sannidhi", service: "Keratin Treatment", text: "My frizz disappeared for months. The staff explained every step and the ambience is unmatched." },
  { name: "Priya Mantri", service: "Party Makeup", text: "Got compliments all evening. They understood my outfit and matched the look perfectly." },
];

const TRANSITION_DURATION = 1200;
const AUTO_INTERVAL = 7000;

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.5 12.28c0-.86-.08-1.68-.22-2.48H12v4.7h6.45c-.28 1.48-1.11 2.74-2.36 3.58v2.98h3.82c2.24-2.06 3.53-5.1 3.53-8.78z" fill="#4285F4" />
      <path d="M12 24c3.24 0 5.96-1.08 7.94-2.91l-3.82-2.98c-1.08.72-2.45 1.15-4.12 1.15-3.17 0-5.85-2.14-6.81-5.01H1.47v3.09C3.45 21.34 7.39 24 12 24z" fill="#34A853" />
      <path d="M5.19 14.25c-.24-.72-.38-1.49-.38-2.25s.14-1.53.38-2.25V6.66H1.47A11.98 11.98 0 000 12c0 1.93.47 3.75 1.29 5.34l3.9-3.09z" fill="#FBBC05" />
      <path d="M12 4.77c1.78 0 3.38.61 4.64 1.81l3.48-3.48C17.95 1.18 15.23 0 12 0 7.39 0 3.45 2.66 1.47 6.66l3.72 2.89c.96-2.87 3.64-5.01 6.81-5.01z" fill="#EA4335" />
    </svg>
  );
}

export function BranchTestimonials({ branch }: { branch: Branch }) {
  const ref = useReveal<HTMLDivElement>({ selector: ".br-head", stagger: 0.1 });
  const [perView, setPerView] = useState(3);
  const [index, setIndex] = useState(1);
  const [noTransition, setNoTransition] = useState(false);
  const paused = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setPerView(w < 1024 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const lead = Math.max(1, Math.floor(perView / 2));
  const trail = Math.max(1, perView - 1);

  const extended = [
    ...reviews.slice(-lead),
    ...reviews,
    ...reviews.slice(0, trail),
  ].map((r, i) => ({ ...r, extKey: i }));

  const itemWidth = 100 / perView;
  const translate = 50 - (index + 0.5) * itemWidth;

  useEffect(() => {
    setNoTransition(true);
    setIndex(lead);
    const t = setTimeout(() => setNoTransition(false), 60);
    return () => clearTimeout(t);
  }, [perView, lead]);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) setIndex((v) => v + 1);
    }, AUTO_INTERVAL);
    return () => clearInterval(id);
  }, [perView, lead]);

  useEffect(() => {
    const maxIndex = reviews.length + lead;
    if (index !== maxIndex) return;
    const t = setTimeout(() => {
      setNoTransition(true);
      setIndex(lead);
      const restore = setTimeout(() => setNoTransition(false), 60);
      return () => clearTimeout(restore);
    }, TRANSITION_DURATION);
    return () => clearTimeout(t);
  }, [index, lead]);

  const activeReal = (index - lead + reviews.length) % reviews.length;

  return (
    <section className="bg-cream py-24 text-foreground md:py-32">
      <div ref={ref} className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="br-head text-center">
          <p className="section-eyebrow text-gold">Client Testimonials</p>
          <h2 className="mx-auto mt-2 max-w-2xl font-semibold text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.06]">
            Loved by <span className="text-gold">{branch.city}</span>
          </h2>
          <div className="mx-auto mt-6 flex w-fit items-center gap-4 rounded-full border border-gold/25 bg-white px-6 py-3 shadow-luxe">
            <GoogleLogo className="size-6" />
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-foreground">4.9</span>
                <span className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-3 fill-gold text-gold" />
                  ))}
                </span>
              </div>
              <p className="text-[0.65rem] text-muted-foreground">Google Reviews · 5000+ clients</p>
            </div>
          </div>
        </div>

        <div
          className="relative mt-14 overflow-hidden"
          onMouseEnter={() => (paused.current = true)}
          onMouseLeave={() => (paused.current = false)}
        >
          <div
            className="flex"
            style={{
              transform: `translate3d(${translate}%, 0, 0)`,
              transition: noTransition ? "none" : `transform ${TRANSITION_DURATION}ms cubic-bezier(0.22, 1, 0.36, 1)`,
            }}
          >
            {extended.map((r, i) => {
              const isActive = i === index;
              return (
                <figure
                  key={r.extKey}
                  className="shrink-0 px-3"
                  style={{ width: `${itemWidth}%` }}
                >
                  <div
                    className={`flex h-full flex-col items-center gap-5 rounded-[14px] border p-7 text-center shadow-[0_18px_44px_-30px_rgba(0,0,0,0.45)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 ${
                      isActive
                        ? "border-gold/40 bg-ink text-cream shadow-[0_24px_60px_-20px_rgba(0,0,0,0.55)]"
                        : "border-border/60 bg-white text-foreground"
                    }`}
                  >
                    <span
                      className={`flex size-16 items-center justify-center rounded-full border font-display text-2xl transition-all duration-700 ${
                        isActive ? "border-gold/40 bg-gold/10 text-gold" : "border-gold/30 text-foreground"
                      }`}
                    >
                      {r.name.charAt(0)}
                    </span>
                    <div className="flex flex-col items-center">
                      <div className="flex justify-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star key={s} className="size-3.5 fill-gold text-gold" />
                        ))}
                      </div>
                      <blockquote className={`mt-4 text-sm leading-relaxed ${isActive ? "text-cream/80" : "text-muted-foreground"}`}>
                        “{r.text}”
                      </blockquote>
                      <figcaption className="mt-5">
                        <p className="text-sm font-semibold">– {r.name}</p>
                        <p className={`mt-1 text-xs ${isActive ? "text-cream/60" : "text-muted-foreground"}`}>{r.service}</p>
                      </figcaption>
                      <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-gold/30 px-3 py-1 text-[0.6rem] uppercase tracking-[0.18em] text-gold">
                        <GoogleLogo className="size-3" /> Google review
                      </div>
                    </div>
                  </div>
                </figure>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center gap-2.5">
            {reviews.map((_, d) => (
              <button
                key={d}
                aria-label={`Go to review ${d + 1}`}
                onClick={() => setIndex(d + lead)}
                className={`size-2.5 rounded-full transition-all duration-500 ${d === activeReal ? "bg-gold" : "bg-border"}`}
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
          <h2 className="mt-2 font-semibold text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.06]">Inside the studio</h2>
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
