"use client";

import { useState } from "react";

const meleeOrRange = "Do you wanna play melee or range?";

const questions = [
  {
    prompt: meleeOrRange,
    choices: ["Melee", "Range"],
  },
  // TODO: Once answer weights land (#16), add unweighted: "Not a factor" here.
  {
    prompt: "Do you wanna throw stars or do you like bows?",
    choices: ["Throw stars", "Bows", "Not a factor"],
    showIf: { prompt: meleeOrRange, choice: "Range" },
  },
  {
    prompt:
      "Do you want to do high single target damage or do you enjoy battling mobs?",
    choices: ["Single target", "Battling mobs"],
  },
  {
    prompt: "Is mobility important to you?",
    choices: ["Yes", "No", "Not a factor"],
  },
  {
    prompt: "Do you enjoy min-maxing?",
    choices: ["Yes", "No", "Not a factor"],
  },
  {
    prompt: "Is the popularity of the class a factor?",
    choices: [
      "Yes, I wanna play something popular",
      "No, I don't want to play something popular",
      "No, this is not a factor to me",
    ],
  },
];

// TODO: Add the remaining questions and turn the answers into a job result.
// Only use what we know from playing the game. Don't scrape any sites.
export default function JobQuiz() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  // A follow-up only counts while its earlier answer is picked. Its own answer
  // is kept in case they switch back, so only read answers from these questions.
  const shown = questions.filter(
    ({ showIf }) => !showIf || answers[showIf.prompt] === showIf.choice,
  );
  const finished = shown.every(({ prompt }) => answers[prompt]);

  return (
    <div aria-live="polite" className="flex flex-col items-center gap-4">
      {shown.map(({ prompt, choices }) => (
        <fieldset key={prompt} className="flex flex-col items-center gap-2">
          <legend className="text-center">{prompt}</legend>
          <div className="flex flex-wrap justify-center gap-3">
            {choices.map((choice) => (
              <button
                key={choice}
                type="button"
                aria-pressed={answers[prompt] === choice}
                onClick={() => setAnswers({ ...answers, [prompt]: choice })}
                className="border px-2 aria-pressed:bg-foreground aria-pressed:text-background"
              >
                {choice}
              </button>
            ))}
          </div>
        </fieldset>
      ))}
      <p className="min-h-12 text-center">
        {finished && "That's all for now. Job suggestions coming soon."}
      </p>
    </div>
  );
}
