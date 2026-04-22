import Link from "next/link";
import { navigation } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-[rgba(251,247,241,0.92)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <Link href="/" className="flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-800">
            Querétaro · Maderería
          </span>
          <span className="text-xl font-semibold text-stone-900">Maderas Concordia</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navigation.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-stone-700 transition hover:text-amber-800"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contacto"
          className="rounded-full bg-amber-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-700"
        >
          Solicitar cotización
        </Link>
      </div>
    </header>
  );
}
