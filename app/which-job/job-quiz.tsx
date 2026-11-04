"use client";

import { useState } from "react";

const questions = [
  {
    prompt: "Do you wanna play melee or range?",
    choices: ["Melee", "Range"],
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
  // TODO: Once answer weights land (#16), add unweighted: "Not a factor" here.
  {
    prompt: "Do you like wizards or the wizard aesthetic?",
    choices: ["Yes", "No", "Not a factor"],
  },
];

// TODO: Add the remaining questions and turn the answers into a job result.
// Only use what we know from playing the game. Don't scrape any sites.
export default function JobQuiz() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const finished = questions.every(({ prompt }) => answers[prompt]);

  return (
    <div className="flex flex-col items-center gap-4">
      {questions.map(({ prompt, choices }) => (
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
      <p aria-live="polite" className="min-h-12 text-center">
        {finished && "That's all for now. Job suggestions coming soon."}
      </p>
    </div>
  );
}
