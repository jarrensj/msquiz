"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { copyPngOrDownload, copyText } from "./clipboard";
import { renderShareCardPng } from "./share-image";
import {
  buildSharePayload,
  formatQuestionLine,
  formatScoreCaption,
  type QuestionShareResult,
} from "./share";

type Notice =
  | { kind: "copied" }
  | { kind: "downloaded" }
  | { kind: "text-failed" }
  | { kind: "image-failed" };

function subscribeToSiteUrl() {
  return () => {};
}

function getSiteUrl() {
  return `${window.location.origin}/`;
}

function getServerSiteUrl() {
  return "";
}

function useSiteUrl() {
  return useSyncExternalStore(subscribeToSiteUrl, getSiteUrl, getServerSiteUrl);
}

function noticeMessage(notice: Notice | null): string {
  switch (notice?.kind) {
    case "copied":
      return "Copied!";
    case "downloaded":
      return "Couldn't copy the image, so it was downloaded instead.";
    case "text-failed":
      return "Couldn't copy. Select the results below and copy them manually.";
    case "image-failed":
      return "Couldn't copy the image.";
    default:
      return "";
  }
}

export default function ShareCard({
  quizName,
  quizTitle,
  questions,
}: {
  quizName: string;
  quizTitle: string;
  questions: readonly QuestionShareResult[];
}) {
  const url = useSiteUrl();
  const payload = buildSharePayload({ quizName, quizTitle, questions, url });
  const [notice, setNotice] = useState<Notice | null>(null);
  const [busy, setBusy] = useState(false);
  const message = noticeMessage(notice);

  useEffect(() => {
    if (notice?.kind !== "copied" && notice?.kind !== "downloaded") {
      return;
    }

    const timeout = window.setTimeout(() => setNotice(null), 2500);
    return () => window.clearTimeout(timeout);
  }, [notice]);

  async function onCopyText() {
    if (busy) {
      return;
    }

    setBusy(true);
    try {
      await copyText(payload.text);
      setNotice({ kind: "copied" });
    } catch {
      setNotice({ kind: "text-failed" });
    } finally {
      setBusy(false);
    }
  }

  async function onCopyImage() {
    if (busy) {
      return;
    }

    setBusy(true);
    try {
      const outcome = await copyPngOrDownload(
        () => renderShareCardPng(payload),
        "msquiz-results.png",
      );
      setNotice({ kind: outcome === "copied" ? "copied" : "downloaded" });
    } catch {
      setNotice({ kind: "image-failed" });
    } finally {
      setBusy(false);
    }
  }

  return (
    <section
      aria-label="Quiz results"
      className="flex flex-col items-center gap-2 border px-4 py-3 text-center"
    >
      <h2 className="text-lg">{payload.quizName}</h2>
      <p>{payload.quizTitle}</p>
      <p>
        <span className="block text-2xl">
          {payload.score}/{payload.total}
        </span>
        {formatScoreCaption()}
      </p>
      <ul className="flex list-none flex-col gap-1 p-0">
        {payload.questions.map((question) => (
          <li key={question.id}>{formatQuestionLine(question)}</li>
        ))}
      </ul>
      {payload.url ? (
        <a href={payload.url} className="max-w-sm break-all underline">
          {payload.url}
        </a>
      ) : null}
      <div className="flex flex-wrap justify-center gap-2">
        <button
          type="button"
          className="border px-2"
          onClick={onCopyText}
          disabled={busy}
        >
          Copy results
        </button>
        <button
          type="button"
          className="border px-2"
          onClick={onCopyImage}
          disabled={busy}
        >
          Copy image
        </button>
      </div>
      <p aria-live="polite" className={message ? undefined : "sr-only"}>
        {message}
      </p>
      {notice?.kind === "text-failed" ? (
        <textarea
          readOnly
          value={payload.text}
          rows={Math.min(payload.text.split("\n").length, 12)}
          className="w-full max-w-sm border p-2 text-left"
          aria-label="Results you can copy manually"
        />
      ) : null}
    </section>
  );
}
