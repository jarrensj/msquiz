import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "msquiz",
  description: "msquiz",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="flex min-h-screen flex-col">
        {children}
        <footer className="px-4 py-4 text-center text-sm">
          <p>
            This is a fan-made site and is not affiliated with or endorsed by
            Nexon. MapleStory and all related names, characters, and monsters
            are trademarks or copyrights of Nexon.
          </p>
          {/* TODO: When pages start loading images from maplestory.io, add a
              privacy policy noting that visitors' browsers request them from
              that third-party site. */}
          <p>
            Item icons from{" "}
            <a href="https://maplestory.io/" className="underline">
              maplestory.io
            </a>
            .
          </p>
        </footer>
      </body>
    </html>
  );
}
