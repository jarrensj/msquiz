"use client";

import { useState } from "react";
import Question from "./question";
import { quizName, quizQuestions, quizTitle } from "./questions";
import ShareCard from "./share-card";
import type { QuestionShareResult } from "./share";

type AttemptState = {
  firstAttemptCorrect: boolean;
  solved: boolean;
};

export default function Quiz() {
  const [attempts, setAttempts] = useState<Record<string, AttemptState>>({});

  // The shared score counts the first submission only. Later tries still
  // update that question's own Correct / try-again message and can mark it
  // solved, which is what finishes the quiz.
  function grade(id: string, correct: boolean) {
    setAttempts((current) => {
      const previous = current[id];
      if (!previous) {
        return {
          ...current,
          [id]: { firstAttemptCorrect: correct, solved: correct },
        };
      }

      return {
        ...current,
        [id]: {
          firstAttemptCorrect: previous.firstAttemptCorrect,
          solved: previous.solved || correct,
        },
      };
    });
  }

  const results: QuestionShareResult[] = quizQuestions.map((question) => ({
    id: question.id,
    label: question.label,
    answer: question.answer,
    unit: question.unit,
    correctOnFirstTry: attempts[question.id]?.firstAttemptCorrect ?? false,
  }));
  const complete =
    quizQuestions.length > 0 &&
    quizQuestions.every((question) => attempts[question.id]?.solved);

  return (
    <div className="flex flex-col items-center gap-4">
      {quizQuestions.map((question) => (
        <Question
          key={question.id}
          question={question.question}
          answer={question.answer}
          unit={question.unit}
          options={question.options}
          onGraded={(correct) => grade(question.id, correct)}
        />
      ))}
      {complete ? (
        <ShareCard
          quizName={quizName}
          quizTitle={quizTitle}
          questions={results}
        />
      ) : null}
    </div>
  );
}
