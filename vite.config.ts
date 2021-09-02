import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
// import vitePluginMdTransform from "./plugins/vite-plugin-md-transform";
import vitePluginDocs from "./plugins/vite-plugin-docs";
import vitePluginMd2Vue from "./plugins/vite-plugin-md-transform"; //"vite-plugin-md2vue";
import vitePluginDocsConfig from "./plugins/vite-plugin-docs-config"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vitePluginMd2Vue(), vitePluginDocs(), vitePluginDocsConfig()],
  resolve: {
    alias: {
      docs: resolve("./docs"),
      '@src': resolve("./src"),
      '@components': resolve("./src/components"),
      '@hooks': resolve("./src/hooks")
    },
  },
  server: {
    port: 3003
  },
  base: './'
});
