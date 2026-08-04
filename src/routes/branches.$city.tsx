import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Check, Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { Navbar } from "@/components/site/Navbar";
import { PageHero } from "@/components/site/PageHero";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { LuxeButton } from "@/components/site/LuxeButton";
import { useReveal } from "@/lib/motion";
import { getBranch } from "@/lib/branches";

export const Route = createFileRoute("/branches/$city")({
  loader: ({ params }) => {
    const branch = getBranch(params.city);
    if (!branch) throw notFound();
    return { branch };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Branch not found | SASS Hair & Beauty" }, { name: "robots", content: "noindex" }],
      };
    }
    const b = loaderData.branch;
    const title = `SASS Hair & Beauty ${b.city} | Luxury Salon in ${b.city}`;
    const description = `${b.intro} Visit us at ${b.address} or call ${b.phone}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: BranchPage,
});

function BranchPage() {
  const { branch: b } = Route.useLoaderData();
  const ref = useReveal<HTMLDivElement>({ selector: ".bp-item", stagger: 0.12 });

  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <Navbar />
      <main>
        <PageHero
          crumb={b.city}
          eyebrow={b.tag}
          title="SASS"
          italic={b.city}
          subtitle={b.intro}
          image={b.image}
        />

        <section className="bg-background py-24 md:py-32">
          <div ref={ref} className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-12 lg:px-10">
            <div className="bp-item lg:col-span-7">
              <p className="eyebrow text-gold">Signature at {b.city}</p>
              <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.08]">
                What this studio is known for
              </h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {b.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 rounded-2xl border border-gold/20 bg-white/60 p-4">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                    <span className="text-sm text-foreground/75">{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-4">
                <LuxeButton as="a" href="/contact#book">
                  Book Appointment
                </LuxeButton>
                <a
                  href={`tel:${b.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 font-button text-[0.68rem] font-semibold uppercase tracking-[0.18em] transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:text-gold"
                >
                  <Phone className="size-3.5" /> Call now
                </a>
              </div>
            </div>

            <aside className="bp-item lg:col-span-5">
              <div className="luxe-card overflow-hidden">
                <iframe
                  title={`Map of SASS ${b.city}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(b.q)}&output=embed`}
                  loading="lazy"
                  className="h-64 w-full"
                />
                <div className="space-y-4 p-7">
                  <p className="flex items-start gap-3 text-sm text-foreground/75">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-gold" /> {b.address}
                  </p>
                  <p className="flex items-center gap-3 text-sm text-foreground/75">
                    <Phone className="size-4 text-gold" />
                    <a href={`tel:${b.phone.replace(/\s/g, "")}`} className="link-underline">
                      {b.phone}
                    </a>
                  </p>
                  <p className="flex items-center gap-3 text-sm text-foreground/75">
                    <Mail className="size-4 text-gold" />
                    <a href={`mailto:${b.email}`} className="link-underline">
                      {b.email}
                    </a>
                  </p>
                  <p className="flex items-center gap-3 text-sm text-foreground/75">
                    <Clock className="size-4 text-gold" /> {b.hours}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.q)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 font-button text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-ink transition-transform duration-500 hover:-translate-y-1"
                  >
                    <Navigation className="size-3.5" /> Get directions
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
