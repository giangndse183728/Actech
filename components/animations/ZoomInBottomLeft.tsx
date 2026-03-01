"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, type ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger);

interface ZoomInBottomLeftProps {
  children: ReactNode;
  /** Delay before the animation starts (seconds) */
  delay?: number;
  /** Duration of the animation (seconds) */
  duration?: number;
  /** Initial horizontal offset (negative = from left) */
  x?: number;
  /** Initial vertical offset (positive = from bottom) */
  y?: number;
  /** Initial scale before zooming in */
  scaleFrom?: number;
  className?: string;
  /** If true, plays immediately on mount instead of on scroll */
  immediate?: boolean;
}

export default function ZoomInBottomLeft({
  children,
  delay = 0,
  duration = 0.8,
  x = -40,
  y = 40,
  scaleFrom = 0.9,
  className = "",
  immediate = false,
}: ZoomInBottomLeftProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          scale: scaleFrom,
          x,
          y,
          transformOrigin: "left bottom",
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          ...(immediate
            ? {}
            : {
                scrollTrigger: {
                  trigger: el,
                  start: "top 85%",
                  toggleActions: "play none none none",
                },
              }),
        }
      );
    });

    return () => ctx.revert();
  }, [delay, duration, x, y, scaleFrom, immediate]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ opacity: 0, transformOrigin: "left bottom" }}
    >
      {children}
    </div>
  );
}

