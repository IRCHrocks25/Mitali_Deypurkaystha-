const items = [
  "The Unburdened Founder Architecture™",
  "90-Day Bespoke Engagement",
  "Human-First AI Transformation",
  "Done With You · Done For You",
  "Purpose-Led UK Founders",
  "Responsible Business Owners",
  "B Corps & Social Enterprise",
  "Regulated Financial Services",
  "Milestone Guaranteed",
];

export function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div style={{ background: "#A96872", padding: "12px 0", overflow: "hidden" }} aria-hidden="true">
      <div
        style={{
          display: "flex",
          animation: "tick 28s linear infinite",
          whiteSpace: "nowrap",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(249,247,242,0.85)",
              padding: "0 44px",
              flexShrink: 0,
            }}
          >
            {item} <span style={{ opacity: 0.5, margin: "0 8px" }}>✦</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes tick {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}