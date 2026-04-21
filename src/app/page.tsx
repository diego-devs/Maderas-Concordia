import Link from "next/link";
import { CategoryCard } from "@/components/category-card";
import { HeroBanner } from "@/components/hero-banner";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { featuredCategorySlugs, featuredProductSlugs } from "@/data/site";
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
        eyebrow="Maderas, tableros y soluciones para obra"
        title="Materiales cálidos, resistentes y listos para cotizar"
        description="Una primera experiencia clara y navegable para explorar categorías, productos y contenidos esenciales de Maderas Concordia. Pensado para diseño, carpintería, construcción e industria."
        primaryHref="/productos"
        primaryLabel="Explorar productos"
        secondaryHref="/contacto"
        secondaryLabel="Hablar con un asesor"
      />

      <section className="grid gap-6 rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-800">Experiencia y asesoría</p>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-950">Maderas para proyectos que requieren criterio, no solo inventario.</h2>
          <p className="text-base leading-8 text-stone-600">Seleccionamos líneas para interiorismo, carpintería, construcción y soluciones industriales, con una presentación más clara que permita encontrar rápido lo importante y cotizar sin fricción.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.5rem] bg-stone-100 p-5">
            <p className="text-3xl font-semibold text-stone-950">+40</p>
            <p className="mt-2 text-sm text-stone-600">productos cargados en esta primera versión</p>
          </div>
          <div className="rounded-[1.5rem] bg-stone-100 p-5">
            <p className="text-3xl font-semibold text-stone-950">5</p>
            <p className="mt-2 text-sm text-stone-600">líneas principales para navegar mejor</p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Categorías destacadas"
          title="Encuentra la línea adecuada según tu proyecto"
          description="Agrupamos el catálogo en familias prácticas para que el sitio sea usable hoy: maderas finas, tableros, construcción, industria y aplicaciones de diseño."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Productos destacados"
          title="Una selección inicial para ver el catálogo en acción"
          description="Cada ficha cuenta con imagen, descripción breve y acceso directo a su categoría para una navegación sencilla y consistente."
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

      <section className="rounded-[2rem] bg-stone-900 px-8 py-12 text-stone-50 shadow-xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">Contacto directo</p>
            <h2 className="text-3xl font-semibold tracking-tight">¿Buscas una especie o formato específico?</h2>
            <p className="text-base leading-8 text-stone-300">Esta versión ya permite descubrir el catálogo y llegar rápido a contacto. El siguiente paso podrá ser enriquecer fichas, especificaciones y contenidos comerciales.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/contacto" className="rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-amber-400">
              Ir a contacto
            </Link>
            <Link href="/nosotros" className="rounded-full border border-stone-500 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10">
              Conocer la empresa
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
