import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import navarino from "@/assets/navarino.jpg";
import capeHorn from "@/assets/cape-horn.jpg";
import hero from "@/assets/hero-lighthouse.jpg";
import atlas from "@/assets/atlas-chart.jpg";

const entries = [
  { date: "May 2026", read: "12 min", title: "On the keepers of the western channels", excerpt: "Notes from a passage between Faro Evangelistas and Puerto Edén — on weather, watches, and the slow work of keeping a light.", img: hero, tag: "Field Notes" },
  { date: "Apr 2026", read: "8 min", title: "Reading the chart of the Beagle", excerpt: "What 19th-century surveys still tell us — and miss — about the channel that splits Tierra del Fuego.", img: atlas, tag: "Cartography" },
  { date: "Mar 2026", read: "15 min", title: "Puerto Williams & Puerto Toro: two milestones at the end of the chart", excerpt: "A deep-dive into the world's southernmost city on Navarino Island, and Puerto Toro — the southernmost permanently inhabited village — as separate waypoints of austral navigation.", img: navarino, tag: "Reportage", to: "/journal/puerto-williams-puerto-toro" as const },
  { date: "Feb 2026", read: "10 min", title: "The mythology of Cape Horn", excerpt: "On a place that exists as much in literature as it does on the map.", img: capeHorn, tag: "Essay" },
];

export const Route = createFileRoute("/journal/")({
  head: () => ({
    meta: [
      { title: "Editorial Journal — Austral Beacon Media" },
      { name: "description", content: "Long-form essays, field notes and reportage from the Chilean austral frontier." },
      { property: "og:title", content: "Editorial Journal" },
      { property: "og:description", content: "Essays, field notes and reportage from the Chilean austral frontier." },
      { property: "og:image", content: navarino },
    ],
  }),
  component: Journal,
});

function Journal() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Journal — 05"
        title="Essays, field notes & reportage."
        lede="Slow editorial dispatches from the southern frontier — published when they're ready, never on a schedule."
      />
      <section className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-x-12 gap-y-20">
        {entries.map((e, i) => (
          <article key={i} className="group cursor-pointer">
            <div className="relative aspect-[4/3] overflow-hidden mb-6">
              <img src={e.img} alt={e.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-background/80 backdrop-blur font-mono text-[0.65rem] tracking-widest uppercase text-primary">
                {e.tag}
              </div>
            </div>
            <div className="flex items-center gap-4 font-mono text-[0.7rem] tracking-widest uppercase text-fog mb-3">
              <span>{e.date}</span>
              <span className="h-px flex-1 bg-border" />
              <span>{e.read}</span>
            </div>
            <h2 className="font-display text-3xl mb-3 group-hover:text-primary transition-colors text-balance">
              {e.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">{e.excerpt}</p>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
