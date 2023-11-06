import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Messenger 2.2.0",
  description: "Chat App Real Time Messenger 2.2.0",
};

dynamic(() => require("bootstrap/dist/js/bootstrap.min.js"), { ssr: false });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-dark-mode">{children}</body>
    </html>
  );
}
