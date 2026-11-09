"use client";

import { useState } from "react";
import Question, { type QuestionData } from "./question";

export default function Quiz({ questions }: { questions: QuestionData[] }) {
  const [guesses, setGuesses] = useState<number[] | null>(null);
  // In a one-category quiz every label would say the same thing.
  const showCategory =
    new Set(questions.map(({ category }) => category)).size > 1;

  return (
    <form
      className="flex flex-col items-center gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        setGuesses(questions.map(({ question }) => Number(form.get(question))));
      }}
    >
      {questions.map((question, index) => (
        <Question
          key={question.question}
          {...question}
          guess={guesses?.[index]}
          showCategory={showCategory}
        />
      ))}
      <div aria-live="polite" className="min-h-7">
        {guesses ? (
          <p>
            You got{" "}
            {guesses.filter((guess, i) => guess === questions[i].answer).length}{" "}
            of {questions.length} right.
          </p>
        ) : (
          <button type="submit" className="border px-2">
            Submit
          </button>
        )}
      </div>
    </form>
  );
}
