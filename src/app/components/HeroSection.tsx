import { Navbar } from "./Navbar";
import heroImg from "figma:asset/36f54695c562f0626de3bbefdd205955ccab302a.png";

export function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "92vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "140px 0 100px",
        position: "relative",
        overflow: "hidden",
        background: "#1a0d2e",
      }}
    >
      {/* Background image */}
      <img
        src={heroImg}
        alt="Mitali Deypurkaystha"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "right center",
          zIndex: 0,
        }}
      />
      {/* Overlay — heavier on the left where text sits */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(10,4,24,0.90) 0%, rgba(10,4,24,0.78) 42%, rgba(10,4,24,0.35) 68%, rgba(10,4,24,0.08) 100%)",
          zIndex: 1,
        }}
      />

      <Navbar />

      {/* Hero content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "700px",
          padding: "0 0 0 120px",
          width: "100%",
        }}
        className="hero-inner-content"
      >
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "12px",
            fontWeight: 400,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(196,148,158,0.85)",
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "48px",
          }}
        >
          <span style={{ fontSize: "9px", color: "#A96872" }}>✦</span>
          AI Architecture &nbsp;·&nbsp; UK Founder-Led Businesses
        </span>

        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(27px, 4.3vw, 67px)",
            fontWeight: 400,
            lineHeight: 1.08,
            color: "#F5F0E8",
            marginBottom: 0,
            letterSpacing: "0.01em",
            maxWidth: "700px",
          }}
        >
          Your Business Works.<br />
          But Only When{" "}<span style={{ color: "#C4848E" }}>You</span> Do.
        </h1>

        <div
          style={{
            width: "56px",
            height: "1px",
            background: "#A96872",
            margin: "36px 0",
            opacity: 0.7,
          }}
        />

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "18px",
            fontWeight: 300,
            color: "rgba(235,228,218,0.72)",
            lineHeight: 1.85,
            maxWidth: "500px",
            marginBottom: "52px",
          }}
        >
          What would it mean if it could grow without you?<br />
          That is not a personal failing. It is a structural one. And it can be designed out.
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
          <a
            href="#partnership"
            style={{
              display: "inline-block",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "16px 36px",
              background: "#A96872",
              color: "#F9F7F2",
              clipPath: "polygon(12px 0%,100% 0%,calc(100% - 12px) 100%,0% 100%)",
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#1C1C1A";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#A96872";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            See If This Is Right for You
          </a>
          <a
            href="#about"
            style={{
              color: "rgba(244,241,235,0.85)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              borderBottom: "1px solid rgba(244,241,235,0.3)",
              paddingBottom: "2px",
              transition: "color 0.2s, border-bottom-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#F9F7F2";
              e.currentTarget.style.borderBottomColor = "#A96872";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(244,241,235,0.85)";
              e.currentTarget.style.borderBottomColor = "rgba(244,241,235,0.3)";
            }}
          >
            Meet Mitali <span style={{ fontSize: "16px" }}>→</span>
          </a>
        </div>
      </div>

      {/* Hero foot */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "120px",
          right: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          maxWidth: "700px",
          zIndex: 2,
        }}
        className="hero-foot-content"
      >
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "12px",
            color: "rgba(244,241,235,0.4)",
            fontWeight: 300,
            letterSpacing: "0.08em",
            whiteSpace: "nowrap",
          }}
        >
          Mitali Deypurkaystha &nbsp;·&nbsp; Certified AI Transformation Partner
        </span>
        <div
          style={{
            flex: 1,
            height: "1px",
            background: "rgba(244,241,235,0.12)",
            margin: "0 32px",
          }}
        />
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "12px",
            color: "rgba(244,241,235,0.4)",
            fontWeight: 300,
            letterSpacing: "0.08em",
            whiteSpace: "nowrap",
          }}
        >
          Newcastle, UK
        </span>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-inner-content { padding: 0 24px !important; }
          .hero-foot-content { left: 24px !important; right: 24px !important; bottom: 24px !important; }
        }
        @media (max-width: 480px) {
          .hero-foot-content { display: none !important; }
        }
      `}</style>
    </section>
  );
}