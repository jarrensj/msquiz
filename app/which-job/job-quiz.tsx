"use client";

import { useState } from "react";

const meleeOrRange = "Do you wanna play melee or range?";

type Question = {
  prompt: string;
  choices: string[];
  // The answer that means "this doesn't matter to me", so it can't be weighted.
  unweighted?: string;
  // Only shown, and only counted, while this earlier answer is picked.
  showIf?: { prompt: string; choice: string };
};

const questions: Question[] = [
  {
    prompt: meleeOrRange,
    choices: ["Melee", "Range"],
  },
  // Swords and spears point to warrior, daggers to bandit.
  {
    prompt: "Do you like swords or spears?",
    choices: ["Swords", "Spears", "Neither, I like daggers", "Not a factor"],
    unweighted: "Not a factor",
    showIf: { prompt: meleeOrRange, choice: "Melee" },
  },
  {
    prompt: "Do you wanna throw stars or do you like bows?",
    choices: ["Throw stars", "Bows", "Not a factor"],
    unweighted: "Not a factor",
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
    unweighted: "Not a factor",
  },
  {
    prompt: "Do you enjoy min-maxing?",
    choices: ["Yes", "No", "Not a factor"],
    unweighted: "Not a factor",
  },
  {
    prompt: "Is the popularity of the class a factor?",
    choices: [
      "Yes, I wanna play something popular",
      "No, I don't want to play something popular",
      "No, this is not a factor to me",
    ],
    unweighted: "No, this is not a factor to me",
  },
  // TODO: Once answer weights land (#16), add unweighted: "Not a factor" here.
  {
    prompt:
      "Do you want to have expensive equips or a competitive market for your build?",
    choices: ["Expensive equips", "Competitive market", "Not a factor"],
  },
  // TODO: Once answer weights land (#16), add unweighted: "Not a factor" here.
  {
    prompt: "Do you enjoy jumping around and attacking?",
    choices: ["Yes", "No", "Not a factor"],
  },
  // TODO: Once answer weights land (#16), add unweighted: "Not a factor" here.
  {
    prompt: "Do you like flashy animations?",
    choices: ["Yes", "No", "Not a factor"],
  },
  // TODO: Once answer weights land (#16), add unweighted: "Not a factor" here.
  {
    prompt: "Do you like wizards or the wizard aesthetic?",
    choices: ["Yes", "No", "Not a factor"],
  },
  // TODO: Once answer weights land (#16), add unweighted: "Not a factor" here.
  {
    prompt: "Do you want to use a one-handed or two-handed weapon?",
    choices: ["One-handed", "Two-handed", "Not a factor"],
  },
];

const weights = ["Normal", "A lot", "Must have"];

// TODO: Add the remaining questions and turn the answers into a job result.
// Only use what we know from playing the game. Don't scrape any sites.
// TODO: When job suggestions exist, never suggest a job that goes against a
// "Must have" answer, and count "A lot" answers more than "Normal" ones.
export default function JobQuiz() {
  const [answers, setAnswers] = useState<
    Record<string, { choice: string; weight: string }>
  >({});
  // A follow-up only counts while its earlier answer is picked. Its own answer
  // is kept in case they switch back, so only read answers from these questions.
  const shown = questions.filter(
    ({ showIf }) => !showIf || answers[showIf.prompt]?.choice === showIf.choice,
  );
  const finished = shown.every(({ prompt }) => answers[prompt]);
  const hasMustHave = shown.some(
    ({ prompt }) => answers[prompt]?.weight === "Must have",
  );

  return (
    <div aria-live="polite" className="flex flex-col items-center gap-4">
      {shown.map(({ prompt, choices, unweighted }) => {
        const answer = answers[prompt];

        return (
          <fieldset key={prompt} className="flex flex-col items-center gap-2">
            <legend className="text-center">{prompt}</legend>
            <div className="flex flex-wrap justify-center gap-3">
              {choices.map((choice) => (
                <button
                  key={choice}
                  type="button"
                  aria-pressed={answer?.choice === choice}
                  onClick={() => {
                    // The weight belongs to the answer, so a new answer starts over.
                    if (answer?.choice !== choice) {
                      setAnswers({
                        ...answers,
                        [prompt]: { choice, weight: "Normal" },
                      });
                    }
                  }}
                  className="border px-2 aria-pressed:bg-foreground aria-pressed:text-background"
                >
                  {choice}
                </button>
              ))}
            </div>
            {/* Hidden rather than removed so the page doesn't jump on a pick. */}
            <div
              role="group"
              aria-label="How much should this count?"
              className={`flex flex-wrap items-center justify-center gap-2 text-sm ${answer && answer.choice !== unweighted ? "" : "invisible"}`}
            >
              <span>How much should this count?</span>
              <div className="flex gap-2">
                {weights.map((weight) => (
                  <button
                    key={weight}
                    type="button"
                    aria-pressed={answer?.weight === weight}
                    onClick={() =>
                      setAnswers({
                        ...answers,
                        [prompt]: { ...answer, weight },
                      })
                    }
                    className="border px-1 aria-pressed:bg-foreground aria-pressed:text-background"
                  >
                    {weight}
                  </button>
                ))}
              </div>
            </div>
          </fieldset>
        );
      })}
      <p className="min-h-24 text-center">
        {finished && "That's all for now. Job suggestions coming soon."}
        {finished &&
          hasMustHave &&
          " We won't suggest anything that goes against your must-haves."}
      </p>
    </div>
  );
}
