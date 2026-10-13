"use client";

import { useId, useState } from "react";

export default function Question({
  question,
  answer,
  unit,
  options,
}: {
  question: string;
  answer: number;
  unit: string;
  options: number[];
}) {
  const answerName = useId();
  const [result, setResult] = useState<"correct" | "incorrect" | null>(null);

  return (
    <form
      className="flex flex-col items-center gap-2"
      onSubmit={(event) => {
        event.preventDefault();
        const guess = Number(
          new FormData(event.currentTarget).get(answerName),
        );
        setResult(guess === answer ? "correct" : "incorrect");
      }}
    >
      <fieldset className="flex flex-col items-center gap-2">
        <legend className="text-center">{question}</legend>
        <div className="flex gap-3">
          {options.map((option) => (
            <label key={option} className="flex items-center gap-1">
              <input
                type="radio"
                name={answerName}
                value={option}
                required
              />
              {option} {unit}
            </label>
          ))}
        </div>
        <button type="submit" className="border px-2">
          Check
        </button>
      </fieldset>
      <p aria-live="polite">
        {result === "correct" && `Correct! It's ${answer} ${unit}.`}
        {result === "incorrect" && "Not quite, try again."}
      </p>
    </form>
  );
}
