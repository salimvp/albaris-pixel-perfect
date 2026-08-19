import React, { useEffect, useRef, useState, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface GalleryItem {
  common: string;
  binomial: string;
  photo: {
    url: string;
    text: string;
    pos?: string;
    by?: string;
  };
}

interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[];
  /** Controls how far the items are from the center. */
  radius?: number;
  /** Degrees per frame of auto-rotation. */
  autoRotateSpeed?: number;
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  ({ items, className, radius = 260, autoRotateSpeed = 0.25, ...props }, ref) => {
    const [rotation, setRotation] = useState(0);
    const frameRef = useRef<number | null>(null);

    useEffect(() => {
      const tick = () => {
        setRotation((prev) => (prev + autoRotateSpeed) % 360);
        frameRef.current = requestAnimationFrame(tick);
      };
      frameRef.current = requestAnimationFrame(tick);
      return () => {
        if (frameRef.current) cancelAnimationFrame(frameRef.current);
      };
    }, [autoRotateSpeed]);

    const anglePerItem = 360 / items.length;

    return (
      <div
        ref={ref}
        className={cn("relative h-full w-full [perspective:1200px]", className)}
        {...props}
      >
        <div
          className="relative h-full w-full [transform-style:preserve-3d]"
          style={{ transform: `rotateY(${rotation}deg)` }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;
            const relativeAngle = (itemAngle + rotation + 360) % 360;
            const normalized = Math.abs(
              relativeAngle > 180 ? 360 - relativeAngle : relativeAngle,
            );
            const opacity = Math.max(0.35, 1 - normalized / 180);
            const scale = 0.75 + 0.25 * (1 - normalized / 180);

            return (
              <div
                key={item.common}
                className="absolute left-1/2 top-1/2 h-[52%] w-[52%] -translate-x-1/2 -translate-y-1/2 [backface-visibility:hidden]"
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px) rotateY(${-itemAngle - rotation}deg) scale(${scale})`,
                  opacity,
                  zIndex: Math.round(1000 - normalized),
                }}
              >
                <img
                  src={item.photo.url}
                  alt={item.photo.text}
                  width={900}
                  height={900}
                  loading="lazy"
                  className="h-full w-full object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.65)]"
                  style={{ objectPosition: item.photo.pos }}
                />
                <div className="mt-1 text-center">
                  <p className="font-condensed text-sm uppercase tracking-wide text-gold-bright md:text-base">
                    {item.common}
                  </p>
                  <p className="font-display text-[11px] italic text-cream/70">
                    {item.binomial}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);

CircularGallery.displayName = "CircularGallery";

export { CircularGallery };
