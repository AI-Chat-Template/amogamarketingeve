import { createOpenRouter } from "@openrouter/ai-sdk-provider";

export const qwenFlash = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
})("qwen/qwen3.5-flash-02-23");
