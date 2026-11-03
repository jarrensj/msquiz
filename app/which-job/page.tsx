import JobQuiz from "./job-quiz";

export default function WhichJob() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-4">
      <h1>Which job?</h1>
      <JobQuiz />
    </main>
  );
}
