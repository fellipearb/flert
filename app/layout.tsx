import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nunito } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const myriad = Nunito({
  variable: "--font-myriad",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Flert - Conexões reais no mesmo lugar",
  description: "Flert conecta pessoas que estão no mesmo lugar e se interessaram mutuamente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${myriad.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-myriad">{children}</body>
    </html>
  );
}
