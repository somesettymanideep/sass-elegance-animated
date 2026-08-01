import { useState } from "react";
import { Instagram, Facebook, Youtube, ArrowRight } from "lucide-react";
import logo from "@/assets/sass-logo.png.asset.json";
import { useReveal } from "@/lib/motion";

export function Footer() {
  const ref = useReveal<HTMLDivElement>({ selector: ".foot-col", stagger: 0.1 });
  const [mail, setMail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer className="border-t border-gold/15 bg-ink pb-28 pt-20 text-cream md:pb-12">
      <div ref={ref} className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-4 lg:px-10">
        <div className="foot-col lg:col-span-2">
          <img src={logo.url} alt="SASS Hair & Beauty" width={180} height={90} className="w-36 invert" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/55">
            A premium hair &amp; beauty atelier with flagship salons in Vijayawada,
            Guntur and Rajahmundry.
          </p>
          <div className="mt-7 flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#top"
                aria-label="Social link"
                className="grid size-10 place-items-center rounded-full border border-gold/25 text-gold transition-transform duration-500 hover:-translate-y-1.5 hover:border-gold"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="foot-col">
          <h3 className="eyebrow text-gold">Explore</h3>
          <ul className="mt-6 space-y-3 text-sm text-cream/60">
            {[
              ["Services", "#services"],
              ["Transformations", "#gallery"],
              ["Bridal", "#bridal"],
              ["Membership", "#membership"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} className="link-underline">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="foot-col">
          <h3 className="eyebrow text-gold">Newsletter</h3>
          <p className="mt-6 text-sm text-cream/55">
            Seasonal looks, offers and bridal openings.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (mail.includes("@")) setSent(true);
            }}
            className="group mt-5 flex items-center gap-2 rounded-full border border-gold/25 p-1.5 transition-[border-color,width] duration-500 focus-within:border-gold"
          >
            <input
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              type="email"
              placeholder={sent ? "Subscribed ✓" : "Email address"}
              className="w-full bg-transparent px-4 text-sm outline-none placeholder:text-cream/35"
            />
            <button
              aria-label="Subscribe"
              className="grid size-9 shrink-0 place-items-center rounded-full bg-gold-gradient text-ink transition-transform duration-500 hover:scale-110"
            >
              <ArrowRight className="size-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-[1400px] border-t border-cream/10 px-6 pt-6 text-xs text-cream/40 lg:px-10">
        © {new Date().getFullYear()} SASS Hair &amp; Beauty. All rights reserved.
      </div>
    </footer>
  );
}
