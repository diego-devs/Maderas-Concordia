"use client";

import Image from "next/image";
import { useMemo, useRef } from "react";

type ShowcaseGalleryProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  images: string[];
};

export function ShowcaseGallery({ title, eyebrow, description, images }: ShowcaseGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const duplicatedImages = useMemo(() => [...images, ...images], [images]);

  const scrollByAmount = (direction: "left" | "right") => {
    const element = containerRef.current;
    if (!element) return;

    const amount = Math.max(element.clientWidth * 0.8, 320);
    element.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative space-y-6 overflow-hidden rounded-[2rem] border border-white/20 bg-white/58 px-6 py-8 shadow-[0_30px_90px_-50px_rgba(15,23,42,0.65)] backdrop-blur-2xl sm:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.10),transparent_30%)]" />
      <div className="relative flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl space-y-3">
          {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-800">{eyebrow}</p> : null}
          <h2 className="text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">{title}</h2>
          {description ? <p className="text-base leading-8 text-stone-700">{description}</p> : null}
        </div>
        <div className="flex items-center gap-3 self-start lg:self-auto">
          <button
            aria-label="Desplazar galería a la izquierda"
            className="rounded-full border border-white/40 bg-white/75 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:border-amber-500 hover:text-amber-700"
            onClick={() => scrollByAmount("left")}
            type="button"
          >
            ←
          </button>
          <button
            aria-label="Desplazar galería a la derecha"
            className="rounded-full border border-white/40 bg-white/75 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:border-amber-500 hover:text-amber-700"
            onClick={() => scrollByAmount("right")}
            type="button"
          >
            →
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[rgba(255,255,255,0.92)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[rgba(255,255,255,0.92)] to-transparent" />
        <div
          ref={containerRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
        >
          {duplicatedImages.map((image, index) => (
            <article
              key={`${image}-${index}`}
              className="group relative h-[220px] min-w-[280px] snap-start overflow-hidden rounded-[1.75rem] bg-stone-100 shadow-[0_20px_45px_-30px_rgba(28,25,23,0.55)] sm:h-[260px] sm:min-w-[340px] lg:h-[320px] lg:min-w-[420px]"
            >
              <Image
                src={image}
                alt={`Producción ${index + 1}`}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 420px"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/55 via-stone-950/10 to-transparent opacity-75 transition duration-500 group-hover:opacity-90" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
