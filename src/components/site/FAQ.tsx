import { useState } from "react";
import { Plus } from "lucide-react";
import { useReveal } from "@/lib/motion";

const faqs = [
  {
    q: "Do I need an appointment or can I walk in?",
    a: "Walk-ins are welcome at all three branches, but weekends fill quickly. Booking ahead guarantees your preferred stylist and a consultation slot.",
  },
  {
    q: "How far in advance should I book a bridal trial?",
    a: "We recommend 6–8 weeks before the wedding date. Peak muhurtham season in Vijayawada and Guntur books out several months ahead.",
  },
  {
    q: "Which products do you use for colour?",
    a: "L'Oréal Professionnel, Schwarzkopf and Wella colour systems, always paired with Olaplex bond protection at no extra charge.",
  },
  {
    q: "Do you offer home or destination services?",
    a: "Yes. Our bridal and grooming teams travel across Andhra Pradesh and Telangana. Travel is quoted separately at the time of booking.",
  },
  {
    q: "Can I use my membership at any branch?",
    a: "Absolutely. Memberships are valid across Vijayawada, Guntur and Rajahmundry with a single profile.",
  },
];

export function FAQ() {
  const ref = useReveal<HTMLDivElement>({ selector: ".faq-item, .reveal-head", stagger: 0.08 });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-background pb-28 md:pb-36">
      <div ref={ref} className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
        <div className="reveal-head">
          <p className="section-eyebrow text-gold">FAQ</p>
          <h2 className="mt-2 font-semibold text-[clamp(2rem,4vw,3.2rem)] leading-[1.05]">
            Good to know before you visit
          </h2>
        </div>

        <div>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="faq-item border-b border-gold/15">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg md:text-xl">{f.q}</span>
                  <Plus
                    className={`size-5 shrink-0 text-gold transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen ? "rotate-135" : ""
                    }`}
                  />
                </button>
                <div
                  className="grid transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-10 text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
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
