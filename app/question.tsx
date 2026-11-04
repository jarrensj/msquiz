"use client";

import type { Difficulty } from "./questions";

export default function Question({
  question,
  difficulty,
  options,
  selected,
  onSelect,
}: {
  question: string;
  difficulty: Difficulty;
  options: readonly string[];
  selected?: string;
  onSelect?: (option: string, viaKeyboard: boolean) => void;
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs font-medium capitalize opacity-70">{difficulty}</p>
      <h2
        tabIndex={-1}
        className="text-left text-base font-medium break-words outline-offset-4"
      >
        {question}
      </h2>
      <div className="flex flex-col gap-2" role="group" aria-label="Answers">
        {options.map((option) => {
          const isSelected = option === selected;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={isSelected}
              tabIndex={onSelect ? undefined : -1}
              onClick={
                onSelect
                  ? (event) => onSelect(option, event.detail === 0)
                  : undefined
              }
              className={`w-full border px-3 py-2 text-left break-words ${
                isSelected
                  ? "bg-foreground/10 font-medium ring-2 ring-foreground ring-inset"
                  : ""
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
