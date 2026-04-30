const rows = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="#A96872" strokeWidth="1.5" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 12l10 5 10-5"/>
        <path d="M2 17l10 5 10-5"/>
      </svg>
    ),
    title: "She Does Not Hand You Generic Automations",
    body: "She builds bespoke infrastructure around your existing methods: your voice, your relationships, and your values. The system amplifies what works. It never replaces it.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="#A96872" strokeWidth="1.5" fill="none">
        <path d="M12 3v18M3 8l9 4 9-4M5 16c0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3-3 1.3-3 3zM13 16c0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3-3 1.3-3 3z"/>
      </svg>
    ),
    title: "Ethics Bridged With Outcomes",
    body: "For B Corps, social enterprises, and regulated businesses, the distinction between responsible AI and reckless AI matters enormously. This work is built on that distinction.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="#A96872" strokeWidth="1.5" fill="none">
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z"/>
        <path d="M16 8L2 22"/>
      </svg>
    ),
    title: "Editorial Precision Applied to Strategy",
    body: "The ability to translate complexity into clarity — to shape transformation into something people can genuinely trust — is rare. It comes from a decade of doing exactly that.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="#A96872" strokeWidth="1.5" fill="none">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: "Built Around What Already Works",
    body: "Nothing is torn down. Your proven methods, your existing relationships, your preferred way of selling — the architecture is designed around them, not the other way around.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="#A96872" strokeWidth="1.5" fill="none">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: "Human Stakes Taken Seriously",
    body: "AI is never just tools here. The human impact on every person inside a business being transformed is treated with the same rigour as any technical specification.",
  },
];

export function DifferentSection() {
  return (
    <section id="different" style={{ background: "#EAE5DA", padding: "120px 0" }}>
      <div
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 52px", display: "grid", gridTemplateColumns: "5fr 7fr", gap: "100px", alignItems: "start" }}
        className="diff-inner"
      >
        {/* Left sticky */}
        <div style={{ position: "sticky", top: "120px" }} className="diff-left">
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 50px)", fontWeight: 400, color: "#1C1C1A", lineHeight: 1.08, letterSpacing: "0.02em", marginBottom: "20px" }}>
            Not Another AI Consultant. A Human-First Architect.
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "#6B7D70", fontWeight: 300, lineHeight: 1.9, marginBottom: "14px" }}>
            Most AI consultants arrive with pre-built toolkits and a preference for speed over sensitivity. Mitali comes from a different world entirely.
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "#6B7D70", fontWeight: 300, lineHeight: 1.9, marginBottom: "14px" }}>
            With nearly a decade running a purpose-led publishing company, she developed the ability to translate complexity into clarity and shape transformation into something people can trust.
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "#6B7D70", fontWeight: 300, lineHeight: 1.9, marginBottom: "14px" }}>
            She bridges ethics with outcomes. For B Corps, social enterprises, and regulated businesses, that distinction matters enormously.
          </p>

          <div style={{ background: "#2C2C2A", padding: "28px 28px 28px 24px", marginTop: "36px", borderLeft: "4px solid #A96872", clipPath: "polygon(0 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%)" }}>
            <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "18px", fontWeight: 400, color: "#F4F1EB", lineHeight: 1.4, marginBottom: "10px" }}>
              "We don't replace you. We remove the burden from you."
            </p>
            <cite style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "#C4848E", fontStyle: "normal", letterSpacing: "0.04em" }}>
              — Mitali Deypurkaystha
            </cite>
          </div>
        </div>

        {/* Right list */}
        <div>
          {rows.map((r, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "56px 1fr",
                gap: "20px",
                alignItems: "start",
                padding: "28px 0",
                borderBottom: "1px solid #D5D0C6",
                borderTop: i === 0 ? "1px solid #D5D0C6" : "none",
                transition: "background 0.2s, padding-left 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(169,104,114,0.04)";
                e.currentTarget.style.paddingLeft = "8px";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.paddingLeft = "0";
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", paddingTop: "2px", flexShrink: 0 }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1.5px solid #DBBFC3", background: "#F9F7F2", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {r.icon}
                </div>
              </div>
              <div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "19px", fontWeight: 400, color: "#1C1C1A", marginBottom: "8px", lineHeight: 1.3 }}>
                  {r.title}
                </h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "#6B7D70", fontWeight: 300, lineHeight: 1.8 }}>
                  {r.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .diff-inner { grid-template-columns: 1fr !important; gap: 60px !important; }
          .diff-left { position: static !important; }
        }
        @media (max-width: 768px) {
          .diff-inner { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
    </section>
  );
}