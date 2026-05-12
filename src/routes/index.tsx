import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import hero from "@/assets/hero-lighthouse.jpg";
import capeHorn from "@/assets/cape-horn.jpg";
import navarino from "@/assets/navarino.jpg";
import antarctica from "@/assets/antarctica.jpg";
import atlas from "@/assets/atlas-chart.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Austral Beacon Media — Lighthouse & Maritime Geography Intelligence" },
      { name: "description", content: "A specialized intelligence platform documenting the southern lighthouse network, maritime routes and navigation systems of the Chilean far south — Puerto Williams, Navarino, Cape Horn, Chilean Antarctica." },
      { property: "og:title", content: "Austral Beacon Media — Lighthouse & Maritime Geography" },
      { property: "og:description", content: "Documenting the southern lighthouse network, maritime routes and navigational heritage of the Chilean austral frontier." },
      { property: "og:image", content: hero },
      { property: "twitter:image", content: hero },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Lighthouse on the Chilean austral coast"
            width={1920}
            height={1280}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pb-20 pt-32 w-full">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-16 bg-primary" />
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary">
              Lighthouse & Maritime Intelligence — 54° 56′ S
            </p>
          </div>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.9] text-balance max-w-4xl">
            The southern
            <span className="block italic text-primary">lighthouse network.</span>
          </h1>
          <p className="mt-10 max-w-xl text-lg text-muted-foreground leading-relaxed">
            A specialized geographic intelligence platform documenting the lighthouses, maritime routes, navigation systems and frontier islands of the Chilean far south — from the Strait of Magellan through Puerto Williams and Cape Horn to Chilean Antarctica.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/lighthouse-network"
              className="px-6 py-3 bg-primary text-primary-foreground font-mono text-xs tracking-widest uppercase hover:bg-beacon transition-colors"
            >
              Enter the Network
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 border border-border text-foreground font-mono text-xs tracking-widest uppercase hover:border-primary hover:text-primary transition-colors"
            >
              About the Project
            </Link>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-32">
        <p className="eyebrow mb-8">Areas of Authority</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-border border border-border">
          {[
            { n: "01", t: "Lighthouse Systems", d: "Beacons, ranges and navigational marks of the austral coast." },
            { n: "02", t: "Maritime Routes", d: "Channels, passages and sailing directions of the southern seas." },
            { n: "03", t: "Cartography", d: "Charts and field maps of the Chilean far south." },
            { n: "04", t: "Expedition Geography", d: "Remote islands, fjords and frontier reconnaissance." },
            { n: "05", t: "Southern Navigation", d: "Pilotage, signals and navigational heritage." },
          ].map((c) => (
            <div key={c.n} className="bg-background p-6">
              <p className="font-mono text-[0.65rem] tracking-widest text-primary mb-4">{c.n}</p>
              <h3 className="font-display text-lg mb-2">{c.t}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="max-w-5xl mx-auto px-6 lg:px-10 pb-32">
        <p className="eyebrow mb-8">Editorial Compass</p>
        <p className="font-display text-3xl md:text-5xl leading-tight text-balance">
          “We map what guides ships through the <span className="text-primary italic">southernmost waters of the Americas</span> — the lighthouses, the channels, the islands at the end of the chart.”
        </p>
      </section>

      {/* TERRITORIES GRID */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="eyebrow mb-3">Coverage Territories</p>
            <h2 className="font-display text-4xl md:text-5xl">The austral chart.</h2>
          </div>
          <Link to="/lighthouse-network" className="font-mono text-xs tracking-widest uppercase text-primary hover:text-beacon">
            Enter the Network →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {[
            { img: hero, title: "Lighthouse Network", coord: "—", note: "Beacons of the southern coast" },
            { img: capeHorn, title: "Cape Horn", coord: "55° 58′ S", note: "The terminal cape" },
            { img: navarino, title: "Navarino Island", coord: "55° S", note: "Frontier island geography" },
            { img: atlas, title: "Puerto Williams", coord: "54° 56′ S", note: "The southernmost city in the world — distinct from Puerto Toro, the southernmost village", to: "/journal/puerto-williams-puerto-toro" as const },
            { img: hero, title: "Strait of Magellan", coord: "53° S", note: "The interoceanic passage" },
            { img: antarctica, title: "Chilean Antarctica", coord: "62°+ S", note: "Across the Drake Passage" },
          ].map((t) => (
            <article key={t.title} className="group relative bg-background overflow-hidden aspect-[4/5]">
              <img
                src={t.img}
                alt={t.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <p className="font-mono text-[0.65rem] tracking-widest text-primary">{t.coord}</p>
                <div>
                  <h3 className="font-display text-2xl">{t.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{t.note}</p>
                  {"to" in t && t.to && (
                    <Link to={t.to} className="inline-block mt-3 font-mono text-[0.65rem] tracking-widest uppercase text-primary hover:text-beacon">
                      Read the dispatch →
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BRAND ARCHITECTURE */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-32">
        <p className="eyebrow mb-3">Brand Architecture</p>
        <h2 className="font-display text-4xl md:text-5xl mb-16 max-w-2xl">
          A constellation of southern projects.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-border p-8 hover:border-primary transition-colors">
            <p className="font-mono text-[0.65rem] tracking-widest text-primary mb-6">INTELLIGENCE PLATFORM</p>
            <h3 className="font-display text-2xl mb-3">Austral Beacon Media</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The parent platform. Specialized in lighthouse systems, maritime routes and southern navigation.
            </p>
          </div>
          <div className="border border-border p-8 hover:border-primary transition-colors">
            <p className="font-mono text-[0.65rem] tracking-widest text-primary mb-6">CARTOGRAPHIC LAYER</p>
            <h3 className="font-display text-2xl mb-3">End of the World Atlas</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Charts, beacons and route documentation of the austral coasts and channels.
            </p>
          </div>
          <div className="border border-border p-8 hover:border-primary transition-colors">
            <p className="font-mono text-[0.65rem] tracking-widest text-primary mb-6">EXPEDITION LAYER</p>
            <h3 className="font-display text-2xl mb-3">End of the World Travel</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Field operations into the lighthouse network, southern islands and Antarctic approaches.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
