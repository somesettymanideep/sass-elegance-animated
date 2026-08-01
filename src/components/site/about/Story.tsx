import { useReveal } from "@/lib/motion";
import interior from "@/assets/interior.jpg";
import g2 from "@/assets/g2.jpg";

const pillars = [
  {
    title: "Mission",
    body: "To make world-class hair and beauty craft accessible across Andhra Pradesh, without ever diluting the detail.",
  },
  {
    title: "Vision",
    body: "To be the most trusted luxury salon house in South India — known for consistency, hygiene and artistry.",
  },
  {
    title: "Values",
    body: "Honest consultation, premium products only, respect for every hair type, and a calm, unhurried chair.",
  },
];

export function Story() {
  const ref = useReveal<HTMLDivElement>({ selector: ".story-fade", stagger: 0.14 });

  return (
    <section id="story" className="bg-background py-28 md:py-36">
      <div ref={ref} className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="story-fade relative">
            <div className="overflow-hidden rounded-[2rem] border border-gold/20 shadow-luxe">
              <img
                src={interior}
                alt="Interior of the SASS Hair & Beauty flagship salon"
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-4/3 w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-10 -right-4 hidden w-44 overflow-hidden rounded-[1.5rem] border border-gold/30 shadow-gold md:block">
              <img
                src={g2}
                alt="Styling detail at SASS"
                loading="lazy"
                width={400}
                height={500}
                className="aspect-4/5 w-full object-cover"
              />
            </div>
          </div>

          <div className="story-fade">
            <p className="eyebrow text-gold">Our Story</p>
            <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05]">
              A single chair in Vijayawada,{" "}
              <span className="italic text-gold-gradient">a house of craft today</span>
            </h2>
            <div className="mt-7 space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                SASS Hair &amp; Beauty began in 2011 as a small studio on MG Road with one
                promise — that a haircut in Andhra Pradesh should feel as considered as one
                in Milan or Mumbai. No rushed chairs, no compromise products, no guesswork.
              </p>
              <p>
                Over fifteen years that promise turned into three flagship salons, a
                dedicated bridal suite, and a team of colourists and texture specialists
                trained on L'Oréal, Schwarzkopf, Wella and Olaplex systems.
              </p>
              <p>
                Today more than 42,000 clients trust us with the way they walk into a room —
                and every one of them still starts with the same twelve-minute consultation
                we began with.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <article key={p.title} className="story-fade luxe-card bg-card p-8">
              <span className="inline-block size-2 rotate-45 bg-gold-gradient" />
              <h3 className="mt-6 text-2xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
