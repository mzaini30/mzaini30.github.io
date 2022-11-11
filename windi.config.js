import { defineConfig } from "windicss/helpers";

export default defineConfig({
  /* configurations... */
  extract: {
    include: ["./src/**/*.astro", "./src/**/*.mdx"],
  },
  plugins: [
    require("windicss/plugin/typography"),
    // ...
  ],
});
