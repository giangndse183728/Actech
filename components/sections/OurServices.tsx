"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { services } from "@/data/data";

gsap.registerPlugin(ScrollTrigger);

export default function OurServices() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const menuRefs = useRef<(HTMLDivElement | null)[]>([]);
  const projectNameRef = useRef<HTMLHeadingElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMenuClick = (index: number) => {
    setActiveIndex(index);

    imageRefs.current.forEach((img, i) => {
      if (!img) return;
      gsap.to(img, {
        opacity: i === index ? 1 : 0,
        duration: 0.5,
        overwrite: "auto",
      });
    });
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      imageRefs.current.forEach((img, i) => {
        if (!img) return;
        gsap.set(img, { opacity: i === 0 ? 1 : 0 });
      });

      const stepDuration = 1 / services.length;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${services.length * 100}%`,
          scrub: 0.5,
          pin: true,
        },
      });

      services.forEach((_, i) => {
        if (i === 0) return;

        const start = i * stepDuration;

        tl.to(
          imageRefs.current[i - 1],
          { opacity: 0, duration: stepDuration * 0.5 },
          start
        );
        tl.to(
          imageRefs.current[i],
          { opacity: 1, duration: stepDuration * 0.5 },
          start
        );
      });

      services.forEach((_, i) => {
        const start = i * stepDuration;
        const end = (i + 1) * stepDuration;

        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: `+=${services.length * 100}%`,
          onUpdate: (self) => {
            const progress = self.progress;
            if (progress >= start && progress < end) {
              setActiveIndex(i);
            }
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-white"
    >
      <div className="flex h-full w-full flex-col-reverse gap-8 md:flex-row">
        {/* Left column */}
        <div className="flex w-full flex-col justify-between px-2 py-1 md:w-[30%] md:px-4 md:py-2">
          {/* Project title */}
          <div className="hidden md:block">
            <h2
              ref={projectNameRef}
              className="text-5xl font-medium tomorrow-font leading-[1.1] tracking-tight text-zinc-900 md:text-6xl lg:text-7xl pt-4"
            >
              {services[activeIndex].project.split(" ").map((word, i) => (
                <span key={i} className="block">
                  {word}
                </span>
              ))}
            </h2>
          </div>

          {/* Services menu */}
          <div>
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Our Services
            </p>
            <div className="flex flex-col">
              {services.map((service, i) => (
                <div
                  key={service.title}
                  ref={(el) => {
                    menuRefs.current[i] = el;
                  }}
                  className="border-t border-zinc-200"
                >
                  <button
                    type="button"
                    onClick={() => handleMenuClick(i)}
                    className={`flex w-full items-center justify-between py-4 text-left transition-all duration-500 ${
                      activeIndex === i
                        ? "translate-x-2 text-zinc-900"
                        : "text-zinc-400"
                    }`}
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    <span className="text-base font-semibold tracking-wide md:text-lg">
                      {service.title}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column - image stack with service description overlay */}
        <div className="relative flex w-full items-end p-4 md:w-[70%] md:p-4">
          <div className="relative w-full overflow-hidden rounded-2xl h-[260px] sm:h-[320px] md:h-[80%]">
            {services.map((service, i) => (
              <div
                key={service.title}
                ref={(el) => {
                  imageRefs.current[i] = el;
                }}
                className="absolute inset-0"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            ))}

            {/* Bottom overlay description with blur */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0">
              <div className="flex justify-end ">
                <div className="max-w-md  bg-black/45 px-4 py-4 text-left backdrop-blur-sm ">
                  <p
                    className="text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-300/80 md:text-xs"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {services[activeIndex].title}
                  </p>
                  <p
                    className="mt-1 text-xs leading-relaxed text-zinc-100/95 md:text-sm"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {services[activeIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
