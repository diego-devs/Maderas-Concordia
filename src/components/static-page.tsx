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
      <section className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-800">Maderas Concordia</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-950">{title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-stone-600">{description}</p>
        <p className="mt-6 max-w-3xl text-base leading-8 text-stone-700">{intro}</p>
        {ctaHref && ctaLabel ? (
          <div className="mt-8">
            <Link href={ctaHref} className="rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-800">
              {ctaLabel}
            </Link>
          </div>
        ) : null}
      </section>
      <section className="grid gap-6">
        {sections.map((section) => (
          <article key={section.title} className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-stone-950">{section.title}</h2>
            <p className="mt-3 text-base leading-8 text-stone-600">{section.body}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
