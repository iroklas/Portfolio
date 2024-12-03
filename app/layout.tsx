import { Providers } from "./providers";
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from "next";

// These styles apply to every route in the application
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full">
      <body className="h-full bg-body">
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
