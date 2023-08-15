import "./globals.css";
import type { Metadata } from "next";
import { Inter, Itim, Kanit } from "next/font/google";
import localFont from "next/font/local";

const itim = Itim({ weight: "400", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const kanit = Kanit({ weight: "400", subsets: ["latin"] });
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
      <body className={kanit.className}>{children}</body>
    </html>
  );
}
