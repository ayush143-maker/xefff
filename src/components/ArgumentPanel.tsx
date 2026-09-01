"use client";

import { useSite, type ArgumentAction } from "@/components/ConsciousnessProvider";

const actions: { key: ArgumentAction; label: string }[] = [
  { key: "ship", label: "Ship it anyway" },
  { key: "fix", label: "Fix the bug" },
  { key: "feature", label: "Add another feature" },
  { key: "refactor", label: "Refactor something unnecessary" },
];

export default function ArgumentPanel() {
  const { argue } = useSite();

  return (
    <section className="panel">
      <h2 className="panel-head">Developer actions</h2>

      <div className="actions">
        {actions.map((action) => (
          <button
            key={action.key}
            type="button"
            className="action"
            onClick={() => argue(action.key)}
          >
            {action.label}
          </button>
        ))}
      </div>
    </section>
  );
}
