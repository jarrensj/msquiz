import type { Metadata } from "next";
import QuizPage from "../quiz-page";
import { quizzes } from "../quizzes";

export const metadata: Metadata = { title: quizzes.general.title };

export default function GeneralQuiz() {
  return <QuizPage slug="general" />;
}
