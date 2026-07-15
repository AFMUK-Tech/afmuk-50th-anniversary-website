import { useEffect, useState } from "react";
import { SiteHeader, useIsMobile } from "./SiteHeader";

// Font FAMILY is controlled globally (fonts.css / globals.css) via
// var(--font-heading) on h1-h6/.site-heading and var(--font-body) on
// p/li/label/blockquote/figcaption. This file only imports size/weight
// helpers — it never sets fontFamily inline, since inline styles can't
// beat the global !important tag rules anyway.
import { BODY_STYLE, headingSize, labelSize } from "../../styles/typography";

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
        {/* Hero */}
        <div
          style={{
            background: "linear-gradient(0.48deg, rgb(25, 36, 65) 38.09%, rgb(1, 9, 25) 110.38%)",
            padding: isMobile ? "48px 24px 44px" : "88px 64px 72px",
            textAlign: "center",
          }}
        >
          {/* Eyebrow label -> var(--font-body) globally via the <p> tag rule */}
          <p
            style={{
              ...labelSize(12, { letterSpacing: "0.2em", textTransform: "uppercase" }),
              color: "#D9C7A8",
              opacity: 0.8,
              marginBottom: 14,
            }}
          >
            Golden Jubilee · 1976–2026
          </p>
          {/* Real <h1> so var(--font-heading) applies via the global h1-h6 rule */}
          <h1
            style={{
              ...headingSize(isMobile ? 34 : 58, { lineHeight: 1.05 }),
              color: "#fff",
              margin: 0,
              marginBottom: 18,
            }}
          >
            Watch & Listen
          </h1>
          <p style={{ ...BODY_STYLE, color: "#D9C7A8", maxWidth: 720, margin: "0 auto" }}>
            Healing, provision, restored families, and lives turned toward Christ — real stories from across our fifty years.
          </p>
        </div>

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
              {/*
                Spec: sub-heading and body copy share the same Futura PT
                Regular 18px/32px style — so this can't be a real <h1>-<h6>,
                since the global h1-h6 rule would force it to CRONDE. Using
                <p role="heading"> keeps the heading semantics for screen
                readers while getting var(--font-body) + BODY_STYLE like the
                paragraph below it.
              */}
              <p
                role="heading"
                aria-level={3}
                style={{ ...BODY_STYLE, color: "#192441", margin: 0, marginBottom: 8 }}
              >
                {t.title}
              </p>
              {/* Attribution — small metadata line, body font via the <p> tag rule */}
              <p
                style={{
                  ...labelSize(12, { letterSpacing: "0.04em" }),
                  color: "#8b7f6a",
                  marginBottom: 16,
                }}
              >
                {t.attribution}
              </p>
              <p style={{ ...BODY_STYLE, color: "#28241c", margin: 0 }}>
                {t.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimoniesPage;