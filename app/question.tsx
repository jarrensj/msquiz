"use client";

import { useState } from "react";

export default function Question({
  question,
  answer,
  unit,
}: {
  question: string;
  answer: number;
  unit: string;
}) {
  const [result, setResult] = useState<"correct" | "incorrect" | null>(null);

  return (
    <form
      className="flex flex-col items-center gap-2"
      onSubmit={(event) => {
        event.preventDefault();
        const guess = Number(new FormData(event.currentTarget).get("answer"));
        setResult(guess === answer ? "correct" : "incorrect");
      }}
    >
      <label htmlFor="answer">{question}</label>
      <div className="flex items-center gap-2">
        <input
          id="answer"
          name="answer"
          type="number"
          required
          className="w-24 border px-2"
        />
        {unit}
        <button type="submit" className="border px-2">
          Check
        </button>
      </div>
      <p aria-live="polite">
        {result === "correct" && `Correct! It's ${answer} ${unit}.`}
        {result === "incorrect" && "Not quite, try again."}
      </p>
    </form>
  );
}
