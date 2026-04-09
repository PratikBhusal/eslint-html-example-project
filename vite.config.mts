import { defineConfig } from "vite";

export default defineConfig(({}): UserConfig => {
  return {
    root: "src",
    build: {
      outDir: "../dist",
      emptyOutDir: true,
    },
  };
});
