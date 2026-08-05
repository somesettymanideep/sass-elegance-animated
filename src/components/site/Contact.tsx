import { useEffect, useRef, useState, type FormEvent, type ChangeEvent } from "react";
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

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-11.485c-3.866 0-7.007 3.141-7.007 7.007 0 1.382.402 2.67 1.093 3.764l-1.118 4.08 4.17-1.093c1.043.566 2.224.893 3.862.893 3.866 0 7.007-3.141 7.007-7.007s-3.141-7.007-7.007-7.007m0 12.813c-1.135 0-2.193-.34-3.08-.926l-.221-.139-2.57.674.686-2.505-.151-.24c-.642-1.018-1.02-2.222-1.02-3.515 0-3.205 2.608-5.813 5.813-5.813s5.813 2.608 5.813 5.813-2.608 5.813-5.813 5.813z" />
    </svg>
  );
}

function buildWhatsAppMessage(values: { name: string; phone: string; branch: string; notes: string }) {
  const branch = branches.find((b) => b.city === values.branch) ?? branches[0]!;
  return [
    "Hello SASS Hair & Beauty! I'd like to book an appointment.",
    "",
    values.name ? `Name: ${values.name}` : "",
    values.phone ? `Phone: ${values.phone}` : "",
    `Preferred branch: ${branch.city}`,
    values.notes ? `Looking for: ${values.notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

export function Contact() {
  const ref = useReveal<HTMLDivElement>({ selector: ".contact-left, .contact-right", stagger: 0.16 });
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    branch: branches[0]!.city,
    notes: "",
  });

  const message = buildWhatsAppMessage(form);
  const messageLength = message.length;
  const MAX_CHARS = 4096;

  const updateForm = (key: keyof typeof form) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const readForm = () => {
    const name = form.name.trim();
    const phone = form.phone.trim();
    if (!name || !phone) {
      setError("Please share your name and phone number.");
      setTimeout(() => setError(""), 1200);
      return null;
    }
    return { name, phone, branch: form.branch, notes: form.notes.trim() };
  };

  const bookOnWhatsApp = () => {
    const v = readForm();
    if (!v) return;
    const branch = branches.find((b) => b.city === v.branch) ?? branches[0]!;
    const msg = buildWhatsAppMessage(v);
    const number = branch.phone.replace(/\D/g, "");
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!readForm()) return;
    setState("loading");
    setTimeout(() => setState("done"), 1200);
  };

  const field =
    "peer w-full rounded-xl border border-border bg-card/60 px-4 pb-2.5 pt-6 text-sm text-white outline-none transition-[border-color,box-shadow] duration-400 focus:border-gold focus:shadow-gold";
  const label =
    "pointer-events-none absolute left-4 top-4 text-xs uppercase tracking-[0.16em] text-muted-foreground transition-all duration-300 peer-focus:top-2 peer-focus:text-[0.6rem] peer-focus:text-gold peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[0.6rem]";
  const selectCls =
    "w-full appearance-none rounded-xl border border-border bg-card/60 px-4 pb-2.5 pt-6 text-sm text-white outline-none transition-[border-color,box-shadow] duration-400 focus:border-gold focus:shadow-gold";

  return (
    <section id="contact" className="bg-ink py-28 text-cream md:py-36">
      <div ref={ref} className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-2 lg:px-10">
        <div className="contact-left">
          <p className="section-eyebrow text-gold">Book an Appointment</p>
          <h2 className="mt-2 font-semibold text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05] text-cream">
            Let's plan your next look
          </h2>

          <form
            ref={formRef}
            onSubmit={submit}
            className={`mt-10 space-y-4 ${error ? "shake" : ""}`}
            noValidate
          >
            <div className="relative">
              <input
                name="name"
                placeholder=" "
                className={field}
                value={form.name}
                onChange={updateForm("name")}
              />
              <span className={label}>Full name</span>
            </div>
            <div className="relative">
              <input
                name="phone"
                placeholder=" "
                inputMode="tel"
                className={field}
                value={form.phone}
                onChange={updateForm("phone")}
              />
              <span className={label}>Phone number</span>
            </div>
            <div className="relative">
              <select name="branch" className={selectCls} value={form.branch} onChange={updateForm("branch")}>
                {branches.map((b) => (
                  <option key={b.city} value={b.city} className="bg-ink text-cream">
                    {b.city}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute left-4 top-2 text-[0.6rem] uppercase tracking-[0.16em] text-gold">
                Preferred branch
              </span>
            </div>
            <div className="relative">
              <textarea
                name="notes"
                rows={4}
                placeholder=" "
                className={field}
                value={form.notes}
                onChange={updateForm("notes")}
              />
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

            <div className="space-y-2">
              <div className="rounded-xl border border-gold/20 bg-card/40 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">WhatsApp preview</p>
                  <p className="text-[0.65rem] text-cream/60">
                    {messageLength}/{MAX_CHARS}
                  </p>
                </div>
                <textarea
                  readOnly
                  value={message}
                  rows={6}
                  className="w-full resize-none rounded-lg border border-border/60 bg-black/30 p-3 text-xs leading-relaxed text-cream/90 outline-none"
                  aria-label="WhatsApp message preview"
                />
              </div>

              <button
                type="button"
                onClick={bookOnWhatsApp}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-button text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white transition-all duration-500 hover:bg-[#1fae56] hover:shadow-[0_8px_24px_rgba(37,211,102,0.28)] active:scale-[0.98]"
              >
                <WhatsAppIcon className="size-4" /> Book on WhatsApp
              </button>
              <p className="text-center text-[0.7rem] text-cream/50">
                Your details are prefilled into the chat with your chosen branch.
              </p>
            </div>
          </form>
        </div>

        <div className="contact-right">
          <ServiceSlider />
        </div>
      </div>
    </section>
  );
}
