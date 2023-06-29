import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-PT"
      className="  h-screen   font-sans text-black dark:text-white"
    >
      <body className={"min-h-screen "}>{children}</body>
    </html>
  );
}
