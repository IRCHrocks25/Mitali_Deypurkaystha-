import { useState, useEffect } from "react";
import logoImg from "figma:asset/ad0679da3504c0a7ee0255513c2e9849202bc73f.png";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const close = () => setMenuOpen(false);

  const navLinks = [
    { href: "#problem", label: "Problem" },
    { href: "#solution", label: "Solution" },
    { href: "#partnership", label: "Partnership" },
    { href: "#about", label: "About" },
  ];

  return (
    <>
      {/* Mobile overlay menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "#2C2C2A",
            zIndex: 600,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",
          }}
        >
          <button
            onClick={close}
            style={{
              position: "absolute",
              top: "24px",
              right: "32px",
              background: "none",
              border: "none",
              fontSize: "26px",
              color: "#F4F1EB",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "28px",
                fontWeight: 400,
                color: "#F4F1EB",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "0.02em",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#leadmagnet"
            onClick={close}
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "28px",
              fontWeight: 400,
              color: "#A96872",
              textDecoration: "none",
              textTransform: "uppercase",
            }}
          >
            Free Scorecard
          </a>
        </div>
      )}

      <nav
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "28px 52px",
          background: "transparent",
        }}
        className="responsive-nav"
      >
        <a href="#" style={{ display: "flex", alignItems: "center", textDecoration: "none", opacity: 1 }}>
          <img src={logoImg} alt="Unburdened Founder" style={{ width: "160px", height: "auto" }} />
        </a>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            gap: "36px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="nav-links-desktop"
        >
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(244,241,235,0.65)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F4F1EB")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(244,241,235,0.65)")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* CTA pill */}
          <a
            href="#leadmagnet"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#F9F7F2",
              background: "#A96872",
              padding: "11px 26px",
              textDecoration: "none",
              clipPath: "polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)",
              transition: "background 0.2s",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#1C1C1A")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#A96872")}
            className="nav-pill-btn"
          >
            Free Scorecard
          </a>

          {/* Burger */}
          <button
            onClick={() => setMenuOpen(true)}
            style={{
              display: "none",
              flexDirection: "column",
              gap: "5px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
            }}
            className="burger-btn"
            aria-label="Open menu"
          >
            <span style={{ display: "block", width: "22px", height: "1.5px", background: "#F4F1EB" }} />
            <span style={{ display: "block", width: "22px", height: "1.5px", background: "#F4F1EB" }} />
            <span style={{ display: "block", width: "22px", height: "1.5px", background: "#F4F1EB" }} />
          </button>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .responsive-nav { padding: 16px 20px !important; }
            .nav-links-desktop { display: none !important; }
            .nav-pill-btn { display: none !important; }
            .burger-btn { display: flex !important; }
          }
        `}</style>
      </nav>
    </>
  );
}