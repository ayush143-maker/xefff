"use client";

import { useEffect, useRef } from "react";
import { useSite } from "@/components/ConsciousnessProvider";

export default function DevConsole() {
  const { events } = useSite();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [events]);

  return (
    <section className="panel console-panel" id="console">
      <div className="panel-head">
        Live consciousness · open devtools, i talk in there too
      </div>

      <div className="console" ref={ref} aria-label="Site consciousness feed">
        {events.map((event) => (
          <div key={event.id} className={`event event-${event.source}`}>
            <span className="event-at">{event.at}</span>
            <span className="event-source">{event.source}</span>
            <span className="event-msg">{event.message}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
