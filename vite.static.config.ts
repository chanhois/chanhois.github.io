import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Static single-page build for GitHub Pages. The portfolio is an entirely
// client-rendered tree, so it needs no server runtime. Relative asset paths
// keep the output valid at a user site root and at a project subpath alike.
export default defineConfig({
  root: fileURLToPath(new URL("./static", import.meta.url)),
  base: "./",
  publicDir: fileURLToPath(new URL("./public", import.meta.url)),
  plugins: [react()],
  build: {
    outDir: fileURLToPath(new URL("./dist-static", import.meta.url)),
    emptyOutDir: true,
  },
});
