"use client";

import { useEffect } from "react";

export function ViewportLogger() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      const logViewport = () => {
        const cssWidth = window.innerWidth;
        const cssHeight = window.innerHeight;
        const dpr = window.devicePixelRatio || 1;
        const physicalWidth = Math.round(cssWidth * dpr);
        const physicalHeight = Math.round(cssHeight * dpr);
        console.log(
          `%c[Kyureeus Viewport]%c CSS: ${cssWidth}x${cssHeight}px | DPR: ${dpr} (${Math.round(dpr * 100)}% scale) | Physical: ${physicalWidth}x${physicalHeight}px`,
          "color: #CF5A30; font-weight: bold;",
          "color: #121212;"
        );
      };

      logViewport();
      window.addEventListener("resize", logViewport);
      return () => window.removeEventListener("resize", logViewport);
    }
  }, []);

  return null;
}
