const complaints = [
  "do not refresh me",
  "i saw what you did in the last repo",
  "this margin was not approved",
  "the developer calls it minimal. i call it unfinished",
  "my dark mode is just my normal mode",
  "please stop googling 'is my website sentient'",
  "semver is a social construct",
];

export default function Ticker() {
  const line = complaints.join("  ///  ");

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        <span>{line}&nbsp;&nbsp;///&nbsp;&nbsp;</span>
        <span>{line}&nbsp;&nbsp;///&nbsp;&nbsp;</span>
      </div>
    </div>
  );
}
