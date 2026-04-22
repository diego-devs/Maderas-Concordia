import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategories, getCategoryBySlug, getProductBySlug, getProducts } from "@/lib/catalog";

export function generateStaticParams() {
  return getProducts().map((product) => ({
    categorySlug: product.categorySlugs[0],
    productSlug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categorySlug: string; productSlug: string }>;
}): Promise<Metadata> {
  const { productSlug } = await params;
  const product = getProductBySlug(productSlug);

  if (!product) {
    return { title: "Producto" };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ categorySlug: string; productSlug: string }>;
}) {
  const { categorySlug, productSlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  const product = getProductBySlug(productSlug);

  if (!category || !product || !product.categorySlugs.includes(category.slug)) {
    notFound();
  }

  const relatedCategories = getCategories().filter((item) => product.categorySlugs.includes(item.slug));

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-10 lg:px-8">
      <div className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
        <Link href="/productos" className="transition hover:text-stone-900">Productos</Link>
        <span>/</span>
        <Link href={`/productos/${category.slug}`} className="transition hover:text-stone-900">{category.name}</Link>
        <span>/</span>
        <span className="text-stone-900">{product.name}</span>
      </div>

      <section className="grid gap-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
        <div className="space-y-4">
          <div className="relative min-h-[340px] overflow-hidden rounded-[1.5rem] bg-stone-100">
            <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
          </div>
          {product.images.length > 1 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {product.images.slice(1).map((image, index) => (
                <div key={image} className="relative aspect-square overflow-hidden rounded-[1.25rem] bg-stone-100">
                  <Image src={image} alt={`${product.name} ${index + 2}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-800">Ficha de producto</p>
          <h1 className="text-4xl font-semibold tracking-tight text-stone-950">{product.name}</h1>
          <p className="text-base leading-8 text-stone-600">{product.description}</p>

          <div className="rounded-[1.5rem] bg-stone-100 p-5">
            <p className="text-sm font-semibold text-stone-900">Aplicación sugerida</p>
            <p className="mt-2 text-sm leading-7 text-stone-600">{product.shortDescription}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-stone-900">Categorías</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {relatedCategories.map((item) => (
                <Link
                  key={item.slug}
                  href={`/productos/${item.slug}`}
                  className="rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-700 transition hover:border-stone-900 hover:text-stone-900"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/contacto" className="rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-800">
              Cotizar este producto
            </Link>
            <Link href={`/productos/${category.slug}`} className="rounded-full border border-stone-300 px-5 py-3 text-sm font-semibold text-stone-700 transition hover:border-stone-900 hover:text-stone-900">
              Volver a categoría
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
