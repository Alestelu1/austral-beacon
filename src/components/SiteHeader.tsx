import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/lighthouse-network", label: "Lighthouses" },
  { to: "/atlas-projects", label: "Atlas" },
  { to: "/maritime-routes", label: "Routes" },
  { to: "/journal", label: "Journal" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
          </span>
          <span className="font-display text-lg tracking-wide">
            Austral Beacon <span className="text-primary">Media</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground"
        >
          <span className="block w-6 h-px bg-current mb-1.5" />
          <span className="block w-6 h-px bg-current mb-1.5" />
          <span className="block w-4 h-px bg-current ml-auto" />
        </button>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-border bg-background/95 px-6 py-4 flex flex-col gap-3">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-primary text-sm"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
