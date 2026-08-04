import { Award, Sparkles, Gem, ShieldCheck, Headset } from "lucide-react";
import { useReveal } from "@/lib/motion";

const items = [
  {
    icon: Award,
    title: "Premium Experience",
    copy: "Luxury salon experience with world-class services.",
  },
  {
    icon: Sparkles,
    title: "Expert Stylists",
    copy: "Trained & certified professionals at your service.",
  },
  {
    icon: Gem,
    title: "High Quality Products",
    copy: "We use only top-quality, skin & hair safe products.",
  },
  {
    icon: ShieldCheck,
    title: "Hygiene & Cleanliness",
    copy: "100% hygiene and sterilized equipment.",
  },
  {
    icon: Headset,
    title: "Customer Satisfaction",
    copy: "Your satisfaction is our top priority.",
  },
];

export function WhyChoose() {
  const ref = useReveal<HTMLDivElement>({ selector: ".wc-item, .reveal-head", stagger: 0.12 });

  return (
    <section id="why" className="relative overflow-hidden bg-background py-16 md:py-20">
      <div ref={ref} className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="reveal-head mx-auto max-w-2xl text-center">
          <h2 className="font-semibold text-[clamp(1.8rem,3.6vw,2.75rem)] leading-[1.15]">
            Why Choose <span className="text-gold-gradient">SASS?</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {items.map(({ icon: Icon, title, copy }, i) => (
            <div
              key={title}
              className={`wc-item group px-4 text-center lg:px-6 ${
                i > 0 ? "lg:border-l lg:border-gold/25" : ""
              }`}
            >
              <Icon
                className="mx-auto size-11 text-gold transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1.5 group-hover:scale-110"
                strokeWidth={1.1}
              />
              <h3 className="mt-5 font-button text-sm font-semibold uppercase tracking-[0.06em]">
                {title}
              </h3>
              <p className="mx-auto mt-2 max-w-[16rem] text-xs leading-relaxed text-muted-foreground">
                {copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
