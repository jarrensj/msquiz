export async function copyText(text: string): Promise<void> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }
  } catch {
    // Fall through to the legacy selection copy below.
  }

  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.top = "0";
  area.style.left = "0";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.focus();
  area.select();
  const copied = document.execCommand("copy");
  area.remove();

  if (!copied) {
    throw new Error("copy failed");
  }
}

function canWritePng(): boolean {
  if (typeof ClipboardItem === "undefined" || !navigator.clipboard?.write) {
    return false;
  }

  if (typeof ClipboardItem.supports !== "function") {
    return true;
  }

  try {
    return ClipboardItem.supports("image/png");
  } catch {
    return false;
  }
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// Copies a PNG when the browser allows image clipboard writes. Otherwise
// downloads the file. The blob promise is handed to ClipboardItem directly so
// the write stays inside the click gesture (required by some browsers).
export async function copyPngOrDownload(
  render: () => Promise<Blob>,
  filename: string,
): Promise<"copied" | "downloaded"> {
  if (canWritePng()) {
    const rendering = render();
    try {
      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": rendering }),
      ]);
      return "copied";
    } catch (clipboardError) {
      try {
        const blob = await rendering;
        downloadBlob(blob, filename);
        return "downloaded";
      } catch {
        throw clipboardError;
      }
    }
  }

  const blob = await render();
  downloadBlob(blob, filename);
  return "downloaded";
}
