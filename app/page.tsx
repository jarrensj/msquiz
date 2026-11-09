import Link from "next/link";
import { quizzes } from "./quizzes";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-4">
      <h1>msquiz</h1>
      <ul className="flex flex-col items-center gap-4 text-center">
        {Object.entries(quizzes).map(
          ([slug, { title, description, questions }]) => (
            <li key={slug}>
              <Link href={`/${slug}`} className="underline">
                {title}
              </Link>
              <p className="text-sm opacity-70">
                {description} {questions.length} questions.
              </p>
            </li>
          ),
        )}
      </ul>
    </main>
  );
}
