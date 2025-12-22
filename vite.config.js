import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";

installGlobals();

export default defineConfig({
  plugins: [
    remix({
      ignoredRouteFiles: ["**/.*"],
      // This ensures we build for the server
      serverBuildFile: "index.js",
    }),
  ],
  build: {
    target: "esnext",
  },
});