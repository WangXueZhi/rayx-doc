import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import vitePluginMdTransform from "./plugins/vite-plugin-md-transform";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vitePluginMdTransform()],
  resolve: {
    alias: {
      docs: resolve("./docs"),
      '@src': resolve("./src"),
      '@components': resolve("./src/components")
    },
  },
  server: {
    port: 3003
  },
  base: './'
});
