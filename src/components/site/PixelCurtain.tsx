import { useEffect, useRef, useState } from "react";
import { useRouter } from "@tanstack/react-router";
import { ensureGsap, gsap } from "@/lib/motion";

const CELL = 64;

/** Pixel-block curtain that covers the screen on navigation and dissolves on arrival. */
export function PixelCurtain() {
  const router = useRouter();
  const layerRef = useRef<HTMLDivElement | null>(null);
  const [grid, setGrid] = useState({ cols: 0, rows: 0 });
  const activeRef = useRef(false);

  useEffect(() => {
    const measure = () =>
      setGrid({
        cols: Math.ceil(window.innerWidth / CELL),
        rows: Math.ceil(window.innerHeight / CELL),
      });
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (!grid.cols) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    ensureGsap();

    const layer = layerRef.current;
    if (!layer) return;
    const cells = () => Array.from(layer.querySelectorAll<HTMLElement>("[data-pixel]"));

    const cover = () => {
      activeRef.current = true;
      layer.style.pointerEvents = "auto";
      gsap.killTweensOf(cells());
      gsap.fromTo(
        cells(),
        { autoAlpha: 0, scale: 0.6 },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.32,
          ease: "power2.out",
          stagger: { each: 0.006, from: "random", grid: [grid.rows, grid.cols] },
        },
      );
    };

    const reveal = () => {
      if (!activeRef.current) return;
      activeRef.current = false;
      gsap.killTweensOf(cells());
      gsap.to(cells(), {
        autoAlpha: 0,
        scale: 0.6,
        duration: 0.34,
        ease: "power2.inOut",
        delay: 0.08,
        stagger: { each: 0.006, from: "random", grid: [grid.rows, grid.cols] },
        onComplete: () => {
          layer.style.pointerEvents = "none";
        },
      });
    };

    const unsubBefore = router.subscribe("onBeforeNavigate", ({ fromLocation, toLocation }) => {
      if (fromLocation?.pathname === toLocation.pathname) return;
      cover();
    });
    const unsubResolved = router.subscribe("onResolved", () => {
      window.scrollTo(0, 0);
      reveal();
    });

    return () => {
      unsubBefore();
      unsubResolved();
    };
  }, [router, grid.cols, grid.rows]);

  if (!grid.cols) return null;

  return (
    <div
      ref={layerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[200]"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${grid.cols}, 1fr)`,
        gridTemplateRows: `repeat(${grid.rows}, 1fr)`,
      }}
    >
      {Array.from({ length: grid.cols * grid.rows }).map((_, i) => (
        <span
          key={i}
          data-pixel
          className="block h-full w-full bg-ink opacity-0"
          style={
            i % 11 === 0
              ? { background: "var(--gradient-gold)" }
              : undefined
          }
        />
      ))}
    </div>
  );
}
