import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import vitePluginDocs from "./plugins/vite-plugin-docs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vitePluginDocs({path: './docs'})],
  resolve: {
    alias: {
      // docs: resolve("./docs"),
    },
  },
  server: {
    port: 3003
  }
});
