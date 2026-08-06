import { useState, type FormEvent } from "react";
import {
  Check, Clock, Mail, MapPin, Navigation, Phone, MessageCircle, Car, Landmark, Plus,
} from "lucide-react";
import { useReveal } from "@/lib/motion";
import { LuxeButton } from "../LuxeButton";
import type { Branch } from "@/lib/branches";
import { branches } from "@/lib/branches";

const serviceOptions = [
  "Hair Cut", "Hair Styling", "Threading", "Fashion Colours", "Hair Smoothening",
  "Keratin Treatment", "Hair Spa", "Facials", "Pedicure", "Manicure",
  "Bridal Makeup", "Party Makeup", "Advanced Hair Treatments",
];

const benefits = ["Free Hair Analysis", "Skin Consultation", "Bridal Consultation", "Hair Treatment Guidance"];

/* ---------------- Section 7 — Free Consultation ---------------- */

export function BranchConsultation({ branch }: { branch: Branch }) {
  const ref = useReveal<HTMLDivElement>({ selector: ".bc-item", stagger: 0.12 });
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  const [error, setError] = useState("");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (!String(data.get("name") || "").trim() || !String(data.get("phone") || "").trim()) {
      setError("Please share your name and phone number.");
      setTimeout(() => setError(""), 1600);
      return;
    }
    setState("loading");
    setTimeout(() => setState("done"), 1100);
  };

  const field =
    "peer w-full rounded-xl border border-border bg-card px-4 pb-2.5 pt-6 text-sm outline-none transition-[border-color,box-shadow] duration-400 focus:border-gold focus:shadow-gold";
  const label =
    "pointer-events-none absolute left-4 top-4 text-xs uppercase tracking-[0.16em] text-muted-foreground transition-all duration-300 peer-focus:top-2 peer-focus:text-[0.6rem] peer-focus:text-gold peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[0.6rem]";
  const selectCls =
    "w-full appearance-none rounded-xl border border-border bg-card px-4 pb-2.5 pt-6 text-sm outline-none transition-[border-color,box-shadow] duration-400 focus:border-gold focus:shadow-gold";
  const staticLabel = "pointer-events-none absolute left-4 top-2 text-[0.6rem] uppercase tracking-[0.16em] text-gold";

  return (
    <section id="consultation" className="bg-background py-20 md:py-28">
      <div ref={ref} className="mx-auto grid max-w-[1400px] items-start gap-10 px-6 lg:grid-cols-2 lg:px-10">
        <div className="bc-item lg:sticky lg:top-28">
          <p className="section-eyebrow text-gold">Free Consultation</p>
          <h2 className="mt-2 font-semibold text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.06]">
            Book your free <span className="italic text-gold-gradient">consultation</span>
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Meet our expert stylists at {branch.city} and receive personalised recommendations
            for your perfect look.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 rounded-[18px] border border-gold/20 bg-card/70 p-4 backdrop-blur-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                <span className="text-sm text-foreground/75">{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <LuxeButton as="a" href={`tel:${branch.phone.replace(/\s/g, "")}`}>
              Book Consultation
            </LuxeButton>
          </div>
        </div>

        <div className="bc-item rounded-[24px] border border-gold/20 bg-card p-8 shadow-luxe md:p-10">
          <form onSubmit={submit} noValidate className={`grid gap-4 md:grid-cols-2 ${error ? "shake" : ""}`}>
            <div className="relative">
              <input name="name" placeholder=" " className={field} />
              <span className={label}>Full name</span>
            </div>
            <div className="relative">
              <input name="phone" inputMode="tel" placeholder=" " className={field} />
              <span className={label}>Phone number</span>
            </div>
            <div className="relative md:col-span-2">
              <input name="email" type="email" placeholder=" " className={field} />
              <span className={label}>Email address</span>
            </div>
            <div className="relative">
              <select name="service" className={selectCls}>
                {serviceOptions.map((s) => <option key={s}>{s}</option>)}
              </select>
              <span className={staticLabel}>Select service</span>
            </div>
            <div className="relative">
              <select name="location" defaultValue={branch.city} className={selectCls}>
                {branches.map((b) => <option key={b.slug}>{b.city}</option>)}
              </select>
              <span className={staticLabel}>Location</span>
            </div>
            <div className="relative">
              <input name="date" type="date" className={selectCls} />
              <span className={staticLabel}>Preferred date</span>
            </div>
            <div className="relative">
              <input name="time" type="time" className={selectCls} />
              <span className={staticLabel}>Preferred time</span>
            </div>
            <div className="relative md:col-span-2">
              <textarea name="message" rows={4} placeholder=" " className={field} />
              <span className={label}>Message</span>
            </div>
            {error && <p className="text-xs text-destructive md:col-span-2">{error}</p>}
            <div className="md:col-span-2">
              <LuxeButton type="submit" className="w-full py-4" disabled={state !== "idle"}>
                {state === "idle" && "Book Appointment"}
                {state === "loading" && "Sending…"}
                {state === "done" && (
                  <span className="inline-flex items-center gap-2"><Check className="size-4" /> Request received</span>
                )}
              </LuxeButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 8 — Location & Map ---------------- */

export function BranchLocation({ branch }: { branch: Branch }) {
  const ref = useReveal<HTMLDivElement>({ selector: ".bl-item", stagger: 0.12 });
  const tel = branch.phone.replace(/\s/g, "");
  const wa = tel.replace(/\D/g, "");

  return (
    <section id="location" className="bg-cream py-20 md:py-28">
      <div ref={ref} className="mx-auto grid max-w-[1400px] gap-8 px-6 lg:grid-cols-2 lg:px-10">
        <div className="bl-item overflow-hidden rounded-[24px] border border-gold/25 bg-background shadow-luxe">
          <iframe
            title={`Map of SASS Hair & Beauty ${branch.city}`}
            src={branch.mapEmbed}
            loading="lazy"
            className="h-[340px] w-full md:h-[420px]"
          />
          <div className="grid gap-3 p-6 sm:grid-cols-2">
            <p className="flex items-center gap-2.5 text-sm text-foreground/75">
              <Car className="size-4 text-gold" /> Parking available on site
            </p>
            <p className="flex items-center gap-2.5 text-sm text-foreground/75">
              <Landmark className="size-4 text-gold" /> Close to {branch.q.split(" ")[0]} landmark
            </p>
          </div>
        </div>

        <div className="bl-item rounded-[24px] border border-gold/25 bg-background/70 p-8 shadow-luxe backdrop-blur-md md:p-10">
          <p className="section-eyebrow text-gold">Visit Us</p>
          <h2 className="mt-4 text-[clamp(1.8rem,3.4vw,2.6rem)] leading-[1.08]">
            SASS Hair &amp; Beauty — {branch.city}
          </h2>
          <div className="mt-8 space-y-4">
            <p className="flex items-start gap-3 text-sm text-foreground/75">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" /> {branch.address}
            </p>
            <p className="flex items-center gap-3 text-sm text-foreground/75">
              <Clock className="size-4 shrink-0 text-gold" /> {branch.hours}
            </p>
            <p className="flex items-center gap-3 text-sm text-foreground/75">
              <Phone className="size-4 shrink-0 text-gold" />
              <a href={`tel:${tel}`} className="link-underline">{branch.phone}</a>
            </p>
            <p className="flex items-center gap-3 text-sm text-foreground/75">
              <MessageCircle className="size-4 shrink-0 text-gold" />
              <a href={`https://wa.me/${wa}`} target="_blank" rel="noreferrer" className="link-underline">
                WhatsApp us
              </a>
            </p>
            <p className="flex items-center gap-3 text-sm text-foreground/75">
              <Mail className="size-4 shrink-0 text-gold" />
              <a href={`mailto:${branch.email}`} className="link-underline">{branch.email}</a>
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.q)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 font-button text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-ink transition-transform duration-500 hover:-translate-y-1"
            >
              <Navigation className="size-3.5" /> Get directions
            </a>
            <a
              href={`tel:${tel}`}
              className="inline-flex items-center gap-2 rounded-full border border-gold/45 px-6 py-3 font-button text-[0.66rem] font-semibold uppercase tracking-[0.18em] transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:text-gold"
            >
              <Phone className="size-3.5" /> Call now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 9 — FAQ ---------------- */

const faqs = [
  { q: "How do I book an appointment?", a: "Use the consultation form on this page, call the branch directly, or message us on WhatsApp. Our front desk confirms most slots within the hour." },
  { q: "Do you provide bridal makeup?", a: "Yes. We offer HD and airbrush bridal makeup, draping, hairstyling and full bridal packages, including trials and on-location service." },
  { q: "Which hair colour brands do you use?", a: "L'Oréal Professionnel, Schwarzkopf and Wella colour systems, always paired with Olaplex bond protection." },
  { q: "Do I need an appointment?", a: "Walk-ins are welcome, but weekends fill quickly. Booking ahead guarantees your preferred stylist and a consultation slot." },
  { q: "What is included in keratin treatment?", a: "A strand test, clarifying wash, keratin application, sealing with heat, and an aftercare kit consultation for lasting results." },
  { q: "Do you offer consultation?", a: "Every service starts with a complimentary consultation covering hair analysis, face shape, tone and lifestyle." },
];

export function BranchFAQ() {
  const ref = useReveal<HTMLDivElement>({ selector: ".bf-item, .bf-head", stagger: 0.07 });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-background py-20 md:py-28">
      <div ref={ref} className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
        <div className="bf-head">
          <p className="section-eyebrow text-gold">FAQ</p>
          <h2 className="mt-2 font-semibold text-[clamp(2rem,4vw,3rem)] leading-[1.06]">Questions, answered</h2>
        </div>
        <div>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="bf-item border-b border-gold/15">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg md:text-xl">{f.q}</span>
                  <Plus className={`size-5 shrink-0 text-gold transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "rotate-135" : ""}`} />
                </button>
                <div
                  className="grid transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0 }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-10 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
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

/* ---------------- Section 10 — Final CTA ---------------- */

export function BranchCTA({ branch }: { branch: Branch }) {
  const ref = useReveal<HTMLDivElement>({ selector: ".bcta-item", stagger: 0.1 });
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-cream md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 size-[36rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[150px]" />
      <div ref={ref} className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="bcta-item text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.05]">
          Ready for your <span className="italic text-gold-gradient">beauty transformation?</span>
        </h2>
        <p className="bcta-item mt-5 text-sm leading-relaxed text-cream/70 md:text-base">
          Experience premium salon services from Andhra Pradesh&apos;s trusted beauty destination.
        </p>
        <div className="bcta-item mt-9 flex flex-wrap justify-center gap-4">
          <LuxeButton as="a" href="#consultation">Book Appointment</LuxeButton>
          <a
            href={`tel:${branch.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 rounded-full border border-gold/45 px-7 py-3.5 font-button text-[0.7rem] font-semibold uppercase tracking-[0.2em] transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:text-gold"
          >
            <Phone className="size-3.5" /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
