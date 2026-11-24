import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "build",
  },
  server: {
    port: 3000,
  },
});
