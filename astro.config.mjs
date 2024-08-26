import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      noExternal: ["react-tweet"],
    },
  },
  integrations: [
    starlight({
      title: "Effect日本語版ドキュメント",
      components: {
        SocialIcons: "./src/components/SocialIcons.astro",
      },
      favicon: "/icon.png",
      locales: {
        root: {
          label: "日本語",
          lang: "ja",
        },
      },
      defaultLocale: "ja",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Introduction",
          autogenerate: {
            directory: "introduction",
          },
        },
        {
          label: "Guides",
          autogenerate: {
            directory: "guides",
          },
        },
      ],
    }),
  ],
  output: "server",
  adapter: vercel(),
});
