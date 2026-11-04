"use client";

import { useEffect, useRef, useState } from "react";
import Deck from "./deck";
import Question from "./question";
import { orderedOptions, questions } from "./questions";
import ShareCard from "./share-card";
import type { QuestionShareResult } from "./share";

const quizName = "msquiz";
const quizTitle = "Classic World";

type Direction = "forward" | "back";

type Step =
  | { name: "start" }
  | { name: "question"; index: number }
  | { name: "submit" }
  | { name: "results"; graded: readonly QuestionShareResult[] };

function motionMs(): number {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return 160;
  }
  return 360;
}

export default function Quiz() {
  const [step, setStep] = useState<Step>({ name: "start" });
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [leavingStep, setLeavingStep] = useState<Step | null>(null);
  const [direction, setDirection] = useState<Direction>("forward");
  const [motionOn, setMotionOn] = useState(false);
  const currentRef = useRef<HTMLDivElement>(null);
  const leaveTimer = useRef<number | null>(null);
  const shouldFocus = useRef(false);

  useEffect(() => {
    return () => {
      if (leaveTimer.current !== null) {
        window.clearTimeout(leaveTimer.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!shouldFocus.current) {
      return;
    }
    shouldFocus.current = false;
    const root = currentRef.current;
    if (!root || step.name === "start") {
      return;
    }

    if (step.name === "results") {
      root.querySelector<HTMLElement>("[data-quiz-results]")?.focus();
      return;
    }

    const selected =
      step.name === "question"
        ? root.querySelector<HTMLElement>("[aria-pressed='true']")
        : null;
    const heading = root.querySelector<HTMLElement>("h2");
    (selected ?? heading)?.focus();
  }, [step]);

  function go(next: Step, nextDirection: Direction) {
    if (leaveTimer.current !== null) {
      window.clearTimeout(leaveTimer.current);
    }
    setMotionOn(true);
    setDirection(nextDirection);
    setLeavingStep(step);
    setStep(next);
    leaveTimer.current = window.setTimeout(() => {
      setLeavingStep(null);
    }, motionMs());
  }

  function start(viaKeyboard: boolean) {
    if (leavingStep) {
      return;
    }
    shouldFocus.current = viaKeyboard;
    go({ name: "question", index: 0 }, "forward");
  }

  function choose(option: string, viaKeyboard: boolean) {
    if (leavingStep || step.name !== "question") {
      return;
    }
    shouldFocus.current = viaKeyboard;
    const index = step.index;
    const question = questions[index];
    if (!question) {
      return;
    }
    setAnswers((current) => ({ ...current, [question.id]: option }));
    if (index + 1 < questions.length) {
      go({ name: "question", index: index + 1 }, "forward");
      return;
    }
    go({ name: "submit" }, "forward");
  }

  function back(viaKeyboard: boolean) {
    if (leavingStep) {
      return;
    }
    shouldFocus.current = viaKeyboard;
    if (step.name === "submit") {
      go({ name: "question", index: questions.length - 1 }, "back");
      return;
    }
    if (step.name === "question" && step.index > 0) {
      go({ name: "question", index: step.index - 1 }, "back");
    }
  }

  function grade() {
    if (leavingStep || step.name !== "submit") {
      return;
    }
    if (leaveTimer.current !== null) {
      window.clearTimeout(leaveTimer.current);
    }
    const graded = questions.map((question) => ({
      id: question.id,
      question: question.question,
      answer: question.answer,
      source: question.source,
      correct: answers[question.id] === question.answer,
    }));
    shouldFocus.current = true;
    setLeavingStep(null);
    setStep({ name: "results", graded });
  }

  function playAgain() {
    if (leaveTimer.current !== null) {
      window.clearTimeout(leaveTimer.current);
    }
    setAnswers({});
    setLeavingStep(null);
    setMotionOn(false);
    setDirection("forward");
    setStep({ name: "start" });
  }

  function renderCard(current: Exclude<Step, { name: "results" }>, interactive: boolean) {
    if (current.name === "start") {
      return (
        <div className="flex flex-col items-center gap-3 border bg-background px-4 py-8 text-center">
          <h2 tabIndex={-1} className="text-lg font-medium outline-offset-4">
            {quizTitle}
          </h2>
          <p>{questions.length} questions, easy to hard.</p>
          <button
            type="button"
            className="border px-3 py-2"
            onClick={
              interactive
                ? (event) => start(event.detail === 0)
                : undefined
            }
          >
            Start quiz
          </button>
        </div>
      );
    }

    if (current.name === "submit") {
      return (
        <div className="flex flex-col items-center gap-3 border bg-background px-4 py-8 text-center">
          <h2 tabIndex={-1} className="text-lg font-medium outline-offset-4">
            Submit your answers
          </h2>
          <p>All {questions.length} questions have an answer.</p>
          <button
            type="button"
            className="border px-3 py-2"
            onClick={interactive ? grade : undefined}
          >
            Submit
          </button>
        </div>
      );
    }

    const question = questions[current.index];
    return (
      <div className="flex flex-col gap-3 border bg-background px-4 py-4">
        <p className="text-sm opacity-70">
          {current.index + 1} / {questions.length}
        </p>
        <Question
          question={question.question}
          difficulty={question.difficulty}
          options={orderedOptions(question)}
          selected={answers[question.id]}
          onSelect={interactive ? choose : undefined}
        />
      </div>
    );
  }

  if (step.name === "results") {
    return (
      <div ref={currentRef} className="flex w-full min-w-0 flex-col items-center gap-4">
        <ShareCard
          quizName={quizName}
          quizTitle={quizTitle}
          questions={step.graded}
        />
        <button type="button" className="border px-3 py-2" onClick={playAgain}>
          Play again
        </button>
      </div>
    );
  }

  const showBack =
    step.name === "submit" || (step.name === "question" && step.index > 0);
  const inClass = !motionOn
    ? ""
    : direction === "back"
      ? "deck-back-in"
      : "deck-forward-in";
  const outClass = direction === "back" ? "deck-back-out" : "deck-forward-out";

  return (
    <div className="flex w-full min-w-0 flex-col gap-3">
      <Deck
        currentRef={currentRef}
        motionClass={inClass}
        leavingClass={outClass}
        leaving={
          leavingStep && leavingStep.name !== "results"
            ? renderCard(leavingStep, false)
            : null
        }
      >
        {renderCard(step, true)}
      </Deck>
      <div className="min-h-9">
        {showBack ? (
          <button
            type="button"
            className="border px-3 py-2"
            onClick={(event) => back(event.detail === 0)}
          >
            Back
          </button>
        ) : null}
      </div>
    </div>
  );
}
