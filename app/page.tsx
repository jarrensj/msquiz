import type { QuestionData } from "./question";
import Quiz from "./quiz";

// TODO: Split these into a quiz per category (General with everything, Loot,
// and Monster EXP), and hide the category label on single-category quizzes.
const questions: QuestionData[] = [
  {
    category: "monster-exp",
    question: "How much EXP does a Green Slime give?",
    answer: 12,
    unit: "EXP",
    options: [8, 10, 12, 14, 15],
  },
  {
    category: "monster-exp",
    question: "How much EXP does a Zombie Mushroom give?",
    answer: 45,
    unit: "EXP",
    options: [35, 40, 41, 45, 50],
  },
  {
    category: "monster-exp",
    question: "How much EXP does a Dark Axe Stump give?",
    answer: 43,
    unit: "EXP",
    options: [39, 43, 46, 50, 54],
  },
  {
    category: "loot",
    question: "How much does a Yellow Thief Hood sell back to an NPC for?",
    answer: 900,
    unit: "mesos",
    options: [500, 700, 800, 900, 1200],
  },
  {
    category: "loot",
    question: "How much do Work Gloves sell back to an NPC for?",
    answer: 1200,
    unit: "mesos",
    options: [800, 900, 1000, 1200, 1500],
  },
  {
    category: "loot",
    question: "How much does a Tree Branch sell back to an NPC for?",
    answer: 5,
    unit: "mesos",
    options: [3, 4, 5, 6, 7],
  },
  {
    category: "loot",
    question: "How much does a Green Mushroom Cap sell back to an NPC for?",
    answer: 14,
    unit: "mesos",
    options: [8, 10, 12, 14, 16],
  },
  {
    category: "loot",
    question: "How much does a Bronze Ore sell back to an NPC for?",
    answer: 20,
    unit: "mesos",
    options: [15, 20, 25, 30, 40],
  },
  {
    category: "loot",
    question: "How much does a Gold Ore sell back to an NPC for?",
    answer: 60,
    unit: "mesos",
    options: [40, 60, 80, 100, 150],
  },
  {
    category: "loot",
    question: "How much does a Sapphire Ore sell back to an NPC for?",
    answer: 120,
    unit: "mesos",
    options: [60, 90, 100, 120, 150],
  },
  {
    category: "loot",
    question: "How much does one Squishy Liquid sell back to an NPC for?",
    answer: 6,
    unit: "mesos",
    options: [3, 4, 6, 8, 10],
  },
  {
    category: "loot",
    question: "How much does a Bronze Ingot sell back to an NPC for?",
    answer: 100,
    unit: "mesos",
    options: [50, 80, 100, 150, 200],
  },
  {
    category: "loot",
    question: "How much does a Diamond Ore sell back to an NPC for?",
    answer: 240,
    unit: "mesos",
    options: [120, 180, 200, 240, 300],
  },
  {
    category: "loot",
    question: "How much does a Bronze Koif sell back to an NPC for?",
    answer: 600,
    unit: "mesos",
    options: [400, 450, 500, 600, 700],
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
