import type { Metadata } from "next";
import QuizPage from "../quiz-page";
import { quizzes } from "../quizzes";

export const metadata: Metadata = { title: quizzes["monster-exp"].title };

export default function MonsterExpQuiz() {
  return <QuizPage slug="monster-exp" />;
}
