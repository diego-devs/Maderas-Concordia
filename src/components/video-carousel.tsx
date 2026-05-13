"use client";

import { useRef } from "react";

type VideoCarouselProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  videos: string[];
};

export function VideoCarousel({ title, eyebrow, description, videos }: VideoCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: "left" | "right") => {
    const element = containerRef.current;
    if (!element) return;

    const amount = Math.max(element.clientWidth * 0.9, 360);
    element.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative space-y-6 overflow-hidden rounded-[2rem] border border-white/15 bg-[rgba(17,24,39,0.72)] px-6 py-8 text-stone-50 shadow-[0_30px_80px_-45px_rgba(28,25,23,0.8)] backdrop-blur-2xl sm:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_32%)]" />
      <div className="relative flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl space-y-3">
          {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">{eyebrow}</p> : null}
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          {description ? <p className="text-base leading-8 text-stone-200">{description}</p> : null}
        </div>
        <div className="flex items-center gap-3 self-start lg:self-auto">
          <button
            aria-label="Desplazar videos a la izquierda"
            className="rounded-full border border-white/20 bg-white/8 px-4 py-2 text-sm font-semibold text-stone-100 transition hover:border-amber-400 hover:text-amber-300"
            onClick={() => scrollByAmount("left")}
            type="button"
          >
            ←
          </button>
          <button
            aria-label="Desplazar videos a la derecha"
            className="rounded-full border border-white/20 bg-white/8 px-4 py-2 text-sm font-semibold text-stone-100 transition hover:border-amber-400 hover:text-amber-300"
            onClick={() => scrollByAmount("right")}
            type="button"
          >
            →
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[rgba(17,24,39,0.92)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[rgba(17,24,39,0.92)] to-transparent" />
        <div ref={containerRef} className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2">
          {videos.map((videoId, index) => (
            <article
              key={videoId}
              className="group min-w-[320px] snap-start space-y-3 rounded-[1.75rem] border border-white/10 bg-white/6 p-3 transition duration-500 hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-[0_28px_65px_-35px_rgba(245,158,11,0.6)] sm:min-w-[460px]"
            >
              <div className="relative aspect-video overflow-hidden rounded-[1.25rem] bg-stone-800">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                  title={`Producción audiovisual ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="px-1 pb-1">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">Proyecto {index + 1}</p>
                <p className="mt-2 text-sm leading-6 text-stone-200">
                  Selección de piezas producidas por Chupamirto para campañas, narrativa audiovisual y colaboraciones de marca.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
