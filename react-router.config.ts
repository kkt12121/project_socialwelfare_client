import type { Config } from "@react-router/dev/config";
// @ts-ignore
import { vercelPreset } from "@vercel/react-router/preset";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  presets: [vercelPreset()],
  ssr: true,
} satisfies Config;
