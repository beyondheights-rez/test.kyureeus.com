"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils/cn";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export function ImageWithPlaceholder({
  src,
  alt,
  className,
  containerClassName,
  ...props
}: ImageProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      if (imgRef.current.complete) {
        setLoaded(true);
      } else {
        setLoaded(false);
      }
    }
  }, [src]);

  return (
    <div className={cn("relative overflow-hidden w-full h-full flex items-center justify-center", containerClassName)}>
      {/* Premium Shimmer Pulse Placeholder */}
      {!loaded && (
        <div className="absolute inset-0 bg-[#E8E4D9]/80 animate-pulse flex items-center justify-center min-h-[150px] w-full rounded-lg z-10">
          <div className="relative flex items-center justify-center">
            {/* Spinning accent circle to show loading progress */}
            <div className="w-10 h-10 rounded-full border-4 border-[#CF5A30]/20 border-t-[#CF5A30] animate-spin" />
          </div>
        </div>
      )}
      
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={cn(
          "transition-all duration-700 ease-out",
          loaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-98 blur-sm",
          className
        )}
        {...props}
      />
    </div>
  );
}
