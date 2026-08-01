import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { gsap, ensureGsap } from "@/lib/motion";
import { LuxeButton } from "./LuxeButton";

export function Hero() {
  const root = useRef<HTMLElement | null>(null);
  const image = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    ensureGsap();
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 1.6, defaults: { ease: "power3.out" } });
      tl.fromTo(
        image.current,
        { scale: 1.22, filter: "blur(14px)" },
        { scale: 1, filter: "blur(0px)", duration: 2.2 },
      )
        .fromTo(
          ".hero-line",
          { yPercent: 115 },
          { yPercent: 0, duration: 1.2, stagger: 0.1 },
          "-=1.7",
        )
        .fromTo(
          ".hero-fade",
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 1 },
          "-=0.8",
        )
        .fromTo(
          ".hero-cta",
          { autoAlpha: 0, y: 26, scale: 0.94 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.14 },
          "-=0.6",
        );

      gsap.to(image.current, {
        yPercent: 14,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={root}
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink"
    >
      <img
        ref={image}
        src={heroImg}
        alt="Model with a luxury blowout styled at SASS Hair & Beauty"
        width={1408}
        height={1760}
        fetchPriority="high"
        className="absolute inset-0 size-full object-cover object-[62%_center] will-change-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />

      {/* floating gold shapes */}
      <div className="pointer-events-none absolute left-[8%] top-[22%] size-40 rounded-full border border-gold/25 floaty" />
      <div
        className="pointer-events-none absolute right-[12%] top-[30%] size-24 rounded-full bg-gold/10 blur-2xl floaty"
        style={{ animationDelay: "1.6s" }}
      />
      <div
        className="pointer-events-none absolute bottom-[26%] left-[46%] size-3 rotate-45 bg-gold/60 floaty"
        style={{ animationDelay: "0.8s" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-24 pt-40 lg:px-10">
        <p className="hero-fade eyebrow mb-6 text-gold">
          Vijayawada · Guntur · Rajahmundry
        </p>
        <h1 className="max-w-4xl text-[clamp(2.8rem,7.5vw,6.2rem)] leading-[0.95] text-cream">
          <span className="block overflow-hidden pb-[0.12em]">
            <span className="hero-line block">Where beauty</span>
          </span>
          <span className="block overflow-hidden pb-[0.12em]">
            <span className="hero-line block italic text-gold-gradient">becomes artistry</span>
          </span>
        </h1>
        <p className="hero-fade mt-8 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg">
          Andhra Pradesh's most awarded hair &amp; beauty atelier. Precision cutting,
          couture colour and bridal styling — delivered by a team trained in
          international technique.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <LuxeButton as="a" href="#contact" className="hero-cta">
            Book Your Appointment
          </LuxeButton>
          <LuxeButton as="a" href="#services" variant="outline" className="hero-cta text-cream">
            Explore Services
          </LuxeButton>
        </div>
      </div>

      <a
        href="#why"
        aria-label="Scroll to next section"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 text-gold md:block"
      >
        <ChevronDown className="size-7 animate-bounce" />
      </a>
    </section>
  );
}
