"use client";

import FadeUp from "@/components/animations/FadeUp";
import ZoomInBottomLeft from "@/components/animations/ZoomInBottomLeft";
import ProjectCaption from "@/components/ui/ProjectCaption";
import Image from "next/image";
import { projects, highlightStats } from "../../data/data";

export default function HighlightProject() {
  const [InteriorDesign, ResidentialDesign, VietsoMeetingRoom, TraditionalInteriorDesign, VietsoOfficeBuilding] = projects;

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 md:py-16">
      <div className="mx-auto grid w-full max-w-8xl grid-cols-1 gap-8 px-6 md:grid-cols-2 md:gap-12 md:px-8 lg:gap-16 items-center h-[50vh]">
        {/* Left: big typography */}
        <div className="flex flex-col justify-center">
          <FadeUp>
            <p className="tomorrow-font mb-4 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Featured project
            </p>
            <h2 className="tomorrow-font text-5xl font-medium leading-[0.95] tracking-tight text-neutral-900 md:text-6xl lg:text-7xl xl:text-8xl">
              Design that
              <br />
              <span className="text-neutral-400">shapes space</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="inter-font mt-8 max-w-md text-lg font-light leading-relaxed text-neutral-600">
              From concept to completion, we deliver architecture that responds
              to context, light, and how people actually live.
            </p>
          </FadeUp>
          <FadeUp delay={0.25}>
            <a
              href="#"
              className="inter-font mt-10 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-neutral-900 transition-colors hover:text-neutral-600"
            >
              View project
              <span aria-hidden>→</span>
            </a>
          </FadeUp>
        </div>

        {/* Right: image */}
        <div className="relative aspect-[1/1]  w-full h-full overflow-hidden rounded-lg md:aspect-square lg:aspect-square items-center">
          <ZoomInBottomLeft
            delay={0.1}
            className="absolute inset-0 h-full w-full"
          >
            <Image
              src={InteriorDesign.thumbnail.src}
              alt={InteriorDesign.thumbnail.alt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority={false}
            />
          </ZoomInBottomLeft>
        </div>
      </div>

      {/* Two-column project showcase — below featured section */}
      <div className="mx-auto mt-16 grid w-full max-w-8xl grid-cols-1 gap-4 md:mt-24 md:grid-cols-[0.3fr_0.7fr] md:gap-8 md:px-8 lg:gap-8">
        {/* Left */}
        <FadeUp delay={0.1} className="flex flex-col">
          <ZoomInBottomLeft className="relative aspect-[1/1] w-full overflow-hidden rounded-lg">
            <Image
              src={ResidentialDesign.thumbnail.src}
              alt={ResidentialDesign.thumbnail.alt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 30vw, 100vw"
            />
          </ZoomInBottomLeft>
          <ProjectCaption
            type={ResidentialDesign.type}
            title={ResidentialDesign.title}
            dateCompleted={ResidentialDesign.dateCompleted}
          />
        </FadeUp>

        {/* Right */}
        <FadeUp delay={0.15} className="flex flex-col">
          <ZoomInBottomLeft
            delay={0.2}
            className="relative min-h-[320px] w-full overflow-hidden rounded-lg md:min-h-[420px] lg:min-h-[650px]"
          >
            <Image
              src={VietsoMeetingRoom.thumbnail.src}
              alt={VietsoMeetingRoom.thumbnail.alt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 70vw, 100vw"
            />
          </ZoomInBottomLeft>
          <ProjectCaption
            type={VietsoMeetingRoom.type}
            title={VietsoMeetingRoom.title}
            dateCompleted={VietsoMeetingRoom.dateCompleted}
          />
        </FadeUp>
      </div>

      {/* Stats + project image section */}
      <div className="mx-auto py-12 grid w-full max-w-8xl grid-cols-1 gap-6 px-6 md:mt-5 md:grid-cols-2  md:px-8 ">
        <FadeUp delay={0.1} className="flex flex-col">
          <div className="flex flex-wrap items-baseline gap-4">
            <span className="tomorrow-font text-6xl font-medium tracking-tight text-neutral-500 md:text-7xl lg:text-[12rem]">
              {highlightStats.stat}
            </span>
            <p className="inter-font max-w-[14rem] text-base font-light leading-snug text-neutral-500 md:max-w-[12rem] md:text-lg">
              {highlightStats.statDescription}
            </p>
          </div>

          <div className="mt-36 flex flex-col">
            <ZoomInBottomLeft className="relative aspect-[4/3] w-full h-full overflow-hidden rounded-lg">
              <Image
                src={TraditionalInteriorDesign.thumbnail.src}
                alt={TraditionalInteriorDesign.thumbnail.alt}
                fill
                className="object-cover object-center"
                sizes="(min-width: 768px) 70vw, 100vw"
              />
            </ZoomInBottomLeft>
            <ProjectCaption
              type={TraditionalInteriorDesign.type}
              title={TraditionalInteriorDesign.title}
              dateCompleted={TraditionalInteriorDesign.dateCompleted}
            />
          </div>
        </FadeUp>
        <FadeUp delay={0.2} className="flex flex-col">
          <ZoomInBottomLeft className="relative aspect-[4/3] w-full overflow-hidden rounded-lg min-h-[320px] md:min-h-[420px] lg:min-h-[520px]">
            <Image
              src={VietsoOfficeBuilding.thumbnail.src}
              alt={VietsoOfficeBuilding.thumbnail.alt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 70vw, 100vw"
            />
          </ZoomInBottomLeft>
          <ProjectCaption
            type={VietsoOfficeBuilding.type}
            title={VietsoOfficeBuilding.title}
            dateCompleted={VietsoOfficeBuilding.dateCompleted}
          />
        </FadeUp>
      </div>

      {/* Portfolio CTA strip */}
      <div className="mx-auto mt-16 w-full max-w-8xl px-6 md:px-8">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[0.1fr_0.4fr_0.2fr_0.4fr]">
          {/* Thumbnail */}
          <ZoomInBottomLeft delay={0.05}>
            <div className="relative h-24 w-24 overflow-hidden rounded-lg md:h-42 md:w-42">
              <Image
                src="/images/projects/house-1.PNG"
                alt={VietsoOfficeBuilding.thumbnail.alt}
                fill
                className="object-cover"
                sizes="240px"
              />
            </div>
          </ZoomInBottomLeft>

          {/* Main heading */}
          <FadeUp delay={0.1}>
            <h3 className="tomorrow-font text-2xl font-medium leading-snug text-neutral-900 md:text-4xl">
              Our portfolio speaks for itself.
            </h3>
          </FadeUp>

          {/* Supporting copy */}

          <FadeUp delay={0.2}>
            <p className="inter-font text-sm font-light leading-relaxed text-neutral-600 md:text-base ">
              Discover the results of our collaborations.
            </p>
          </FadeUp>

          {/* Button */}

          <FadeUp delay={0.3}>
            <div className="flex justify-start md:justify-end">
              <a
                href="#"
                className="inter-font inline-flex items-center justify-center rounded-none bg-neutral-900 pr-24 pl-2 pt-8 pb-2 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-neutral-800"
              >
                See Our Projects
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
