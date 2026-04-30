import mitaliPhoto from 'figma:asset/c8f175d224e48fb64ee311c7d8400cc882e30ed7.png';
import awardsPhoto from 'figma:asset/23c5040bf609b041d94608885fd2fa7ea5964585.png';

const numStyle = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontSize: "clamp(100px, 12vw, 160px)" as const,
  fontWeight: 400,
  color: "rgba(169,104,114,0.14)",
  lineHeight: 0.85,
  display: "block" as const,
  letterSpacing: "-0.04em",
  marginBottom: "-12px",
};

const headStyle = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontSize: "clamp(22px, 2.8vw, 38px)" as const,
  fontWeight: 400,
  color: "#F2EDE6",
  lineHeight: 1.2,
  marginBottom: "20px",
  marginTop: 0,
};

const bodyStyle = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "16px" as const,
  color: "rgba(238,233,226,0.62)",
  fontWeight: 300,
  lineHeight: 1.9,
  margin: 0,
};

export function ProblemSection() {
  return (
    <section id="problem" style={{ background: "#2C2C2A", position: "relative", overflow: "hidden" }}>
      {/* Top diagonal cut */}
      <div style={{ position: "absolute", top: "-1px", left: 0, right: 0, height: "60px", background: "#EAE5DA", clipPath: "polygon(0 0,100% 0,100% 100%)", zIndex: 2 }} />

      {/* ── Full-width Pull Quote – image as-is, no overlay ── */}
      <div className="pq-fullwidth" style={{ position: "relative", width: "100%", minHeight: "660px", paddingTop: "60px", overflow: "hidden" }}>
        <img
          src={mitaliPhoto}
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute", top: 0, left: 0,
            width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center top",
            display: "block", zIndex: 0,
          }}
        />

        {/* 30% dark overlay from left */}
        <div style={{
          position: "absolute", top: 0, left: 0,
          width: "100%", height: "100%",
          background: "linear-gradient(to right, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.30) 45%, rgba(0,0,0,0.0) 100%)",
          zIndex: 1,
        }} />

        <div
          className="pq-left"
          style={{
            position: "relative", zIndex: 2,
            display: "flex", alignItems: "center", justifyContent: "flex-start",
            padding: "110px 72px 110px 80px",
            minHeight: "660px",
          }}
        >
          <div style={{ maxWidth: "560px" }}>
            <span style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "180px", fontWeight: 400, lineHeight: 0.65,
              color: "#A96872", display: "block", marginBottom: "28px", opacity: 0.55,
            }}>
              "
            </span>
            <blockquote style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(28px, 3.4vw, 56px)", fontWeight: 400,
              color: "#fff", lineHeight: 1.18, letterSpacing: "0.01em",
              border: "none", padding: 0, margin: 0,
              textShadow: "0 2px 24px rgba(0,0,0,0.55)",
            }}>
              You are not burned out.<br />
              You are{" "}
              <em style={{ color: "#fff", fontStyle: "italic" }}>over-relied on.</em><br />
              There is a difference.
            </blockquote>
            <div style={{ width: "64px", height: "2px", background: "#A96872", marginTop: "48px", opacity: 0.75 }} />
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 400,
              color: "#fff", letterSpacing: "0.18em",
              textTransform: "uppercase", marginTop: "22px",
              textShadow: "0 1px 8px rgba(0,0,0,0.6)",
            }}>
              — MITALI DEYPURKAYSTHA
            </p>
          </div>
        </div>
      </div>

      {/* ── Magazine Editorial Problem Section ── */}
      <div className="prob-editorial" style={{ maxWidth: "1200px", margin: "0 auto", padding: "120px 52px 0" }}>

        {/* Row 1: 01 + 02 side by side */}
        <div className="prob-row-top" style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: "0 64px", alignItems: "start", marginBottom: "80px" }}>
          {/* 01 */}
          <div className="prob-item">
            <span style={numStyle}>01</span>
            <h3 style={headStyle}>
              You Are Not the Bottleneck<br />
              <em style={{ color: "#D4949E", fontStyle: "italic" }}>Because You Made Mistakes</em>
            </h3>
            <p style={bodyStyle}>
              You are the bottleneck because you built something that works, and it works because of you. Your clients trust you. Relationships move because you are present. Opportunities progress because you are the one following up.
            </p>
          </div>

          {/* Vertical divider */}
          <div style={{ width: "1px", background: "rgba(169,104,114,0.2)", alignSelf: "stretch" }} className="prob-vdivider" />

          {/* 02 */}
          <div className="prob-item">
            <span style={numStyle}>02</span>
            <h3 style={headStyle}>
              When You Step Away,<br />
              <em style={{ color: "#D4949E", fontStyle: "italic" }}>Even Briefly, the Pipeline Slows</em>
            </h3>
            <p style={bodyStyle}>
              Leads go cold. And that 2am anxiety is not about work ethic. It is about architecture. The longer growth depends on you, the heavier it gets.
            </p>
          </div>
        </div>

        {/* Full-width horizontal rule */}
        <div style={{ height: "1px", background: "rgba(169,104,114,0.2)", marginBottom: "0" }} />
      </div>

      {/* ── Full-width Awards Image ── */}
      <div style={{ width: "100%", overflow: "hidden", lineHeight: 0 }}>
        <img
          src={awardsPhoto}
          alt="Good Small Business Awards 2024"
          style={{
            width: "100%",
            display: "block",
            objectFit: "cover",
            objectPosition: "center center",
            maxHeight: "520px",
          }}
        />
      </div>

      {/* ── Row 2: 03 + 04 side by side ── */}
      <div className="prob-editorial" style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 52px 160px" }}>

        {/* Full-width horizontal rule */}
        <div style={{ height: "1px", background: "rgba(169,104,114,0.2)", marginBottom: "80px" }} />

        <div className="prob-row-bottom" style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: "0 64px", alignItems: "start" }}>
          {/* 03 */}
          <div className="prob-item">
            <span style={numStyle}>03</span>
            <h3 style={headStyle}>
              That Is Not a Flaw<br />
              <em style={{ color: "#D4949E", fontStyle: "italic" }}>in Your Leadership</em>
            </h3>
            <p style={bodyStyle}>
              It is a gap in your structure. And the structure can be redesigned. The difference between being burned out and over-relied on is critical — one is personal, the other is structural.
            </p>
          </div>

          {/* Vertical divider */}
          <div style={{ width: "1px", background: "rgba(169,104,114,0.2)", alignSelf: "stretch" }} className="prob-vdivider" />

          {/* 04 */}
          <div className="prob-item">
            <span style={numStyle}>04</span>
            <h3 style={headStyle}>
              Independence Is Not a Luxury.{" "}
              <em style={{ color: "#D4949E", fontStyle: "italic" }}>It Can Be Designed.</em>
            </h3>
            <p style={bodyStyle}>
              The architecture exists. The question is whether yours has been built yet. That is precisely what this work addresses — with precision, care, and no disruption to what already works.
            </p>
          </div>
        </div>

      </div>

      {/* Bottom diagonal cut */}
      <div style={{ position: "absolute", bottom: "-1px", left: 0, right: 0, height: "60px", background: "#F9F7F2", clipPath: "polygon(0 0,100% 100%,0 100%)" }} />

      <style>{`
        @media (max-width: 1024px) {
          .pq-left { padding: 80px 48px !important; }
        }
        @media (max-width: 768px) {
          .pq-fullwidth { min-height: 500px !important; padding-top: 60px !important; }
          .pq-left { padding: 72px 28px !important; min-height: 500px !important; }
          .prob-editorial { padding-left: 24px !important; padding-right: 24px !important; }
          .prob-row-top,
          .prob-row-bottom { grid-template-columns: 1fr !important; gap: 56px 0 !important; }
          .prob-vdivider { display: none !important; }
        }
      `}</style>
    </section>
  );
}