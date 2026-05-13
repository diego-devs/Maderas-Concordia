type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-3 rounded-[1.75rem] border border-white/25 bg-white/55 px-6 py-6 shadow-[0_24px_70px_-45px_rgba(15,23,42,0.55)] backdrop-blur-2xl">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-800">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">{title}</h2>
      {description ? <p className="text-base leading-8 text-stone-700">{description}</p> : null}
    </div>
  );
}
