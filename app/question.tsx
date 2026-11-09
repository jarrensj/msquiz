export type QuestionData = {
  question: string;
  answer: number;
  unit: string;
  options: number[];
};

export default function Question({
  question,
  answer,
  unit,
  options,
  guess,
}: QuestionData & { guess?: number }) {
  return (
    <fieldset
      disabled={guess !== undefined}
      className="flex flex-col items-center gap-2"
    >
      <legend className="text-center">{question}</legend>
      <div className="flex flex-wrap justify-center gap-3">
        {options.map((option) => (
          // Bold because browsers barely mark the checked radio once it's disabled.
          <label
            key={option}
            className={`flex items-center gap-1 ${guess === option ? "font-bold" : ""}`}
          >
            <input type="radio" name={question} value={option} required />
            {option} {unit}
          </label>
        ))}
      </div>
      <p className="min-h-6 text-center">
        {guess === answer && `Correct! It's ${answer} ${unit}.`}
        {guess !== undefined &&
          guess !== answer &&
          `Not quite. It's ${answer} ${unit}.`}
      </p>
    </fieldset>
  );
}
