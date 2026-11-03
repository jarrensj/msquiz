import Question from "./question";
import { orderedOptions, questions } from "./questions";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-xl flex-1 flex-col gap-8 px-4 py-8">
      <h1 className="text-center text-2xl font-semibold">msquiz</h1>
      {questions.map((item) => (
        <Question
          key={item.id}
          id={item.id}
          question={item.question}
          answer={item.answer}
          options={orderedOptions(item)}
          difficulty={item.difficulty}
          source={item.source}
        />
      ))}
    </main>
  );
}
