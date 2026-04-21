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
    <section className="overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_top_left,_rgba(217,119,6,0.18),_transparent_35%),linear-gradient(135deg,#1c1917_0%,#44403c_48%,#78350f_100%)] px-6 py-16 text-stone-50 shadow-2xl lg:px-10 lg:py-20">
      <div className="max-w-3xl space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-300">{eyebrow}</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
        <p className="max-w-2xl text-base leading-8 text-stone-200 sm:text-lg">{description}</p>
        <div className="flex flex-wrap gap-4">
          <Link href={primaryHref} className="rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-amber-400">
            {primaryLabel}
          </Link>
          {secondaryHref && secondaryLabel ? (
            <Link href={secondaryHref} className="rounded-full border border-stone-400 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10">
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
