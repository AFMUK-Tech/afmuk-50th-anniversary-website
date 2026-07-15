import { useEffect, useState } from "react";
import { SiteHeader, useIsMobile } from "./SiteHeader";
const NAV_H = 80;

interface Testimony {
  title: string;
  attribution: string;
  body: string;
}

const TESTIMONIES: Testimony[] = [
  {
    title: "“Only Three of Us Were Present”",
    attribution: "Brother Shuaibu Adeoye · One of three present at the first UK meeting, 11 April 1976 · Public historical account",
    body: "Brother Shuaibu Adeoye, born into a Muslim home in Omu-Aran, Kwara State, Nigeria, came to faith beside his bed at Federal Government College, Sokoto, on the evening of Friday, 6 September 1974. Arriving in London in January 1976 on a British Petroleum scholarship, he wrote to the church's Portland headquarters asking where to worship — and was connected with a fellow believer newly arrived in London, Brother Victor Okusanya. On Sunday, 11 April 1976, the two men and Sister Comfort Martins held the very first Apostolic Faith Sunday school lesson in the UK, in a Brixton lounge. Brother Adeoye returned to Nigeria in 1979, having seen the fellowship grow from three people to a settled congregation with its own building.",
  },
  {
    title: "Dami's Story — A Testimony of God's Faithfulness",
    attribution: "Birmingham Church · 2022–present · Published with family consent",
    body: "In July 2022, a Birmingham Church family faced every parent's worst fear when their three-year-old daughter, Dami, was rushed to hospital after a sudden medical emergency. Doctors discovered a bleed and blood clot on the brain, and Dami underwent emergency surgery, with medical staff warning the family to prepare for the worst. Through days of intensive care and uncertainty, the church community and wider Apostolic Faith family stood in prayer, including the use of a prayer handkerchief sent from Portland. Against medical expectations, Dami began to recover — first regaining speech, then movement — and went on to undergo a second successful surgery to complete her treatment. Today, Dami is eight years old, in good health, attending school, and showing no signs of the neurological impairment doctors once feared. The family credits her recovery entirely to God's faithfulness.",
  },
  {
    title: "Healing Near the Kidney",
    attribution: "Sister Henrietta Animashaun · 45th Anniversary Report, 2021 · Consent pending",
    body: "Sister Henrietta's testimony centres on a cyst discovered near her kidney, at a stage serious enough that surgery was being discussed. Through the prayers of the church and her own persistent faith, the cyst resolved without the operation ever taking place — a healing she attributes entirely to God's intervention. Her account echoes a 1996 feature in the South London Press, which reported on healings experienced among church members around the same period.",
  },
  {
    title: "A Refused Caesarean, and a Daughter's Healing",
    attribution: "Sister Grace & Brother Edward Eka · 45th Anniversary Report, 2021 · Consent pending",
    body: "Facing a difficult birth, Sister Grace and Brother Edward Eka declined a recommended caesarean section on grounds of faith, trusting God for a safe delivery instead. The birth proceeded naturally, though a placenta complication afterward was resolved, the family attests, through prayer. Their daughter, Faith, later experienced a period of medical difficulty lasting some eleven years, which the family also testifies was eventually resolved. Sister Grace and Brother Edward are remembered as being among the first candidates for water baptism at the church's own baptistry.",
  },
  {
    title: "A Double Testimony",
    attribution: "Sister Jumoke Olayiwola · 45th Anniversary Report, 2021 · Consent pending",
    body: "Sister Jumoke's testimony has two parts. The first is a medical one: a diagnosed condition scheduled for an operation disappeared entirely before the surgery date arrived, which she attributes to prayer and faith. The second is a testimony of conscience — after coming to faith, she felt convicted about a past dishonesty and took the difficult step of putting it right, at real personal risk, and testifies that her integrity was honoured. Out of care for how Sister Jumoke would wish this told, the fuller details are held back pending her direct confirmation.",
  },
  {
    title: "Coming to Faith at the Mourners' Bench",
    attribution: "Brother Femi Osayemi · 45th Anniversary Report, 2021 · Consent pending",
    body: "Brother Femi Osayemi's testimony describes his own coming to faith at the church's “mourners' benches” — the traditional place of repentance and prayer at the front of the congregation. He speaks of the experience as a turning point that reshaped the whole direction of his life.",
  },
  {
    title: "“Came for Three Years, Stayed Forty”",
    attribution: "Brother Bayo Awobayiku · 45th Anniversary Report, 2021 · Consent pending",
    body: "Brother Bayo came to the United Kingdom originally expecting to stay for three years, and — through the unfolding of God's providence in his life and his connection to the church — remained for forty. He offers it as a simple testimony to God's long-term faithfulness, even when a person's own plans look very different from how things eventually unfold.",
  },
];

