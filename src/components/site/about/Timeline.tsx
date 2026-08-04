import { useEffect, useRef } from "react";
import { ensureGsap, gsap } from "@/lib/motion";

const milestones = [
  {
    year: "2011",
    title: "The first chair",
    body: "A single-studio salon opens on MG Road, Vijayawada with two stylists and one belief — consultation before scissors.",
  },
  {
    year: "2014",
    title: "Colour lab",
    body: "SASS becomes one of the first salons in the region to run a dedicated fashion-colour and balayage lab.",
  },
  {
    year: "2017",
    title: "Guntur flagship",
    body: "Brodipet opens with 14 stations, a private bridal suite and an in-house academy for new stylists.",
  },
  {
    year: "2020",
    title: "Hygiene-first rebuild",
    body: "Every branch re-engineered with single-use kits, sterilisation bays and appointment-only slots.",
  },
  {
    year: "2023",
    title: "Rajahmundry & bridal wing",
    body: "Third flagship launches alongside a travelling bridal team covering weddings across Andhra Pradesh.",
  },
  {
    year: "2026",
    title: "42,000 clients later",
    body: "Three flagships, 30+ specialists and a 4.9 Google rating — with the same twelve-minute consultation.",
  },
];

export function Timeline() {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    ensureGsap();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".tree-trunk",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: ".tree-wrap",
            start: "top 72%",
            end: "bottom 82%",
            scrub: 0.6,
          },
        },
      );

      gsap.utils.toArray<HTMLElement>(".tree-node").forEach((node) => {
        const branch = node.querySelector(".tree-branch");
        const bud = node.querySelector(".tree-bud");
        const card = node.querySelector(".tree-card");
        gsap
          .timeline({
            scrollTrigger: { trigger: node, start: "top 78%", once: true },
          })
          .fromTo(bud, { scale: 0 }, { scale: 1, duration: 0.5, ease: "back.out(3)" })
          .fromTo(
            branch,
            { scaleX: 0 },
            { scaleX: 1, duration: 0.6, ease: "power3.out" },
            "-=0.2",
          )
          .fromTo(
            card,
            { autoAlpha: 0, y: 30, filter: "blur(8px)" },
            { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power3.out" },
            "-=0.35",
          );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="journey" ref={root} className="bg-background py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow text-gold">Our Journey</p>
          <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05]">
            Fifteen years, <span className="italic text-gold-gradient">growing branch by branch</span>
          </h2>
        </div>

        <div className="tree-wrap relative mt-20 md:mt-24">
          {/* root line + growing trunk */}
          <div className="absolute inset-y-0 left-4 w-px bg-border md:left-1/2 md:-translate-x-1/2" />
          <div className="tree-trunk absolute inset-y-0 left-4 w-px origin-top bg-gold-gradient md:left-1/2 md:-translate-x-1/2" />

          <ul className="space-y-14 md:space-y-20">
            {milestones.map((m, i) => {
              const right = i % 2 === 1;
              return (
                <li
                  key={m.year}
                  className={`tree-node relative pl-14 md:grid md:grid-cols-2 md:gap-16 md:pl-0 ${
                    right ? "" : ""
                  }`}
                >
                  {/* bud on the trunk */}
                  <span className="tree-bud absolute left-4 top-3 z-10 grid size-4 -translate-x-1/2 place-items-center rounded-full bg-gold-gradient shadow-gold md:left-1/2">
                    <span className="size-1.5 rounded-full bg-ink" />
                  </span>

                  {/* branch */}
                  <span
                    className={`tree-branch absolute top-5 h-px w-8 bg-gold-gradient md:w-14 ${
                      right
                        ? "left-4 origin-left md:left-1/2"
                        : "left-4 origin-left md:left-auto md:right-1/2 md:origin-right"
                    }`}
                  />

                  <div
                    className={
                      right
                        ? "md:col-start-2 md:pl-16"
                        : "md:col-start-1 md:row-start-1 md:pr-16 md:text-right"
                    }
                  >
                    <article className="tree-card luxe-card inline-block bg-card p-7 text-left">
                      <p className="font-display text-3xl leading-none text-gold-gradient">
                        {m.year}
                      </p>
                      <h3 className="mt-3 text-xl">{m.title}</h3>
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                        {m.body}
                      </p>
                    </article>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
