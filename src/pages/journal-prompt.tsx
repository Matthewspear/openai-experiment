import { type NextPage } from "next";

import Layout from "../components/Layout";
import { ComingSoon } from "../components/ComingSoon";
import { api } from "../utils/api";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { Loader } from "../components/Loader";
import { useState } from "react";
import { ExperimentsLevelBreadcrumbs } from "@/components/BreadcrumbBar";

const JournalPrompt: NextPage = () => {
  const promptMutation = api.ai.prompt.useMutation();

  function PromptButton({
    icon,
    label,
    prompt,
  }: {
    icon: string;
    label: string;
    prompt: string;
  }) {
    const fullPrompt = `${prompt}
    
    Prompt`;

    return (
      <button
        className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium capitalize text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={(e) => {
          e.preventDefault();
          promptMutation.mutate({
            text: fullPrompt,
            temperature: creativity,
            task: "journal-prompt",
          });
        }}
      >
        <p className="-ml-1 mr-2">{icon}</p>
        <p>{label}</p>
      </button>
    );
  }

  const [creativity, setCreativity] = useState(0.7);

  return (
    <Layout
      // title="Journal Prompt"
      breadcrumbs={ExperimentsLevelBreadcrumbs(
        "Journal Prompt",
        "/journal-prompt"
      )}
    >
      <div className="flex w-full flex-col gap-4">
        {/* <ComingSoon /> */}
        <div className="flex w-full flex-wrap gap-4">
          <div className="w-full sm:w-[400px]">
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Creativity
            </label>
            <input
              id="myRange"
              className="range w-full p-2 accent-indigo-500"
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={creativity}
              onChange={(e) => {
                setCreativity(parseFloat(e.target.value));
              }}
            ></input>
            <p>{(creativity * 100).toFixed(0)}%</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <PromptButton
            icon="🗓️"
            label="daily prompt"
            prompt={`Generate a journal prompt (single question) to help me connect back to myself`}
          />
          <PromptButton
            icon="🙏"
            label="gratitude"
            prompt={`Generate a journal prompt to exploring the topic of gratitude`}
          />
          <PromptButton
            icon="❤️"
            label="love"
            prompt={`Generate a journal prompt to exploring the topic of love`}
          />
          <PromptButton
            icon="🚀"
            label="goals"
            prompt={`Write me a journal prompt to structure my goals`}
          />
          <PromptButton
            icon="💭"
            label="dreams"
            prompt={`Generate a journal prompt to explore my hopes, dreams and future`}
          />
          <PromptButton
            icon="🪁"
            label="childhood"
            prompt={`Write me a journal prompt. Ask me a specific question about my childhood that might invoke nostalgia`}
          />
          <PromptButton
            icon="📝"
            label="weekly review"
            prompt={`Generate a journal prompt to help with my weekly review`}
          />
        </div>
        <hr />
        <div className="flex h-full flex-col">
          {promptMutation.isLoading && <Loader />}
          {promptMutation.data && promptMutation.data.error && (
            <div className="mt-8 flex w-full flex-row place-items-center items-center rounded-lg bg-white shadow-lg sm:w-[700px]">
              <ExclamationCircleIcon className="my-4 mr-4 ml-4 h-6 w-6 text-red-500" />
              <p className="h-6">
                {(promptMutation.data.error &&
                  promptMutation.data.error.message) ||
                  JSON.stringify(promptMutation.data.error)}
              </p>
            </div>
          )}
          {!promptMutation.isLoading &&
            promptMutation.data &&
            !promptMutation.data.error && (
              <div className=" mt-8 grid w-full place-items-center rounded-lg bg-white shadow-lg sm:w-[700px]">
                <div className="prose prose-slate">
                  <p className="p-4">{promptMutation.data.result}</p>
                </div>
              </div>
            )}

          <div className="h-10 grow" />
        </div>
      </div>
    </Layout>
  );
};

export default JournalPrompt;
