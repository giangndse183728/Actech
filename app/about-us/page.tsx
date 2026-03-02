"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    number: "01",
    title: "Craftsmanship",
    description:
      "Every detail matters. We pursue perfection in materials, joints, and finishes — because great spaces are built on precision.",
  },
  {
    number: "02",
    title: "Context",
    description:
      "Design begins with listening — to the site, the climate, and the people who will inhabit the space every day.",
  },
  {
    number: "03",
    title: "Sustainability",
    description:
      "We design for the long term, choosing materials and systems that respect the environment and stand the test of time.",
  },
  {
    number: "04",
    title: "Collaboration",
    description:
      "Architecture is a dialogue. We work closely with clients, engineers, and artisans to bring shared visions to life.",
  },
];

const milestones = [
  { year: "2010", title: "Founded", description: "ACTECH was established in Ho Chi Minh City with a small team of passionate architects." },
  { year: "2013", title: "First Major Project", description: "Completed our first large-scale residential project, setting the standard for our design philosophy." },
  { year: "2016", title: "Studio Expansion", description: "Expanded our studio and team, adding interior design and urban planning capabilities." },
  { year: "2019", title: "200+ Projects", description: "Reached a milestone of over 200 completed projects across Vietnam and Southeast Asia." },
  { year: "2022", title: "Award Recognition", description: "Recognized with multiple design awards for innovation in residential and commercial architecture." },
  { year: "2025", title: "New Horizons", description: "Expanding into sustainable design consulting and smart building integration." },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null);
  const parallaxBgRef = useRef<HTMLDivElement>(null);

  const combinedRef = useRef<HTMLElement>(null);
  const storyVideoRef = useRef<HTMLDivElement>(null);
  const storyTextRef = useRef<HTMLDivElement>(null);
  const visionOverlayRef = useRef<HTMLDivElement>(null);
  const missionTextRef = useRef<HTMLDivElement>(null);
  const visionTextRef = useRef<HTMLDivElement>(null);

  const valuesRef = useRef<HTMLElement>(null);
  const valueCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<HTMLElement>(null);
  const timelineTrackRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLElement>(null);
  const philosophyImageRef = useRef<HTMLDivElement>(null);
  const philosophyOverlayRef = useRef<HTMLDivElement>(null);
  const philosophyTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const bg = parallaxBgRef.current;
    if (!hero || !bg) return;

    const ctx = gsap.context(() => {
      gsap.to(bg, {
        yPercent: -25,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, hero);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const section = combinedRef.current;
    const video = storyVideoRef.current;
    const storyText = storyTextRef.current;
    const overlay = visionOverlayRef.current;
    const mission = missionTextRef.current;
    const vision = visionTextRef.current;
    if (!section || !video || !storyText || !overlay || !mission || !vision)
      return;

    const ctx = gsap.context(() => {
      gsap.set(overlay, { opacity: 0 });
      gsap.set(mission, { opacity: 0, x: -80 });
      gsap.set(vision, { opacity: 0, x: 80 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=300%",
          scrub: 0.6,
          pin: true,
        },
      });


      tl.to(
        storyText,
        { opacity: 0, y: -60, duration: 0.35, ease: "power2.in" },
        0
      );

      tl.to(
        video,
        {
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",
          borderRadius: "0px",
          duration: 0.45,
          ease: "power2.inOut",
        },
        0.1
      );

      tl.to(
        overlay,
        { opacity: 1, duration: 0.2, ease: "none" },
        0.35
      );

      tl.to(
        mission,
        { opacity: 1, x: 0, duration: 0.25, ease: "power2.out" },
        0.55
      );
      tl.to(
        vision,
        { opacity: 1, x: 0, duration: 0.25, ease: "power2.out" },
        0.6
      );
    }, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const section = valuesRef.current;
    const cards = valueCardsRef.current.filter(Boolean);
    if (!section || cards.length === 0) return;

    const ctx = gsap.context(() => {
      cards.forEach((card) => {
        gsap.set(card!, { opacity: 0, y: 80, rotateX: 15 });
      });

      ScrollTrigger.batch(cards as HTMLDivElement[], {
        start: "top 85%",
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
          });
        },
        once: true,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const section = timelineRef.current;
    const track = timelineTrackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const totalScroll = track.scrollWidth - section.offsetWidth;

      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalScroll}`,
          scrub: 0.5,
          pin: true,
        },
      });

      const cards = track.querySelectorAll(".milestone-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              containerAnimation: gsap.getById("timelineScroll") || undefined,
              start: "left 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const section = philosophyRef.current;
    const image = philosophyImageRef.current;
    const overlay = philosophyOverlayRef.current;
    const text = philosophyTextRef.current;
    if (!section || !image || !overlay || !text) return;

    const ctx = gsap.context(() => {
      gsap.set(overlay, { opacity: 0 });
      gsap.set(text, { opacity: 0, y: 40 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "top 10%",
          scrub: 0.4,
        },
      });

      tl.to(image, { scale: 1.08, duration: 1, ease: "none" }, 0);
      tl.to(overlay, { opacity: 1, duration: 0.6 }, 0.2);
      tl.to(
        text,
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        0.4
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-white">
      <section
        ref={heroRef}
        className="relative h-[55vh] min-h-[340px] w-full overflow-hidden sm:h-[60vh] md:h-[65vh]"
      >
        <div
          ref={parallaxBgRef}
          className="absolute inset-0 h-[130%] w-full will-change-transform"
        >
          <Image
            src="/images/about.jpg"
            alt="ACTECH studio"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <p className="inter-font mb-3 text-xs tracking-[0.3em] text-white/70 uppercase sm:text-sm">
            Who we are
          </p>
          <h1 className="tomorrow-font text-4xl font-semibold text-white sm:text-5xl md:text-6xl lg:text-7xl">
            About ACTECH
          </h1>
          <div className="mt-4 h-[2px] w-16 bg-white/60 sm:w-24" />
        </div>
      </section>

      <section
        ref={combinedRef}
        className="relative h-screen w-full overflow-hidden bg-zinc-950"
      >
        <div
          ref={storyVideoRef}
          className="absolute z-0 overflow-hidden will-change-transform"
          style={{
            top: "8%",
            right: "3%",
            width: "46%",
            height: "84%",
            borderRadius: "16px",
          }}
        >
          <video
            src="/videos/vision2.mp4"
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
          <div
            ref={visionOverlayRef}
            className="absolute inset-0 bg-black/50"
          />
        </div>

        <div
          ref={storyTextRef}
          className="relative z-10 flex h-full items-center"
        >
          <div className="w-full max-w-[50%] px-8 py-16 md:px-12 lg:px-16">
            <p className="inter-font mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Our Story
            </p>
            <h2 className="tomorrow-font text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
              Designing spaces
              <br />
              <span className="text-zinc-500">that inspire life</span>
            </h2>
            <p className="inter-font mt-6 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg">
              Founded in Ho Chi Minh City, ACTECH is an architecture and interior
              design studio driven by the belief that great spaces shape how people
              feel, think, and connect. We blend Vietnamese cultural sensitivity
              with contemporary design thinking to create environments that are
              both timeless and deeply personal.
            </p>
            <p className="inter-font mt-4 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg">
              From intimate residential interiors to large-scale commercial
              projects, our multidisciplinary team brings rigour, creativity, and
              an unwavering attention to craft to every brief we take on.
            </p>
            <div className="mt-8 flex items-center gap-8">
              <div>
                <span className="tomorrow-font text-4xl font-bold tracking-tight text-white md:text-5xl">
                  15+
                </span>
                <p className="inter-font mt-1 text-sm text-zinc-500">
                  Years of experience
                </p>
              </div>
              <div className="h-12 w-px bg-zinc-700" />
              <div>
                <span className="tomorrow-font text-4xl font-bold tracking-tight text-white md:text-5xl">
                  200+
                </span>
                <p className="inter-font mt-1 text-sm text-zinc-500">
                  Projects delivered
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6">
          <div className="flex w-full max-w-6xl flex-col gap-10 md:flex-row md:gap-16">
            <div ref={missionTextRef} className="flex-1 text-center md:text-left">
              <p className="inter-font mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                Our Mission
              </p>
              <h3 className="tomorrow-font text-2xl font-semibold text-white sm:text-4xl md:text-6xl">
                Building with
                <br />purpose
              </h3>
              <p className="inter-font mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                To deliver architecture and interior design of the highest
                calibre — spaces that elevate everyday life, honour cultural
                heritage, and push the boundaries of what thoughtful design can
                achieve.
              </p>
            </div>

            <div className="hidden h-auto w-px bg-white/20 md:block" />

            <div ref={visionTextRef} className="flex-1 text-center md:text-right">
              <p className="inter-font mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                Our Vision
              </p>
              <h3 className="tomorrow-font text-2xl font-semibold text-white sm:text-4xl md:text-6xl">
                Shaping the
                <br />future
              </h3>
              <p className="inter-font mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                To be a leading force in Southeast Asian architecture —
                recognised for design excellence, sustainable practice, and a
                human-centred approach that transforms communities and
                landscapes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={valuesRef}
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:py-28 lg:px-8"
        style={{ perspective: "800px" }}
      >
        <FadeUp>
          <div className="mb-12 max-w-2xl md:mb-16">
            <p className="inter-font mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
              What drives us
            </p>
            <h2 className="tomorrow-font text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
              Core Values
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {values.map((v, i) => (
            <div
              key={v.number}
              ref={(el) => { valueCardsRef.current[i] = el; }}
              className="group rounded-xl border border-zinc-100 bg-zinc-50 p-6 transition-colors hover:border-zinc-200 hover:bg-white sm:p-8"
            >
              <span className="tomorrow-font text-5xl font-bold text-zinc-200 transition-colors group-hover:text-zinc-300 md:text-6xl">
                {v.number}
              </span>
              <h3 className="tomorrow-font mt-4 text-xl font-semibold text-zinc-900 sm:text-2xl">
                {v.title}
              </h3>
              <p className="inter-font mt-3 text-sm leading-relaxed text-zinc-500 sm:text-base">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        ref={timelineRef}
        className="relative h-screen w-full overflow-hidden bg-zinc-950"
      >
        <div className="absolute left-6 top-8 z-10 sm:left-10 md:left-16 md:top-12">
          <p className="inter-font mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
            Our Journey
          </p>
          <h2 className="tomorrow-font text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
            Milestones
          </h2>
        </div>

        <div className="absolute bottom-0 left-0 top-0 flex items-center">
          <div
            ref={timelineTrackRef}
            className="flex items-center gap-8 pl-6 pr-[50vw] sm:gap-12 sm:pl-10 md:gap-16 md:pl-16"
            style={{ paddingTop: "8rem" }}
          >
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className="milestone-card relative flex h-[320px] w-[280px] flex-shrink-0 flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:h-[360px] sm:w-[320px] sm:p-8"
              >
                <div>
                  <span className="tomorrow-font text-5xl font-bold text-white/20 sm:text-6xl">
                    {m.year}
                  </span>
                  <h3 className="tomorrow-font mt-3 text-xl font-semibold text-white sm:text-2xl">
                    {m.title}
                  </h3>
                  <p className="inter-font mt-3 text-sm leading-relaxed text-white/60">
                    {m.description}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-white/40" />
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="inter-font text-xs text-white/30">
                    {String(i + 1).padStart(2, "0")} / {String(milestones.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent" />
      </section>

      <section
        ref={philosophyRef}
        className="relative h-[70vh] w-full overflow-hidden sm:h-[80vh]"
      >
        <div
          ref={philosophyImageRef}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src="/images/about3.png"
            alt="ACTECH philosophy"
            fill
            className="object-cover"
          />
        </div>
        <div
          ref={philosophyOverlayRef}
          className="absolute inset-0 bg-black/50"
        />
        <div
          ref={philosophyTextRef}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center"
        >
          <h2 className="tomorrow-font max-w-3xl text-3xl font-semibold text-white sm:text-4xl md:text-5xl lg:text-6xl">
            We don&rsquo;t just design buildings.
            <br />
            <span className="text-white/60">We design how people feel.</span>
          </h2>
          <p className="inter-font mt-6 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
            Our approach starts with understanding — the site, the people, and the
            story that wants to be told. Every project is a conversation between
            ambition and craft.
          </p>
        </div>
      </section>
    </main>
  );
}
