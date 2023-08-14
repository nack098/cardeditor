import "./globals.css";
import type { Metadata } from "next";
import { Itim } from "next/font/google";
import localFont from "next/font/local";

const itim = Itim({ weight: "400", subsets: ["latin"] });
const comicSans = localFont({
  src: "../../public/ComicSansMS3.ttf",
});

export const metadata: Metadata = {
  title: "BrilliantCardGenerator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={comicSans.className}>{children}</body>
    </html>
  );
}
