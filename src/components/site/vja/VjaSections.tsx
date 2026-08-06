import { useState } from "react";
import {
  Star, Check, Instagram, Facebook, Phone, Mail, MapPin, Clock, Plus, MessageCircle, Navigation,
} from "lucide-react";
import { useReveal } from "@/lib/motion";
import { LuxeButton } from "../LuxeButton";
import { VjaHead as Head } from "./VjaServices";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import interior from "@/assets/interior.jpg";
import makeup from "@/assets/svc-makeup.jpg";
import colour from "@/assets/svc-colour.jpg";
import facial from "@/assets/svc-facial.jpg";

const PHONE = "+91 90000 11122";
const TEL = "tel:+919000011122";
const WA = "https://wa.me/919000011122";

/* -------- 10. Testimonials -------- */
const reviews = [
  { name: "Sravani Movva", area: "Labbipet", image: client1, text: "The keratin treatment transformed my hair completely. Truly the best hair clinic in Vijayawada." },
  { name: "Divya Reddy", area: "Benz Circle", image: client2, text: "My bridal makeup lasted the entire wedding day. The team is professional and so warm." },
  { name: "Anusha K.", area: "Patamata", image: client3, text: "Hydra facial results were instant. Clean, hygienic and genuinely premium service." },
];

export function VjaTestimonials() {
  const ref = useReveal<HTMLDivElement>({ selector: ".v-head, .v-card", stagger: 0.09 });
  return (
    <section className="bg-background py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6">
        <div className="v-head"><Head eyebrow="Client Testimonials" title="Loved across" italic="Vijayawada" /></div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map(({ name, area, image, text }) => (
            <article
              key={name}
              className="v-card group rounded-[24px] border border-gold/20 bg-card/70 p-8 backdrop-blur-md transition-all duration-700 hover:-translate-y-2 hover:border-gold hover:shadow-gold"
            >
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">“{text}”</p>
              <div className="mt-7 flex items-center gap-3">
                <img src={image} alt={name} loading="lazy" className="size-11 rounded-full object-cover ring-2 ring-gold/40" />
                <div>
                  <p className="font-display text-base leading-none">{name}</p>
                  <p className="mt-1 text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground">{area}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- 11. Packages -------- */
const packages = [
  { name: "Hair Care", price: "₹2,499", best: false, items: ["Cut & blow dry", "Hair spa ritual", "Scalp analysis", "Home-care advice"] },
  { name: "Skin Care", price: "₹3,499", best: false, items: ["Hydra facial", "Clean-up", "Brightening mask", "Dermat consult"] },
  { name: "Bridal", price: "₹24,999", best: true, items: ["Pre-bridal 4 sessions", "HD bridal makeup", "Hair styling & draping", "Reception look"] },
  { name: "Membership", price: "₹9,999/yr", best: false, items: ["20% off all services", "Priority booking", "2 free facials", "Birthday makeover"] },
  { name: "Festival Offer", price: "Flat 30% off", best: false, items: ["On colour & keratin", "Weekday exclusive", "Valid all branches", "Limited period"] },
];

export function VjaPackages() {
  const ref = useReveal<HTMLDivElement>({ selector: ".v-head, .v-card", stagger: 0.08 });
  return (
    <section className="bg-cream py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6">
        <div className="v-head"><Head eyebrow="Packages" title="Transparent luxury" italic="pricing" /></div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map(({ name, price, best, items }) => (
            <article
              key={name}
              className={`v-card relative rounded-[24px] border p-8 transition-all duration-700 hover:-translate-y-2 hover:shadow-gold ${
                best ? "border-gold bg-ink text-cream shadow-gold" : "border-gold/20 bg-card"
              }`}
            >
              {best && (
                <span className="absolute -top-3 left-8 rounded-full bg-gold-gradient px-4 py-1 font-button text-[0.55rem] uppercase tracking-[0.2em] text-ink">
                  Best Seller
                </span>
              )}
              <h3 className="font-display text-2xl">{name}</h3>
              <p className="mt-3 font-display text-3xl text-gold">{price}</p>
              <ul className="mt-6 space-y-3">
                {items.map((i) => (
                  <li key={i} className={`flex items-start gap-2.5 text-sm ${best ? "text-cream/75" : "text-muted-foreground"}`}>
                    <Check className="mt-0.5 size-4 shrink-0 text-gold" /> {i}
                  </li>
                ))}
              </ul>
              <a
                href="#book"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-gold/50 px-6 py-3 font-button text-[0.65rem] uppercase tracking-[0.2em] transition-all duration-500 hover:-translate-y-1 hover:bg-gold-gradient hover:text-ink"
              >
                Book Now
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- 12. Experts -------- */
const experts = [
  { name: "Ramya Sri", role: "Senior Hair Stylist", cert: "L'Oréal Colour Certified", image: g1 },
  { name: "Kavya Nair", role: "Skin Expert", cert: "Advanced Aesthetics", image: facial },
  { name: "Meghana R.", role: "Beauty Therapist", cert: "Spa & Wellness Diploma", image: g2 },
  { name: "Pooja Sharma", role: "Makeup Artist", cert: "HD & Airbrush Pro", image: makeup },
];

export function VjaExperts() {
  const ref = useReveal<HTMLDivElement>({ selector: ".v-head, .v-tile", stagger: 0.08 });
  return (
    <section className="bg-background py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6">
        <div className="v-head"><Head eyebrow="Meet Our Experts" title="The hands behind the" italic="transformations" /></div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {experts.map(({ name, role, cert, image }) => (
            <article key={name} className="v-tile group overflow-hidden rounded-[24px] border border-gold/20 bg-card transition-all duration-700 hover:-translate-y-2 hover:border-gold hover:shadow-gold">
              <div className="relative overflow-hidden">
                <img src={image} alt={`${name}, ${role} at SASS Vijayawada`} loading="lazy" className="aspect-4/5 w-full object-cover transition-transform duration-[1300ms] group-hover:scale-110" />
                <div className="absolute inset-x-0 bottom-0 flex translate-y-full justify-center gap-3 bg-black/65 py-3 backdrop-blur-md transition-transform duration-500 group-hover:translate-y-0">
                  <Instagram className="size-4 text-gold" />
                  <Facebook className="size-4 text-gold" />
                  <MessageCircle className="size-4 text-gold" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg">{name}</h3>
                <p className="mt-1 text-[0.62rem] uppercase tracking-[0.18em] text-gold">{role}</p>
                <p className="mt-2 text-xs text-muted-foreground">{cert}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- 13. FAQ -------- */
export const vjaFaqs = [
  { q: "Where is the SASS Hair & Beauty clinic in Vijayawada located?", a: "We are on MG Road, Labbipet, Vijayawada 520010 — minutes from Benz Circle and easily reachable from Governorpet and Patamata." },
  { q: "Do I need an appointment?", a: "Walk-ins are welcome, but we recommend booking so your preferred stylist and consultation slot are reserved." },
  { q: "Which products do you use?", a: "Only globally certified professional brands including L'Oréal, Kérastase, Olaplex, Schwarzkopf and Wella." },
  { q: "How much does laser hair removal cost in Vijayawada?", a: "Pricing depends on the treatment area and sessions required. Your first consultation and patch test are complimentary." },
  { q: "Do you offer bridal packages?", a: "Yes — pre-bridal skin and hair programmes, HD and airbrush bridal makeup, reception and engagement looks with a dedicated bridal suite." },
];

export function VjaFAQ() {
  const ref = useReveal<HTMLDivElement>({ selector: ".v-head, .v-faq", stagger: 0.07 });
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-cream py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-[900px] px-6">
        <div className="v-head"><Head eyebrow="FAQ" title="Questions, answered" /></div>
        <div className="mt-12 space-y-4">
          {vjaFaqs.map(({ q, a }, i) => {
            const active = open === i;
            return (
              <div
                key={q}
                className={`v-faq overflow-hidden rounded-[24px] border bg-card transition-all duration-500 ${
                  active ? "border-gold shadow-gold" : "border-gold/20 hover:-translate-y-1 hover:border-gold/60"
                }`}
              >
                <button
                  onClick={() => setOpen(active ? null : i)}
                  aria-expanded={active}
                  className="flex w-full items-center gap-4 px-6 py-5 text-left"
                >
                  <span className={`flex size-9 shrink-0 items-center justify-center rounded-full border border-gold/40 font-button text-[0.6rem] transition-all duration-500 ${active ? "bg-gold-gradient text-ink" : "text-gold"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-display text-base md:text-lg">{q}</span>
                  <Plus className={`size-4 shrink-0 text-gold transition-transform duration-500 ${active ? "rotate-135" : ""}`} />
                </button>
                <div className={`grid transition-all duration-500 ${active ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 pl-19 text-sm leading-relaxed text-muted-foreground">{a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------- 14. Blogs -------- */
const blogs = [
  { title: "Keratin vs Smoothening: which suits Vijayawada humidity?", cat: "Hair Care", date: "12 Jul 2026", image: colour },
  { title: "The 90-day pre-bridal skin calendar our brides follow", cat: "Bridal", date: "28 Jun 2026", image: makeup },
  { title: "Is laser hair removal safe? A clinician explains", cat: "Skin & Laser", date: "09 Jun 2026", image: facial },
];

export function VjaBlogs() {
  const ref = useReveal<HTMLDivElement>({ selector: ".v-head, .v-tile", stagger: 0.09 });
  return (
    <section className="bg-background py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6">
        <div className="v-head"><Head eyebrow="Latest Blogs" title="Beauty notes from our" italic="studio" /></div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {blogs.map(({ title, cat, date, image }) => (
            <article key={title} className="v-tile group overflow-hidden rounded-[24px] border border-gold/20 bg-card transition-all duration-700 hover:-translate-y-2 hover:border-gold hover:shadow-gold">
              <div className="overflow-hidden">
                <img src={image} alt={title} loading="lazy" className="aspect-16/10 w-full object-cover transition-transform duration-[1300ms] group-hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.2em] text-gold">
                  <span>{cat}</span><span className="size-1 rounded-full bg-gold/50" /><span className="text-muted-foreground">{date}</span>
                </div>
                <h3 className="mt-4 font-display text-lg leading-snug">{title}</h3>
                <span className="link-underline mt-4 inline-block font-button text-[0.62rem] uppercase tracking-[0.2em] text-gold">Read More</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- 15. Service areas -------- */
const areas = ["Benz Circle", "Labbipet", "Governorpet", "Patamata", "Poranki", "Kanuru", "Moghalrajpuram", "Salon Near Me"];

export function VjaAreas() {
  const ref = useReveal<HTMLDivElement>({ selector: ".v-head, .v-card, .v-map", stagger: 0.05 });
  return (
    <section className="bg-cream py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6">
        <div className="v-head"><Head eyebrow="Service Areas" title="Serving all of" italic="Vijayawada" /></div>
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid grid-cols-2 gap-4 self-start">
            {areas.map((a) => (
              <div key={a} className="v-card group flex items-center gap-3 rounded-[24px] border border-gold/20 bg-card px-5 py-4 transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-gold">
                <MapPin className="size-4 shrink-0 text-gold transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:scale-110" />
                <span className="text-xs font-medium">{a}</span>
              </div>
            ))}
          </div>
          <div className="v-map overflow-hidden rounded-[24px] border border-gold/25 shadow-luxe">
            <iframe
              title="SASS Hair & Beauty Vijayawada service area map"
              src="https://www.google.com/maps?q=MG%20Road%20Labbipet%20Vijayawada&output=embed"
              loading="lazy"
              className="h-[420px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------- 16. Book appointment -------- */
const serviceOptions = ["Hair Cut & Styling", "Hair Colour", "Keratin / Smoothening", "Hydra / Medi Facial", "Laser Treatment", "Bridal Makeup", "Nails & Spa"];

export function VjaBooking() {
  const ref = useReveal<HTMLDivElement>({ selector: ".v-col", stagger: 0.12 });
  const [form, setForm] = useState({ name: "", phone: "", service: serviceOptions[0], date: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello SASS Vijayawada,%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}%0APreferred date: ${form.date}%0A%0A${form.message}`;
    window.open(`${WA}?text=${text}`, "_blank");
  };

  const field = "w-full rounded-[14px] border border-gold/25 bg-black/25 px-4 py-3 text-sm text-cream placeholder:text-cream/40 outline-none transition-colors focus:border-gold";

  return (
    <section id="book" className="relative overflow-hidden bg-ink py-24 text-cream md:py-32">
      <span className="floaty pointer-events-none absolute -right-32 top-10 size-96 rounded-full bg-gold/10 blur-[140px]" />
      <div ref={ref} className="relative mx-auto grid max-w-[1200px] gap-12 px-6 lg:grid-cols-2">
        <div className="v-col rounded-[24px] border border-gold/25 bg-white/5 p-8 backdrop-blur-md md:p-10">
          <p className="section-eyebrow text-gold">Book Appointment</p>
          <h2 className="mt-2 font-semibold text-[clamp(1.8rem,3.4vw,2.6rem)] leading-[1.08]">
            Reserve your <span className="italic text-gold-gradient">slot</span>
          </h2>
          <form onSubmit={submit} className="mt-8 space-y-4">
            <input required placeholder="Your name" className={field} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input required type="tel" placeholder="Phone number" className={field} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            <select className={field} value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
              {serviceOptions.map((s) => <option key={s} className="text-ink">{s}</option>)}
            </select>
            <input type="date" className={field} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
            <textarea rows={3} placeholder="Anything we should know?" className={field} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <button
              type="submit"
              className="sticky bottom-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 py-3.5 font-button text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink transition-transform duration-500 hover:-translate-y-1"
            >
              <MessageCircle className="size-4" /> Send on WhatsApp
            </button>
          </form>
        </div>

        <div className="v-col space-y-5">
          <a href={WA} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-[24px] border border-gold/25 bg-white/5 p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-gold">
            <MessageCircle className="size-6 text-gold" strokeWidth={1.4} />
            <div><p className="font-display text-xl">WhatsApp Us</p><p className="mt-1 text-sm text-cream/60">Instant replies, 9 AM – 9 PM</p></div>
          </a>
          <a href={TEL} className="flex items-center gap-4 rounded-[24px] border border-gold/25 bg-white/5 p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-gold">
            <Phone className="size-6 text-gold" strokeWidth={1.4} />
            <div><p className="font-display text-xl">Call Now</p><p className="mt-1 text-sm text-cream/60">{PHONE}</p></div>
          </a>
          <div className="rounded-[24px] border border-gold/25 bg-white/5 p-7 backdrop-blur-md">
            <div className="flex items-center gap-3"><Clock className="size-5 text-gold" strokeWidth={1.4} /><p className="font-display text-xl">Working Hours</p></div>
            <p className="mt-4 text-sm text-cream/70">Monday – Sunday · 9:00 AM – 9:00 PM</p>
            <p className="mt-1.5 text-xs text-cream/45">Open all days including public holidays</p>
          </div>
          <div className="overflow-hidden rounded-[24px] border border-gold/25">
            <img src={interior} alt="SASS Hair & Beauty Vijayawada interior" loading="lazy" className="h-56 w-full object-cover transition-transform duration-[1400ms] hover:scale-105" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------- 17. Contact -------- */
export function VjaContact() {
  const ref = useReveal<HTMLDivElement>({ selector: ".v-head, .v-card, .v-map", stagger: 0.08 });
  const info = [
    { Icon: MapPin, title: "Address", copy: "MG Road, Labbipet, Vijayawada 520010" },
    { Icon: Phone, title: "Phone", copy: PHONE },
    { Icon: Mail, title: "Email", copy: "vijayawada@sasshairbeauty.com" },
    { Icon: Clock, title: "Working Hours", copy: "Mon – Sun · 9:00 AM – 9:00 PM" },
  ];
  return (
    <section className="bg-background py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6">
        <div className="v-head"><Head eyebrow="Contact" title="Visit our Vijayawada" italic="flagship" /></div>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {info.map(({ Icon, title, copy }) => (
              <div key={title} className="v-card rounded-[24px] border border-gold/20 bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-gold">
                <Icon className="size-5 text-gold" strokeWidth={1.4} />
                <p className="mt-5 font-display text-lg">{title}</p>
                <p className="mt-1.5 text-sm text-muted-foreground">{copy}</p>
              </div>
            ))}
            <div className="v-card sm:col-span-2 flex flex-wrap gap-3">
              <LuxeButton as="a" href="#book">Book Appointment</LuxeButton>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=MG+Road+Labbipet+Vijayawada"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gold/45 px-7 py-3.5 font-button text-[0.7rem] font-semibold uppercase tracking-[0.2em] transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:text-gold"
              >
                <Navigation className="size-3.5" /> Get Directions
              </a>
            </div>
          </div>
          <div className="v-map overflow-hidden rounded-[24px] border border-gold/25 shadow-luxe">
            <iframe
              title="SASS Hair & Beauty Vijayawada location map"
              src="https://www.google.com/maps?q=MG%20Road%20Labbipet%20Vijayawada&output=embed"
              loading="lazy"
              className="h-[460px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
