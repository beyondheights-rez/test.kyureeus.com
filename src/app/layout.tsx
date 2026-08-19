import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import { sfProDisplay } from "./fonts";
import "./globals.css";

import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kyureeus - A Rezilyens Company",
  description: "Kyureeus website with a premium modern design, interactive bootcamps, and educational programs.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
};

import { MotionProvider } from "@/components/common/motion-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sfProDisplay.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <head />
      <body className="min-h-full flex flex-col bg-[#F5F2EB]">
        <MotionProvider>
          <Header />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
