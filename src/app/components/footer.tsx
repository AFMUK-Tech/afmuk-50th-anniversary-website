export function Footer() {
  return (
    <div
      className="relative w-[1440px] overflow-clip"
      style={{ height: 440, background: "#192441" }}
    >
      {/* Top gold rule */}
      <div style={{ position: "absolute", top: 0, left: 120, right: 120, height: 1, background: "#D9C7A8", opacity: 0.35 }} />

      {/* ── Logo mark (left) ────────────────────────────────────────────── */}
      <div style={{ position: "absolute", left: 120, top: 60 }}>
        <div style={{ fontFamily: "'CRONDE', sans-serif", fontSize: 72, color: "#D9C7A8", lineHeight: 1, opacity: 0.9 }}>
          50
        </div>
        <div style={{ fontFamily: "'Futura PT', sans-serif", fontSize: 11, color: "#D9C7A8", letterSpacing: "0.18em", opacity: 0.6, marginTop: 6, textTransform: "uppercase" }}>
          th Anniversary
        </div>
        <div style={{ fontFamily: "'Futura PT', sans-serif", fontSize: 13, color: "#D9C7A8", opacity: 0.5, marginTop: 4 }}>
          AFM Western Europe · 1976 – 2026
        </div>
      </div>

      {/* ── Centre nav ──────────────────────────────────────────────────── */}
      <div style={{
        position: "absolute", top: 72, left: "50%", transform: "translateX(-50%)",
        display: "flex", gap: 48, alignItems: "center",
      }}>
        {["Stories", "Photos", "Timeline"].map(label => (
          <span key={label} style={{
            fontFamily: "'Futura PT', sans-serif", fontSize: 16,
            color: "white", opacity: 0.75, cursor: "pointer", letterSpacing: "0.02em",
          }}>
            {label}
          </span>
        ))}
      </div>

      {/* ── Centre CTA ──────────────────────────────────────────────────── */}
      <div style={{
        position: "absolute", top: 60, right: 120,
        background: "rgba(217,199,168,0.12)",
        border: "1px solid rgba(217,199,168,0.3)",
        borderRadius: 84, padding: "12px 28px",
        fontFamily: "'Futura PT', sans-serif", fontSize: 14,
        color: "#D9C7A8", letterSpacing: "0.04em", cursor: "pointer",
      }}>
        AFM UK
      </div>

      {/* ── Scripture quote (centre) ─────────────────────────────────────── */}
      <div style={{
        position: "absolute", top: 190, left: "50%", transform: "translateX(-50%)",
        width: 680, textAlign: "center",
      }}>
        <p style={{
          fontFamily: "'Futura PT', 'Futura PT Book', sans-serif",
          fontSize: 19, fontStyle: "italic",
          color: "#D9C7A8", lineHeight: 1.65, opacity: 0.8, margin: 0,
        }}>
          "One generation shall praise thy works to another,<br />
          and shall declare thy mighty acts."
        </p>
        <p style={{
          fontFamily: "'Futura PT', sans-serif", fontSize: 13,
          color: "#D9C7A8", opacity: 0.5, marginTop: 14, letterSpacing: "0.06em",
        }}>
          — Psalm 145:4
        </p>
      </div>

      {/* ── Bottom rule + copyright ──────────────────────────────────────── */}
      <div style={{ position: "absolute", bottom: 56, left: 120, right: 120 }}>
        <div style={{ height: 1, background: "#D9C7A8", opacity: 0.12, marginBottom: 24 }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{
            fontFamily: "'Futura PT', sans-serif", fontSize: 12,
            color: "white", opacity: 0.35, letterSpacing: "0.03em",
          }}>
            © 2026 Apostolic Faith Mission Western Europe. All rights reserved.
          </span>
          <span style={{
            fontFamily: "'Futura PT', sans-serif", fontSize: 12,
            color: "#D9C7A8", opacity: 0.4, letterSpacing: "0.03em",
          }}>
            Celebrating 50 years of faithful ministry
          </span>
        </div>
      </div>
    </div>
  );
}
