import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import reveal from "astro-reveal";

export default defineConfig({
    site: "https://niba291.github.io",
    base: "/",
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [icon(), reveal({ mode: "observer" })],
});