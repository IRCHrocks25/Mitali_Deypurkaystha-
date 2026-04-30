const cells = [
  { num: "51", sub: "hrs", label: "UK small business owners work an average of 51 hours per week. Significantly more than anyone else in their business." },
  { num: "1", sub: "in\u00a05", label: "Have not taken two consecutive days off in the last six months. Not because they chose not to. Because stepping away did not feel safe." },
  { num: "27", sub: "%", label: "Businesses that automate their workflows report 27% higher revenue growth. And the people inside reclaim an average of 3.6 hours every week." },
];

export function DataSection() {
  return (
    <section
      id="data"
      style={{
        background: "#FFFFFF",
        padding: "120px 0",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 52px" }} className="data-wrap">
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(36px, 5.5vw, 72px)", fontWeight: 400, color: "#1C1C1A", lineHeight: 1.08, letterSpacing: "0.005em", marginBottom: "20px" }}>
            This Is Not a Feeling.<br />It Is a Pattern.
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "17px", color: "#6B7D70", fontWeight: 300, lineHeight: 1.85, maxWidth: "580px", margin: "0 auto" }}>
            The research is consistent. So is the cost of leaving it unaddressed.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }} className="data-cells-grid">
          {cells.map((c, i) => (
            <div
              key={i}
              style={{
                padding: "48px 40px",
                background: "#F4F1EB",
                position: "relative",
                borderBottom: "3px solid #A96872",
                clipPath: "polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,0 100%)",
                transition: "background 0.25s, transform 0.25s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(28,28,26,0.90)";
                e.currentTarget.style.transform = "translateY(-4px)";
                const num = e.currentTarget.querySelector(".d-num") as HTMLElement;
                const lbl = e.currentTarget.querySelector(".d-label") as HTMLElement;
                if (num) num.style.color = "#F4F1EB";
                if (lbl) lbl.style.color = "rgba(244,241,235,0.78)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#F4F1EB";
                e.currentTarget.style.transform = "translateY(0)";
                const num = e.currentTarget.querySelector(".d-num") as HTMLElement;
                const lbl = e.currentTarget.querySelector(".d-label") as HTMLElement;
                if (num) num.style.color = "#1C1C1A";
                if (lbl) lbl.style.color = "#6B7D70";
              }}
            >
              <div
                className="d-num"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "64px", fontWeight: 400, color: "#1C1C1A", lineHeight: 1, marginBottom: "12px", letterSpacing: "0.1em", transition: "color 0.25s" }}
              >
                {c.num}
                <sub style={{ fontSize: "26px", verticalAlign: "baseline", color: "#A96872" }}>{c.sub}</sub>
              </div>
              <div
                className="d-label"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "#6B7D70", fontWeight: 300, lineHeight: 1.7, maxWidth: "200px", transition: "color 0.25s" }}
              >
                {c.label}
              </div>
            </div>
          ))}
        </div>

        <p style={{ marginTop: "36px", textAlign: "center", fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "13px", fontWeight: 400, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8FA094" }}>
          The architecture exists. The question is whether yours has been built yet.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .data-wrap { padding-left: 24px !important; padding-right: 24px !important; }
          .data-cells-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
