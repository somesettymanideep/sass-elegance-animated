import { useEffect, useRef, useState } from "react";
import { Quote, Star } from "lucide-react";
import { useReveal } from "@/lib/motion";
import c1 from "@/assets/client-1.jpg";
import c2 from "@/assets/client-2.jpg";
import c3 from "@/assets/client-3.jpg";

const reviews = [
  {
    name: "Priya M.",
    city: "Vijayawada",
    img: c1,
    text: "Absolutely love the service! The staff is professional and made me feel so special. My hair has never looked better!",
  },
  {
    name: "Anusha R.",
    city: "Guntur",
    img: c2,
    text: "Best salon experience ever! The ambience, hygiene and the results — everything is just perfect.",
  },
  {
    name: "Kavya L.",
    city: "Rajahmundry",
    img: c3,
    text: "I trust SASS for all my beauty needs. Highly recommend their bridal makeup and hair services!",
  },
  {
    name: "Sravani R.",
    city: "Vijayawada",
    img: c3,
    text: "The consultation alone was worth it — they matched the colour to my skin tone, not to a chart. Flawless finish.",
  },
  {
    name: "Divya P.",
    city: "Rajahmundry",
    img: c1,
    text: "The Olaplex bond therapy genuinely rescued my hair. Six months later it still feels brand new.",
  },
  {
    name: "Harika S.",
    city: "Guntur",
    img: c2,
    text: "They handled my entire bridal party across two days. Punctual, calm and the makeup held all day long.",
  },
];

export function Testimonials() {
  const ref = useReveal<HTMLDivElement>({ selector: ".reveal-head", stagger: 0.1 });
  const [perView, setPerView] = useState(3);
  const [i, setI] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    const set = () => setPerView(window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    set();
    window.addEventListener("resize", set);
    return () => window.removeEventListener("resize", set);
  }, []);

  const pages = Math.max(1, Math.ceil(reviews.length / perView));

  useEffect(() => setI(0), [perView]);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) setI((v) => (v + 1) % pages);
    }, 5600);
    return () => clearInterval(id);
  }, [pages]);

  return (
    <section className="bg-background py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="reveal-head text-center">
          <p className="font-script text-[clamp(1.6rem,3vw,2.2rem)] leading-none text-gold">
            What Our
          </p>
          <h2 className="mt-2 text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.1]">
            Happy <span className="text-gold">Clients</span> Say
          </h2>
          <span className="mx-auto mt-5 block h-px w-40 bg-gold-gradient" />
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
              <figure
                key={r.name + r.city}
                className="w-full shrink-0 px-3 md:w-1/2 lg:w-1/3"
              >
                <div className="flex h-full items-start gap-5 rounded-[14px] border border-border/60 bg-card p-7 shadow-[0_18px_44px_-30px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:-translate-y-1">
                  <img
                    src={r.img}
                    alt={`${r.name} — SASS Hair & Beauty client`}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="size-16 shrink-0 rounded-full border-2 border-gold/50 object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <Quote className="size-4 shrink-0 fill-gold text-gold" />
                      <span className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star key={s} className="size-3.5 fill-gold text-gold" />
                        ))}
                      </span>
                    </div>
                    <blockquote className="mt-4 text-sm leading-relaxed text-foreground/80">
                      {r.text}
                    </blockquote>
                    <figcaption className="mt-5">
                      <p className="text-sm font-semibold">– {r.name}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{r.city}</p>
                    </figcaption>
                  </div>
                </div>
              </figure>
            ))}
          </div>

          <div className="mt-10 flex justify-center gap-2.5">
            {Array.from({ length: pages }).map((_, d) => (
              <button
                key={d}
                aria-label={`Go to slide ${d + 1}`}
                onClick={() => setI(d)}
                className={`size-2.5 rounded-full transition-all duration-500 ${
                  d === i ? "bg-gold" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
