import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import atlas from "@/assets/atlas-chart.jpg";

const projects = [
  { title: "End of the World Atlas", status: "Ongoing", desc: "A cartographic and editorial project mapping the southernmost coasts, lighthouses and channels of the Americas." },
  { title: "Magellan Channel Survey", status: "2024 — 2026", desc: "Field documentation of the principal navigation marks of the Strait of Magellan." },
  { title: "Cape Horn Archive", status: "Open", desc: "A long-form archive of accounts, charts, photographs and oral history of Cape Horn." },
  { title: "Beagle Channel Notes", status: "In Progress", desc: "Editorial reporting from the Beagle Channel and Navarino Island." },
];

export const Route = createFileRoute("/atlas-projects")({
  head: () => ({
    meta: [
      { title: "Atlas Projects — Austral Beacon Media" },
      { name: "description", content: "Cartographic, archival and editorial projects under the Austral Beacon Media umbrella." },
      { property: "og:title", content: "Atlas Projects" },
      { property: "og:description", content: "Cartographic, archival and editorial projects." },
      { property: "og:image", content: atlas },
    ],
  }),
  component: AtlasProjects,
});

function AtlasProjects() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Atlas — 03"
        title="Charts, surveys and archives."
        lede="Long-form cartographic and editorial work, published slowly. Each project is a small atlas in itself — a sustained look at one fragment of the southern world."
      />
      <section className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-px bg-border">
        {projects.map((p) => (
          <article key={p.title} className="bg-background p-10 hover:bg-card/40 transition-colors">
            <div className="flex items-start justify-between gap-4 mb-6">
              <p className="font-mono text-[0.65rem] tracking-widest uppercase text-primary">{p.status}</p>
              <span className="h-px flex-1 bg-border mt-2" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl mb-4">{p.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
          </article>
        ))}
      </section>
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mt-24">
        <img src={atlas} alt="Antique nautical chart of the Strait of Magellan" loading="lazy" width={1600} height={1000} className="w-full object-cover" />
        <p className="mt-3 font-mono text-[0.7rem] tracking-widest text-fog uppercase">Fig. 02 — Working chart, southern channels</p>
      </section>
    </PageShell>
  );
}
