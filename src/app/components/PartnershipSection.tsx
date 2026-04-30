import img01 from "figma:asset/406ac259951918216e4dd139410e2580a30dd667.png";
import img02 from "figma:asset/cc65666869e0b2517b7293887994346d3f86984d.png";
import img03 from "figma:asset/f32dbd5f58e4077c773ef33f6a041beb6f921e68.png";

const cards = [
  {
    num: "01",
    title: "Diagnostic and Decision-Grade Clarity",
    body: "A deep analysis of how you currently generate leads, what you genuinely enjoy doing, and exactly where you are the structural bottleneck. This phase ends with a strict go/no-go decision. If a safe, functioning system cannot be built around your business, the work pauses and is reassessed before continuing.",
    items: ["Lead generation audit", "Structural dependency mapping", "Strict go/no-go decision framework", "Decision-grade clarity report", "You are never pushed forward without clarity"],
    img: img01,
  },
  {
    num: "02",
    title: "Bespoke System Design and Live Implementation",
    body: "Custom workflow design built around your preferred methods of selling, not preset channels. Hands-on technical setup of AI and automation to handle follow-up, lead qualification, and pipeline visibility. The system is tested with real leads.",
    items: ["Bespoke system architecture", "AI and automation setup", "Live testing with real leads", "Ethical AI guardrails embedded throughout", "Human-in-the-loop safeguards defined"],
    img: img02,
  },
  {
    num: "03",
    title: "Freedom, Safeguards & Guarantees",
    body: "Every meaningful interaction is automatically tracked and progressed. No qualified lead ever relies on your memory or manual chasing. If the 30, 60, or 90-day milestones are not delivered as defined, work continues at no additional cost until they are.",
    items: ["✦ Bonus: Founder Absence Stress Test", "✦ Bonus: Holiday-Safe Sales Protocol", "Full milestone guarantee", "Controlled step-back on evidence"],
    img: img03,
  },
];

export function PartnershipSection() {
  return (
    <section id="partnership" style={{ background: "#F9F7F2", padding: "120px 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 52px" }} className="part-wrap">
        {/* Head */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "end", marginBottom: "72px" }}
          className="part-head-grid"
        >
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 400, color: "#1C1C1A", lineHeight: 1.05, letterSpacing: "0.02em" }}>
            The<br />Unburdened<br />Founder Partnership
          </h2>
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "#6B7D70", fontWeight: 300, lineHeight: 1.9, marginBottom: "12px" }}>
              A 90-day, one-to-one engagement. Done with you. Done for you.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: "#6B7D70", fontWeight: 300, lineHeight: 1.9 }}>
              This is not a course. It is not a set of templates or a generic automation package. The Unburdened Founder Partnership is a hands-on, bespoke engagement where Mitali stays closely involved in the actual execution from day one to day ninety.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }} className="part-cards-grid">
          {cards.map((c, i) => (
            <div
              key={i}
              style={{
                backgroundImage: `linear-gradient(rgba(20,20,18,0.62), rgba(20,20,18,0.78)), url(${c.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "44px 36px",
                border: "1px solid rgba(255,255,255,0.07)",
                clipPath: "polygon(0 0,100% 0,100% 100%,20px 100%,0 calc(100% - 20px))",
                transition: "border-color 0.3s, filter 0.3s, transform 0.3s",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(169,104,114,0.55)";
                e.currentTarget.style.filter = "brightness(1.08)";
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.filter = "brightness(1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ display: "inline-block", fontFamily: "'DM Sans', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#F9F7F2", background: "#A96872", padding: "6px 18px", marginBottom: "20px", clipPath: "polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)" }}>
                {c.num}
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "24px", fontWeight: 400, color: "#F4F1EB", marginBottom: "16px", lineHeight: 1.2 }}>
                {c.title}
              </h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: "rgba(244,241,235,0.72)", fontWeight: 300, lineHeight: 1.8, marginBottom: "20px" }}>
                {c.body}
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "9px", marginBottom: "28px", padding: 0 }}>
                {c.items.map((item) => (
                  <li key={item} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "#FFFFFF", fontWeight: 300, paddingLeft: "18px", position: "relative", lineHeight: 1.6 }}>
                    {!item.startsWith("✦") && <span style={{ position: "absolute", left: 0, top: "2px", fontSize: "9px", color: "#A96872", lineHeight: 1 }}>✦</span>}
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#leadmagnet"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(244,241,235,0.9)", textDecoration: "none", borderBottom: "1.5px solid rgba(244,241,235,0.4)", paddingBottom: "2px", transition: "color 0.2s, border-color 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#C4848E"; e.currentTarget.style.borderBottomColor = "#A96872"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(244,241,235,0.9)"; e.currentTarget.style.borderBottomColor = "rgba(244,241,235,0.4)"; }}
              >
                Apply Now →
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "64px" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "#6B7D70", marginBottom: "24px", fontWeight: 300 }}>
            Mitali stays closely involved in the actual execution from day one to day ninety.
          </p>
          <a
            href="#leadmagnet"
            style={{ display: "inline-block", fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", padding: "16px 36px", background: "#A96872", color: "#F9F7F2", clipPath: "polygon(12px 0%,100% 0%,calc(100% - 12px) 100%,0% 100%)", transition: "background 0.2s, transform 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#1C1C1A"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#A96872"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Apply for the Unburdened Founder Partnership
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .part-head-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .part-cards-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .part-wrap { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
    </section>
  );
}