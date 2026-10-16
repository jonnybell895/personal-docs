// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/jonnybell895/personal-docs",
        },
      ],
      sidebar: [
        {
          label: "CV",
          items: [{ autogenerate: { directory: "cv" } }],
        },
      ],
    }),
  ],
});
