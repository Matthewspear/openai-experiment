"use client";

import { DataTable } from "../data-table";
import { aiModelPricings } from "./data";
import { PricingLink } from "../PricingLink";
import { columns } from "./columns";
import { BreadcrumbBuilder } from "@/components/breadcrumb-builder";

export default function Pricing() {
  return (
    <div className="flex w-full flex-col gap-4">
      <BreadcrumbBuilder
        items={[{ href: "/tools", label: "Tools" }]}
        page="Model Pricing Tracker"
      />
      <DataTable
        title="Model Pricing Tracker"
        columns={columns}
        data={aiModelPricings}
      />

      <h3 className="pb-4 text-xl font-medium">Links</h3>
      <div className="grid grid-cols-2 gap-4">
        <PricingLink
          title="OpenAI Pricing"
          author="OpenAI"
          url="https://openai.com/pricing"
        />
        <PricingLink
          title="Anthropic API Pricing"
          author="Anthropic"
          url="https://www.anthropic.com/pricing#anthropic-api"
        />
        <PricingLink
          title="Mistral Pricing and Rate Limits"
          author="Mistral"
          url="https://mistral.ai/technology/#pricing"
        />
        <PricingLink
          title="Cohere Pricing"
          author="Cohere"
          url="https://cohere.com/pricing"
        />
        <PricingLink
          title="Gemini API Pricing"
          author="Google"
          url="https://ai.google.dev/pricing"
        />
        <PricingLink
          title="Chatbot Arena Leaderboard"
          author="LMSys"
          url="https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard"
        />
      </div>
    </div>
  );
}
