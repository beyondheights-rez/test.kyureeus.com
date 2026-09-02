import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import { sfProDisplay, outfit } from "./fonts";
import "./globals.css";

import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { MotionProvider } from "@/components/common/motion-provider";
import { ViewportLogger } from "@/components/common/viewport-logger";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Kyureeus - A Rezilyens Company",
  description: "Kyureeus website with a premium modern design, interactive bootcamps, and educational programs.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sfProDisplay.variable} ${bebasNeue.variable} ${outfit.variable} h-full antialiased`}
    >
      <head />
      <body className="min-h-full flex flex-col bg-[#F5F2EB]">
        <ViewportLogger />
        <MotionProvider>
          <Header />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
