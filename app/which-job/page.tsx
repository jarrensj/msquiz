import JobQuiz from "./job-quiz";

export default function WhichJob() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-4">
      <h1>Which job?</h1>
      <p className="text-center">
        This quiz is for the classes and jobs currently available in MapleStory
        Classic.
      </p>
      <JobQuiz />
    </main>
  );
}
