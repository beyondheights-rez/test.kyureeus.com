import localFont from "next/font/local";

// SF Pro Display Font Configuration
export const sfProDisplay = localFont({
  src: [
    // Normal styles
    {
      path: "../../public/fonts/SFPRODISPLAYREGULAR.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/SFPRODISPLAYMEDIUM.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/SFPRODISPLAYBOLD.otf",
      weight: "700",
      style: "normal",
    },
    // Italic styles
    {
      path: "../../public/fonts/SFPRODISPLAYTHINITALIC.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../public/fonts/SFPRODISPLAYULTRALIGHTITALIC.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/SFPRODISPLAYLIGHTITALIC.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/SFPRODISPLAYSEMIBOLDITALIC.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/SFPRODISPLAYHEAVYITALIC.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../public/fonts/SFPRODISPLAYBLACKITALIC.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-sf-pro-display",
  display: "swap",
});
