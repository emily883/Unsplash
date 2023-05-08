import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
// import sass from "sass";

// https://vitejs.dev/config/
// Port change for docker configuration
export default defineConfig({
  server: {
    port: 8000,
  },
  plugins: [vue()],
  test: {
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
});
