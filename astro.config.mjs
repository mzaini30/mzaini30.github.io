import { defineConfig } from "astro/config";
import WindiCSS from "vite-plugin-windicss";
import mdx from "@astrojs/mdx";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // your configuration options here...
  vite: {
    plugins: [WindiCSS()],
  },
  integrations: [mdx(), sitemap(), robotsTxt()],
  site: "https://mzaini30.js.org",
});
