import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import navarino from "@/assets/navarino.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Austral Beacon Media" },
      { name: "description", content: "An independent intelligence platform specialized in the southern lighthouse network, maritime routes and navigational heritage of the Chilean far south." },
      { property: "og:title", content: "About Austral Beacon Media" },
      { property: "og:description", content: "Specialized lighthouse, maritime and frontier geography intelligence for the Chilean austral region." },
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
        title="A lighthouse and maritime geography intelligence platform."
        lede="Austral Beacon Media is an independent platform specialized in the southern lighthouse network of Chile — its maritime routes, navigation systems, remote islands and frontier territories."
      />
      <section className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 pb-24">
        <div className="lg:col-span-7 space-y-8 text-lg leading-relaxed text-muted-foreground">
          <p>
            We are not a general media outlet. Our work is narrow and specialized: documenting the beacons, channels and pilotage of the Chilean far south — the Strait of Magellan, Puerto Williams, Navarino Island, Cape Horn and the Chilean Antarctic Territory.
          </p>
          <p>
            The platform combines cartography, navigational research and field reconnaissance. We publish chart notes, lighthouse records, route documentation and frontier geography drawn from primary sources and direct observation.
          </p>
          <p>
            Austral Beacon Media is independent. It is not affiliated with any government, military institution, tourism authority, or official public agency. All material is geographic, educational and editorial in nature — never promotional and never political.
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
            { n: "Lighthouses", t: "Network documentation", d: "A working index of southern beacons — coordinates, history, sectors and current status." },
            { n: "Maritime", t: "Routes & pilotage", d: "Channel-by-channel notes on the southern passages, drawn from charts and sailing directions." },
            { n: "Frontier", t: "Island geography", d: "Field reconnaissance of Navarino, Cape Horn, the Diego Ramírez group and the Antarctic approaches." },
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
