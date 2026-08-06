import {
  BadgeCheck, Sparkles, Cpu, Wallet, MessageCircle, ShieldCheck,
  Scissors, Droplets, Palette, Waves, Flower2, Zap, Wind, Layers, Crown, HeartPulse, Syringe, Sun,
  Hand, Footprints, Gem, Brush, Leaf, Star,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useReveal } from "@/lib/motion";
import { LuxeButton } from "../LuxeButton";
import haircut from "@/assets/svc-haircut.jpg";
import hairspa from "@/assets/svc-hairspa.jpg";
import colour from "@/assets/svc-colour.jpg";
import smoothening from "@/assets/svc-smoothening.jpg";
import keratin from "@/assets/svc-keratin.jpg";
import facial from "@/assets/svc-facial.jpg";
import makeup from "@/assets/svc-makeup.jpg";
import bridal from "@/assets/svc-bridal.jpg";
import bridalWide from "@/assets/bridal-split.jpg";
import manicure from "@/assets/svc-manicure.jpg";
import pedicure from "@/assets/svc-pedicure.jpg";
import threading from "@/assets/svc-threading.jpg";
import interior from "@/assets/interior.jpg";
import hero from "@/assets/hero.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";

function Head({ eyebrow, title, italic, copy, light }: { eyebrow: string; title: string; italic?: string; copy?: string; light?: boolean }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="section-eyebrow text-gold">{eyebrow}</p>
      <h2 className={`mt-2 font-semibold text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.06] ${light ? "text-cream" : ""}`}>
        {title} {italic && <span className="italic text-gold-gradient">{italic}</span>}
      </h2>
      {copy && <p className={`mt-5 text-sm leading-relaxed ${light ? "text-cream/65" : "text-muted-foreground"}`}>{copy}</p>}
      <div className="mt-6 flex items-center justify-center gap-4">
        <span className="h-px w-12 bg-gold/40" />
        <span className="size-1.5 rotate-45 bg-gold" />
        <span className="h-px w-12 bg-gold/40" />
      </div>
    </div>
  );
}

/* -------- 2. Why choose -------- */
const why: { Icon: LucideIcon; title: string; copy: string }[] = [
  { Icon: BadgeCheck, title: "Certified Professionals", copy: "Internationally trained stylists and skin therapists." },
  { Icon: Sparkles, title: "Premium Products", copy: "L'Oréal, Kérastase, Olaplex, Schwarzkopf and more." },
  { Icon: Cpu, title: "Modern Equipment", copy: "Advanced laser, hydra and hair-analysis technology." },
  { Icon: Wallet, title: "Affordable Pricing", copy: "Transparent luxury with no hidden charges." },
  { Icon: MessageCircle, title: "Personal Consultation", copy: "Every service begins with a one-to-one diagnosis." },
  { Icon: ShieldCheck, title: "100% Hygiene", copy: "Single-use kits and sterilised tools, always." },
];

