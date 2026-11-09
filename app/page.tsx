import Quiz from "./quiz";

const questions = [
  {
    question: "How much EXP does a Green Slime give?",
    answer: 12,
    unit: "EXP",
    options: [8, 10, 12, 14, 15],
  },
  {
    question: "How much EXP does a Zombie Mushroom give?",
    answer: 45,
    unit: "EXP",
    options: [35, 40, 41, 45, 50],
  },
  {
    question: "How much EXP does a Dark Axe Stump give?",
    answer: 43,
    unit: "EXP",
    options: [39, 43, 46, 50, 54],
  },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4">
      <h1>msquiz</h1>
      <Quiz questions={questions} />
    </main>
  );
}
