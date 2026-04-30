import phase1Img from 'figma:asset/5dc04d213cad8dee82bab3b16afd2ceefa75052e.png';
import phase2Img from 'figma:asset/9038cf5da9b9e7f0fc6edc4f2bbe87a287030c52.png';
import phase3Img from 'figma:asset/686c1b7406c4bde2d16067b633ebca768e41fd7d.png';
import { BridgeIllustration } from "./BridgeIllustration";

const phases = [
  {
    num: "01",
    label: "Diagnose the dependency",
    title: "Founder Friction",
    body: "Every touchpoint where revenue or momentum still depends on your personal involvement is mapped and examined. No guesswork. Just precise, actionable clarity on exactly where the bottleneck lives.",
    items: ["Full dependency mapping", "Revenue bottleneck analysis", "Relationship touchpoint audit", "Structural gap identification", "Decision-grade clarity report"],
    side: "left",
    img: phase1Img,
  },
  {
    num: "02",
    label: "Build around what already works",
    title: "Founder Flow",
    body: "Bespoke AI infrastructure is designed around your existing, proven methods: your voice, your relationships, your preferred way of selling. The system amplifies what works. It never replaces it.",
    items: ["Bespoke system architecture", "Voice and method preservation", "Custom workflow design", "Live implementation support", "Real-lead testing and iteration"],
    side: "right",
    img: phase2Img,
  },
  {
    num: "03",
    label: "Step back on evidence, not faith",
    title: "Founder Freedom",
    body: "The system is tested with real leads and adjusted based on how your prospects actually respond. You do not step back hoping it holds. You step back knowing it does.",
    items: ["Controlled absence stress test", "Live system validation", "Holiday-safe sales protocol", "Milestone sign-off framework", "Founder independence achieved"],
    side: "left",
    img: phase3Img,
  },
];

export function SolutionSection() {
  return (
    <section id="solution" style={{ background: "#F9F7F2", padding: "120px 0", position: "relative" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 52px" }} className="sol-wrap">
        {/* Head */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: "#A96872", display: "block", marginBottom: "20px" }}>
            The Unburdened Founder Architecture™
          </span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(36px, 5.5vw, 72px)", fontWeight: 400, color: "#1C1C1A", letterSpacing: "0.02em", lineHeight: 1.1, marginBottom: "20px" }}>
            A Rigorous, 3-Phase Methodology Built Around Your Business
          </h2>

          {/* Bridge illustration */}
          <div style={{ margin: "48px auto 40px", maxWidth: "860px" }}>
            <BridgeIllustration />
          </div>

          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "17px", color: "#6B7D70", fontWeight: 300, lineHeight: 1.85, maxWidth: "660px", margin: "24px auto 0" }}>
            The Gateshead Millennium Bridge does not stand still. It tilts, rebalances, and moves with precision, without ever losing its structural integrity. That is the philosophy behind every system Mitali builds. Intelligent load redistribution. Safe, elegant transition. Growth that holds, even when you step back.
          </p>
        </div>

        {/* Phase rows */}
        <div style={{ position: "relative", padding: "20px 0" }}>
          {/* Centre spine */}
          <div
            style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: "1px", background: "#D5D0C6", transform: "translateX(-50%)" }}
            className="sol-spine"
          />

          {phases.map((p, i) => (
            <div
              key={i}
              style={{ display: "grid", gridTemplateColumns: "1fr 64px 1fr", alignItems: "center", marginBottom: i < phases.length - 1 ? "100px" : 0, gap: 0 }}
              className="sol-row-item"
            >
              {/* Left content or empty */}
              {p.side === "left" ? (
                <div style={{ gridColumn: 1, textAlign: "right", paddingRight: "52px" }}>
                  <PhaseContent phase={p} align="right" />
                </div>
              ) : (
                <div style={{ gridColumn: 1, paddingRight: "52px" }} className="sol-img-col">
                  <PhaseImage src={p.img} alt={p.title} />
                </div>
              )}

              {/* Centre num */}
              <div style={{ gridColumn: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 0, position: "relative", zIndex: 1 }}>
                <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "52px", fontWeight: 400, color: "#1C1C1A", lineHeight: 1, letterSpacing: "-0.02em" }}>
                  {p.num}
                </span>
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", border: "2px solid #A96872", background: "#F9F7F2", margin: "12px auto 0", flexShrink: 0 }} />
              </div>

              {/* Right content or empty */}
              {p.side === "right" ? (
                <div style={{ gridColumn: 3, paddingLeft: "52px" }}>
                  <PhaseContent phase={p} align="left" />
                </div>
              ) : (
                <div style={{ gridColumn: 3, paddingLeft: "52px" }} className="sol-img-col">
                  <PhaseImage src={p.img} alt={p.title} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .sol-wrap { padding-left: 24px !important; padding-right: 24px !important; }
          .sol-spine { display: none !important; }
          .sol-row-item {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            margin-bottom: 60px !important;
          }
          .sol-row-item > div {
            grid-column: 1 !important;
            text-align: left !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          .sol-img-col { order: -1 !important; }
        }
      `}</style>
    </section>
  );
}

function PhaseContent({ phase, align }: { phase: typeof phases[0]; align: "left" | "right" }) {
  return (
    <div>
      <span
        style={{
          display: "inline-block",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "#F9F7F2",
          background: "#A96872",
          padding: "6px 16px",
          marginBottom: "20px",
          clipPath: "polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)",
        }}
      >
        {phase.label}
      </span>
      <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(18px, 2.5vw, 30px)", fontWeight: 400, color: "#1C1C1A", marginBottom: "16px", lineHeight: 1.2 }}>
        {phase.title}
      </h3>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "#6B7D70", fontWeight: 300, lineHeight: 1.85, marginBottom: "20px" }}>
        {phase.body}
      </p>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "9px", padding: 0, margin: 0, textAlign: align === "right" ? "right" : "left" }}>
        {phase.items.map((item) => (
          <li
            key={item}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              color: "#6B7D70",
              fontWeight: 300,
              paddingLeft: align === "left" ? "18px" : "0",
              paddingRight: align === "right" ? "18px" : "0",
              position: "relative",
            }}
          >
            <span
              style={{
                position: "absolute",
                [align === "right" ? "right" : "left"]: 0,
                top: "2px",
                fontSize: "9px",
                color: "#A96872",
                lineHeight: 1,
              }}
            >
              ✦
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PhaseImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{ position: "relative" }}>
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
    </div>
  );
}