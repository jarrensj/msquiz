export type QuizQuestion = {
  id: string;
  label: string;
  question: string;
  answer: number;
  unit: string;
  options: readonly number[];
};

export const quizName = "msquiz";
export const quizTitle = "Monster EXP";

// Add new questions here. The quiz and the share card both read this list.
export const quizQuestions: readonly QuizQuestion[] = [
  {
    id: "green-slime",
    label: "Green Slime",
    question: "How much EXP does a Green Slime give?",
    answer: 12,
    unit: "EXP",
    options: [8, 10, 12, 14, 15],
  },
  {
    id: "zombie-mushroom",
    label: "Zombie Mushroom",
    question: "How much EXP does a Zombie Mushroom give?",
    answer: 45,
    unit: "EXP",
    options: [35, 40, 41, 45, 50],
  },
];
