import Quiz from "./quiz";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4">
      <h1>msquiz</h1>
      <Quiz />
    </main>
  );
}
