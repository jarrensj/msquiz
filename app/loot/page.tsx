import type { Metadata } from "next";
import QuizPage from "../quiz-page";
import { quizzes } from "../quizzes";

export const metadata: Metadata = { title: quizzes.loot.title };

export default function LootQuiz() {
  return <QuizPage slug="loot" />;
}
