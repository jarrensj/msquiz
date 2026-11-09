import { questions } from "./questions";

// Each key is also the quiz's URL, e.g. /loot.
export const quizzes = {
  general: {
    title: "General msquiz",
    description: "Every question, from monster EXP to loot.",
    questions,
  },
  loot: {
    title: "Loot msquiz",
    description: "How much items sell back to an NPC for.",
    questions: questions.filter(({ category }) => category === "loot"),
  },
  "monster-exp": {
    title: "Monster EXP msquiz",
    description: "How much EXP monsters give.",
    questions: questions.filter(({ category }) => category === "monster-exp"),
  },
};

export type QuizSlug = keyof typeof quizzes;
