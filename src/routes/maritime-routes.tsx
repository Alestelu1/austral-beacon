import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import antarctica from "@/assets/antarctica.jpg";

const routes = [
  { from: "Punta Arenas", to: "Puerto Williams", dist: "≈ 240 nm", via: "Strait of Magellan · Cockburn · Beagle" },
  { from: "Puerto Williams", to: "Cape Horn", dist: "≈ 85 nm", via: "Beagle Channel · Bahía Nassau" },
  { from: "Punta Arenas", to: "Antarctic Peninsula", dist: "≈ 600 nm", via: "Drake Passage" },
  { from: "Puerto Natales", to: "Puerto Edén", dist: "≈ 180 nm", via: "Última Esperanza · Sarmiento" },
  { from: "Puerto Montt", to: "Puerto Natales", dist: "≈ 800 nm", via: "Patagonian Channels" },
];

export const Route = createFileRoute("/maritime-routes")({
  head: () => ({
    meta: [
      { title: "Maritime Routes — Austral Beacon Media" },
      { name: "description", content: "Documentary record of the principal maritime routes of the Chilean austral region." },
      { property: "og:title", content: "Maritime Routes of the Chilean South" },
      { property: "og:description", content: "Documentary record of the principal maritime routes of the Chilean austral region." },
      { property: "og:image", content: antarctica },
    ],
  }),
  component: Routes,
});

function Routes() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Routes — 04"
        title="The threads between the beacons."
        lede="A working index of the principal navigation routes that knit the Chilean far south together — from the Patagonian channels to the Drake Passage."
      />
      <section className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-px bg-border">
          {routes.map((r, i) => (
            <article key={i} className="bg-background grid md:grid-cols-12 gap-4 p-8 hover:bg-card/40 transition-colors items-center">
              <p className="md:col-span-1 font-mono text-xs text-primary">R-{String(i + 1).padStart(2, "0")}</p>
              <div className="md:col-span-5">
                <h3 className="font-display text-2xl">
                  {r.from} <span className="text-fog mx-2">→</span> {r.to}
                </h3>
              </div>
              <p className="md:col-span-2 font-mono text-sm text-glacier">{r.dist}</p>
              <p className="md:col-span-4 text-sm text-muted-foreground">via {r.via}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative my-32 h-[60vh] overflow-hidden">
        <img src={antarctica} alt="Vessel in Antarctic waters" loading="lazy" width={1600} height={1000} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 h-full flex items-end pb-12">
          <p className="font-display text-3xl md:text-4xl max-w-xl text-balance">
            Beyond the Drake Passage — the Chilean Antarctic Territory.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
