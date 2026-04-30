import { useState } from "react";
import bgImage from "figma:asset/4db2289735e2dabffc9c4b1252b9c1207f4c302b.png";

const listItems = [
  "Pinpoint exactly where growth depends on your personal presence",
  "Identify which parts of your business are ready for AI architecture now",
  "Understand where automation would amplify — not replace — your relationships",
  "Immediate clarity. No obligation to go further.",
];

export function LeadMagnetSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", business: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="leadmagnet"
      style={{
        background: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "right center",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative geometry */}
      <div style={{ position: "absolute", top: "50%", right: "-80px", transform: "translateY(-50%) rotate(30deg)", width: "400px", height: "400px", border: "1px solid rgba(169,104,114,0.12)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "50%", right: "80px", transform: "translateY(-50%) rotate(15deg)", width: "240px", height: "240px", border: "1px solid rgba(169,104,114,0.06)", pointerEvents: "none" }} />

      <div
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 52px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center", position: "relative", zIndex: 1 }}
        className="lm-inner"
      >
        {/* Left text */}
        <div>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#A96872", display: "block", marginBottom: "20px" }}>
            Not Ready for the Full Partnership?
          </span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(28px, 4vw, 58px)", fontWeight: 400, color: "#1C1C1A", letterSpacing: "0.02em", lineHeight: 1.05, marginBottom: "20px" }}>
            Start with the <em style={{ color: "#C4848E", fontStyle: "normal" }}>Unburdened Founder Map</em>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "#1C1C1A", fontWeight: 300, lineHeight: 1.9, marginBottom: "14px" }}>
            A free scorecard showing UK-based, purpose-led founders and responsible business owners exactly where AI and automation can remove their daily grind and restore their time and focus. Takes minutes. Gives you immediate clarity on where structural dependence is costing you most.
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "#1C1C1A", fontWeight: 300, lineHeight: 1.9, marginBottom: "24px" }}>
            No obligation. Just clarity.
          </p>
          <ul style={{ listStyle: "none", margin: "24px 0", display: "flex", flexDirection: "column", gap: "12px", padding: 0 }}>
            {listItems.map((item) => (
              <li key={item} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "#1C1C1A", fontWeight: 300, paddingLeft: "22px", position: "relative" }}>
                <span style={{ position: "absolute", left: 0, top: "2px", fontSize: "9px", color: "#A96872", lineHeight: 1 }}>✦</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right form */}
        <div style={{ background: "#F9F7F2", border: "1px solid #D5D0C6", padding: "52px 44px", clipPath: "polygon(16px 0,100% 0,100% 100%,0 100%,0 16px)" }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "48px", color: "#A96872", marginBottom: "16px" }}>✦</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "24px", fontWeight: 400, color: "#1C1C1A", marginBottom: "12px" }}>
                Thank you!
              </h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "#6B7D70", fontWeight: 300, lineHeight: 1.7 }}>
                Your Unburdened Founder Map is on its way. Check your inbox shortly.
              </p>
            </div>
          ) : (
            <>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "24px", fontWeight: 400, color: "#1C1C1A", marginBottom: "6px" }}>
                Show Me Where<br />the Burden Lives
              </h3>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "#6B7D70", fontWeight: 300, display: "block", marginBottom: "32px" }}>
                Free. Immediate. No obligation.
              </span>
              <form onSubmit={handleSubmit}>
                {[
                  { label: "First Name", type: "text", key: "name", placeholder: "Your first name" },
                  { label: "Business Email", type: "email", key: "email", placeholder: "you@yourbusiness.com" },
                  { label: "Your Business", type: "text", key: "business", placeholder: "Founder at..." },
                ].map((f) => (
                  <div key={f.key} style={{ marginBottom: "18px" }}>
                    <label style={{ display: "block", fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6B7D70", marginBottom: "9px" }}>
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      value={(form as any)[f.key]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      style={{ width: "100%", background: "#F9F7F2", border: "1px solid #D5D0C6", color: "#1C1C1A", padding: "13px 16px", fontFamily: "'DM Sans', sans-serif", fontSize: "16px", fontWeight: 400, outline: "none", clipPath: "polygon(0 0,100% 0,100% calc(100% - 6px),calc(100% - 6px) 100%,0 100%)", transition: "border-color 0.2s", boxSizing: "border-box" }}
                      onFocus={(e) => (e.target.style.borderColor = "#A96872")}
                      onBlur={(e) => (e.target.style.borderColor = "#D5D0C6")}
                    />
                  </div>
                ))}
                <button
                  type="submit"
                  style={{ width: "100%", background: "#A96872", border: "none", color: "#F9F7F2", padding: "16px", fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", transition: "background 0.2s", marginTop: "6px", clipPath: "polygon(12px 0,100% 0,calc(100% - 12px) 100%,0 100%)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#1C1C1A")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#A96872")}
                >
                  Show Me Where the Burden Lives
                </button>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#6B7D70", textAlign: "center", marginTop: "14px", fontWeight: 300 }}>
                  Your details are held in accordance with GDPR. Unsubscribe at any time.
                </p>
              </form>
            </>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .lm-inner { grid-template-columns: 1fr !important; gap: 56px !important; }
        }
        @media (max-width: 768px) {
          .lm-inner { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
    </section>
  );
}