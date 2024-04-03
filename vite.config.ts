import { defineConfig } from "vite";
import * as path from "path";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  build: {
    outDir: "./build",
  },
  esbuild: {
    target: "esnext",
    platform: "browser",
  },
});
