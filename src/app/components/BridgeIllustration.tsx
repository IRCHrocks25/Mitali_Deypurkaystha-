export function BridgeIllustration() {
  // Arch: M 60,340 C 180,70 640,70 860,340
  // Cable arch-points calculated via cubic bezier at t=0.2…0.8
  const cables: [number, number, number, number][] = [
    [168, 210, 168, 340],
    [244, 170, 244, 340],
    [330, 146, 330, 340],
    [423, 138, 423, 340],
    [518, 146, 518, 340],
    [613, 170, 613, 340],
    [704, 210, 704, 340],
  ];

  const phases = [
    { cx: 200, num: "01", l1: "FOUNDER", l2: "FRICTION", cls: "uf-phase0" },
    { cx: 450, num: "02", l1: "FOUNDER", l2: "FLOW",     cls: "uf-phase1" },
    { cx: 700, num: "03", l1: "FOUNDER", l2: "FREEDOM",  cls: "uf-phase2" },
  ];

  return (
    <div style={{ width: "100%", maxWidth: "860px", margin: "0 auto", padding: "10px 0 0" }}>
      <svg
        viewBox="0 0 920 460"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", display: "block", overflow: "visible" }}
        role="img"
        aria-label="Three-phase Unburdened Founder Architecture bridge diagram"
      >
        <defs>
          <style>{`
            /* ── draw-on ── */
            .uf-deck {
              stroke-dasharray: 1000;
              stroke-dashoffset: 1000;
              animation: ufDraw 1.1s ease-out 0.2s forwards;
            }
            .uf-arch {
              stroke-dasharray: 1000;
              stroke-dashoffset: 1000;
              animation:
                ufDraw 1.9s cubic-bezier(0.4,0,0.2,1) 0.5s forwards,
                ufArchPulse 3.5s ease-in-out 2.6s infinite;
            }
            .uf-arch-glow {
              stroke-dasharray: 1000;
              stroke-dashoffset: 1000;
              animation:
                ufDraw 1.9s cubic-bezier(0.4,0,0.2,1) 0.5s forwards,
                ufGlowPulse 3.5s ease-in-out 2.6s infinite;
            }
            .uf-c0 { stroke-dasharray:1000; stroke-dashoffset:1000; animation: ufDraw .48s ease-out 1.50s forwards; }
            .uf-c1 { stroke-dasharray:1000; stroke-dashoffset:1000; animation: ufDraw .48s ease-out 1.64s forwards; }
            .uf-c2 { stroke-dasharray:1000; stroke-dashoffset:1000; animation: ufDraw .48s ease-out 1.78s forwards; }
            .uf-c3 { stroke-dasharray:1000; stroke-dashoffset:1000; animation: ufDraw .48s ease-out 1.92s forwards; }
            .uf-c4 { stroke-dasharray:1000; stroke-dashoffset:1000; animation: ufDraw .48s ease-out 2.06s forwards; }
            .uf-c5 { stroke-dasharray:1000; stroke-dashoffset:1000; animation: ufDraw .48s ease-out 2.20s forwards; }
            .uf-c6 { stroke-dasharray:1000; stroke-dashoffset:1000; animation: ufDraw .48s ease-out 2.34s forwards; }

            /* ── phase labels ── */
            .uf-phase0 { opacity:0; animation: ufFadeUp .65s ease-out 2.5s forwards; }
            .uf-phase1 { opacity:0; animation: ufFadeUp .65s ease-out 2.72s forwards; }
            .uf-phase2 { opacity:0; animation: ufFadeUp .65s ease-out 2.94s forwards; }

            /* ── end labels / pillars ── */
            .uf-end  { opacity:0; animation: ufFade .8s ease-out 0.3s forwards; }
            .uf-arr  { opacity:0; animation: ufFade .6s ease-out 3.1s forwards; }

            /* ── keyframes ── */
            @keyframes ufDraw     { to { stroke-dashoffset: 0; } }
            @keyframes ufFade     { to { opacity: 1; } }
            @keyframes ufFadeUp   {
              from { opacity:0; transform:translateY(9px); }
              to   { opacity:1; transform:translateY(0);   }
            }
            @keyframes ufArchPulse {
              0%,100% { stroke-opacity: 1;    }
              50%     { stroke-opacity: 0.62; }
            }
            @keyframes ufGlowPulse {
              0%,100% { stroke-opacity: 0.16; }
              50%     { stroke-opacity: 0.07; }
            }
            @keyframes ufMarkerPulse {
              0%,100% { r: 7;  }
              50%     { r: 10; }
            }
          `}</style>
        </defs>

        {/* ── Gateshead "eye" — lower reflection arc ── */}
        <path
          d="M 60,340 C 180,415 640,415 860,340"
          fill="none" stroke="#A96872" strokeWidth="1" strokeOpacity="0.11"
        />

        {/* ── water / ground line ── */}
        <line x1="10" y1="354" x2="910" y2="354" stroke="#D5D0C6" strokeWidth="0.8" strokeOpacity="0.55" />
        <ellipse cx="460" cy="363" rx="340" ry="12" fill="rgba(169,104,114,0.04)" />

        {/* ── left pillar ── */}
        <rect x="54" y="300" width="12" height="40" rx="1" fill="#1C1C1A" className="uf-end" />
        {/* ── right pillar ── */}
        <rect x="854" y="300" width="12" height="40" rx="1" fill="#1C1C1A" className="uf-end" />

        {/* ── left end label ── */}
        <g className="uf-end">
          <text x="60" y="280" textAnchor="middle"
            fontFamily="'DM Sans', sans-serif" fontSize="8.5" fontWeight="700"
            fill="#6B7D70" letterSpacing="2">FOUNDER</text>
          <text x="60" y="293" textAnchor="middle"
            fontFamily="'DM Sans', sans-serif" fontSize="8.5" fontWeight="700"
            fill="#6B7D70" letterSpacing="2">DEPENDENT</text>
        </g>

        {/* ── right end label ── */}
        <g className="uf-end">
          <text x="860" y="280" textAnchor="middle"
            fontFamily="'DM Sans', sans-serif" fontSize="8.5" fontWeight="700"
            fill="#A96872" letterSpacing="2">FOUNDER</text>
          <text x="860" y="293" textAnchor="middle"
            fontFamily="'DM Sans', sans-serif" fontSize="8.5" fontWeight="700"
            fill="#A96872" letterSpacing="2">FREE</text>
        </g>

        {/* ── pivot circles ── */}
        <circle cx="60"  cy="340" r="5" fill="#1C1C1A" className="uf-end" />
        <circle cx="860" cy="340" r="5" fill="#1C1C1A" className="uf-end" />

        {/* ── deck ── */}
        <line
          x1="60" y1="340" x2="860" y2="340"
          stroke="#1C1C1A" strokeWidth="3.5" strokeLinecap="round"
          className="uf-deck" pathLength="1000"
        />

        {/* ── arch glow ── */}
        <path
          d="M 60,340 C 180,70 640,70 860,340"
          fill="none" stroke="#C4848E" strokeWidth="12" strokeOpacity="0.16"
          strokeLinecap="round"
          className="uf-arch-glow" pathLength="1000"
        />

        {/* ── arch main ── */}
        <path
          d="M 60,340 C 180,70 640,70 860,340"
          fill="none" stroke="#A96872" strokeWidth="2.5" strokeLinecap="round"
          className="uf-arch" pathLength="1000"
        />

        {/* ── cables ── */}
        {cables.map(([x1, y1, x2, y2], i) => (
          <line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#A96872" strokeWidth="1" strokeOpacity="0.42" strokeLinecap="round"
            className={`uf-c${i}`} pathLength="1000"
          />
        ))}

        {/* ── phase markers + labels ── */}
        {phases.map(({ cx, num, l1, l2, cls }) => (
          <g key={num} className={cls}>
            {/* tick from deck down to label area */}
            <line x1={cx} y1="347" x2={cx} y2="366"
              stroke="#A96872" strokeWidth="1" strokeOpacity="0.4" />
            {/* outer ring */}
            <circle cx={cx} cy={340} r="16"
              fill="none" stroke="#A96872" strokeWidth="0.5" strokeOpacity="0.28" />
            {/* inner dot */}
            <circle cx={cx} cy={340} r="7"
              fill="#F9F7F2" stroke="#A96872" strokeWidth="2.5" />

            {/* phase number */}
            <text x={cx} y={385} textAnchor="middle"
              fontFamily="'Cormorant Garamond', Georgia, serif"
              fontSize="28" fontWeight="400" fill="#A96872">
              {num}
            </text>
            {/* label row 1 */}
            <text x={cx} y={404} textAnchor="middle"
              fontFamily="'DM Sans', sans-serif"
              fontSize="9" fontWeight="600" fill="#1C1C1A" letterSpacing="2.5">
              {l1}
            </text>
            {/* label row 2 */}
            <text x={cx} y={418} textAnchor="middle"
              fontFamily="'DM Sans', sans-serif"
              fontSize="9" fontWeight="600" fill="#1C1C1A" letterSpacing="2.5">
              {l2}
            </text>
          </g>
        ))}

        {/* ── direction arrow ── */}
        <g className="uf-arr">
          <path
            d="M 828,340 L 856,340 M 850,334.5 L 856,340 L 850,345.5"
            stroke="#A96872" strokeWidth="1.6" fill="none"
            strokeLinecap="round" strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}
