import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-16">
      <p className="eyebrow mb-6">{eyebrow}</p>
      <h1 className="font-display text-5xl md:text-7xl leading-[0.95] text-balance max-w-4xl">
        {title}
      </h1>
      {lede && (
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty leading-relaxed">
          {lede}
        </p>
      )}
      <div className="hairline mt-16" />
    </section>
  );
}
