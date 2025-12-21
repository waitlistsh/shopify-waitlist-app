import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";

installGlobals();

export default defineConfig({
  server: {
    port: 3000,
    host: "0.0.0.0",
    hmr: {
      port: 3000,
      protocol: "ws",
    },
  },
  plugins: [
    remix({
      ignoredRouteFiles: ["**/.*"],
    }),
  ],
  build: {
    target: "esnext",
  },
});