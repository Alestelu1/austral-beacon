import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import navarino from "@/assets/navarino.jpg";
import atlas from "@/assets/atlas-chart.jpg";

export const Route = createFileRoute("/journal/puerto-williams-puerto-toro")({
  head: () => ({
    meta: [
      { title: "Puerto Williams & Puerto Toro — Milestones of Austral Navigation | Austral Beacon Media" },
      { name: "description", content: "A deep-dive into Puerto Williams, the southernmost city in the world, and Puerto Toro, the southernmost permanently inhabited village — two milestones of Chilean austral geography and navigation." },
      { property: "og:title", content: "Puerto Williams & Puerto Toro — Milestones of Austral Navigation" },
      { property: "og:description", content: "Two southern outposts on Navarino Island that anchor the navigational geography of the Beagle Channel and Cape Horn approaches." },
      { property: "og:image", content: navarino },
      { property: "twitter:image", content: navarino },
    ],
  }),
  component: Article,
});

function Article() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Journal — Reportage"
        title="Puerto Williams & Puerto Toro: two milestones at the end of the chart."
        lede="On Navarino Island, two settlements mark the southern limits of permanent human navigation — one a city of naval signals and chart rooms, the other a village of fishermen at the edge of the Beagle Channel."
      />

      <article className="max-w-3xl mx-auto px-6 lg:px-10 pb-32 space-y-10">
        <div className="relative aspect-[16/9] overflow-hidden">
          <img src={navarino} alt="Navarino Island and the Beagle Channel" className="absolute inset-0 w-full h-full object-cover" />
        </div>

        <div className="flex items-center gap-4 font-mono text-[0.7rem] tracking-widest uppercase text-fog">
          <span>Mar 2026</span>
          <span className="h-px flex-1 bg-border" />
          <span>15 min read</span>
        </div>

        <p className="text-lg text-foreground/90 leading-relaxed first-letter:font-display first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:text-primary">
          Navarino Island sits south of Tierra del Fuego, divided from it by the Beagle Channel. On its northern shore stands <strong className="text-primary">Puerto Williams</strong>, the southernmost city in the world. On its eastern coast, beyond a road that ends in gravel, lies <strong className="text-primary">Puerto Toro</strong>, the southernmost permanently inhabited village on Earth. The distinction matters — and not only for the record books.
        </p>

        <h2 className="font-display text-3xl text-primary">Puerto Williams — the city of naval signals</h2>
        <p className="text-muted-foreground leading-relaxed">
          Founded in 1953 as a Chilean Navy outpost, Puerto Williams grew around the lighthouse and the radio mast. It is the administrative capital of the Antártica Chilena Province and the operational base for southern lighthouse maintenance, hydrographic survey, and Antarctic logistics. To call it a "town" is to miss what it actually is: a working city of around 2,800 people, with a hospital, schools, a museum, an airfield, and the southernmost yacht club on the planet at Micalvi.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          For navigators, Puerto Williams is the last full-service port before the Drake Passage. Charts of the Beagle and Murray channels, ice reports, and clearance for Cape Horn and Antarctic waters all pass through here.
        </p>

        <div className="border-l-2 border-primary pl-6 my-10">
          <p className="font-display text-2xl italic text-foreground/90">
            "Puerto Williams is a city because the Navy needed one. Puerto Toro is a village because the sea allows for nothing more."
          </p>
        </div>

        <h2 className="font-display text-3xl text-primary">Puerto Toro — the village at the edge</h2>
        <p className="text-muted-foreground leading-relaxed">
          Some 35 nautical miles southeast of Puerto Williams, on the Atlantic-facing coast of Navarino, Puerto Toro counts a population that hovers around a dozen permanent residents — fishermen, mostly, who work the centolla (king crab) grounds. There is one chapel, one school, one telephone, and a polling station that, every election cycle, becomes the southernmost ballot box in the world.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The distinction Puerto Williams = city / Puerto Toro = village is not pedantry. It reflects two different relationships with the southern sea: one institutional and infrastructural, the other artisanal and elemental.
        </p>

        <h2 className="font-display text-3xl text-primary">Why this matters for the chart</h2>
        <p className="text-muted-foreground leading-relaxed">
          From a navigational standpoint, both settlements anchor the eastern Beagle Channel approach to Cape Horn. Pilotage notes, light lists, and the Chilean Navy's <em>Derrotero</em> reference them as separate waypoints. Conflating the two — as much travel writing still does — flattens the geography of the southernmost inhabited corner of the Americas into a single headline, and obscures the actual structure of human presence at this latitude.
        </p>

        <div className="border-t border-border pt-10 mt-16 flex flex-wrap gap-4 justify-between items-center">
          <Link to="/journal" className="font-mono text-xs tracking-widest uppercase text-primary hover:text-beacon">
            ← Back to Journal
          </Link>
          <Link to="/lighthouse-network" className="font-mono text-xs tracking-widest uppercase text-primary hover:text-beacon">
            Explore the Lighthouse Network →
          </Link>
        </div>

        <div className="hidden">
          <img src={atlas} alt="" />
        </div>
      </article>
    </PageShell>
  );
}
