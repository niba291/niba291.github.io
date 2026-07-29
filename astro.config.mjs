import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://niba291.github.io",
  base: "/",

  vite: {
    plugins: [tailwindcss()],
  },
});