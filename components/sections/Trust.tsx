"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import FadeUp from "@/components/animations/FadeUp";

const stats = [
  { value: "200+", label: "Projects Completed" },
  { value: "50+", label: "Awards Won" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
];

const logos = [
  "ArchDaily",
  "Dezeen",
  "Archinect",
  "DesignBoom",
  "Wallpaper",
  "Dwell",
  "Azure",
  "Monocle",
];

export default function Trust() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const inner = slider.querySelector(".slider-track") as HTMLElement;
    if (!inner) return;

    const totalWidth = inner.scrollWidth / 2;

    const ctx = gsap.context(() => {
      gsap.to(inner, {
        x: -totalWidth,
        duration: 20,
        ease: "none",
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className=" flex flex-col items-center gap-16 px-6 py-24">
      {/* Slogan */}
      <FadeUp>
        <div className="max-w-5xl text-center">
          <h2
            className="tomorrow-font text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl"
          >
            Building Trust Through Design
          </h2>
          <p className="inter-font mt-4 text-lg leading-relaxed text-zinc-500">
            We craft spaces that inspire confidence — blending innovation,
            precision, and a deep respect for the environment. From first sketch
            to final detailing, every project is guided by clear communication,
            rigorous craft, and a long-term vision of how people will live,
            work, and gather inside the spaces we create.
          </p>
        </div>
      </FadeUp>

      {/* Statistics */}
      <FadeUp delay={0.2}>
        <div className="grid w-full max-w-6xl grid-cols-2 gap-12 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2">
              <span
                className="text-6xl font-bold tracking-tight text-zinc-900 md:text-7xl"
                style={{ fontFamily: "var(--font-tomorrow)" }}
              >
                {stat.value}
              </span>
              <span
                className="text-md font-medium tracking-wide text-zinc-500"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </FadeUp>

      {/* Logo Slider */}
      <FadeUp delay={0.4}>
        <div
          ref={sliderRef}
          className="w-full max-w-6xl overflow-hidden mt-4"
        >
          <div className="slider-track flex w-max items-center gap-16">
            {[...logos, ...logos].map((logo, i) => (
              <span
                key={`${logo}-${i}`}
                className="whitespace-nowrap text-xl font-semibold tracking-wide text-zinc-300"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
