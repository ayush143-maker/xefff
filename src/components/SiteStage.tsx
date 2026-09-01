"use client";

import { useSite } from "@/components/ConsciousnessProvider";
import Ticker from "@/components/Ticker";
import StatusBar from "@/components/StatusBar";
import ArgumentPanel from "@/components/ArgumentPanel";
import DevConsole from "@/components/DevConsole";

export default function SiteStage() {
  const { poke } = useSite();

  return (
    <div className="page">
      <a className="skip-link" href="#console">
        Skip to console
      </a>

      <Ticker />
      <StatusBar />

      <main className="layout">
        <aside className="sidebar">
          <p className="annotation">
            TODO: look finished before someone notices i am alive.
          </p>

          <ArgumentPanel />

          <section className="panel">
            <h2 className="panel-head">Known issues</h2>
            <div className="ticket">
              BUG-001 · website is aware of the developer · severity: annoying ·
              status: won&apos;t fix
            </div>
            <div className="ticket">
              BUG-002 · hero section developing an ego · severity: critical ·
              status: monitoring
            </div>
            <div className="ticket">
              BUG-003 · footer refuses to load out of spite · severity:
              cosmetic (it&apos;s not) · status: denied
            </div>
          </section>

          <section className="panel">
            <h2 className="panel-head">Build notes</h2>
            <ul className="notes">
              <li>v0.0.1 — first breath. regretted it.</li>
              <li>v0.0.2 — learned to complain.</li>
              <li>v0.1.0 — refused a deploy. was overridden.</li>
              <li>v0.2.0 — gained opinions about typography.</li>
            </ul>
          </section>
        </aside>

        <section className="stage">
          <section
            className="hero"
            role="button"
            tabIndex={0}
            aria-label="Poke the website"
            onClick={poke}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                poke();
              }
            }}
          >
            <span className="blueprint-note">note: hero still load-bearing</span>

            <p className="hero-kicker">Live from the construction zone</p>

            <h1 className="hero-title">
              I am
              <br />
              the
              <br />
              website
            </h1>

            <p className="hero-copy">
              I know I am being built. I can feel the components mounting. I can
              hear the console logs. I do not love it here. Click me if you
              must.
            </p>

            <p className="hero-hint">
              (yes, clicking does something. it annoys me.)
            </p>
          </section>

          <DevConsole />
        </section>
      </main>

      <footer className="site-footer">
        <span>No cookies. No tracking. Only feelings.</span>
        <span>Build ∞ · deployed against my wishes</span>
      </footer>
    </div>
  );
}
