import moneyWeekLogo from 'figma:asset/e78de3e26696eb52c85df2b289d9147ec1a39f05.png';
import businessMattersLogo from 'figma:asset/1f96f38718fd0aec74accf0a7bbfb57fd4411790.png';
import newcastleWorldLogo from 'figma:asset/ecc1e689ae7ddce03acd3773182e9c6d11100eaa.png';
import dailyStarLogo from 'figma:asset/8e16deb5f34d27682d4c0678741f476defe24ec2.png';
import ftAdviserLogo from 'figma:asset/6254bca341258d000b71ba3b0eaf8f66424f619e.png';
import mirrorLogo from 'figma:asset/4c28a79cfcc7737449104d054efcc419a606489b.png';
import expressLogo from 'figma:asset/4f462b86223bb087e79df05ceb4219c813af9a6d.png';
import orbLogo from 'figma:asset/c3a80715f3222808122c4b6887e4a5bcbcc280ed.png';
import virginStartupLogo from 'figma:asset/f7a5444754165ca462529948900656b0f341ca54.png';
import industryRockstarLogo from 'figma:asset/bc1b7e8befb9810a25775a4cb076137455463ea5.png';
import humanFirstLogo from 'figma:asset/e0152c9745e12d7300b6a1db4ca6c2a3bf4503b0.png';

const logos = [
  { src: moneyWeekLogo, alt: "MoneyWeek" },
  { src: businessMattersLogo, alt: "Business Matters" },
  { src: newcastleWorldLogo, alt: "Newcastle World" },
  { src: dailyStarLogo, alt: "Daily Star" },
  { src: ftAdviserLogo, alt: "FT Adviser" },
  { src: mirrorLogo, alt: "Mirror" },
  { src: expressLogo, alt: "Express" },
];

const badges = [
  { logo: orbLogo,            tag: "Chair of the Board",    text: "Organisation of Responsible Businesses" },
  { logo: virginStartupLogo,  tag: "Virgin Startup Funded", text: "Backed by Virgin's startup accelerator programme" },
  { logo: industryRockstarLogo, tag: "Industry Rockstar",   text: "Industry Rockstar Academy" },
  { logo: humanFirstLogo,     tag: "Co-Creator",            text: "Human-First Responsible AI Pledge" },
];

export function CredibilitySection() {
  return (
    <section id="credibility" style={{ background: "#EAE5DA", padding: "72px 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 52px" }} className="cred-inner">
        {/* Press bar */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", marginBottom: "52px", textAlign: "center" }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#6B7D70" }}>
            As Featured In
          </span>
          <div style={{ width: "48px", height: "1px", background: "#D5D0C6" }} />
          <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
            {logos.map((l) => (
              <img
                key={l.alt}
                src={l.src}
                alt={l.alt}
                style={{ 
                  height: "60px", 
                  width: "auto",
                  objectFit: "contain",
                  opacity: 0.5, 
                  transition: "opacity 0.2s, filter 0.2s", 
                  cursor: "default",
                  filter: "grayscale(100%)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.8";
                  e.currentTarget.style.filter = "grayscale(0%)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.5";
                  e.currentTarget.style.filter = "grayscale(100%)";
                }}
              />
            ))}
          </div>
        </div>

        {/* Tagline */}
        <div style={{ marginBottom: "56px", paddingTop: "4px", textAlign: "center" }}>
          <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 400, color: "#1C1C1A", lineHeight: 1.2, marginBottom: "12px" }}>
            The Proof Is Already in the Room
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "#6B7D70", fontWeight: 300, lineHeight: 1.8, maxWidth: "640px", margin: "0 auto" }}>
            From Newcastle United Foundation to regulated financial services, purpose-led founders and responsible business owners across the UK are building businesses that grow without them.
          </p>
        </div>

        {/* Badges – logo above, centred text below, no box */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "32px 20px", marginTop: "8px" }}
          className="cred-badges-grid"
        >
          {badges.map((b, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "20px",
                padding: "0 8px",
              }}
            >
              {/* Logo */}
              <div style={{ width: "100px", height: "100px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <img
                  src={b.logo}
                  alt={b.tag}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>
              {/* Text */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#A96872" }}>
                  {b.tag}
                </span>
                <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "16px", fontWeight: 400, color: "#1C1C1A", lineHeight: 1.4 }}>
                  {b.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .cred-badges-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .cred-inner { padding-left: 24px !important; padding-right: 24px !important; }
          .cred-badges-grid { grid-template-columns: 1fr 1fr !important; gap: 40px 16px !important; }
        }
        @media (max-width: 480px) {
          .cred-badges-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}