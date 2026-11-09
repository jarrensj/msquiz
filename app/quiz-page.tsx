import Link from "next/link";
import Quiz from "./quiz";
import { quizzes, type QuizSlug } from "./quizzes";

export default function QuizPage({ slug }: { slug: QuizSlug }) {
  const { title, questions } = quizzes[slug];

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4">
      <Link href="/" className="underline">
        All quizzes
      </Link>
      <h1>{title}</h1>
      <Quiz questions={questions} />
    </main>
  );
}
