import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Austral Beacon Media" },
      { name: "description", content: "Editorial correspondence, collaborations and inquiries." },
      { property: "og:title", content: "Contact Austral Beacon Media" },
      { property: "og:description", content: "Editorial correspondence, collaborations and inquiries." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <PageHeader
        eyebrow="Contact — 06"
        title="Editorial correspondence."
        lede="For editorial collaborations, archival contributions, or expedition inquiries — write to us. We answer slowly and carefully."
      />
      <section className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16 pb-24">
        <div className="lg:col-span-5 space-y-10">
          <div>
            <p className="eyebrow mb-3">Editorial</p>
            <a href="mailto:editorial@australbeacon.media" className="font-display text-2xl hover:text-primary transition-colors">
              editorial@australbeacon.media
            </a>
          </div>
          <div>
            <p className="eyebrow mb-3">Atlas Projects</p>
            <a href="mailto:atlas@australbeacon.media" className="font-display text-2xl hover:text-primary transition-colors">
              atlas@australbeacon.media
            </a>
          </div>
          <div>
            <p className="eyebrow mb-3">Field Office</p>
            <p className="text-muted-foreground leading-relaxed">
              Punta Arenas — Magallanes y Antártica Chilena<br/>
              <span className="font-mono text-xs text-fog">53° 09′ S — 70° 55′ W</span>
            </p>
          </div>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <Field label="Subject" name="subject" />
          <div>
            <label className="font-mono text-[0.65rem] tracking-widest uppercase text-fog block mb-2">Message</label>
            <textarea
              required
              rows={6}
              className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="px-8 py-3 bg-primary text-primary-foreground font-mono text-xs tracking-widest uppercase hover:bg-beacon transition-colors disabled:opacity-50"
            disabled={sent}
          >
            {sent ? "Transmission received" : "Send transmission"}
          </button>
        </form>
      </section>
    </PageShell>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="font-mono text-[0.65rem] tracking-widest uppercase text-fog block mb-2">{label}</label>
      <input
        {...props}
        className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground transition-colors"
      />
    </div>
  );
}
