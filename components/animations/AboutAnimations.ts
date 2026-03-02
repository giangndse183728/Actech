import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initAboutHeroParallax(
  heroSection: HTMLElement,
  parallaxBg: HTMLDivElement
) {
  const ctx = gsap.context(() => {
    gsap.to(parallaxBg, {
      yPercent: -25,
      ease: "none",
      scrollTrigger: {
        trigger: heroSection,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, heroSection);

  return ctx;
}

export function initAboutCombinedSection(
  section: HTMLElement,
  storyVideo: HTMLDivElement,
  storyText: HTMLDivElement,
  visionOverlay: HTMLDivElement,
  missionText: HTMLDivElement,
  visionText: HTMLDivElement
) {
  const ctx = gsap.context(() => {
    gsap.set(visionOverlay, { opacity: 0 });
    gsap.set(missionText, { opacity: 0, x: -80 });
    gsap.set(visionText, { opacity: 0, x: 80 });

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
      storyVideo,
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
      visionOverlay,
      { opacity: 1, duration: 0.2, ease: "none" },
      0.35
    );

    tl.to(
      missionText,
      { opacity: 1, x: 0, duration: 0.25, ease: "power2.out" },
      0.55
    );
    tl.to(
      visionText,
      { opacity: 1, x: 0, duration: 0.25, ease: "power2.out" },
      0.6
    );
  }, section);

  return ctx;
}

export function initAboutValuesSection(
  section: HTMLElement,
  cards: HTMLDivElement[]
) {
  const ctx = gsap.context(() => {
    cards.forEach((card) => {
      gsap.set(card, { opacity: 0, y: 80, rotateX: 15 });
    });

    ScrollTrigger.batch(cards, {
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

  return ctx;
}

export function initAboutTimelineSection(
  section: HTMLElement,
  track: HTMLDivElement
) {
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

    const cards = track.querySelectorAll<HTMLDivElement>(".milestone-card");
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

  return ctx;
}

export function initAboutPhilosophySection(
  section: HTMLElement,
  imageWrapper: HTMLDivElement,
  overlay: HTMLDivElement,
  text: HTMLDivElement
) {
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

    tl.to(imageWrapper, { scale: 1.08, duration: 1, ease: "none" }, 0);
    tl.to(overlay, { opacity: 1, duration: 0.6 }, 0.2);
    tl.to(
      text,
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      0.4
    );
  }, section);

  return ctx;
}

