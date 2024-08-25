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
        {
          label: "Blog",
          autogenerate: {
            directory: "blog",
          },
        },
      ],
    }),
  ],
  output: "server",
  adapter: vercel(),
});
