import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const GH_PAGES_ENV = process.env.GH_PAGES_ENV === "true";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: GH_PAGES_ENV ? "/web-e-commerce-react/" : "/",
});
