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
];

// TODO: Add the remaining questions and turn the answers into a job result.
// Only use what we know from playing the game. Don't scrape any sites.
export default function JobQuiz() {
  const [queue, setQueue] = useState(questions);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [current, ...rest] = queue;

  return (
    <div aria-live="polite" className="flex flex-col items-center gap-2">
      {current ? (
        <fieldset className="flex flex-col items-center gap-2">
          <legend className="text-center">{current.prompt}</legend>
          <div className="flex flex-wrap justify-center gap-3">
            {current.choices.map((choice, index) => (
              // Keyed by position so keyboard focus survives to the next question.
              <button
                key={index}
                type="button"
                onClick={() => {
                  setAnswers({ ...answers, [current.prompt]: choice });
                  setQueue(rest);
                }}
                className="border px-2"
              >
                {choice}
              </button>
            ))}
          </div>
          {/* Hidden rather than removed so the choices don't jump on the last question. */}
          <button
            type="button"
            onClick={() => setQueue([...rest, current])}
            className={`underline ${rest.length === 0 ? "invisible" : ""}`}
          >
            Ask me later
          </button>
        </fieldset>
      ) : (
        <p className="text-center">
          That&apos;s all for now. Job suggestions coming soon.
        </p>
      )}
    </div>
  );
}
