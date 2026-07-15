// src/styles/typography.ts

import type { CSSProperties } from "react";

/** Reference only — prefer real <h1>-<h6> tags or className="site-heading" over this. */
export const FONT_HEADING = "var(--font-heading)";

/** Reference only — prefer real <p>/<li>/<blockquote> tags over this; they're already covered globally. */
export const FONT_BODY = "var(--font-body)";

export const BODY_STYLE: CSSProperties = {
  fontWeight: 400,
  fontSize: 18,
  lineHeight: "32px",
};

export function headingSize(fontSize: number, extra?: CSSProperties): CSSProperties {
  return { fontSize, fontWeight: 400, ...extra };
}

/**
 * Size overrides for small label/caption text rendered as <p>/<label>/
 * <figcaption> (already on var(--font-body) globally) that's smaller
 * than the 18px paragraph default.
 */
export function labelSize(fontSize: number, extra?: CSSProperties): CSSProperties {
  return { fontSize, fontWeight: 400, ...extra };
}