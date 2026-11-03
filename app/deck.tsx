import type { ReactNode, RefObject } from "react";

export default function Deck({
  currentRef,
  motionClass,
  leavingClass,
  leaving,
  children,
}: {
  currentRef: RefObject<HTMLDivElement | null>;
  motionClass: string;
  leavingClass: string;
  leaving: ReactNode | null;
  children: ReactNode;
}) {
  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="absolute top-2 right-0 bottom-[-0.5rem] left-2 border bg-background"
      />
      <div
        aria-hidden
        className="absolute top-1 right-1 bottom-[-0.25rem] left-1 border bg-background"
      />
      <div className="relative w-[calc(100%-0.5rem)]">
        {leaving ? (
          <div
            inert
            aria-hidden
            className={`pointer-events-none absolute inset-0 z-20 ${leavingClass}`}
          >
            {leaving}
          </div>
        ) : null}
        <div ref={currentRef} className={`relative z-10 ${motionClass}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
