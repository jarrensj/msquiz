import Question from "./question";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1>msquiz</h1>
      <Question
        question="How much EXP does a Green Slime give?"
        answer={12}
        unit="EXP"
      />
    </main>
  );
}
