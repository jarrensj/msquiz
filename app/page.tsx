import Quiz from "./quiz";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-xl flex-1 flex-col gap-4 px-4 py-8">
      <h1 className="text-center text-2xl font-semibold">msquiz</h1>
      <Quiz />
    </main>
  );
}
