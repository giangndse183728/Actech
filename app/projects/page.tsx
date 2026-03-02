"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import { projects } from "@/data/data";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsPage() {
    const heroRef = useRef<HTMLElement | null>(null);
    const heroTitleRef = useRef<HTMLHeadingElement | null>(null);
    const heroTextRef = useRef<HTMLDivElement | null>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    // Parallax for hero title and description
    useEffect(() => {
        const hero = heroRef.current;
        if (!hero) return;

        const ctx = gsap.context(() => {
            if (heroTitleRef.current) {
                gsap.fromTo(
                    heroTitleRef.current,
                    { y: 0 },
                    {
                        y: -40,
                        ease: "none",
                        scrollTrigger: {
                            trigger: hero,
                            start: "top top",
                            end: "bottom top",
                            scrub: true,
                        },
                    }
                );
            }

            if (heroTextRef.current) {
                gsap.fromTo(
                    heroTextRef.current,
                    { y: 0 },
                    {
                        y: 40,
                        ease: "none",
                        scrollTrigger: {
                            trigger: hero,
                            start: "top top",
                            end: "bottom top",
                            scrub: true,
                        },
                    }
                );
            }
        }, hero);

        return () => ctx.revert();
    }, []);

    // Reveal animation for project cards
    useEffect(() => {
        const cards = cardsRef.current.filter(
            (c): c is HTMLDivElement => c !== null
        );
        if (cards.length === 0) return;

        const ctx = gsap.context(() => {
            cards.forEach((card) => {
                gsap.fromTo(
                    card,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.7,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 88%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <main className="bg-white">
            {/* Hero */}
            <section
                ref={heroRef}
                className="border-b border-zinc-800 bg-black"
            >
                <div className="mx-auto flex h-[100vh] max-w-full flex-col gap-10 px-4 py-16 text-white sm:px-6 sm:py-20 md:grid md:min-h-[320px] md:grid-cols-[minmax(0,2.5fr)_minmax(0,1.2fr)] md:pt-24 lg:px-8">
                    <div className="flex items-start">
                        <h1
                            ref={heroTitleRef}
                            className="tomorrow-font text-4xl font-semibold leading-none tracking-tight text-white sm:text-5xl md:text-6xl lg:text-9xl"
                        >
                            Architectural Design Portfolio
                        </h1>
                    </div>
                    <div
                        ref={heroTextRef}
                        className="flex items-end justify-end text-right"
                    >
                        <p className="inter-font max-w-lg text-sm text-white/70 sm:text-base">
                            Explore a curated collection of Actech’s architectural projects, from private residences and modern villas to corporate buildings, renovations, and urban planning developments. Each work reflects our commitment to contextual design, spatial clarity, and long-term sustainability.
                        </p>
                    </div>
                </div>
            </section>

            {/* Project listing */}
            <section className="mx-auto max-w-8zxl px-4 py-16 sm:px-6 sm:py-20 md:py-28 lg:px-8">
                <FadeUp>
                    <div className="mb-12 max-w-2xl md:mb-16">
                        <p className="inter-font mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                            Portfolio
                        </p>
                        <h2 className="tomorrow-font text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
                            Featured Projects
                        </h2>
                    </div>
                </FadeUp>

                <div className="flex flex-col">
                    {projects.map((project, i) => (
                        <div
                            key={project.title}
                            ref={(el) => {
                                cardsRef.current[i] = el;
                            }}
                            className="group relative border-t border-zinc-200 last:border-b"
                            style={{ opacity: 0 }}
                        >
                            <div className="pointer-events-none absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 bg-zinc-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <Link
                                href="#"
                                className="relative z-10 block transition-colors duration-300"
                            >
                                {/* Top row */}
                                <div className="flex items-start justify-between gap-4 py-6 sm:gap-6 md:gap-8 md:py-8">
                                    {/* Thumbnail */}
                                    <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-md sm:h-40 sm:w-40 md:h-48 md:w-48">
                                        <Image
                                            src={project.thumbnail.src}
                                            alt={project.thumbnail.alt}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="tomorrow-font min-w-0  text-lg font-medium tracking-tight text-zinc-900 group-hover:text-white sm:text-xl md:text-2xl lg:text-3xl">
                                        {project.title}
                                    </h3>

                                    {/* Type (desktop) */}
                                    <span className="inter-font hidden flex-shrink-0 text-sm text-zinc-500 group-hover:text-zinc-200 sm:inline md:text-base">
                                        {project.type}
                                    </span>

                                    {/* Arrow desktop */}
                                    <ArrowUpRight className="hidden h-7 w-7 flex-shrink-0 text-zinc-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white sm:block" />

                                    {/* Arrow only on mobile */}
                                    <ArrowUpRight className="h-7 w-7 flex-shrink-0 text-zinc-400 group-hover:text-white sm:hidden" />
                                </div>

                                {/* Meta row */}
                                <div className="grid grid-cols-3 gap-4  py-4 md:py-5">
                                    <div>
                                        <p className="inter-font mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400 group-hover:text-zinc-300 sm:text-xs">
                                            Location
                                        </p>
                                        <p className="inter-font text-sm text-zinc-700 group-hover:text-white sm:text-base">
                                            {project.location}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="inter-font mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400 group-hover:text-zinc-300 sm:text-xs">
                                            Area
                                        </p>
                                        <p className="inter-font text-sm text-zinc-700 group-hover:text-white sm:text-base">
                                            {project.area}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="inter-font mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400 group-hover:text-zinc-300 sm:text-xs">
                                            Completed
                                        </p>
                                        <p className="inter-font text-sm text-zinc-700 group-hover:text-white sm:text-base">
                                            {project.dateCompleted}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
