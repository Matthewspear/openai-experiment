export interface AIModelPricing {
  model: string;
  company: string;
  inputCost: number; // $/MTok
  outputCost: number; // $/MTok,
  contextLength: number; // tokens
  tokenizer: string; // huggingface
}

export const aiModelPricings: AIModelPricing[] = [
  {
    model: "GPT-4o-mini",
    company: "OpenAI",
    inputCost: 0.15,
    outputCost: 0.6,
    contextLength: 128_000,
    tokenizer: "xenova/gpt-4o",
  },
  {
    model: "Command-R",
    company: "Cohere",
    inputCost: 0.15,
    outputCost: 0.6,
    contextLength: 128_000,
    tokenizer: "xenova/c4ai-command-r-v01-tokenizer",
  },
  {
    model: "GPT-4o-mini-finetune",
    company: "OpenAI",
    inputCost: 0.3,
    outputCost: 1.2,
    contextLength: 128_000,
    tokenizer: "xenova/gpt-4o",
  },
  {
    model: "Claude 3 Haiku",
    company: "Anthropic",
    inputCost: 0.25,
    outputCost: 1.25,
    contextLength: 200_000,
    tokenizer: "xenova/claude-tokenizer",
  },
  {
    model: "Mistral Nemo",
    company: "Mistral",
    inputCost: 0.3,
    outputCost: 0.3,
    contextLength: 128_000,
    tokenizer: "xenova/mistral-nemo-instruct-tokenizer",
  },
  {
    model: "Gemini Pro",
    company: "Google",
    inputCost: 0.5,
    outputCost: 1.5,
    contextLength: 30_720,
    tokenizer: "xenova/gemma2-tokenizer",
  },
  {
    model: "Command-R+",
    company: "Cohere",
    inputCost: 2.5,
    outputCost: 10.0,
    contextLength: 128_000,
    tokenizer: "xenova/c4ai-command-r-v01-tokenizer",
  },
  {
    model: "Claude 3.5 Sonnet",
    company: "Anthropic",
    inputCost: 3,
    outputCost: 15,
    contextLength: 200_000,
    tokenizer: "xenova/claude-tokenizer",
  },
  {
    model: "GPT-4o",
    company: "OpenAI",
    inputCost: 5.0,
    outputCost: 15.0,
    contextLength: 128_000,
    tokenizer: "xenova/gpt-4o",
  },
  {
    model: "GPT-4o-2024-08-06",
    company: "OpenAI",
    inputCost: 2.5,
    outputCost: 10.0,
    contextLength: 128_000,
    tokenizer: "xenova/gpt-4o",
  },
  {
    model: "GPT-4o-2024-08-06-finetune",
    company: "OpenAI",
    inputCost: 3.75,
    outputCost: 15.0,
    contextLength: 128_000,
    tokenizer: "xenova/gpt-4o",
  },
  {
    model: "Mistral Large 2",
    company: "Mistral",
    inputCost: 3,
    outputCost: 9,
    contextLength: 128_000,
    tokenizer: "xenova/mistral-tokenizer-v3",
  },
  {
    model: "GPT-4 Turbo",
    company: "OpenAI",
    inputCost: 10,
    outputCost: 30,
    contextLength: 128_000,
    tokenizer: "xenova/gpt-4",
  },
  {
    model: "Claude 3 Opus",
    company: "Anthropic",
    inputCost: 15,
    outputCost: 75,
    contextLength: 200_000,
    tokenizer: "xenova/claude-tokenizer",
  },
];
