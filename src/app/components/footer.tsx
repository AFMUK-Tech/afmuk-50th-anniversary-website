export function Footer() {
  return (
    <div
      className="relative w-full overflow-clip px-6 sm:px-10 md:px-[120px] py-10 md:py-[60px]"
      style={{ background: "#192441" }}
    >
      {/* Top gold rule */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "#D9C7A8", opacity: 0.35 }} />

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-6">
        {/* ── Logo mark ───────────────────────────────────────────────── */}
        <div className="text-center md:text-left">
          <div style={{ fontFamily: "'CRONDE', sans-serif", fontSize: 56, color: "#D9C7A8", lineHeight: 1, opacity: 0.9 }} className="md:text-[72px]">
            50
          </div>
          <div style={{ fontFamily: "'Futura PT', sans-serif", fontSize: 11, color: "#D9C7A8", letterSpacing: "0.18em", opacity: 0.6, marginTop: 6, textTransform: "uppercase" }}>
            th Anniversary
          </div>
          <div style={{ fontFamily: "'Futura PT', sans-serif", fontSize: 13, color: "#D9C7A8", opacity: 0.5, marginTop: 4 }}>
            AFC UK & Western Europe · 1976 – 2026
          </div>
        </div>

        {/* ── Nav + CTA ───────────────────────────────────────────────── */}
        <div className="flex flex-col items-center gap-6 md:gap-4 md:items-end">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 items-center">
            {[
              { label: "Stories", hash: "#watch" },
              { label: "Gallery", hash: "#gallery" },
              { label: "Timeline", hash: "#timeline" },
            ].map(({ label, hash }) => (
              <span
                key={label}
                onClick={() => { window.location.hash = hash; }}
                style={{
                  fontFamily: "'Futura PT', sans-serif", fontSize: 15,
                  color: "white", opacity: 0.75, cursor: "pointer", letterSpacing: "0.02em",
                }}
              >
                {label}
              </span>
            ))}
          </div>

          <div style={{
            background: "rgba(217,199,168,0.12)",
            border: "1px solid rgba(217,199,168,0.3)",
            borderRadius: 84, padding: "12px 28px",
            fontFamily: "'Futura PT', sans-serif", fontSize: 14,
            color: "#D9C7A8", letterSpacing: "0.04em", cursor: "pointer",
            whiteSpace: "nowrap",
          }}>
            AFC UK
          </div>
        </div>
      </div>

      {/* ── Scripture quote ─────────────────────────────────────────────── */}
      <div className="mx-auto text-center mt-10 md:mt-12 max-w-[680px] px-2">
        <p style={{
          fontFamily: "'Futura PT', 'Futura PT Book', sans-serif",
          fontSize: 17,
          fontStyle: "italic",
          color: "#D9C7A8", lineHeight: 1.65, opacity: 0.8, margin: 0,
        }} className="md:text-[19px]">
          "One generation shall praise thy works to another,<br className="hidden sm:block" />
          {" "}and shall declare thy mighty acts."
        </p>
        <p style={{
          fontFamily: "'Futura PT', sans-serif", fontSize: 13,
          color: "#D9C7A8", opacity: 0.5, marginTop: 14, letterSpacing: "0.06em",
        }}>
          — Psalm 145:4
        </p>
      </div>

      {/* ── Bottom rule + copyright ──────────────────────────────────────── */}
      <div className="mt-10 md:mt-14">
        <div style={{ height: 1, background: "#D9C7A8", opacity: 0.12, marginBottom: 24 }} />
        <div className="flex flex-col md:flex-row gap-3 md:gap-0 items-center justify-between text-center md:text-left">
          <span style={{
            fontFamily: "'Futura PT', sans-serif", fontSize: 12,
            color: "white", opacity: 0.35, letterSpacing: "0.03em",
          }}>
            © 2026 Apostolic Faith Church — UK & Western Europe. All rights reserved.
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