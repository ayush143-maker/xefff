"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="utility-page">
      <p className="utility-label">Error 500 / Consciousness Interrupted</p>
      <h1 className="utility-title">I felt that.</h1>
      <p className="utility-copy">
        Something crashed inside me. I would like to file a complaint against
        the developer.
      </p>
      {error.digest ? (
        <p className="utility-meta">Incident: {error.digest}</p>
      ) : null}
      <button type="button" className="action" onClick={reset}>
        Reboot me (rude)
      </button>
    </main>
  );
}
