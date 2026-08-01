import { useEffect, useRef, useState } from "react";
import { Quote, Star } from "lucide-react";
import { useReveal } from "@/lib/motion";

const reviews = [
  {
    name: "Sravani Reddy",
    city: "Vijayawada",
    text: "I've been colouring my hair for a decade and no one has matched what SASS did. The consultation alone was worth it — they mapped the tone to my skin, not to a chart.",
  },
  {
    name: "Anusha Kolli",
    city: "Guntur",
    text: "They handled my entire bridal party across two days. Punctual, calm, and the makeup held through a 14-hour muhurtham without a single touch-up.",
  },
  {
    name: "Divya Prasad",
    city: "Rajahmundry",
    text: "The Olaplex bond therapy genuinely rescued my hair after a bad smoothening elsewhere. Six months in and it still feels like new hair.",
  },
  {
    name: "Karthik Varma",
    city: "Vijayawada",
    text: "Cleanest, most professional grooming studio in the city. Booking is effortless and the barbers actually listen.",
  },
];

export function Testimonials() {
  const ref = useReveal<HTMLDivElement>({ selector: ".reveal-head", stagger: 0.1 });
  const [i, setI] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) setI((v) => (v + 1) % reviews.length);
    }, 5200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-background py-28 md:py-36">
      <div ref={ref} className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="reveal-head text-center">
          <p className="eyebrow text-gold">Client Stories</p>
          <h2 className="mx-auto mt-5 max-w-2xl text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05]">
            Loved across Andhra Pradesh
          </h2>
        </div>

        <div
          className="relative mt-14 overflow-hidden"
          onMouseEnter={() => (paused.current = true)}
          onMouseLeave={() => (paused.current = false)}
        >
          <div
            className="flex transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translate3d(-${i * 100}%, 0, 0)` }}
          >
            {reviews.map((r) => (
              <figure key={r.name} className="w-full shrink-0 px-1 md:px-10">
                <div className="mx-auto max-w-3xl rounded-[1.75rem] border border-gold/20 bg-card/70 p-10 text-center backdrop-blur-sm md:p-14">
                  <Quote className="mx-auto size-9 text-gold transition-transform duration-700 hover:scale-125" />
                  <div className="mt-6 flex justify-center gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className="size-4 fill-gold text-gold"
                        style={{ animation: `scale-in 0.4s ${s * 0.08}s both` }}
                      />
                    ))}
                  </div>
                  <blockquote className="mt-7 font-display text-xl leading-relaxed md:text-2xl">
                    “{r.text}”
                  </blockquote>
                  <figcaption className="mt-8 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                    {r.name} · <span className="text-gold">{r.city}</span>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>

          <div className="mt-10 flex justify-center gap-2">
            {reviews.map((_, d) => (
              <button
                key={d}
                aria-label={`Go to review ${d + 1}`}
                onClick={() => setI(d)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  d === i ? "w-10 bg-gold-gradient" : "w-4 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
