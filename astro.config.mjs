import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // site: "https://astro-nano-demo.vercel.app",
  site: "https://edwardbaleni.github.io/",
  base: "/whats-what",
  integrations: [mdx(), sitemap(), tailwind()],
});
