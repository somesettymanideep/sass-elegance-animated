import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Facebook, Youtube } from "lucide-react";
import { useReveal } from "@/lib/motion";

const cards = [
  {
    icon: Phone,
    title: "Call us",
    lines: ["+91 90000 11122", "+91 90000 11133"],
    href: "tel:+919000011122",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["hello@sasshairbeauty.in", "bridal@sasshairbeauty.in"],
    href: "mailto:hello@sasshairbeauty.in",
  },
  {
    icon: MapPin,
    title: "Flagship",
    lines: ["MG Road, Labbipet", "Vijayawada 520010"],
  },
  {
    icon: Clock,
    title: "Business hours",
    lines: ["Mon – Sun · 10:00 AM – 9:00 PM", "Bridal slots from 6:00 AM"],
  },
];

const socials = [
  { Icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { Icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { Icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919000011122" },
  { Icon: Youtube, label: "YouTube", href: "https://youtube.com" },
];

export function ContactInfo() {
  const ref = useReveal<HTMLDivElement>({ selector: ".ci-card, .ci-head", stagger: 0.1 });

  return (
    <section className="bg-background py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="ci-head max-w-2xl">
          <p className="eyebrow text-gold">Get in Touch</p>
          <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05]">
            We answer every message, <span className="italic text-gold-gradient">personally</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => {
            const Icon = c.icon;
            const inner = (
              <>
                <span className="grid size-11 place-items-center rounded-full border border-gold/30 text-gold transition-colors duration-500 group-hover:bg-gold-gradient group-hover:text-ink">
                  <Icon className="size-4" />
                </span>
                <h3 className="mt-6 text-lg">{c.title}</h3>
                {c.lines.map((l) => (
                  <p key={l} className="mt-1 text-sm text-muted-foreground">
                    {l}
                  </p>
                ))}
              </>
            );
            return c.href ? (
              <a key={c.title} href={c.href} className="ci-card group luxe-card block bg-card p-7">
                {inner}
              </a>
            ) : (
              <div key={c.title} className="ci-card group luxe-card bg-card p-7">
                {inner}
              </div>
            );
          })}
        </div>

        <div className="ci-card mt-6 flex flex-wrap items-center justify-between gap-6 rounded-[1.5rem] border border-gold/20 bg-card px-8 py-7">
          <div>
            <h3 className="text-lg">Follow the work</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Fresh transformations posted every week.
            </p>
          </div>
          <div className="flex gap-3">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid size-11 place-items-center rounded-full border border-gold/30 text-foreground transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:bg-gold-gradient hover:text-ink"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
