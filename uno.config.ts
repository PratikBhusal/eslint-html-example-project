import type { UserConfig } from "@unocss/core";
import { defineConfig, presetWind4, presetAttributify } from "unocss";

const uno_config: UserConfig = {
  presets: [presetWind4(), presetAttributify()],
};

export default defineConfig(uno_config);
