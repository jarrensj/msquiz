import type { SharePayload } from "./share";

const WIDTH = 720;
const PADDING_X = 48;
const PADDING_Y = 40;
const SCALE = 2;

// Drawn from `payload.text` so the image and the copied text stay the same
// words, without a DOM-screenshot dependency.
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

type DrawLine = {
  text: string;
  font: string;
  color: string;
  align: CanvasTextAlign;
  lineHeight: number;
};

function drawShareCard(payload: SharePayload): Promise<Blob> {
  const stack = fontStack();
  const titleFont = `600 28px ${stack}`;
  const scoreFont = `700 42px ${stack}`;
  const bodyFont = `18px ${stack}`;
  const maxTextWidth = WIDTH - PADDING_X * 2;
  const sourceLines = payload.text.split("\n");

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return Promise.reject(new Error("canvas unavailable"));
  }

  const lines: DrawLine[] = [];
  sourceLines.forEach((text, index) => {
    const isTitle = index === 0;
    const isScore = index === 1;
    const isUrl = text.length > 0 && text === payload.url;
    const font = isTitle ? titleFont : isScore ? scoreFont : bodyFont;
    const align: CanvasTextAlign = isTitle || isScore || isUrl ? "center" : "left";
    const color = isUrl ? "#525252" : "#171717";
    const lineHeight = text.length === 0 ? 14 : isScore ? 52 : isTitle ? 40 : 28;

    if (!text) {
      lines.push({ text: "", font, color, align, lineHeight });
      return;
    }

    ctx.font = font;
    const wrapped = wrapText(ctx, text, maxTextWidth);
    wrapped.forEach((part, partIndex) => {
      lines.push({
        text: part,
        font,
        color,
        align,
        lineHeight: partIndex === 0 ? lineHeight : 26,
      });
    });
  });

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
  ctx.textBaseline = "top";

  let y = PADDING_Y;
  for (const line of lines) {
    if (line.text) {
      ctx.font = line.font;
      ctx.fillStyle = line.color;
      ctx.textAlign = line.align;
      const x = line.align === "center" ? WIDTH / 2 : PADDING_X;
      ctx.fillText(line.text, x, y);
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

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
): string[] {
  const words = text.split(/\s+/).filter((word) => word.length > 0);
  const lines: string[] = [];
  let current = "";

  const pushLongWord = (word: string) => {
    let chunk = "";
    for (const char of word) {
      const next = `${chunk}${char}`;
      if (ctx.measureText(next).width <= maxWidth) {
        chunk = next;
      } else {
        if (chunk) {
          lines.push(chunk);
        }
        chunk = char;
      }
    }
    current = chunk;
  };

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (ctx.measureText(next).width <= maxWidth) {
      current = next;
      continue;
    }
    if (current) {
      lines.push(current);
      current = "";
    }
    if (ctx.measureText(word).width <= maxWidth) {
      current = word;
    } else {
      pushLongWord(word);
    }
  }

  if (current) {
    lines.push(current);
  }
  return lines.length > 0 ? lines : [text];
}
