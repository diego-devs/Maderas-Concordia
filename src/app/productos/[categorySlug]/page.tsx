import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { getCategories, getCategoryBySlug, getProductsByCategory } from "@/lib/catalog";

export function generateStaticParams() {
  return getCategories().map((category) => ({ categorySlug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}): Promise<Metadata> {
  const { categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return { title: "Categoría" };
  }

  return {
    title: category.name,
    description: category.metaDescription,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  const { categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(category.slug);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-10 lg:px-8">
      <section className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-800">Categoría</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-950">{category.name}</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-stone-600">{category.description}</p>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-stone-500">{category.audience}</p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/productos" className="rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:border-stone-900 hover:text-stone-900">
            Ver todas las categorías
          </Link>
          <Link href="/contacto" className="rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-800">
            Solicitar cotización
          </Link>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold text-stone-950">Productos de esta categoría</h2>
          <span className="text-sm text-stone-500">{products.length} productos</span>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} categorySlug={category.slug} />
          ))}
        </div>
      </section>
    </div>
  );
}
