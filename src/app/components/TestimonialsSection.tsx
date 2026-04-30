import { useState } from "react";

const slides = [
  {
    quote: "Mitali helped nudge the culture toward a better understanding of how AI can be useful in our people's roles, demystifying the fear that robots are taking over!",
    initials: "SB",
    name: "Steve Beharall",
    role: "CEO",
    org: "Newcastle United Foundation",
    photo: "https://res.cloudinary.com/dcuswyfur/image/upload/v1777271702/Steve_Beharall_-_CEO_Newcastle_United_Foundation_fgbib8.png",
  },
  {
    quote: "Mitali removed all the second-guessing around AI, particularly helpful given the regulated nature of the financial advice sector.",
    initials: "JS",
    name: "Jai Street",
    role: "Founder",
    org: "Mindful Wealth",
    photo: "https://res.cloudinary.com/dcuswyfur/image/upload/v1777271667/Jai_Street_Founder_Mindful_Wealth_zv6f59.png",
  },
  {
    quote: "Mitali has given us the confidence to take the next step on our growth journey for AG Impact (B Corp).",
    initials: "LA",
    name: "Lucy Atkinson",
    role: "Executive Director",
    org: "AG Impact",
    photo: "https://res.cloudinary.com/dcuswyfur/image/upload/v1777271702/Lucy_Akkinson_Executive_Director_AG_Impact_jzwlvm.png",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  const slide = slides[current];

  return (
    <section id="testimonials" style={{ background: "#F9F7F2", overflow: "hidden" }}>
      <div
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 52px", display: "grid", gridTemplateColumns: "340px 1fr", minHeight: "520px" }}
        className="test-outer"
      >
        {/* Left panel */}
        <div
          style={{ padding: "80px 52px 80px 0", borderRight: "1px solid #D5D0C6", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
          className="test-left"
        >
          <div>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#A96872", display: "block", marginBottom: "20px" }}>
              Voices of Independence
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 46px)", fontWeight: 400, color: "#1C1C1A", lineHeight: 1.15, marginBottom: "20px" }}>
              They had the same questions you do.
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: "#6B7D70", fontWeight: 300, lineHeight: 1.8, maxWidth: "260px" }}>
              Here is what they found.
            </p>
          </div>
          <div>
            <div style={{ display: "flex", gap: "12px", marginTop: "48px" }}>
              <button
                onClick={prev}
                style={{ width: "44px", height: "44px", border: "1px solid #D5D0C6", background: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "16px", color: "#1C1C1A", transition: "background 0.2s, border-color 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#1C1C1A"; e.currentTarget.style.color = "#F9F7F2"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "#1C1C1A"; }}
                aria-label="Previous"
              >
                ←
              </button>
              <button
                onClick={next}
                style={{ width: "44px", height: "44px", border: "1px solid #D5D0C6", background: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "16px", color: "#1C1C1A", transition: "background 0.2s, border-color 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#1C1C1A"; e.currentTarget.style.color = "#F9F7F2"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "#1C1C1A"; }}
                aria-label="Next"
              >
                →
              </button>
            </div>
            <div style={{ display: "flex", gap: "8px", marginTop: "20px" }}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{ width: i === current ? "40px" : "24px", height: "3px", background: i === current ? "#A96872" : "#D5D0C6", border: "none", cursor: "pointer", transition: "background 0.2s, width 0.2s", padding: 0 }}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div style={{ padding: "80px 0 80px 72px", position: "relative", overflow: "hidden" }} className="test-right">
          <div key={current} style={{ display: "flex", flexDirection: "column", animation: "fadeIn 0.4s ease" }}>
            <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "80px", lineHeight: 0.8, color: "#D5D0C6", marginBottom: "28px", display: "block" }}>
              "
            </span>
            <blockquote style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(16px, 2.2vw, 29px)", fontWeight: 400, color: "#1C1C1A", lineHeight: 1.35, marginBottom: "28px", fontStyle: "normal", border: "none", padding: 0 }}>
              {slide.quote}
            </blockquote>
            <div style={{ width: "100%", height: "1px", background: "#D5D0C6", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: "2px solid #D5D0C6" }}>
                <img
                  src={slide.photo}
                  alt={slide.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
                />
              </div>
              <div>
                <div style={{ display: "flex", gap: "3px", marginBottom: "5px" }}>
                  {[1,2,3,4,5].map((s) => <span key={s} style={{ color: "#A96872", fontSize: "13px" }}>✦</span>)}
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: 500, color: "#1C1C1A" }}>
                  {slide.name} <span style={{ fontWeight: 300, color: "#6B7D70" }}>, {slide.role}</span>
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: 300, color: "#6B7D70" }}>
                  {slide.org}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 1024px) {
          .test-outer { grid-template-columns: 1fr !important; }
          .test-left { padding: 60px 52px 40px !important; border-right: none !important; border-bottom: 1px solid #D5D0C6; flex-direction: row !important; align-items: flex-start !important; gap: 40px !important; flex-wrap: wrap !important; }
          .test-right { padding: 48px 52px 60px !important; }
        }
        @media (max-width: 768px) {
          .test-outer { padding-left: 24px !important; padding-right: 24px !important; }
          .test-left { padding: 48px 0 32px !important; }
          .test-right { padding: 40px 0 60px !important; }
        }
      `}</style>
    </section>
  );
}