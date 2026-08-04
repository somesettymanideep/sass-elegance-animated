import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, MoveHorizontal } from "lucide-react";
import { useReveal } from "@/lib/motion";
import before from "@/assets/before.jpg";
import after from "@/assets/after.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import hero from "@/assets/hero.jpg";
import bridal from "@/assets/bridal.jpg";
import interior from "@/assets/interior.jpg";

const shots = [
  { src: g1, alt: "Caramel balayage close-up", span: "row-span-2" },
  { src: interior, alt: "SASS salon interior", span: "" },
  { src: after, alt: "Glossy blowout transformation", span: "row-span-2" },
  { src: g2, alt: "Gold styling tools on marble", span: "" },
  { src: bridal, alt: "South Indian bridal makeup", span: "row-span-2" },
  { src: hero, alt: "Editorial hair styling", span: "" },
];

function BeforeAfter() {
  const [pos, setPos] = useState(38);
  const wrap = useRef<HTMLDivElement | null>(null);

  const move = (clientX: number) => {
    const rect = wrap.current?.getBoundingClientRect();
    if (!rect) return;
    setPos(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  };

  return (
    <div
      ref={wrap}
      className="relative aspect-4/5 w-full select-none overflow-hidden rounded-[1.5rem] border border-gold/20 sm:aspect-16/11"
      onPointerMove={(e) => e.buttons === 1 && move(e.clientX)}
      onPointerDown={(e) => move(e.clientX)}
      onTouchMove={(e) => e.touches[0] && move(e.touches[0].clientX)}
    >
      <img
        src={after}
        alt="After transformation at SASS"
        loading="lazy"
        width={1008}
        height={1200}
        className="absolute inset-0 size-full object-cover object-top"
      />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img
          src={before}
          alt="Before transformation"
          loading="lazy"
          width={1008}
          height={1200}
          className="size-full object-cover object-top"
        />
      </div>
      <div
        className="absolute inset-y-0 w-px bg-gold-gradient"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold-gradient text-ink shadow-gold">
          <MoveHorizontal className="size-5" />
        </span>
      </div>
      <span className="absolute bottom-4 left-4 rounded-full bg-black/55 px-3 py-1 text-[0.62rem] uppercase tracking-[0.2em] text-cream backdrop-blur">
        Before
      </span>
      <span className="absolute bottom-4 right-4 rounded-full bg-black/55 px-3 py-1 text-[0.62rem] uppercase tracking-[0.2em] text-gold backdrop-blur">
        After
      </span>
    </div>
  );
}

export function Gallery() {
  const ref = useReveal<HTMLDivElement>({ selector: ".gal-item, .reveal-head", stagger: 0.09 });
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => ((i ?? 0) + 1) % shots.length);
      if (e.key === "ArrowLeft") setLightbox((i) => ((i ?? 0) - 1 + shots.length) % shots.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <section id="gallery" className="bg-background py-28 md:py-36">
      <div ref={ref} className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="reveal-head max-w-2xl">
          <p className="section-eyebrow text-gold">Before &amp; After</p>
          <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05]">
            Transformations worth the drive
          </h2>
          <p className="mt-5 text-muted-foreground">
            Drag the handle to see the difference a SASS consultation makes.
          </p>
        </div>

        <div className="gal-item mt-14">
          <BeforeAfter />
        </div>

        <div className="mt-6 grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-3 md:auto-rows-[220px]">
          {shots.map((s, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className={`gal-item group relative overflow-hidden rounded-[1.25rem] border border-gold/15 ${s.span}`}
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="size-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
              />
              <span className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/35" />
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/92 p-6 backdrop-blur-sm"
          style={{ animation: "fade-in 0.35s ease-out both" }}
          onClick={() => setLightbox(null)}
        >
          <button
            aria-label="Close"
            className="absolute right-6 top-6 rounded-full border border-gold/30 p-3 text-cream"
          >
            <X className="size-5" />
          </button>
          <button
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => ((i ?? 0) - 1 + shots.length) % shots.length);
            }}
            className="absolute left-4 rounded-full border border-gold/30 p-3 text-cream md:left-10"
          >
            <ChevronLeft className="size-5" />
          </button>
          <img
            src={shots[lightbox]!.src}
            alt={shots[lightbox]!.alt}
            className="max-h-[84vh] max-w-[90vw] rounded-2xl object-contain"
            style={{ animation: "scale-in 0.45s cubic-bezier(0.22,1,0.36,1) both" }}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => ((i ?? 0) + 1) % shots.length);
            }}
            className="absolute right-4 rounded-full border border-gold/30 p-3 text-cream md:right-10"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      )}
    </section>
  );
}
