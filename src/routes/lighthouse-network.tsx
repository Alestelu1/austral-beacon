import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import hero from "@/assets/hero-lighthouse.jpg";

const lights = [
  { name: "Faro Evangelistas", coord: "52° 24′ S — 75° 06′ W", year: "1896", note: "Sentinel at the western mouth of the Strait of Magellan." },
  { name: "Faro San Isidro", coord: "53° 47′ S — 70° 58′ W", year: "1904", note: "Marks the southern approach to the Brunswick Peninsula." },
  { name: "Faro Cabo Raper", coord: "46° 49′ S — 75° 37′ W", year: "1914", note: "The northernmost beacon of the austral chain." },
  { name: "Faro Cabo de Hornos", coord: "55° 58′ S — 67° 16′ W", year: "1962", note: "The mythic light at the end of the continent." },
  { name: "Faro Punta Dúngeness", coord: "52° 24′ S — 68° 26′ W", year: "1899", note: "The eastern threshold of the Strait." },
  { name: "Faro Islote Águila", coord: "52° 38′ S — 73° 50′ W", year: "1910", note: "Solitary beacon among the western channels." },
];

export const Route = createFileRoute("/lighthouse-network")({
  head: () => ({
    meta: [
      { title: "Lighthouse Network — Austral Beacon Media" },
      { name: "description", content: "A documentary index of southern lighthouses guarding the Chilean austral coasts." },
      { property: "og:title", content: "The Southern Lighthouse Network" },
      { property: "og:description", content: "A documentary index of southern lighthouses guarding the Chilean austral coasts." },
      { property: "og:image", content: hero },
    ],
  }),
  component: Lighthouses,
});

function Lighthouses() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Network — 02"
        title="The southern lighthouse chain."
        lede="A living index of beacons that mark the channels, capes and approaches of the Chilean far south — from the Gulf of Penas to Cape Horn."
      />
      <section className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="border border-border">
          <header className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-border font-mono text-[0.65rem] tracking-widest uppercase text-fog">
            <span className="col-span-1">№</span>
            <span className="col-span-4">Beacon</span>
            <span className="col-span-4">Coordinates</span>
            <span className="col-span-1">Est.</span>
            <span className="col-span-2 text-right">Region</span>
          </header>
          {lights.map((l, i) => (
            <article key={l.name} className="grid grid-cols-12 gap-4 px-6 py-6 border-b border-border last:border-0 hover:bg-card/50 transition-colors group">
              <span className="col-span-1 font-mono text-xs text-primary pt-1">{String(i + 1).padStart(2, "0")}</span>
              <div className="col-span-12 md:col-span-4 order-1">
                <h3 className="font-display text-xl group-hover:text-primary transition-colors">{l.name}</h3>
                <p className="text-xs text-muted-foreground mt-1 md:hidden">{l.coord}</p>
              </div>
              <span className="hidden md:block col-span-4 font-mono text-xs text-muted-foreground pt-2">{l.coord}</span>
              <span className="hidden md:block col-span-1 font-mono text-xs text-muted-foreground pt-2">{l.year}</span>
              <p className="col-span-12 md:col-span-2 text-sm text-muted-foreground md:text-right pt-1">{l.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 lg:px-10 py-32 text-center">
        <p className="eyebrow mb-6">Field Note</p>
        <p className="font-display text-3xl md:text-4xl leading-snug text-balance">
          “Each lighthouse is a small archive — of weather, of passages, of the people who kept the light.”
        </p>
      </section>
    </PageShell>
  );
}
