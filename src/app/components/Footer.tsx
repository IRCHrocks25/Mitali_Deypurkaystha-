import logoImg from "figma:asset/ad0679da3504c0a7ee0255513c2e9849202bc73f.png";

export function Footer() {
  return (
    <footer style={{ background: "#2C2C2A" }}>
      {/* Top */}
      <div
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "80px 52px 60px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "60px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
        className="footer-top-grid"
      >
        {/* Brand */}
        <div>
          <div style={{ marginBottom: "16px" }}>
            <img src={logoImg} alt="Unburdened Founder" style={{ width: "200px", height: "auto" }} />
          </div>
          <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "20px", fontWeight: 400, color: "#F4F1EB", letterSpacing: "0.02em", marginBottom: "14px" }}>
            Mitali Deypurkaystha
          </h3>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: "rgba(244,241,235,0.72)", fontWeight: 300, lineHeight: 1.8, maxWidth: "270px", marginBottom: "28px" }}>
            Certified AI Transformation Partner helping UK-based, purpose-led founders and responsible business owners build businesses that grow without them.
          </p>
          <div style={{ display: "flex", gap: "10px" }}>
            {[
              { s: "Li", href: "https://www.linkedin.com/in/mitalidey/" },
              { s: "Tw", href: "#" },
              { s: "IG", href: "https://www.instagram.com/mdeypurkaystha/" },
            ].map(({ s, href }) => (
              <a
                key={s}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "34px", height: "34px", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(244,241,235,0.4)", textDecoration: "none", fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "12px", fontWeight: 400, transition: "all 0.2s", clipPath: "polygon(4px 0,100% 0,calc(100% - 4px) 100%,0 100%)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#A96872"; e.currentTarget.style.color = "#A96872"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(244,241,235,0.4)"; }}
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Work */}
        <FooterCol title="Work" links={["Problem", "Solution", "Partnership", "Timeline"]} hrefs={["#problem", "#solution", "#partnership", "#timeline"]} />
        {/* About */}
        <FooterCol title="About" links={["About Mitali", "Testimonials", "Free Scorecard"]} hrefs={["#about", "#testimonials", "#leadmagnet"]} />
        {/* Contact */}
        <FooterCol title="Contact" links={["mitali@unburdenedfounder.com", "LinkedIn", "Book a Call"]} hrefs={["mailto:mitali@unburdenedfounder.com", "https://www.linkedin.com/in/mitalidey/", "https://l.industryrockstars.ch/widget/bookings/book-a-call-with-mitali"]} />
      </div>

      {/* Bottom */}
      <div
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "22px 52px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
        className="footer-bottom-bar"
      >
        <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "13px", color: "rgba(244,241,235,0.55)", fontWeight: 400, letterSpacing: "0.04em" }}>
          © 2025 Mitali Deypurkaystha. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: "24px" }}>
          {["Privacy Policy", "Terms", "GDPR"].map((l) => (
            <a key={l} href="#" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "10px", color: "rgba(244,241,235,0.25)", textDecoration: "none", letterSpacing: "0.01em", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F4F1EB")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(244,241,235,0.25)")}
            >
              {l}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-top-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 768px) {
          .footer-top-grid { grid-template-columns: 1fr !important; padding: 40px 24px 32px !important; }
          .footer-bottom-bar { flex-direction: column !important; gap: 12px !important; text-align: center !important; padding: 16px 24px !important; }
        }
      `}</style>
    </footer>
  );
}

function FooterCol({ title, links, hrefs }: { title: string; links: string[]; hrefs: string[] }) {
  return (
    <div>
      <h4 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "12px", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(244,241,235,0.55)", marginBottom: "24px" }}>
        {title}
      </h4>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "11px", padding: 0, margin: 0 }}>
        {links.map((l, i) => (
          <li key={l}>
            <a
              href={hrefs[i]}
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "rgba(244,241,235,0.75)", textDecoration: "none", fontWeight: 300, transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F4F1EB")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(244,241,235,0.75)")}
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}