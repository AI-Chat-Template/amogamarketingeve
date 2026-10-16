import { defineAgent } from "eve";
import { qwenFlash } from "#lib/openrouter.js";

export default defineAgent({
  model: qwenFlash,
  modelContextWindowTokens: 1_000_000,
});
