import { useEffect, useState, useRef } from "react";
import {
  Scissors,
  Feather,
  Palette,
  Flower2,
  Hand,
  Waves,
  Droplets,
  Smile,
  Crown,
  Sparkles,
  Wind,
  Brush,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import logo from "@/assets/sass-logo.png.asset.json";

interface OrbitIcon {
  Icon: LucideIcon;
  label: string;
}

const orbitIcons: OrbitIcon[] = [
  { Icon: Scissors, label: "Hair Cuts" },
  { Icon: Feather, label: "Threading" },
  { Icon: Palette, label: "Colours" },
  { Icon: Flower2, label: "Pedicure" },
  { Icon: Hand, label: "Manicure" },
  { Icon: Waves, label: "Smoothening" },
  { Icon: Droplets, label: "Keratin" },
  { Icon: Smile, label: "Facials" },
  { Icon: Crown, label: "Bridal" },
  { Icon: Sparkles, label: "Transform" },
  { Icon: Wind, label: "Hair Spa" },
  { Icon: Brush, label: "Makeup" },
];

export function Preloader() {
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [started, setStarted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const startT = setTimeout(() => setStarted(true), 200);
    const t1 = setTimeout(() => setDone(true), 3200);
    const t2 = setTimeout(() => setHidden(true), 4100);
    return () => {
      clearTimeout(startT);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    if (!started) return;
    intervalRef.current = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % orbitIcons.length);
    }, 240);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [started]);

  if (hidden) return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
      style={{
        opacity: done ? 0 : 1,
        transform: done ? "scale(1.04)" : "scale(1)",
        pointerEvents: done ? "none" : "auto",
        transition: "opacity 900ms cubic-bezier(0.22,1,0.36,1), transform 900ms cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      <div className="relative flex items-center justify-center">
        {/* Outer rotating ring */}
        <div
          className="absolute inset-0 rounded-full border border-gold/20"
          style={{
            width: 320,
            height: 320,
            marginLeft: -160,
            marginTop: -160,
            left: "50%",
            top: "50%",
            animation: started ? "spin-slow 36s linear infinite" : "none",
          }}
        />

        {/* Gold dashed ring */}
        <div
          className="absolute inset-0 rounded-full border border-dashed border-gold/30"
          style={{
            width: 280,
            height: 280,
            marginLeft: -140,
            marginTop: -140,
            left: "50%",
            top: "50%",
            animation: started ? "spin-reverse 28s linear infinite" : "none",
          }}
        />

        {/* Orbiting icons */}
        {orbitIcons.map(({ Icon, label }, index) => {
          const angle = (360 / orbitIcons.length) * index - 90;
          const radius = 140;
          const radians = (angle * Math.PI) / 180;
          const x = Math.cos(radians) * radius;
          const y = Math.sin(radians) * radius;
          const isActive = index === activeIndex;
          const delay = index * 0.08;

          return (
            <div
              key={label}
              className="absolute flex flex-col items-center justify-center"
              style={{
                transform: `translate(${x}px, ${y}px) scale(${isActive ? 1.25 : 1})`,
                opacity: started ? (isActive ? 1 : 0.55) : 0,
                transition: `all 450ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
              }}
            >
              <span
                className="flex size-9 items-center justify-center rounded-full border border-gold/60 bg-ink/80 text-gold shadow-gold backdrop-blur-sm md:size-10"
                style={{
                  boxShadow: isActive
                    ? "0 0 24px -4px oklch(0.795 0.108 79.5 / 0.65)"
                    : "0 0 0 0 transparent",
                  transition: "box-shadow 450ms ease",
                }}
              >
                <Icon className="size-4 md:size-5" strokeWidth={1.4} />
              </span>
              <span
                className="mt-2 whitespace-nowrap font-button text-[0.55rem] uppercase tracking-widest text-cream/80"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "translateY(0)" : "translateY(6px)",
                  transition: "all 350ms cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                {label}
              </span>
            </div>
          );
        })}

        {/* Center logo mark */}
        <div
          className="relative z-10 flex flex-col items-center justify-center rounded-full bg-ink p-6"
          style={{
            opacity: started ? 1 : 0,
            transform: started ? "scale(1)" : "scale(0.85)",
            transition: "opacity 800ms cubic-bezier(0.22,1,0.36,1) 0.1s, transform 800ms cubic-bezier(0.22,1,0.36,1) 0.1s",
          }}
        >
          <img
            src={logo.url}
            alt=""
            width={220}
            height={110}
            className="w-32 invert md:w-44"
          />
        </div>
      </div>

      {/* Progress bar */}
      <div
        className="mt-10 h-px w-44 overflow-hidden bg-cream/15 md:w-56"
        style={{
          opacity: started ? 1 : 0,
          transition: "opacity 600ms ease",
        }}
      >
        <div
          className="h-full bg-gold-gradient"
          style={{
            width: done ? "100%" : "0%",
            transition: "width 2.8s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
      </div>

      <p
        className="eyebrow mt-6 text-cream/50"
        style={{
          opacity: started ? 1 : 0,
          transition: "opacity 600ms ease 0.2s",
        }}
      >
        Hair &amp; Beauty
      </p>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  );
}
