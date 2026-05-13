import Link from "next/link";

type HeroBannerProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function HeroBanner({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: HeroBannerProps) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-[linear-gradient(135deg,rgba(16,12,11,0.92)_0%,rgba(36,27,24,0.82)_48%,rgba(109,40,17,0.78)_100%)] px-6 py-16 text-stone-50 shadow-2xl backdrop-blur-xl lg:px-10 lg:py-20">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-15" />
      <div className="absolute -left-10 top-0 h-48 w-48 rounded-full bg-amber-400/18 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

      <div className="relative max-w-3xl space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-300">{eyebrow}</p>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
        <p className="max-w-2xl text-base leading-8 text-stone-200 sm:text-lg">{description}</p>
        <div className="flex flex-wrap gap-4">
          <Link
            href={primaryHref}
            className="rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-amber-400"
          >
            {primaryLabel}
          </Link>
          {secondaryHref && secondaryLabel ? (
            <Link
              href={secondaryHref}
              className="rounded-full border border-white/25 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/14"
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
