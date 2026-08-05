import { useEffect, useRef } from "react";
import { Crown, GraduationCap, Rocket, Scissors, Sparkles, Store, Users } from "lucide-react";
import { ensureGsap, gsap } from "@/lib/motion";
import interior from "@/assets/interior.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import branchVij from "@/assets/branch-vijayawada.jpg";
import branchGnt from "@/assets/branch-guntur.jpg";
import svcHairspa from "@/assets/svc-hairspa.jpg";

const milestones = [
  {
    year: "2011",
    title: "It All Started",
    body: "A single chair, a dream and a passion for beauty on MG Road, Vijayawada.",
    icon: Sparkles,
    image: interior,
  },
  {
    year: "2014",
    title: "First Studio",
    body: "Launched our first premium salon studio with a dedicated colour lab.",
    icon: Scissors,
    image: g1,
  },
  {
    year: "2017",
    title: "Growing Trust",
    body: "Grew with our clients and a talented team of certified specialists.",
    icon: Users,
    image: branchGnt,
  },
  {
    year: "2020",
    title: "Second Studio",
    body: "Expanded to a larger space with advanced services and hygiene-first care.",
    icon: Store,
    image: g2,
  },
  {
    year: "2023",
    title: "Institute & Education",
    body: "Investing in the future through learning and skill development.",
    icon: GraduationCap,
    image: branchVij,
  },
  {
    year: "2026",
    title: "Future Vision",
    body: "Continuing to evolve and set new standards of luxury across Andhra Pradesh.",
    icon: Rocket,
    image: svcHairspa,
  },
];

export function Timeline() {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    ensureGsap();

    const ctx = gsap.context(() => {
      const road = document.querySelector<SVGPathElement>(".road-progress");
      if (road) {
        const len = road.getTotalLength();
        gsap.set(road, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(road, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ".road-wrap",
            start: "top 75%",
            end: "bottom 85%",
            scrub: 0.6,
          },
        });
      }

      gsap.utils.toArray<HTMLElement>(".road-node").forEach((node) => {
        gsap
          .timeline({ scrollTrigger: { trigger: node, start: "top 80%", once: true } })
          .fromTo(
            node.querySelector(".road-badge"),
            { scale: 0, rotate: -35 },
            { scale: 1, rotate: 0, duration: 0.55, ease: "back.out(2.6)" },
          )
          .fromTo(
            node.querySelector(".road-link"),
            { scaleX: 0 },
            { scaleX: 1, duration: 0.5, ease: "power3.out" },
            "-=0.25",
          )
          .fromTo(
            node.querySelector(".road-card"),
            { autoAlpha: 0, y: 34, filter: "blur(10px)" },
            { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.85, ease: "power3.out" },
            "-=0.35",
          );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="journey" ref={root} className="overflow-hidden bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow text-gold">Our Journey</p>
          <h2 className="mt-2 font-semibold text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05]">
            The road so far, <span className="italic text-gold-gradient">milestone by milestone</span>
          </h2>
        </div>

        <div className="road-wrap relative mx-auto mt-16 max-w-[1120px] md:mt-24">
          {/* winding road */}
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
            viewBox="0 0 100 1000"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              id="road-path"
              d="M50,0 C22,90 22,140 50,180 C80,225 80,280 50,330 C20,380 20,440 50,490 C80,540 80,600 50,650 C22,700 22,760 50,810 C74,855 62,925 50,1000"
              fill="none"
              stroke="var(--ink)"
              strokeWidth="9"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
            />
            <path
              d="M50,0 C22,90 22,140 50,180 C80,225 80,280 50,330 C20,380 20,440 50,490 C80,540 80,600 50,650 C22,700 22,760 50,810 C74,855 62,925 50,1000"
              fill="none"
              stroke="var(--gold)"
              strokeWidth="1"
              strokeDasharray="6 8"
              vectorEffect="non-scaling-stroke"
              opacity="0.35"
            />
            <path
              className="road-progress"
              d="M50,0 C22,90 22,140 50,180 C80,225 80,280 50,330 C20,380 20,440 50,490 C80,540 80,600 50,650 C22,700 22,760 50,810 C74,855 62,925 50,1000"
              fill="none"
              stroke="var(--gold)"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
            />
          </svg>

          {/* mobile rail */}
          <div className="absolute inset-y-0 left-4 w-[6px] rounded-full bg-ink md:hidden" />
          <div className="absolute inset-y-0 left-[22px] w-px bg-gold/40 md:hidden" />

          <ul className="relative space-y-12 md:space-y-16">
            {milestones.map((m, i) => {
              const right = i % 2 === 0;
              const Icon = m.icon;
              return (
                <li
                  key={m.year}
                  className="road-node relative pl-14 md:grid md:grid-cols-2 md:items-center md:gap-24 md:pl-0"
                >
                  {/* connector */}
                  <span
                    className={`road-link absolute top-8 hidden h-px w-16 bg-gold md:block ${
                      right ? "left-1/2 origin-left" : "right-1/2 origin-right"
                    }`}
                  />
                  {/* badge */}
                  <span
                    className={`road-badge absolute top-4 z-10 grid size-11 -translate-x-1/2 place-items-center rounded-full bg-gold-gradient text-ink shadow-gold md:top-[1.1rem] ${
                      right ? "left-4 md:left-[calc(50%+4.5rem)]" : "left-4 md:left-[calc(50%-4.5rem)]"
                    }`}
                  >
                    <Icon className="size-5" strokeWidth={1.8} />
                  </span>

                  <article
                    className={`road-card overflow-hidden rounded-[1.25rem] bg-card shadow-luxe ring-1 ring-gold/15 md:flex ${
                      right
                        ? "md:col-start-2 md:ml-16 md:flex-row"
                        : "md:col-start-1 md:row-start-1 md:mr-16 md:flex-row-reverse"
                    }`}
                  >
                    <div className="p-6 md:w-1/2 md:p-7">
                      <p className="font-display text-2xl leading-none text-gold-gradient">{m.year}</p>
                      <h3 className="mt-2 text-xl">{m.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
                    </div>
                    <div className="h-40 md:h-auto md:w-1/2">
                      <img
                        src={m.image}
                        alt={`${m.title} — SASS Hair & Beauty ${m.year}`}
                        loading="lazy"
                        className="size-full object-cover"
                      />
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>

          {/* journey continues marker */}
          <div className="mt-10 flex justify-center md:mt-4">
            <div className="grid size-28 place-items-center rounded-full bg-ink text-center text-cream ring-1 ring-gold/50">
              <div>
                <Crown className="mx-auto size-5 text-gold" strokeWidth={1.6} />
                <p className="mt-1 font-display text-[0.9rem] leading-tight">
                  The Journey
                  <br />
                  Continues…
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
