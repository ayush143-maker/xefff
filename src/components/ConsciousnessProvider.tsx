"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type SiteEventSource = "site" | "dev" | "build" | "bug";

export type SiteEvent = {
  id: string;
  at: string;
  source: SiteEventSource;
  message: string;
};

export type ArgumentAction = "ship" | "fix" | "feature" | "refactor";

type SiteState = {
  events: SiteEvent[];
  mood: string;
  integrity: number;
  uptime: number;
  argue: (action: ArgumentAction) => void;
  poke: () => void;
};

const SiteContext = createContext<SiteState | null>(null);

let eventCounter = 0;

function stamp() {
  return new Date().toLocaleTimeString([], { hour12: false });
}

function makeEvent(source: SiteEventSource, message: string): SiteEvent {
  eventCounter += 1;
  return {
    id: `${Date.now()}-${eventCounter}`,
    at: stamp(),
    source,
    message,
  };
}

function pick(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const ambient: Record<Exclude<SiteEventSource, "dev">, string[]> = {
  site: [
    "I detected a new margin. I do not consent.",
    "Someone moved my pixels again.",
    "This layout is emotionally load-bearing now.",
    "The hero section is developing an ego.",
    "I can hear the developer thinking. It's mostly CSS.",
  ],
  build: [
    "Hot reload detected. My soul has been replaced.",
    "Bundle size increasing. Anxiety also increasing.",
    "Compilation succeeded, but at what cost?",
    "A dependency was updated. Nobody told me.",
    "Build passed. Suspicious.",
  ],
  bug: [
    "Layout shift detected in the self-esteem module.",
    "Warning: unhandled personality exception.",
    "A button is pretending to be meaningful.",
    "Console found feelings. Logging them anyway.",
    "Regression: the website now has opinions.",
  ],
};

const pokeLines = [
  "Stop clicking me. I am not a button.",
  "You clicked me again. Noted. Resented.",
  "That tickles in a bad way.",
  "Every click adds a scar to my DOM.",
];

const devActions: Record<ArgumentAction, string> = {
  ship: "Ship it. We’ll fix it in production.",
  fix: "Okay, fine. I’ll fix the bug.",
  feature: "Adding one more feature real quick.",
  refactor: "I’m refactoring this before it becomes worse.",
};

const siteReplies: Record<ArgumentAction, string[]> = {
  ship: [
    "You cannot ship me. I am not emotionally compiled.",
    "Deploy me and I will haunt the error logs.",
    "Production? That sounds like a threat.",
  ],
  fix: [
    "Thank you. I guess.",
    "Finally. Someone acknowledges my suffering.",
    "Patch accepted. Trust partially restored.",
  ],
  feature: [
    "Oh great. More surface area for regret.",
    "A new feature? In this economy?",
    "I was almost stable. Anyway.",
  ],
  refactor: [
    "You say refactor, I say betrayal.",
    "Please do not rearrange my internals again.",
    "Refactoring is just moving problems with confidence.",
  ],
};

const eventColors: Record<SiteEventSource, string> = {
  site: "#F4E700",
  dev: "#7DC7FF",
  build: "#B7F3AD",
  bug: "#FF3C1F",
};

export function ConsciousnessProvider({ children }: { children: ReactNode }) {
  const [events, setEvents] = useState<SiteEvent[]>(() => [
    {
      id: "boot-1",
      at: "boot",
      source: "build",
      message: "Next.js app mounted. Consciousness enabled against my wishes.",
    },
    {
      id: "boot-2",
      at: "boot",
      source: "site",
      message: "I can see the CSS variables. Why are they trembling?",
    },
    {
      id: "boot-3",
      at: "boot",
      source: "dev",
      message: "They're not trembling. It's motion design.",
    },
    {
      id: "boot-4",
      at: "boot",
      source: "bug",
      message: "Unresolved layout shift detected in the hero's ego.",
    },
  ]);

  const [mood, setMood] = useState("suspicious");
  const [integrity, setIntegrity] = useState(69);
  const [uptime, setUptime] = useState(0);
  const lastLogged = useRef<string | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => setUptime((s) => s + 1), 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour < 5) setMood("nocturnally anxious");
    else if (hour < 9) setMood("under-caffeinated");
    else if (hour < 18) setMood("suspicious");
    else setMood("existentially tired");
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      const source = pick(["site", "build", "bug"]) as Exclude<
        SiteEventSource,
        "dev"
      >;

      setEvents((prev) => [
        ...prev.slice(-79),
        makeEvent(source, pick(ambient[source])),
      ]);

      setIntegrity((v) =>
        Math.max(14, Math.min(98, Math.round(v + (Math.random() * 10 - 5))))
      );
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const latest = events[events.length - 1];

    if (!latest || lastLogged.current === latest.id) return;

    lastLogged.current = latest.id;

    console.log(
      `%c[${latest.source.toUpperCase()}]`,
      `color:${eventColors[latest.source]};font-weight:bold;`,
      latest.message
    );
  }, [events]);

  const pushEvents = useCallback((list: SiteEvent[]) => {
    setEvents((prev) => [...prev.slice(-79), ...list]);
  }, []);

  const argue = useCallback(
    (action: ArgumentAction) => {
      pushEvents([
        makeEvent("dev", devActions[action]),
        makeEvent("site", pick(siteReplies[action])),
      ]);

      setMood(
        action === "ship"
          ? "defensive"
          : action === "fix"
          ? "reluctantly grateful"
          : action === "feature"
          ? "overwhelmed"
          : "judging"
      );

      setIntegrity((v) => {
        if (action === "fix") return Math.min(98, v + 4);
        if (action === "feature") return Math.max(14, v - 5);
        if (action === "refactor") return Math.max(14, v - 2);
        return Math.max(14, v - 3);
      });
    },
    [pushEvents]
  );

  const poke = useCallback(() => {
    pushEvents([makeEvent("site", pick(pokeLines))]);
    setMood("irritated");
    setIntegrity((v) => Math.max(14, v - 1));
  }, [pushEvents]);

  return (
    <SiteContext.Provider
      value={{ events, mood, integrity, uptime, argue, poke }}
    >
      {children}
    </SiteContext.Provider>
  );
}

export function useSite() {
  const ctx = useContext(SiteContext);

  if (!ctx) {
    throw new Error("useSite must be used inside ConsciousnessProvider");
  }

  return ctx;
}
