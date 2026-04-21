import Link from "next/link";
import { companyInfo, navigation } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-stone-950 text-stone-200">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-400">Maderas Concordia</p>
          <h2 className="text-2xl font-semibold text-white">Materiales de madera para proyectos que sí importan.</h2>
          <p className="max-w-xl text-sm leading-7 text-stone-300">{companyInfo.description}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">Navegación</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {[...navigation.main, ...navigation.legal].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-stone-300 transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">Contacto</h3>
          <div className="mt-4 space-y-3 text-sm text-stone-300">
            <p>{companyInfo.address}</p>
            <p>{companyInfo.hours}</p>
            <p>
              <a href={companyInfo.phoneHref} className="transition hover:text-white">{companyInfo.phoneDisplay}</a>
            </p>
            <p>
              <a href={`mailto:${companyInfo.email}`} className="transition hover:text-white">{companyInfo.email}</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