export function TestimoniesPage({ onBack }: { onBack: () => void }) {
  const isMobile = useIsMobile();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setFadeIn(true));
  }, []);

  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "#fcf9f2", position: "relative" }}>
      <SiteHeader />

      <div
        style={{
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
          paddingTop: isMobile ? 72 : NAV_H,
        }}
      >
        {/* <button
          onClick={onBack}
          style={{
            position: "fixed",
            top: isMobile ? "calc(72px + max(12px, env(safe-area-inset-top)))" : "max(16px, env(safe-area-inset-top))",
            right: "max(16px, env(safe-area-inset-right))",
            zIndex: 90,
            background: "#192441", color: "#fff", border: "none", borderRadius: 6,
            padding: "8px 18px", fontFamily: "'Futura PT', sans-serif", fontSize: 13,
            cursor: "pointer", letterSpacing: "0.04em",
          }}
        >
          ← Back
        </button> */}

        {/* Hero */}
        <div
          style={{
            background: "linear-gradient(0.48deg, rgb(25, 36, 65) 38.09%, rgb(1, 9, 25) 110.38%)",
            padding: isMobile ? "48px 24px 44px" : "88px 64px 72px",
            textAlign: "center",
          }}
        >
          <p style={{ fontFamily: "'Futura PT', sans-serif", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: "#D9C7A8", opacity: 0.8, marginBottom: 14 }}>
            Golden Jubilee · 1976–2026
          </p>
          <h1 style={{ fontFamily: "'CRONDE', serif", color: "#fff", fontSize: isMobile ? "clamp(28px, 9vw, 40px)" : "clamp(44px, 5vw, 72px)", margin: 0, marginBottom: 18, lineHeight: 1.05 }}>
            Watch & Listen
          </h1>
          <p style={{ fontFamily: "'Futura PT', sans-serif", color: "#D9C7A8", fontSize: isMobile ? 15 : 20, maxWidth: 720, margin: "0 auto", lineHeight: 1.6 }}>
            Healing, provision, restored families, and lives turned toward Christ — real stories from across our fifty years.
          </p>
        </div>

        {/* About note */}
        {/* <div style={{ maxWidth: 820, margin: "0 auto", padding: isMobile ? "28px 20px 0" : "48px 24px 0" }}>
          <div
            style={{
              background: "rgba(217,199,168,0.14)",
              border: "1px solid rgba(217,199,168,0.4)",
              borderRadius: 8,
              padding: isMobile ? "18px 18px" : "24px 30px",
            }}
          >
            <p style={{ fontFamily: "'Futura PT', sans-serif", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8b7f6a", marginBottom: 10 }}>
              About these stories — read before publishing
            </p>
            <p style={{ fontFamily: "'Futura PT', sans-serif", fontSize: isMobile ? 13 : 14.5, lineHeight: 1.7, color: "#4a4535", margin: 0 }}>
              The accounts below are told in narrative summary, drawn from written and recorded sources gathered across the church's fifty years. Several are reconstructed from the 45th Anniversary Report (2021) and are not verbatim quotations. Consent for public use is still being confirmed with each individual or their family, and some details have been deliberately handled with care or left out until that confirmation is complete. Further video interviews recorded for the 50th Anniversary documentary are being reviewed and will be added here once available.
            </p>
          </div>
        </div> */}

        {/* Testimonies */}
        <div style={{ maxWidth: 820, margin: "0 auto", padding: isMobile ? "28px 20px 40px" : "48px 24px 64px" }}>
          {TESTIMONIES.map((t, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                borderRadius: 8,
                boxShadow: "0px 2px 10px rgba(0,0,0,0.06)",
                padding: isMobile ? "22px 20px" : "34px 40px",
                marginBottom: 24,
              }}
            >
              <h3 style={{ fontFamily: "'CRONDE', serif", fontSize: isMobile ? 20 : 26, color: "#192441", margin: 0, marginBottom: 8 }}>
                {t.title}
              </h3>
              <p style={{ fontFamily: "'Futura PT', sans-serif", fontSize: 12, letterSpacing: "0.04em", color: "#8b7f6a", marginBottom: 16 }}>
                {t.attribution}
              </p>
              <p style={{ fontFamily: "'Futura PT', sans-serif", fontSize: isMobile ? 14 : 16, lineHeight: 1.75, color: "#28241c", margin: 0 }}>
                {t.body}
              </p>
            </div>
          ))}

          {/* <div
            style={{
              textAlign: "center",
              padding: isMobile ? "24px 20px" : "32px 40px",
              border: "1px dashed #b8ab8f",
              borderRadius: 8,
              background: "rgba(217,199,168,0.08)",
            }}
          >
            <p style={{ fontFamily: "'CRONDE', serif", fontSize: isMobile ? 18 : 22, color: "#192441", marginBottom: 8 }}>
              More stories, coming soon
            </p>
            <p style={{ fontFamily: "'Futura PT', sans-serif", fontSize: isMobile ? 13 : 14.5, lineHeight: 1.7, color: "#4a4535", margin: 0 }}>
              Additional interview recordings gathered for the documentary — including further accounts from members across our branches — are currently being reviewed by the production team and will be added here once finalised and cleared for public use.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default TestimoniesPage;