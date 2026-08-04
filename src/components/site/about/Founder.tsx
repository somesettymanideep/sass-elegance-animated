import { Quote, Instagram, Award } from "lucide-react";
import { useReveal } from "@/lib/motion";
import founder from "@/assets/founder.jpg";
import { LuxeButton } from "../LuxeButton";

const credentials = [
  "L'Oréal Professionnel certified educator",
  "15 years in couture colour & bridal artistry",
  "Trained in London & Mumbai academies",
];

export function Founder() {
  const ref = useReveal<HTMLDivElement>({ selector: ".fd-fade", stagger: 0.15 });

  return (
    <section id="founder" className="relative overflow-hidden bg-ink py-28 text-cream md:py-36">
      <span className="floaty pointer-events-none absolute left-[6%] top-[16%] size-28 rounded-full border border-gold/15" />
      <span
        className="floaty pointer-events-none absolute right-[10%] bottom-[14%] size-1.5 rounded-full bg-gold"
        style={{ animationDelay: "2s" }}
      />

      <div ref={ref} className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div className="fd-fade relative">
          <div className="pointer-events-none absolute -inset-3 rounded-[2.2rem] border border-gold/25" />
          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src={founder}
              alt="Chunchu Suresh, founder of SASS Hair & Beauty"
              loading="lazy"
              width={1024}
              height={1280}
              className="aspect-4/5 w-full object-cover object-[72%_25%] transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>
        </div>

        <div className="fd-fade">
          <p className="eyebrow text-gold">Meet the Founder</p>
          <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05] text-cream">
            Chunchu Suresh
          </h2>
          <p className="mt-2 text-xs uppercase tracking-[0.26em] text-gold">
            Founder &amp; Creative Director
          </p>

          <div className="mt-8 flex gap-4">
            <Quote className="mt-1 size-8 shrink-0 text-gold" />
            <p className="font-display text-xl italic leading-relaxed text-cream/85 md:text-2xl">
              "Luxury isn't marble and gold. It's the ten extra minutes we spend
              understanding your hair before we ever pick up the scissors."
            </p>
          </div>

          <p className="mt-7 text-sm leading-relaxed text-cream/60">
            Suresh trained as a master colourist before opening the first SASS studio at 27. He
            still takes bridal consultations personally, mentors every new stylist through a
            six-month apprenticeship, and signs off on each product that enters the salon.
          </p>

          <ul className="mt-8 space-y-3">
            {credentials.map((c) => (
              <li key={c} className="flex items-center gap-3 text-sm text-cream/70">
                <Award className="size-4 shrink-0 text-gold" />
                {c}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <LuxeButton as="a" href="/contact" className="px-10">
              Book with the Studio
            </LuxeButton>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="grid size-11 place-items-center rounded-full border border-gold/35 text-gold transition-colors duration-500 hover:border-gold hover:bg-gold hover:text-ink"
              aria-label="Instagram"
            >
              <Instagram className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
