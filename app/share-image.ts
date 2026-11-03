import {
  formatQuestionLine,
  formatScoreCaption,
  type SharePayload,
} from "./share";

const WIDTH = 720;
const PADDING_X = 48;
const PADDING_Y = 40;
const SCALE = 2;

// Drawn from the share payload so the image matches the copied text without a
// DOM-screenshot dependency.
export function renderShareCardPng(payload: SharePayload): Promise<Blob> {
  const ready = document.fonts?.ready ?? Promise.resolve();
  return ready.then(() => drawShareCard(payload));
}

function fontStack(): string {
  const family = getComputedStyle(document.body).fontFamily;
  return family
    ? `${family}, "Noto Color Emoji"`
    : 'sans-serif, "Noto Color Emoji"';
}

type Line = {
  text: string;
  font: string;
  color: string;
  lineHeight: number;
};

function drawShareCard(payload: SharePayload): Promise<Blob> {
  const stack = fontStack();
  const nameFont = `600 32px ${stack}`;
  const bodyFont = `18px ${stack}`;
  const scoreFont = `700 56px ${stack}`;
  const maxTextWidth = WIDTH - PADDING_X * 2;

  const lines: Line[] = [
    {
      text: payload.quizName,
      font: nameFont,
      color: "#171717",
      lineHeight: 44,
    },
    {
      text: payload.quizTitle,
      font: bodyFont,
      color: "#525252",
      lineHeight: 32,
    },
    { text: "", font: bodyFont, color: "#171717", lineHeight: 20 },
    {
      text: `${payload.score}/${payload.total}`,
      font: scoreFont,
      color: "#171717",
      lineHeight: 64,
    },
    {
      text: formatScoreCaption(),
      font: bodyFont,
      color: "#171717",
      lineHeight: 28,
    },
    { text: "", font: bodyFont, color: "#171717", lineHeight: 16 },
    ...payload.questions.map((question) => ({
      text: formatQuestionLine(question),
      font: bodyFont,
      color: "#171717",
      lineHeight: 32,
    })),
  ];

  if (payload.url) {
    lines.push(
      { text: "", font: bodyFont, color: "#171717", lineHeight: 16 },
      {
        text: payload.url,
        font: bodyFont,
        color: "#525252",
        lineHeight: 28,
      },
    );
  }

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return Promise.reject(new Error("canvas unavailable"));
  }

  const height =
    PADDING_Y * 2 + lines.reduce((sum, line) => sum + line.lineHeight, 0);

  canvas.width = WIDTH * SCALE;
  canvas.height = height * SCALE;
  ctx.scale(SCALE, SCALE);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, WIDTH, height);
  ctx.strokeStyle = "#171717";
  ctx.lineWidth = 2;
  ctx.strokeRect(1, 1, WIDTH - 2, height - 2);
  ctx.textAlign = "center";
  ctx.textBaseline = "top";

  let y = PADDING_Y;
  for (const line of lines) {
    if (line.text) {
      ctx.font = line.font;
      ctx.fillStyle = line.color;
      ctx.fillText(fitText(ctx, line.text, maxTextWidth), WIDTH / 2, y);
    }
    y += line.lineHeight;
  }

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error("empty image"));
        return;
      }
      resolve(blob);
    }, "image/png");
  });
}

function fitText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
): string {
  if (ctx.measureText(text).width <= maxWidth) {
    return text;
  }

  const ellipsis = "…";
  let end = text.length;
  while (
    end > 0 &&
    ctx.measureText(`${text.slice(0, end)}${ellipsis}`).width > maxWidth
  ) {
    end -= 1;
  }

  return `${text.slice(0, end)}${ellipsis}`;
}