export function VjaWhy() {
  const ref = useReveal<HTMLDivElement>({ selector: ".v-head, .v-card", stagger: 0.08 });
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <span className="floaty pointer-events-none absolute -right-24 top-16 size-80 rounded-full bg-gold/10 blur-[120px]" />
      <div ref={ref} className="mx-auto max-w-[1200px] px-6">
        <div className="v-head"><Head eyebrow="Why Choose SASS" title="Luxury care, engineered with" italic="precision" /></div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {why.map(({ Icon, title, copy }) => (
            <article
              key={title}
              className="v-card group rounded-[24px] border border-gold/20 bg-card/70 p-8 backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:border-gold hover:shadow-gold"
            >
              <span className="flex size-14 items-center justify-center rounded-full bg-ink text-gold transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">
                <Icon className="size-6" strokeWidth={1.3} />
              </span>
              <h3 className="mt-6 font-display text-xl">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- 3. Hair services -------- */
const hairServices = [
  { title: "Hair Cut", image: haircut },
  { title: "Hair Spa", image: hairspa },
  { title: "Hair Colour", image: colour },
  { title: "Hair Smoothening", image: smoothening },
  { title: "Keratin", image: keratin },
  { title: "Hair Botox", image: hairspa },
  { title: "Straightening", image: smoothening },
  { title: "Extensions", image: hero },
  { title: "Bridal Hair", image: bridal },
  { title: "Hair Fall Therapy", image: interior },
  { title: "PRP Treatment", image: facial },
  { title: "Dandruff Control", image: g1 },
];

export function VjaHairServices() {
  const ref = useReveal<HTMLDivElement>({ selector: ".v-head, .v-tile", stagger: 0.05 });
  return (
    <section id="services" className="bg-cream py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6">
        <div className="v-head"><Head eyebrow="Our Hair Services" title="Hair artistry for" italic="every texture" /></div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {hairServices.map(({ title, image }) => (
            <article key={title} className="v-tile group relative overflow-hidden rounded-[24px] border border-gold/20 shadow-luxe">
              <img
                src={image}
                alt={`${title} in Vijayawada at SASS Hair & Beauty`}
                loading="lazy"
                className="aspect-4/5 w-full object-cover transition-transform duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-lg text-cream">{title}</h3>
                <span className="mt-2 inline-flex translate-y-2 items-center gap-2 text-[0.6rem] uppercase tracking-[0.2em] text-gold opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  View Details →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- 4. Beauty & skin -------- */
const skin: { Icon: LucideIcon; title: string; copy: string }[] = [
  { Icon: Droplets, title: "Hydra Facial", copy: "Deep hydration and instant glow." },
  { Icon: HeartPulse, title: "Medi Facial", copy: "Dermat-grade facials for problem skin." },
  { Icon: Leaf, title: "Acne Treatment", copy: "Clarifying protocols that calm breakouts." },
  { Icon: Palette, title: "Pigmentation", copy: "Even tone with targeted brightening." },
  { Icon: Layers, title: "Chemical Peel", copy: "Controlled resurfacing for fresh skin." },
  { Icon: Sun, title: "Anti Aging", copy: "Firming, lifting and collagen therapy." },
  { Icon: Zap, title: "Carbon Facial", copy: "Laser carbon peel for refined pores." },
  { Icon: Sparkles, title: "Skin Brightening", copy: "Luminous, camera-ready radiance." },
  { Icon: Flower2, title: "Skin Rejuvenation", copy: "Restorative treatments for tired skin." },
];

export function VjaSkin() {
  const ref = useReveal<HTMLDivElement>({ selector: ".v-head, .v-card", stagger: 0.06 });
  return (
    <section className="bg-background py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6">
        <div className="v-head"><Head eyebrow="Beauty & Skin" title="Advanced skin care in" italic="Vijayawada" /></div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skin.map(({ Icon, title, copy }) => (
            <article
              key={title}
              className="v-card group flex gap-5 rounded-[24px] border border-gold/20 bg-card/70 p-7 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:border-gold hover:shadow-gold"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-ink transition-transform duration-700 group-hover:rotate-12">
                <Icon className="size-5" strokeWidth={1.4} />
              </span>
              <div>
                <h3 className="font-display text-lg">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- 5. Laser -------- */
const laser = ["Laser Hair Removal", "Tattoo Removal", "Scar Removal", "Pigmentation Laser", "Stretch Marks", "Skin Tightening"];

export function VjaLaser() {
  const ref = useReveal<HTMLDivElement>({ selector: ".v-head, .v-card", stagger: 0.07 });
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-cream md:py-32">
      <span className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
      <span className="floaty pointer-events-none absolute -left-32 bottom-0 size-96 rounded-full bg-gold/10 blur-[140px]" />
      <div ref={ref} className="relative mx-auto max-w-[1200px] px-6">
        <div className="v-head"><Head light eyebrow="Laser Treatments" title="Precision laser," italic="visible results" /></div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {laser.map((title) => (
            <article
              key={title}
              className="v-card group relative overflow-hidden rounded-[24px] border border-gold/25 bg-white/5 p-8 backdrop-blur-md transition-all duration-700 hover:-translate-y-2 hover:border-gold hover:shadow-gold"
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px -translate-x-full bg-gold-gradient transition-transform duration-1000 group-hover:translate-x-0" />
              <Zap className="size-6 text-gold transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110" strokeWidth={1.3} />
              <h3 className="mt-6 font-display text-xl">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/60">
                US-FDA approved technology, performed by trained clinicians.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- 6. Bridal -------- */
const bridalCards = ["HD Makeup", "Airbrush", "Reception", "Engagement", "Bridal Makeup", "Pre Bridal", "Wedding Packages"];

export function VjaBridal() {
  const ref = useReveal<HTMLDivElement>({ selector: ".v-head, .v-card, .v-img", stagger: 0.07 });
  return (
    <section className="bg-cream py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="v-img overflow-hidden rounded-[24px] border border-gold/25 shadow-luxe">
            <img
              src={bridalWide}
              alt="Bridal makeup in Vijayawada by SASS Hair & Beauty"
              loading="lazy"
              className="aspect-4/5 w-full object-cover transition-transform duration-[1400ms] hover:scale-105"
            />
          </div>
          <div>
            <p className="v-head section-eyebrow text-gold">Bridal Services</p>
            <h2 className="v-head mt-2 font-semibold text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.06]">
              Your wedding day, <span className="italic text-gold-gradient">flawless</span>
            </h2>
            <p className="v-head mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
              A dedicated bridal suite, senior makeup artists and pre-bridal skin programmes designed
              months ahead of your muhurtham.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {bridalCards.map((c) => (
                <span
                  key={c}
                  className="v-card rounded-full border border-gold/30 bg-card px-5 py-2.5 font-button text-[0.65rem] uppercase tracking-[0.16em] transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-gold"
                >
                  {c}
                </span>
              ))}
            </div>
            <div className="v-card mt-10">
              <LuxeButton as="a" href="#book">Book Bridal Consultation</LuxeButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------- 7. Nail & spa -------- */
const nails = [
  { title: "Manicure", image: manicure, Icon: Hand, span: "row-span-2" },
  { title: "Pedicure", image: pedicure, Icon: Footprints, span: "" },
  { title: "Gel Nails", image: makeup, Icon: Gem, span: "" },
  { title: "Nail Extensions", image: threading, Icon: Brush, span: "" },
  { title: "Head Massage", image: hairspa, Icon: Flower2, span: "row-span-2" },
  { title: "Body Massage", image: g2, Icon: Waves, span: "" },
  { title: "Luxury Spa", image: interior, Icon: Leaf, span: "" },
];

export function VjaNails() {
  const ref = useReveal<HTMLDivElement>({ selector: ".v-head, .v-tile", stagger: 0.06 });
  return (
    <section className="bg-background py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6">
        <div className="v-head"><Head eyebrow="Nail & Spa" title="Slow luxury for" italic="hands, feet & soul" /></div>
        <div className="mt-14 grid auto-rows-[190px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {nails.map(({ title, image, Icon, span }) => (
            <article key={title} className={`v-tile group relative overflow-hidden rounded-[24px] border border-gold/20 ${span}`}>
              <img
                src={image}
                alt={`${title} at SASS Hair & Beauty Vijayawada`}
                loading="lazy"
                className="size-full object-cover transition-transform duration-[1300ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-5">
                <Icon className="size-5 text-gold transition-transform duration-500 group-hover:rotate-12" strokeWidth={1.4} />
                <h3 className="font-display text-lg text-cream">{title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- 8. Process -------- */
const steps = [
  { n: "01", title: "Consultation", copy: "We listen first — lifestyle, history and goals." },
  { n: "02", title: "Hair & Skin Analysis", copy: "Digital scalp and skin diagnostics." },
  { n: "03", title: "Treatment", copy: "Your personalised protocol, expertly delivered." },
  { n: "04", title: "Aftercare", copy: "Home-care routine and product prescription." },
  { n: "05", title: "Follow Up", copy: "Review appointments to track your progress." },
];

export function VjaProcess() {
  const ref = useReveal<HTMLDivElement>({ selector: ".v-head, .v-step", stagger: 0.1 });
  return (
    <section className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6">
        <div className="v-head"><Head eyebrow="Our Process" title="Five steps to your" italic="transformation" /></div>
        <div className="relative mt-16">
          <span className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-gold/10 via-gold/60 to-gold/10 md:block" />
          <div className="space-y-6">
            {steps.map(({ n, title, copy }) => (
              <div key={n} className="v-step group relative flex gap-6 rounded-[24px] border border-gold/20 bg-card/80 p-7 pl-7 backdrop-blur-sm transition-all duration-700 hover:-translate-y-1 hover:border-gold hover:shadow-gold md:ml-0">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-ink font-button text-xs text-gold transition-colors duration-500 group-hover:bg-gold-gradient group-hover:text-ink">
                  {n}
                </span>
                <div>
                  <h3 className="font-display text-xl">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------- 9. Before / after carousel -------- */
const categories = [
  { label: "Hair", before: hairspa, after: colour },
  { label: "Skin", before: facial, after: g1 },
  { label: "Bridal", before: makeup, after: bridal },
  { label: "Laser", before: threading, after: facial },
  { label: "Nails", before: manicure, after: pedicure },
];

export function VjaBeforeAfter() {
  const ref = useReveal<HTMLDivElement>({ selector: ".v-head, .v-tile", stagger: 0.07 });
  return (
    <section className="bg-ink py-24 text-cream md:py-32">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6">
        <div className="v-head"><Head light eyebrow="Before & After" title="Real clients, real" italic="transformations" /></div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ label, before, after }) => (
            <article key={label} className="v-tile group overflow-hidden rounded-[24px] border border-gold/25 bg-white/5">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <img src={before} alt={`${label} before`} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <span className="absolute left-2 top-2 rounded-full bg-black/65 px-2.5 py-1 text-[0.55rem] uppercase tracking-[0.18em]">Before</span>
                </div>
                <div className="relative">
                  <img src={after} alt={`${label} after`} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <span className="absolute right-2 top-2 rounded-full bg-gold px-2.5 py-1 text-[0.55rem] uppercase tracking-[0.18em] text-ink">After</span>
                </div>
              </div>
              <div className="flex items-center justify-between px-5 py-4">
                <h3 className="font-display text-lg">{label}</h3>
                <Star className="size-4 text-gold" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Head as VjaHead };
