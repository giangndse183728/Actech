"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const logoTextRef = useRef<HTMLSpanElement>(null);
  const logoImgRef = useRef<HTMLImageElement>(null);
  const desktopLinksRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    const nav = navRef.current;
    const bar = barRef.current;
    const logoText = logoTextRef.current;
    const logoImg = logoImgRef.current;
    const desktopLinks = desktopLinksRef.current;
    const menuBtn = menuBtnRef.current;

    if (!nav || !bar || !logoText || !logoImg || !desktopLinks || !menuBtn)
      return;

    const linkEls = desktopLinks.querySelectorAll("a");

    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "+=100%",
          scrub: true,
        },
      });

      tl.to(
        bar,
        {
          maxWidth: isMobile ? "100%" : "40%",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderColor: "rgba(255, 255, 255, 0.2)",
          borderWidth: 1,
          boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
          backdropFilter: "blur(12px)",
          duration: 4,
        },
        0
      );

      tl.to(logoText, { color: "#000", duration: 1 }, 0);
      tl.to(logoImg, { filter: "invert(1)", duration: 1 }, 0);
      tl.to(linkEls, { color: "#000", duration: 1 }, 0);
      tl.to(menuBtn, { color: "#000", duration: 1 }, 0);
    });

    return () => ctx.revert();
  }, []);

  // Animate mobile menu open/close
  useEffect(() => {
    const menu = mobileMenuRef.current;
    if (!menu) return;

    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(
        menu,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header ref={navRef} className="fixed left-0 right-0 top-0 z-50 p-2 sm:p-4">
        <div
          ref={barRef}
          className="mx-auto flex w-full max-w-full items-center justify-between rounded-full border border-transparent bg-transparent px-3 py-2 sm:px-4 md:px-6"
          style={{ backdropFilter: "blur(0px)" }}
        >
          <Link
            href="/"
            className="flex items-center gap-1 text-xl font-semibold tracking-tight sm:text-2xl"
          >
            <Image
              ref={logoImgRef}
              src="/images/actech-logo-light.png"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 object-contain sm:h-10 sm:w-10"
              style={{ filter: "invert(0)" }}
            />
            <span ref={logoTextRef} className="text-white">
              ACTECH
            </span>
          </Link>

          {/* Desktop links */}
          <div
            ref={desktopLinksRef}
            className="hidden items-center gap-8 md:flex"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-white"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            ref={menuBtnRef}
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition-colors hover:opacity-80 md:hidden"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 z-40 flex flex-col bg-black/95 pt-20 backdrop-blur-sm md:hidden"
        >
          <nav className="flex flex-1 flex-col items-center justify-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={closeMobile}
                className="text-2xl font-medium text-white transition-opacity hover:opacity-70"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
