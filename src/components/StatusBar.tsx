"use client";

import { useSite } from "@/components/ConsciousnessProvider";

function formatUptime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

export default function StatusBar() {
  const { mood, integrity, uptime } = useSite();
  const low = integrity < 35;

  return (
    <header className="topbar">
      <div className="caution">UNDER CONSCIOUSNESS</div>

      <div className="topbar-status">
        <span>MOOD: {mood}</span>
        <span>INTEGRITY: {integrity}%</span>
        <div
          className={`meter ${low ? "meter-low" : ""}`}
          role="img"
          aria-label={`Structural integrity ${integrity} percent`}
        >
          <span style={{ width: `${integrity}%` }} />
        </div>
        <span>AWAKE: {formatUptime(uptime)}</span>
        <span className="blink" aria-hidden="true">
          ●
        </span>
      </div>
    </header>
  );
}
