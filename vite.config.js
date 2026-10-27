import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // github pages puts the site under /passing-thoughts/, so assets need this prefix
  base: "/passing-thoughts/",
});
