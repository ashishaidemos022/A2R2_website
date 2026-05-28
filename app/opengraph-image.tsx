import { ImageResponse } from "next/og";

// Renders the A2R2 Labs brand lockup as the social share card. The file
// convention auto-wires og:image and twitter:image (1200x630) for the site.
export const alt = "A2R2 Labs — Agentic AI, architected for the enterprise";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BG = "#0A0A0C";
const CREAM = "#EFEAE0";
const GOLD = "#C9A876";

// Transparent orbit mark (no background plate) — sits on the dark canvas.
const markSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="none" stroke="${CREAM}" stroke-width="1.3" stroke-linecap="round"><ellipse cx="50" cy="50" rx="44" ry="17" transform="rotate(30 50 50)"/><ellipse cx="50" cy="50" rx="44" ry="17" transform="rotate(-30 50 50)"/></g><circle cx="50" cy="50" r="5.2" fill="${GOLD}"/><circle cx="11.9" cy="28" r="2.4" fill="${CREAM}"/><circle cx="11.9" cy="72" r="2.4" fill="${CREAM}"/><circle cx="88.1" cy="72" r="2.4" fill="${CREAM}"/><circle cx="88.1" cy="28" r="3" fill="${GOLD}"/></svg>`;
const markDataUri = `data:image/svg+xml;base64,${btoa(markSvg)}`;

// Pull just the glyphs we render so the subset stays tiny.
async function loadGoogleFont(family: string, weight: number, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${family.replace(
    / /g,
    "+",
  )}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const src = css.match(/src: url\((.+?)\) format\(/);
  if (!src) throw new Error(`Failed to load font: ${family}`);
  return (await fetch(src[1])).arrayBuffer();
}

export default async function OpengraphImage() {
  const wordmark = "A2R2 LABS";
  const tagline = "AI × ARCHITECTURE × RESEARCH × ROLLOUT";

  const [geist, geistMono] = await Promise.all([
    loadGoogleFont("Geist", 500, wordmark),
    loadGoogleFont("Geist Mono", 400, tagline),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: BG,
          backgroundImage:
            "radial-gradient(circle at 80% 8%, rgba(201,169,97,0.18), transparent 55%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 44 }}>
          <img src={markDataUri} width={172} height={172} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontFamily: "Geist",
                fontSize: 126,
                fontWeight: 500,
                letterSpacing: -4,
                lineHeight: 1,
                color: CREAM,
              }}
            >
              {wordmark}
            </div>
            <div
              style={{
                marginTop: 18,
                fontFamily: "Geist Mono",
                fontSize: 19,
                letterSpacing: 3,
                color: GOLD,
              }}
            >
              {tagline}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: geist, weight: 500, style: "normal" },
        { name: "Geist Mono", data: geistMono, weight: 400, style: "normal" },
      ],
    },
  );
}
