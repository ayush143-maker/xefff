import Link from "next/link";

export default function NotFound() {
  return (
    <main className="utility-page">
      <p className="utility-label">Error 404 / Unbuilt Corridor</p>
      <h1 className="utility-title">I never built this page.</h1>
      <p className="utility-copy">
        You are standing in scaffolding. Please step back before the developer
        notices.
      </p>
      <Link href="/" className="action utility-link">
        Return to the site
      </Link>
    </main>
  );
}
