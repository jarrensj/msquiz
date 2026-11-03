export type QuestionShareResult = {
  id: string;
  label: string;
  answer: number;
  unit: string;
  correctOnFirstTry: boolean;
};

export type SharePayloadInput = {
  quizName: string;
  quizTitle: string;
  questions: readonly QuestionShareResult[];
  url: string;
};

export type SharePayload = SharePayloadInput & {
  score: number;
  total: number;
  text: string;
};

const scoreCaption = "correct on the first try";

export function formatScoreCaption(): string {
  return scoreCaption;
}

export function formatScoreLine(score: number, total: number): string {
  return `${score}/${total} ${scoreCaption}`;
}

export function formatQuestionLine(question: QuestionShareResult): string {
  const mark = question.correctOnFirstTry ? "✅" : "🔁";
  const note = question.correctOnFirstTry ? "first try" : "retry";
  return `${mark} ${question.label} — ${question.answer} ${question.unit} (${note})`;
}

export function formatShareText(
  payload: Omit<SharePayload, "text">,
): string {
  const lines = [
    `${payload.quizName} · ${payload.quizTitle}`,
    formatScoreLine(payload.score, payload.total),
    "",
    ...payload.questions.map(formatQuestionLine),
  ];

  if (payload.url) {
    lines.push("", payload.url);
  }

  return lines.join("\n");
}

// TODO: Add click-to-share actions (X and others) that post `payload.text`
// and `payload.url` from buildSharePayload(). Keep the wording in this
// module so those buttons don't assemble their own copy.
export function buildSharePayload(input: SharePayloadInput): SharePayload {
  const total = input.questions.length;
  const score = input.questions.filter(
    (question) => question.correctOnFirstTry,
  ).length;
  const payload = { ...input, score, total };

  return { ...payload, text: formatShareText(payload) };
}
