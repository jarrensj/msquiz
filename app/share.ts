export type QuestionShareResult = {
  id: string;
  question: string;
  answer: string;
  correct: boolean;
  source: string;
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

const scoreCaption = "correct";

export function formatScoreCaption(): string {
  return scoreCaption;
}

export function formatScoreLine(score: number, total: number): string {
  return `${score}/${total} ${scoreCaption}`;
}

export function formatShareText(payload: Omit<SharePayload, "text">): string {
  const lines = [
    `${payload.quizName} · ${payload.quizTitle}`,
    formatScoreLine(payload.score, payload.total),
  ];
  const missed = payload.questions.filter((question) => !question.correct);

  if (missed.length === 0) {
    lines.push("", "Every question correct.");
  } else {
    lines.push("", "Missed");
    missed.forEach((question, index) => {
      if (index > 0) {
        lines.push("");
      }
      lines.push(`❌ ${question.question}`, question.answer);
    });
  }

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
  const score = input.questions.filter((question) => question.correct).length;
  const payload = { ...input, score, total };

  return { ...payload, text: formatShareText(payload) };
}
