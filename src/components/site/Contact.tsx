import { useState, type FormEvent } from "react";
import { MapPin, Phone, Clock, Check } from "lucide-react";
import { useReveal } from "@/lib/motion";
import { LuxeButton } from "./LuxeButton";

const branches = [
  {
    city: "Vijayawada",
    address: "MG Road, Labbipet, Vijayawada 520010",
    phone: "+91 90000 11122",
  },
  {
    city: "Guntur",
    address: "Brodipet 4th Line, Guntur 522002",
    phone: "+91 90000 11133",
  },
  {
    city: "Rajahmundry",
    address: "Danavaipeta Main Road, Rajahmundry 533103",
    phone: "+91 90000 11144",
  },
];

export function Contact() {
  const ref = useReveal<HTMLDivElement>({ selector: ".contact-left, .contact-right", stagger: 0.16 });
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  const [error, setError] = useState("");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (!String(data.get("name") || "").trim() || !String(data.get("phone") || "").trim()) {
      setError("Please share your name and phone number.");
      setTimeout(() => setError(""), 1200);
      return;
    }
    setState("loading");
    setTimeout(() => setState("done"), 1200);
  };

  const field =
    "peer w-full rounded-xl border border-border bg-card/60 px-4 pb-2.5 pt-6 text-sm outline-none transition-[border-color,box-shadow] duration-400 focus:border-gold focus:shadow-gold";
  const label =
    "pointer-events-none absolute left-4 top-4 text-xs uppercase tracking-[0.16em] text-muted-foreground transition-all duration-300 peer-focus:top-2 peer-focus:text-[0.6rem] peer-focus:text-gold peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[0.6rem]";

  return (
    <section id="contact" className="bg-ink py-28 text-cream md:py-36">
      <div ref={ref} className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-2 lg:px-10">
        <div className="contact-left">
          <p className="section-eyebrow text-gold">Book an Appointment</p>
          <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05] text-cream">
            Let's plan your next look
          </h2>

          <form
            onSubmit={submit}
            className={`mt-10 space-y-4 ${error ? "shake" : ""}`}
            noValidate
          >
            <div className="relative">
              <input name="name" placeholder=" " className={field} />
              <span className={label}>Full name</span>
            </div>
            <div className="relative">
              <input name="phone" placeholder=" " inputMode="tel" className={field} />
              <span className={label}>Phone number</span>
            </div>
            <div className="relative">
              <select
                name="branch"
                className="w-full appearance-none rounded-xl border border-border bg-card/60 px-4 pb-2.5 pt-6 text-sm outline-none transition-[border-color,box-shadow] duration-400 focus:border-gold focus:shadow-gold"
              >
                {branches.map((b) => (
                  <option key={b.city}>{b.city}</option>
                ))}
              </select>
              <span className="pointer-events-none absolute left-4 top-2 text-[0.6rem] uppercase tracking-[0.16em] text-gold">
                Preferred branch
              </span>
            </div>
            <div className="relative">
              <textarea name="notes" rows={4} placeholder=" " className={field} />
              <span className={label}>What are you looking for?</span>
            </div>

            {error && <p className="text-xs text-destructive">{error}</p>}

            <LuxeButton type="submit" className="w-full" disabled={state !== "idle"}>
              {state === "idle" && "Request Appointment"}
              {state === "loading" && "Sending…"}
              {state === "done" && (
                <span className="inline-flex items-center gap-2">
                  <Check className="size-4" /> Request received
                </span>
              )}
            </LuxeButton>
          </form>
        </div>

        <div className="contact-right space-y-4">
          <div className="overflow-hidden rounded-[1.5rem] border border-gold/20">
            <iframe
              title="SASS Hair & Beauty locations"
              src="https://www.google.com/maps?q=Vijayawada%20Andhra%20Pradesh&output=embed"
              loading="lazy"
              className="h-64 w-full grayscale transition-[filter] duration-700 hover:grayscale-0"
            />
          </div>
          {branches.map((b) => (
            <div
              key={b.city}
              className="luxe-card bg-white/[0.03] p-6 transition-colors"
            >
              <h3 className="text-xl text-cream">{b.city}</h3>
              <p className="mt-3 flex items-start gap-3 text-sm text-cream/60">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                {b.address}
              </p>
              <p className="mt-2 flex items-center gap-3 text-sm text-cream/60">
                <Phone className="size-4 text-gold" />
                <a href={`tel:${b.phone.replace(/\s/g, "")}`} className="link-underline">
                  {b.phone}
                </a>
              </p>
              <p className="mt-2 flex items-center gap-3 text-sm text-cream/60">
                <Clock className="size-4 text-gold" />
                Open daily · 10:00 AM – 9:00 PM
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
