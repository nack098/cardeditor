import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BrilliantCardGenerator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <html lang="en">{children}</html>;
}
