export function IntroSection() {
  return (
    <section
      id="intro"
      style={{ background: "#F9F7F2", padding: "120px 0 100px", position: "relative", overflow: "hidden" }}
    >
      {/* Subtle top rule */}
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "1px", height: "64px", background: "linear-gradient(to bottom, transparent, rgba(169,104,114,0.35))" }} />

      <div
        style={{ maxWidth: "960px", margin: "0 auto", padding: "0 52px" }}
        className="intro-inner"
      >
        {/* Overline */}
        <div style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "36px" }}>
          <div style={{ flex: 1, height: "1px", background: "rgba(169,104,114,0.25)" }} />
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "#A96872",
              whiteSpace: "nowrap",
            }}
          >
            You Have Built Something Real
          </span>
          <div style={{ flex: 1, height: "1px", background: "rgba(169,104,114,0.25)" }} />
        </div>

        {/* Main headline */}
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(36px, 5vw, 72px)",
            fontWeight: 400,
            color: "#2C2C2A",
            lineHeight: 1.08,
            letterSpacing: "0.01em",
            textAlign: "center",
            marginBottom: "52px",
          }}
        >
          A Business With Reputation,<br />
          Relationships, and Results.
        </h2>

        {/* Decorative horizontal divider */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "52px" }}>
          <div style={{ flex: 1, height: "1px", background: "rgba(44,44,42,0.1)" }} />
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#A96872", opacity: 0.6 }} />
          <div style={{ flex: 1, height: "1px", background: "rgba(44,44,42,0.1)" }} />
        </div>

        {/* Body copy — two-column on desktop */}
        <div className="intro-body-cols" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }}>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "17px",
              fontWeight: 400,
              color: "rgba(44,44,42,0.72)",
              lineHeight: 1.9,
              margin: 0,
            }}
          >
            But growth still runs through you. And deep down, you know what that means: the moment you step back, momentum slows.
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "17px",
              fontWeight: 400,
              color: "rgba(44,44,42,0.72)",
              lineHeight: 1.9,
              margin: 0,
            }}
          >
            Mitali Deypurkaystha helps UK-based, purpose-driven founders and responsible business owners build bespoke AI architecture around their business so growth continues — in impact and profit — without requiring their constant presence.
          </p>
        </div>

        {/* Bottom signature accent */}
        <div style={{ marginTop: "64px", display: "flex", alignItems: "center", justifyContent: "center", gap: "24px" }}>
          <div style={{ width: "40px", height: "1px", background: "rgba(169,104,114,0.4)" }} />
          <span style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "15px",
            fontStyle: "italic",
            color: "rgba(169,104,114,0.75)",
            letterSpacing: "0.08em",
          }}>
            The architecture can be redesigned.
          </span>
          <div style={{ width: "40px", height: "1px", background: "rgba(169,104,114,0.4)" }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .intro-inner { padding-left: 24px !important; padding-right: 24px !important; }
          .intro-body-cols { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </section>
  );
}