"use client";

import { useId, useState } from "react";
import type { Difficulty } from "./questions";

export default function Question({
  id,
  question,
  answer,
  options,
  difficulty,
  source,
}: {
  id: string;
  question: string;
  answer: string;
  options: readonly string[];
  difficulty: Difficulty;
  source: string;
}) {
  const answerName = useId();
  const [result, setResult] = useState<"correct" | "incorrect" | null>(null);

  return (
    <form
      id={id}
      className="flex w-full min-w-0 flex-col gap-2"
      onSubmit={(event) => {
        event.preventDefault();
        const guess = new FormData(event.currentTarget).get(answerName);
        setResult(guess === answer ? "correct" : "incorrect");
      }}
    >
      <p className="text-xs font-medium capitalize opacity-70">{difficulty}</p>
      <fieldset className="m-0 flex w-full min-w-0 flex-col gap-2 border-0 p-0">
        <legend className="mb-1 block w-full text-left font-medium">
          {question}
        </legend>
        <div className="flex w-full flex-col gap-2">
          {options.map((option) => (
            <label key={option} className="flex items-start gap-2 text-left">
              <input
                type="radio"
                name={answerName}
                value={option}
                required
                className="mt-1 shrink-0"
              />
              <span className="min-w-0">{option}</span>
            </label>
          ))}
        </div>
        <button type="submit" className="w-fit border px-2">
          Check
        </button>
      </fieldset>
      <p aria-live="polite" className={resultClassName(result)}>
        {result === "correct" && `Correct! It's ${answer}.`}
        {result === "incorrect" && "Not quite, try again."}
      </p>
      <a href={source} className="w-fit text-sm underline">
        Source
      </a>
    </form>
  );
}

function resultClassName(result: "correct" | "incorrect" | null): string {
  if (result === "correct") {
    return "text-green-700 dark:text-green-400";
  }
  if (result === "incorrect") {
    return "text-red-700 dark:text-red-400";
  }
  return "";
}
