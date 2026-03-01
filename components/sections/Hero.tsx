"use client";

import FadeUp from "@/components/animations/FadeUp";
import { initHeroAnimation } from "@/components/animations/HeroAnimation";
import { heroGridImages } from "@/data/data";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const heroWrapperRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const centerSlotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heroWrapper = heroWrapperRef.current;
    const overlay = overlayRef.current;
    const text = textRef.current;
    const leftCol = leftColRef.current;
    const rightCol = rightColRef.current;
    const centerSlot = centerSlotRef.current;

    if (!section || !heroWrapper || !overlay || !text || !leftCol || !rightCol || !centerSlot)
      return;

    const ctx = initHeroAnimation({
      section,
      heroWrapper,
      overlay,
      text,
      leftCol,
      rightCol,
      centerSlot,
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden p-2"
    >
      {/* Hero image - starts fullscreen, shrinks into center slot */}
      <div
        ref={heroWrapperRef}
        className="absolute z-10 overflow-hidden rounded-lg"
        style={{ top: 8, left: 8, right: 8, bottom: 8 }}
      >
        <video
          src="/videos/sydney.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover object-center"
        />
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-black/20"
          aria-hidden
        />
        <div
          ref={textRef}
          className="absolute inset-0 flex flex-col justify-end gap-4 p-8"
        >
          <FadeUp duration={1} immediate>
            <div className="flex flex-col items-center">
              <h1 className="hero-font leading-none text-white text-center md:whitespace-nowrap">
                ARCH TECH
              </h1>
              <div className="mt-2 h-[2px] w-full bg-white/80 opacity-60" />
            </div>
          </FadeUp>
          <FadeUp delay={0.3} duration={1} immediate>
            <div className="flex w-full justify-between">
              <p className="hero-tagline text-md font-light tracking-wide text-white opacity-80">
                Smart Architecture
              </p>
              <p className="hero-tagline text-md font-light tracking-wide text-white opacity-80">
                Designing the Future of Space
              </p>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* 3-column grid behind the hero */}
      <div className="flex h-full w-full items-center gap-2">
        {/* Left column - 3 rows: 2 on top, 1 on bottom */}
        <div ref={leftColRef} className="flex w-1/3 flex-col gap-4 self-stretch pl-4">
          <div className="flex flex-[2] flex-col gap-2">
            <div className="relative flex-1 overflow-hidden rounded-lg">
              <Image
                src={heroGridImages.left[0].src}
                alt={heroGridImages.left[0].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[80%] flex-1 overflow-hidden rounded-lg self-end">
              <Image
                src={heroGridImages.left[1].src}
                alt={heroGridImages.left[1].alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1" />
        </div>

        {/* Center column - wrapper with vertical padding, slot inside */}
        <div className="flex w-1/3 shrink-0 items-center justify-center self-stretch py-4">
          <div ref={centerSlotRef} className="h-[90%] w-full" />
        </div>

        {/* Right column - 3 rows: empty top, 2 on bottom */}
        <div ref={rightColRef} className="flex w-1/3 flex-col gap-2 self-stretch pr-4 ">
          <div className="flex-1" />
          <div className="flex flex-[2] flex-col gap-2">
            <div className="relative flex-1 overflow-hidden rounded-lg">
              <Image
                src={heroGridImages.right[0].src}
                alt={heroGridImages.right[0].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[80%] flex-1 overflow-hidden rounded-lg">
              <Image
                src={heroGridImages.right[1].src}
                alt={heroGridImages.right[1].alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
