"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OurVision() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imageWrapper = imageWrapperRef.current;
    const visionEl = visionRef.current;
    const buttonEl = buttonRef.current;
    const overlayEl = overlayRef.current;
    if (!section || !imageWrapper || !visionEl || !buttonEl || !overlayEl)
      return;

    const ctx = gsap.context(() => {
      const sectionH = section.offsetHeight;
      const visionH = visionEl.offsetHeight;
      const topPad = parseFloat(getComputedStyle(section).paddingTop) || 0;
      const bottomPad =
        parseFloat(getComputedStyle(section).paddingBottom) || 0;
      const offsetY = sectionH - visionH - topPad - bottomPad;

      gsap.set(visionEl, { y: offsetY });
      gsap.set(buttonEl, { opacity: 0, scale: 0.7 });
      gsap.set(overlayEl, { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=200%",
          scrub: 0.6,
          pin: true,
        },
      });

      tl.to(
        visionEl,
        { y: 0, duration: 1, ease: "power2.inOut" },
        0
      );

      tl.to(
        imageWrapper,
        {
          width: "100%",
          height: "100%",
          borderRadius: "0px",
          duration: 1,
          ease: "power2.inOut",
        },
        0
      );

      tl.to(
        overlayEl,
        { opacity: 1, duration: 0.6, ease: "none" },
        0.3
      );

      tl.to(
        buttonEl,
        { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" },
        0.65
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-zinc-950 px-6 py-6 md:px-12 md:py-10"
    >
      {/* Typography row — "Our" left, "Vision" right (Vision starts offset to bottom) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start justify-between px-8 pt-6 md:px-12 md:pt-12">
        <span className="tomorrow-font text-[15vw] font-medium leading-[0.85] tracking-tighter text-white">
          Our
        </span>
        <span
          ref={visionRef}
          className="tomorrow-font text-[15vw] font-medium leading-[0.85] tracking-tighter text-white "
        >
          Vision
        </span>
      </div>

      {/* Center image — starts small, grows to fill viewport */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div
          ref={imageWrapperRef}
          className="relative overflow-hidden rounded-2xl"
          style={{ width: "28%", height: "36%" }}
        >
          <video
            src="/videos/vision.mp4"
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />

          {/* Dark overlay for readability when expanded */}
          <div
            ref={overlayRef}
            className="absolute inset-0 bg-black/30"
          />

          {/* Button — fades in last */}
          <div
            ref={buttonRef}
            className="absolute inset-0 z-20 flex items-center justify-center"
          >
            <a
              href="/about-us"
              className="pointer-events-auto bg-white px-8 py-3 text-sm font-semibold tracking-wide text-zinc-900 transition-colors hover:bg-zinc-100 md:px-10 md:py-4 md:text-base"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Explore Our Vision
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
