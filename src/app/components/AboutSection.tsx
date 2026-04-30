import mitaliImage from 'figma:asset/764c186e4f514e9024fe07b14d9985749e25d117.png';

const tags = ["Certified AI Transformation Partner", "Human-First AI", "Purpose-Led Founders", "Responsible Business Owners", "Responsible AI", "B Corps", "Regulated Businesses"];

export function AboutSection() {
  return (
    <section id="about" style={{ background: "#F9F7F2", padding: 0 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "88vh" }} className="about-grid">
        {/* Photo side */}
        <div style={{ background: "#6B8070", position: "relative", overflow: "hidden", minHeight: "600px" }}>
          <img 
            src={mitaliImage} 
            alt="Mitali Deypurkaystha"
            style={{ 
              width: "100%", 
              height: "100%", 
              objectFit: "cover",
              objectPosition: "center"
            }}
          />
          {/* Badge */}
          <div style={{ position: "absolute", bottom: "48px", right: "48px", background: "#F9F7F2", padding: "24px 26px", maxWidth: "230px", clipPath: "polygon(0 0,100% 0,100% calc(100% - 14px),calc(100% - 14px) 100%,0 100%)", transition: "transform 0.25s, box-shadow 0.25s" }} className="about-badge">
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", fontStyle: "italic", color: "#A96872", lineHeight: 1.4, marginBottom: "10px" }}>
              "The business worked. But only when I did."
            </p>
            <cite style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "12px", color: "#6B7D70", fontStyle: "normal", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              — Mitali Deypurkaystha
            </cite>
          </div>
        </div>

        {/* Content side */}
        <div style={{ padding: "100px 80px", display: "flex", flexDirection: "column", justifyContent: "center" }} className="about-content">
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#A96872", display: "block", marginBottom: "20px" }}>
            About Mitali
          </span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(26px, 3.5vw, 50px)", fontWeight: 400, color: "#1C1C1A", letterSpacing: "0.02em", lineHeight: 1.05, marginBottom: "28px" }}>
            The Burden She Refused to Keep Carrying
          </h2>

          {[
            "Mitali built a successful founder-led business. Operations were delegated. But growth could not be handed off. Clients came because of her. Relationships moved because she was present.",
            "Then, on New Year's Day 2023, her mother collapsed unexpectedly. Mitali stepped away for two weeks. Operations continued. Growth did not.",
            "When that quarter closed, profits had dipped. Not because demand had disappeared. Because she had stepped away.",
            "The realisation was quiet and absolute: the business worked. But only when she did.",
            "She spent the next year becoming a certified AI transformation partner, determined to design the solution she once needed. Not to automate connection. To protect it.",
            "What drives her runs deeper still. In her late teens, Mitali experienced homelessness and overcame substance abuse. She knows how fragile human connection is, and how transformative it becomes when it is restored. That is why she never treats AI as just tools.",
          ].map((para, i) => (
            <p key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "#6B7D70", fontWeight: 300, lineHeight: 1.9, marginBottom: "14px" }}>
              {para}
            </p>
          ))}

          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "28px", marginBottom: "36px" }}>
            {tags.map((tag) => (
              <span
                key={tag}
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "12px", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1C1C1A", border: "1.5px solid #D5D0C6", padding: "8px 14px", transition: "background 0.2s, color 0.2s", cursor: "default" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#1C1C1A"; e.currentTarget.style.color = "#F4F1EB"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#1C1C1A"; }}
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href="#partnership"
            style={{ display: "inline-block", marginTop: "28px", alignSelf: "flex-start", fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", padding: "16px 36px", background: "#2C2C2A", color: "#F9F7F2", clipPath: "polygon(12px 0%,100% 0%,calc(100% - 12px) 100%,0% 100%)", transition: "background 0.2s, transform 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#2A3040"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#2C2C2A"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            I Am Ready to Step Back
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-content { padding: 60px 48px !important; }
        }
        @media (max-width: 768px) {
          .about-content { padding: 40px 24px !important; }
        }
      `}</style>
    </section>
  );
}