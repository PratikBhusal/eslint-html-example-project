import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

// https://vite.dev/config/
export default defineConfig({
  // Note: `UnoCSS()` must be before the `reactCompilerPreset`. If it comes
  // after, attributify does not work.
  plugins: [react(), UnoCSS(), babel({ presets: [reactCompilerPreset()] })],
});
