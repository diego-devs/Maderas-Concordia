import Link from "next/link";
import { buildStaticMetadata } from "@/components/static-page";
import { companyInfo } from "@/data/site";

export const metadata = buildStaticMetadata(
  "Contacto",
  "Contacto y datos principales de Maderas Concordia en Querétaro.",
);

export default function ContactoPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-10 lg:px-8">
      <section className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-800">Contacto</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-950">Hablemos de tu proyecto</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-stone-600">Esta versión no incluye formularios ni backend. Dejamos los accesos directos listos para que el sitio sea usable desde hoy.</p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <article className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-stone-950">Teléfono</h2>
          <p className="mt-3 text-sm leading-7 text-stone-600">Atención comercial y seguimiento de cotizaciones.</p>
          <a href={companyInfo.phoneHref} className="mt-4 inline-block text-lg font-semibold text-amber-800">{companyInfo.phoneDisplay}</a>
        </article>
        <article className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-stone-950">Correo</h2>
          <p className="mt-3 text-sm leading-7 text-stone-600">Para compartir requerimientos, medidas o referencias.</p>
          <a
            href={`mailto:${companyInfo.email}`}
            className="mt-4 inline-block max-w-full overflow-hidden text-ellipsis break-all text-lg font-semibold text-amber-800"
          >
            {companyInfo.email}
          </a>
        </article>
        <article className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-stone-950">Ubicación</h2>
          <p className="mt-3 text-sm leading-7 text-stone-600">Atención en Santiago de Querétaro con enfoque en proyectos residenciales, comerciales e industriales.</p>
          <p className="mt-4 text-lg font-semibold text-amber-800">{companyInfo.address}</p>
        </article>
      </section>

      <section className="rounded-[2rem] bg-stone-900 p-8 text-stone-50 shadow-xl">
        <h2 className="text-2xl font-semibold">Siguiente paso recomendado</h2>
        <p className="mt-3 max-w-2xl text-base leading-8 text-stone-300">Comparte la categoría o producto que te interesa y te ayudamos a aterrizar especie, presentación y disponibilidad para tu proyecto.</p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href={companyInfo.whatsappHref} className="rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-stone-950">Abrir WhatsApp</a>
          <Link href="/productos" className="rounded-full border border-stone-500 px-5 py-3 text-sm font-semibold text-white">Explorar catálogo</Link>
        </div>
      </section>
    </div>
  );
}
