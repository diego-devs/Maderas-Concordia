import Link from "next/link";
import { CategoryCard } from "@/components/category-card";
import { HeroBanner } from "@/components/hero-banner";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { ShowcaseGallery } from "@/components/showcase-gallery";
import { VideoCarousel } from "@/components/video-carousel";
import {
  collaborationVideos,
  featuredCategorySlugs,
  featuredProductSlugs,
  showcaseGalleryImages,
  teamGalleryImages,
} from "@/data/site";
import { getCategories, getProducts } from "@/lib/catalog";

export default function Home() {
  const categories = getCategories().filter((category) =>
    featuredCategorySlugs.includes(category.slug),
  );
  const featuredProducts = getProducts().filter((product) =>
    featuredProductSlugs.includes(product.slug),
  );

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-8 lg:px-8 lg:py-10">
      <HeroBanner
        eyebrow="Producción audiovisual, renta de equipo y postproducción"
        title="Historias visuales con criterio cinematográfico y ejecución profesional"
        description="Chupamirto Producciones desarrolla comerciales, videoclips, contenido de marca y proyectos narrativos con un flujo integral: concepto, producción, cámara, iluminación y entrega final." 
        primaryHref="/contacto"
        primaryLabel="Cotizar proyecto"
        secondaryHref="/productos"
        secondaryLabel="Ver producciones"
      />

      <section className="grid gap-6 rounded-[2rem] border border-white/20 bg-white/58 p-8 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.6)] backdrop-blur-2xl lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">Producción con respaldo técnico</p>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-950">
            Una productora pensada para filmar, resolver y entregar con nivel profesional.
          </h2>
          <p className="text-base leading-8 text-stone-700">
            Desde preproducción hasta post, el sitio presenta de forma clara las capacidades de Chupamirto: dirección de fotografía, operación de cámara, iluminación, renta de equipo y acompañamiento creativo para piezas que sí se terminan bien.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.5rem] border border-white/20 bg-white/60 p-5 backdrop-blur-xl">
            <p className="text-3xl font-semibold text-stone-950">12+</p>
            <p className="mt-2 text-sm text-stone-700">producciones y registros visuales destacados en galería</p>
          </div>
          <div className="rounded-[1.5rem] border border-white/20 bg-white/60 p-5 backdrop-blur-xl">
            <p className="text-3xl font-semibold text-stone-950">8</p>
            <p className="mt-2 text-sm text-stone-700">referencias visibles de equipo técnico y set</p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Servicios y capacidades"
          title="Producción, equipo y soluciones para proyectos audiovisuales exigentes"
          description="Organizamos la oferta en bloques claros para que una marca, agencia o director encuentre rápido el tipo de apoyo que necesita: ejecución en set, renta de equipo y resolución técnica." 
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      <ShowcaseGallery
        eyebrow="Producciones"
        title="Proyectos filmados, sets y momentos de producción"
        description="Una selección visual del trabajo realizado por Chupamirto Producciones en rodajes, sesiones y colaboraciones audiovisuales." 
        images={showcaseGalleryImages}
      />

      <VideoCarousel
        eyebrow="Reel y colaboraciones"
        title="Piezas en movimiento que muestran el ritmo de la productora"
        description="Explora una selección de videos publicados para ver dirección visual, tratamiento de cámara y variedad de proyectos." 
        videos={collaborationVideos}
      />

      <ShowcaseGallery
        eyebrow="Equipo y set"
        title="Herramientas de trabajo listas para producción profesional"
        description="Cámaras, monitoreo, accesorios y recursos técnicos que respaldan el nivel operativo de cada proyecto." 
        images={teamGalleryImages}
      />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Producciones destacadas"
          title="Algunas piezas y líneas de trabajo para comenzar la conversación"
          description="Cada tarjeta funciona como punto de entrada para conocer mejor el tipo de producción, estética y ejecución que puede desarrollar el equipo." 
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              categorySlug={product.categorySlugs[0]}
            />
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-white/15 bg-[rgba(17,24,39,0.72)] px-8 py-12 text-stone-50 shadow-[0_30px_80px_-45px_rgba(28,25,23,0.8)] backdrop-blur-2xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">Contacto directo</p>
            <h2 className="text-3xl font-semibold tracking-tight">¿Tienes una idea, un brief o una producción por levantar?</h2>
            <p className="text-base leading-8 text-stone-200">
              Escríbenos y conversemos sobre dirección visual, necesidades de equipo, logística de rodaje o postproducción. La respuesta ideal empieza con claridad desde el primer mensaje.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contacto"
              className="rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-amber-400"
            >
              Ir a contacto
            </Link>
            <Link
              href="/nosotros"
              className="rounded-full border border-white/25 bg-white/6 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/12"
            >
              Conocer la productora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
