import { useEffect, useRef } from "react";
import { Target, Eye, Gem } from "lucide-react";
import { useReveal, gsap, ensureGsap } from "@/lib/motion";
import interior from "@/assets/interior.jpg";
import g2 from "@/assets/g2.jpg";

const pillars = [
  {
    title: "Mission",
    icon: Target,
    body: "To make world-class hair and beauty craft accessible across Andhra Pradesh, without ever diluting the detail.",
  },
  {
    title: "Vision",
    icon: Eye,
    body: "To be the most trusted luxury salon house in South India — known for consistency, hygiene and artistry.",
  },
  {
    title: "Values",
    icon: Gem,
    body: "Honest consultation, premium products only, respect for every hair type, and a calm, unhurried chair.",
  },
];


export function Story() {
  const ref = useReveal<HTMLDivElement>({ selector: ".story-fade", stagger: 0.14 });

  return (
    <section id="story" className="bg-background py-28 md:py-36">
      <div ref={ref} className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="story-fade relative">
            <div className="overflow-hidden rounded-[2rem] border border-gold/20 shadow-luxe">
              <img
                src={interior}
                alt="Interior of the SASS Hair & Beauty flagship salon"
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-4/3 w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-10 -right-4 hidden w-44 overflow-hidden rounded-[1.5rem] border border-gold/30 shadow-gold md:block">
              <img
                src={g2}
                alt="Styling detail at SASS"
                loading="lazy"
                width={400}
                height={500}
                className="aspect-4/5 w-full object-cover"
              />
            </div>
          </div>

          <div className="story-fade">
            <p className="eyebrow text-gold">Our Story</p>
            <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05]">
              A single chair in Vijayawada,{" "}
              <span className="italic text-gold-gradient">a house of craft today</span>
            </h2>
            <div className="mt-7 space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                SASS Hair &amp; Beauty began in 2011 as a small studio on MG Road with one
                promise — that a haircut in Andhra Pradesh should feel as considered as one
                in Milan or Mumbai. No rushed chairs, no compromise products, no guesswork.
              </p>
              <p>
                Over fifteen years that promise turned into three flagship salons, a
                dedicated bridal suite, and a team of colourists and texture specialists
                trained on L'Oréal, Schwarzkopf, Wella and Olaplex systems.
              </p>
              <p>
                Today more than 42,000 clients trust us with the way they walk into a room —
                and every one of them still starts with the same twelve-minute consultation
                we began with.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="story-fade text-center">
            <h2 className="text-[clamp(1.9rem,4.2vw,3.2rem)] leading-[1.1]">
              Mission, Vision <span className="text-gold">&amp;</span> Values
            </h2>
            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="h-px w-16 bg-gold/40 sm:w-24" />
              <span className="size-2 rotate-45 bg-gold-gradient" />
              <span className="h-px w-16 bg-gold/40 sm:w-24" />
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <article
                  key={p.title}
                  className="story-fade group relative flex items-start gap-5 overflow-hidden rounded-2xl border border-gold/15 bg-card p-6 shadow-luxe transition-all duration-500 hover:-translate-y-1 hover:border-gold/40"
                >
                  <span className="absolute inset-y-6 right-0 w-1.5 rounded-l-full bg-gold-gradient opacity-70 transition-all duration-500 group-hover:inset-y-3 group-hover:opacity-100" />
                  <span className="grid size-16 shrink-0 place-items-center rounded-full bg-ink ring-1 ring-gold/30 transition-transform duration-700 group-hover:scale-105">
                    <Icon className="size-7 text-gold" strokeWidth={1.2} />
                  </span>
                  <div className="pr-3">
                    <h3 className="font-body text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-gold">
                      {p.title}
                    </h3>
                    <span className="mt-2 block h-px w-8 bg-gold/50" />
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {p.body}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
