import { useEffect, useState, type FormEvent } from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useReveal } from "@/lib/motion";
import { LuxeButton } from "./LuxeButton";
import svcBridal from "@/assets/svc-bridal.jpg";
import mensGrooming from "@/assets/mens-grooming.jpg";
import svcMakeup from "@/assets/svc-makeup.jpg";
import svcThreading from "@/assets/svc-threading.jpg";

const slides = [
  { src: svcBridal, title: "Bridal Makeup", caption: "Muhurtham-ready artistry" },
  { src: mensGrooming, title: "Men's Grooming", caption: "Precision cuts & hot-towel shaves" },
  { src: svcMakeup, title: "Party Makeup", caption: "Editorial glam for every occasion" },
  { src: svcThreading, title: "Threading", caption: "Brow shaping by specialists" },
];

function ServiceSlider() {
  const [i, setI] = useState(0);
  const go = (n: number) => setI((p) => (p + n + slides.length) % slides.length);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 4200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="group relative h-[260px] w-full overflow-hidden rounded-[1.5rem] border border-gold/20 sm:h-[320px] lg:h-[420px] xl:h-[460px]">
      {slides.map((s, idx) => (
        <img
          key={s.title}
          src={s.src}
          alt={s.title}
          loading="lazy"
          className={`absolute inset-0 size-full object-cover transition-[opacity,transform] duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            idx === i ? "scale-100 opacity-100" : "scale-105 opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-7">
        <p className="section-eyebrow text-gold">{slides[i]!.caption}</p>
        <h3 className="mt-1 text-2xl text-cream">{slides[i]!.title}</h3>
        <div className="mt-5 flex items-center gap-2">
          {slides.map((s, idx) => (
            <button
              key={s.title}
              aria-label={`Show ${s.title}`}
              onClick={() => setI(idx)}
              className={`h-1 rounded-full transition-all duration-500 ${
                idx === i ? "w-8 bg-gold-gradient" : "w-3 bg-cream/35 hover:bg-cream/60"
              }`}
            />
          ))}
        </div>
      </div>

      <button
        aria-label="Previous image"
        onClick={() => go(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-gold/40 bg-black/35 p-2.5 text-cream opacity-0 backdrop-blur transition-all duration-500 hover:border-gold hover:text-gold group-hover:opacity-100"
      >
        <ChevronLeft className="size-4" />
      </button>
      <button
        aria-label="Next image"
        onClick={() => go(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-gold/40 bg-black/35 p-2.5 text-cream opacity-0 backdrop-blur transition-all duration-500 hover:border-gold hover:text-gold group-hover:opacity-100"
      >
        <ChevronRight className="size-4" />
      </button>
    </div>
  );
}

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
          <h2 className="mt-2 font-semibold text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05] text-cream">
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

        <div className="contact-right">
          <ServiceSlider />
        </div>
      </div>
    </section>
  );
}
