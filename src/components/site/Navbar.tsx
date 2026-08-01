import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/sass-logo-white.png.asset.json";
import { LuxeButton } from "./LuxeButton";
import { cn } from "@/lib/utils";

const links = [
  { label: "Services", href: "/services" },
  { label: "Transformations", href: "/#gallery" },
  { label: "Bridal", href: "/#bridal" },
  { label: "About", href: "/about" },
  { label: "Membership", href: "/#membership" },
  { label: "Contact", href: "/contact" },
];


export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[60] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled
          ? "border-b border-gold/15 bg-ink/70 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-6",
      )}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <Link to="/" aria-label="SASS Hair & Beauty home" className="shrink-0">
          <img
            src={logo.url}
            alt="SASS Hair & Beauty"
            width={160}
            height={80}
            className={cn(
              "w-28 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:w-36",
              scrolled && "w-24 md:w-28",
            )}
          />
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="link-underline text-[0.78rem] font-medium uppercase tracking-[0.18em] text-cream/85"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LuxeButton
            as="a"
            href="/contact"
            className="hidden gold-pulse md:inline-flex"
          >
            Book Appointment
          </LuxeButton>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="rounded-full border border-gold/30 p-2.5 text-cream transition-colors hover:border-gold hover:text-gold lg:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[80] lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-ink/70 backdrop-blur-sm transition-opacity duration-500",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <aside
          className={cn(
            "absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col gap-2 bg-ink px-8 py-8 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="mb-8 flex items-center justify-between">
            <img src={logo.url} alt="" width={120} height={60} className="w-24" />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="rounded-full border border-gold/30 p-2.5 text-cream"
            >
              <X className="size-5" />
            </button>
          </div>
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-cream/10 py-4 font-display text-2xl text-cream transition-colors hover:text-gold"
              style={{
                transitionDelay: `${i * 40}ms`,
                opacity: open ? 1 : 0,
                transform: open ? "translateX(0)" : "translateX(24px)",
                transitionProperty: "opacity, transform, color",
                transitionDuration: "600ms",
              }}
            >
              {l.label}
            </a>
          ))}
          <LuxeButton as="a" href="/contact" className="mt-8 w-full">
            Book Appointment
          </LuxeButton>
        </aside>
      </div>
    </header>
  );
}
