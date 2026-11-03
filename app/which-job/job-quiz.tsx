"use client";

import { useState } from "react";

const choices = ["Melee", "Range"];

// TODO: Add the remaining questions and turn the answers into a job result.
// Only use what we know from playing the game. Don't scrape any sites.
export default function JobQuiz() {
  const [choice, setChoice] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center gap-2">
      <fieldset className="flex flex-col items-center gap-2">
        <legend className="text-center">
          Do you wanna play melee or range?
        </legend>
        <div className="flex gap-3">
          {choices.map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={choice === option}
              onClick={() => setChoice(option)}
              className="border px-2 aria-pressed:bg-foreground aria-pressed:text-background"
            >
              {option}
            </button>
          ))}
        </div>
      </fieldset>
      <p aria-live="polite" className="min-h-12 text-center">
        {choice &&`You picked ${choice}. More questions coming soon.`}
      </p>
    </div>
  );
}
