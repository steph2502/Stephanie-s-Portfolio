import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hides the Next.js dev tools badge that appears in the corner during
  // `next dev`. Purely a local dev-mode overlay; has no effect on production.
  devIndicators: false,
  images: {
    // Placeholder assets in /public are shipped as SVG; this can be removed
    // once every asset in the content checklist has been swapped for a
    // real photo/screenshot (jpg/png/webp).
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
