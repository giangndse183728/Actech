import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HeroAnimationRefs {
  section: HTMLElement;
  heroWrapper: HTMLDivElement;
  overlay: HTMLDivElement;
  text: HTMLDivElement;
  leftCol: HTMLDivElement;
  rightCol: HTMLDivElement;
  centerSlot: HTMLDivElement;
}

export function initHeroAnimation(refs: HeroAnimationRefs) {
  const { section, heroWrapper, overlay, text, leftCol, rightCol, centerSlot } = refs;

  const ctx = gsap.context(() => {
    gsap.set(leftCol, { xPercent: -100, opacity: 0 });
    gsap.set(rightCol, { xPercent: 100, opacity: 0 });

    const shrinkProgress = { value: 0 };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=200%",
        scrub: 1,
        pin: true,
      },
    });

    // Phase 1 (0 → 1): shrink hero image into center slot
    tl.to(text, { opacity: 0, y: 40, duration: 0.4 }, 0)
      .to(overlay, { opacity: 0, duration: 0.5 }, 0)
      .to(shrinkProgress, {
        value: 1,
        duration: 1,
        onUpdate: () => {
          const slot = centerSlot.getBoundingClientRect();
          const sec = section.getBoundingClientRect();
          const p = shrinkProgress.value;

          gsap.set(heroWrapper, {
            top: gsap.utils.interpolate(8, slot.top - sec.top, p),
            left: gsap.utils.interpolate(8, slot.left - sec.left, p),
            width: gsap.utils.interpolate(sec.width - 16, slot.width, p),
            height: gsap.utils.interpolate(sec.height - 16, slot.height, p),
          });
        },
      }, 0);

    // Phase 2 (1 → 1.8): left and right slide in after shrink finishes
    tl.to(leftCol, { xPercent: 0, opacity: 1, duration: 0.8 }, 1)
      .to(rightCol, { xPercent: 0, opacity: 1, duration: 0.8 }, 1);
  }, section);

  return ctx;
}
