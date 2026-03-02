"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, MapPin, Phone, Send, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const heroSectionRef = useRef<HTMLElement>(null);
  const parallaxBgRef = useRef<HTMLDivElement>(null);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const section = heroSectionRef.current;
    const bg = parallaxBgRef.current;
    if (!section || !bg) return;

    const ctx = gsap.context(() => {
      gsap.to(bg, {
        yPercent: -25,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="bg-white">
      {/* Hero banner — parallax background */}
      <section
        ref={heroSectionRef}
        className="relative h-[50vh] min-h-[320px] w-full overflow-hidden sm:h-[55vh] md:h-[60vh]"
      >
        <div
          ref={parallaxBgRef}
          className="absolute inset-0 h-[125%] w-full will-change-transform"
        >
          <Image
            src="/images/call.webp"
            alt="Contact ACTECH"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <p className="inter-font mb-2 text-xs tracking-[0.3em] text-white/70 uppercase sm:text-sm">
            Get in touch
          </p>
          <h1 className="tomorrow-font text-4xl font-semibold text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Contact Us
          </h1>
          <div className="mt-4 h-[2px] w-16 bg-white/60 sm:w-24" />
        </div>
      </section>

      {/* Contact body */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-10 md:gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          {/* Left — info */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Let&rsquo;s start a conversation
            </h2>
            <p className="inter-font mt-3 text-sm leading-relaxed text-gray-500 sm:text-base">
              Whether you&rsquo;re planning a new build, a renovation, or simply
              exploring ideas &mdash; we&rsquo;d love to hear from you.
            </p>

            <div className="mt-8 space-y-5 sm:mt-10">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100">
                  <MapPin className="h-5 w-5 text-gray-700" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Office</p>
                  <p className="inter-font mt-0.5 text-sm text-gray-500">
                    62 Ton Quang Phiet, Rach Dua Ward,
                    <br className="hidden sm:block" /> Ho Chi Minh City, Vietnam
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100">
                  <Phone className="h-5 w-5 text-gray-700" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Phone</p>
                  <p className="inter-font mt-0.5 text-sm text-gray-500">
                    0909 725 142
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100">
                  <Mail className="h-5 w-5 text-gray-700" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Email</p>
                  <p className="inter-font mt-0.5 text-sm text-gray-500">
                    actechvn@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative image card */}
            <div className="relative mt-10 hidden aspect-[4/3] w-full overflow-hidden rounded-xl sm:mt-12 lg:block">
              <Image
                src="/images/hero/house-2.jpg"
                alt="ACTECH project"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="inter-font text-sm text-white/80">
                  Explore our portfolio
                </p>
                <Link
                  href="/#projects"
                  className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-white transition-opacity hover:opacity-80"
                >
                  View projects <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="order-1 lg:order-2">
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-gray-50 px-6 py-20 text-center sm:py-28">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white">
                  <Send className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold sm:text-2xl">
                  Message sent!
                </h3>
                <p className="inter-font mt-2 max-w-sm text-sm text-gray-500">
                  Thank you for reaching out. We&rsquo;ll be in touch within 24
                  hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({
                      name: "",
                      email: "",
                      phone: "",
                      projectType: "",
                      message: "",
                    });
                  }}
                  className="mt-6 text-sm font-medium underline underline-offset-4 transition-colors hover:text-gray-600"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-8 md:p-10"
              >
                <h3 className="text-lg font-semibold sm:text-xl">
                  Send us a message
                </h3>
                <p className="inter-font mt-1 text-sm text-gray-500">
                  Fill out the form below and we&rsquo;ll get back to you soon.
                </p>

                <div className="mt-6 space-y-5 sm:mt-8">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-gray-700"
                    >
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="inter-font w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-black"
                    />
                  </div>

                  {/* Email + Phone row */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="inter-font w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-black"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1.5 block text-sm font-medium text-gray-700"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="+84 ..."
                        className="inter-font w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-black"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      className="inter-font w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-black"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-black px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-gray-800 sm:mt-8 sm:w-auto"
                >
                  Send message
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map / CTA strip */}
      <section className="border-t border-gray-800 bg-black">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-12 text-center sm:px-6 sm:py-16 lg:flex-row lg:justify-between lg:px-8 lg:text-left">
          <div>
            <h3 className="text-lg font-semibold text-white sm:text-xl">
              Prefer to visit in person?
            </h3>
            <p className="inter-font mt-1 text-sm text-gray-300">
              Our studio is open Monday &ndash; Saturday, 8 AM &ndash; 6 PM.
            </p>
          </div>
          <a
            href="https://maps.google.com/?q=62+Ton+Quang+Phiet,+Ho+Chi+Minh+City"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-white px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black sm:px-8"
          >
            Open in Google Maps
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
