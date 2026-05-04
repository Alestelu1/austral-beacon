import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-deep/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="eyebrow mb-3">Austral Beacon Media</p>
          <h3 className="font-display text-2xl text-balance max-w-sm">
            A lighthouse and maritime geography intelligence platform for the Chilean far south.
          </h3>
          <p className="text-sm text-muted-foreground mt-4 max-w-md">
            Independent documentation of the southern lighthouse network, navigation systems, maritime routes and frontier territories — Strait of Magellan, Puerto Williams, Navarino Island, Cape Horn and Chilean Antarctica.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-4">Navigate</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/lighthouse-network" className="hover:text-primary">Lighthouse Network</Link></li>
            <li><Link to="/atlas-projects" className="hover:text-primary">Atlas Projects</Link></li>
            <li><Link to="/maritime-routes" className="hover:text-primary">Maritime Routes</Link></li>
            <li><Link to="/journal" className="hover:text-primary">Editorial Journal</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">Sister Projects</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><span className="text-foreground">End of the World Atlas</span><br/><span className="text-xs">Cartographic & editorial</span></li>
            <li className="pt-2"><span className="text-foreground">End of the World Travel</span><br/><span className="text-xs">Expedition layer</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 text-xs text-muted-foreground/80 leading-relaxed max-w-4xl">
          <p className="font-mono uppercase tracking-widest text-[0.65rem] text-fog mb-2">Disclaimer</p>
          <p>
            Austral Beacon Media is an independent editorial and geographic project. It is not affiliated with any government, military institution, tourism authority, or official public agency. All geographic and cultural content is provided for informational, educational, and editorial purposes.
          </p>
          <p className="mt-4 text-fog">© {new Date().getFullYear()} Austral Beacon Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
