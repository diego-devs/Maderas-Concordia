import type { Metadata } from "next";
import Link from "next/link";

type StaticPageProps = {
  title: string;
  description: string;
  intro: string;
  sections: Array<{
    title: string;
    body: string;
  }>;
  ctaLabel?: string;
  ctaHref?: string;
};

export function buildStaticMetadata(title: string, description: string): Metadata {
  return { title, description };
}

export function StaticPage({
  title,
  description,
  intro,
  sections,
  ctaLabel,
  ctaHref,
}: StaticPageProps) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-10 lg:px-8">
      <section className="relative overflow-hidden rounded-[2rem] border border-white/25 bg-white/58 p-8 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.55)] backdrop-blur-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.10),transparent_28%)]" />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-800">Chupamirto Producciones</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-950">{title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-700">{description}</p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-800">{intro}</p>
          {ctaHref && ctaLabel ? (
            <div className="mt-8">
              <Link
                href={ctaHref}
                className="rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-800"
              >
                {ctaLabel}
              </Link>
            </div>
          ) : null}
        </div>
      </section>
      <section className="grid gap-6">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-[1.75rem] border border-white/25 bg-white/58 p-6 shadow-[0_24px_70px_-45px_rgba(15,23,42,0.55)] backdrop-blur-2xl"
          >
            <h2 className="text-2xl font-semibold text-stone-950">{section.title}</h2>
            <p className="mt-3 text-base leading-8 text-stone-700">{section.body}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
