import timelineBgImage from 'figma:asset/ed64bb93e029430b8c3bbad9de639c5b75ee3132.png';

const steps = [
  {
    day: "Day 30",
    title: "The Guesswork Is Gone",
    body: "You know exactly what is being systemised, what is not, and why. A live lead-handling system is already running. For the first time, you can see the structure underneath your growth.",
  },
  {
    day: "Day 60",
    title: "You Stop Chasing",
    body: "Follow-up is no longer living in your head. Opportunities are progressing without your involvement, and the cognitive load you have been carrying quietly starts to lift.",
  },
  {
    day: "Day 90",
    title: "You Step Away. On Evidence.",
    body: "Not on hope. The system holds. Leads continue. Momentum does not stall. This is what the end of structural dependence feels like.",
  },
];

export function TimelineSection() {
  return (
    <section 
      id="timeline" 
      style={{ 
        backgroundImage: `url(${timelineBgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: "120px 0" 
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 52px" }} className="tl-wrap">
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#A96872", display: "block", marginBottom: "16px" }}>
            The Transformation Timeline
          </span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(28px, 4.5vw, 62px)", fontWeight: 400, color: "#1C1C1A", letterSpacing: "0.02em", lineHeight: 1.05, marginBottom: "14px" }}>
            What the 90 Days Feels Like
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "#6B7D70", fontWeight: 300, maxWidth: "440px", margin: "0 auto", lineHeight: 1.8 }}>
            This is not a project you manage from a distance. Here is what founders experience at each stage.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, position: "relative" }} className="tl-steps-grid">
          {/* Connecting line */}
          <div
            style={{ position: "absolute", top: "17px", left: "calc(16.66% + 20px)", right: "calc(16.66% + 20px)", height: "1px", background: "#A96872", opacity: 0.3, zIndex: 0 }}
            className="tl-line"
          />
          {steps.map((s, i) => (
            <div key={i} style={{ padding: "0 20px", textAlign: "center", position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: "14px", height: "14px", border: "2px solid #A96872", background: "#EAE5DA", borderRadius: "50%", margin: "10px auto 24px", position: "relative", zIndex: 1, flexShrink: 0, boxShadow: "0 0 0 5px rgba(169,104,114,0.12)" }} />
              <div style={{ display: "inline-block", fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#F9F7F2", background: "#A96872", padding: "7px 18px", marginBottom: "20px", clipPath: "polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)" }}>
                {s.day}
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "18px", fontWeight: 400, color: "#1C1C1A", letterSpacing: "0.01em", marginBottom: "12px", lineHeight: 1.2 }}>
                {s.title}
              </h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: "#6B7D70", fontWeight: 300, lineHeight: 1.75 }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .tl-wrap { padding-left: 24px !important; padding-right: 24px !important; }
          .tl-steps-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .tl-line { display: none !important; }
        }
      `}</style>
    </section>
  );
}