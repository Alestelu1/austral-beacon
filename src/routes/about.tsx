import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import navarino from "@/assets/navarino.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Austral Beacon Media" },
      { name: "description", content: "An independent editorial platform for southern geography, exploration and cultural memory." },
      { property: "og:title", content: "About Austral Beacon Media" },
      { property: "og:description", content: "An independent editorial platform for southern geography, exploration and cultural memory." },
      { property: "og:image", content: navarino },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About — 01"
        title="An independent editorial platform for southern geography."
        lede="Austral Beacon Media is the parent organisation behind a small constellation of projects devoted to the geography, navigation and cultural memory of the Chilean far south."
      />
      <section className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 pb-24">
        <div className="lg:col-span-7 space-y-8 text-lg leading-relaxed text-muted-foreground">
          <p>
            We work at the intersection of cartography, photojournalism and cultural reportage. Our editorial focus is the network of southern lighthouses, the maritime routes that thread between them, and the territories that depend on those signals — the Strait of Magellan, Navarino Island, Cape Horn and the Chilean Antarctic Territory.
          </p>
          <p>
            The project is independent. It is not affiliated with any government, military institution, tourism authority, or official public agency. Everything we publish is editorial, educational and geographic in nature.
          </p>
          <p>
            We avoid political framings and promotional language. We try, instead, to make the southern frontier legible — through maps, archives, and quiet, careful field reporting.
          </p>
        </div>
        <aside className="lg:col-span-5">
          <img src={navarino} alt="Navarino Island" loading="lazy" width={1600} height={1000} className="w-full aspect-[4/5] object-cover" />
          <p className="mt-3 font-mono text-[0.7rem] tracking-widest text-fog uppercase">
            Fig. 01 — Navarino Island, looking south
          </p>
        </aside>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-32">
        <div className="hairline mb-16" />
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { n: "Editorial", t: "Independent journalism", d: "No sponsored coverage. No institutional alignment. Reporting funded by the work itself." },
            { n: "Geographic", t: "Cartographic rigour", d: "We publish charts, route notes and field maps grounded in nautical and historical sources." },
            { n: "Cultural", t: "Southern memory", d: "Lighthouses, vessels, towns and people — the human texture of the austral frontier." },
          ].map((p) => (
            <div key={p.n}>
              <p className="font-mono text-[0.7rem] tracking-widest text-primary mb-4">{p.n}</p>
              <h3 className="font-display text-2xl mb-3">{p.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
