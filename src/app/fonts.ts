import { Inter, Outfit } from "next/font/google";

// Self-hosted Inter font replacing OS-dependent system fonts
// Kept the CSS variable --font-sf-pro-display so all existing component usages remain fully compatible
export const sfProDisplay = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sf-pro-display",
  display: "swap",
});

export const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

