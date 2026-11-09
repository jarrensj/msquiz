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
  {
    question: "How much does a Yellow Thief Hood sell back to an NPC for?",
    answer: 900,
    unit: "mesos",
    options: [500, 700, 800, 900, 1200],
  },
  {
    question: "How much do Work Gloves sell back to an NPC for?",
    answer: 1200,
    unit: "mesos",
    options: [1000, 1200, 1500, 1800, 2400],
  },
  {
    question: "How much does a Tree Branch sell back to an NPC for?",
    answer: 5,
    unit: "mesos",
    options: [2, 5, 8, 10, 15],
  },
  {
    question: "How much does a Green Mushroom Cap sell back to an NPC for?",
    answer: 14,
    unit: "mesos",
    options: [6, 8, 10, 14, 18],
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
