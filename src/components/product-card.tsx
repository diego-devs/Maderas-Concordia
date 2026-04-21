import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/catalog";

export function ProductCard({ product, categorySlug }: { product: Product; categorySlug: string }) {
  return (
    <Link
      href={`/productos/${categorySlug}/${product.slug}`}
      className="group overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-3 p-6">
        <h3 className="text-xl font-semibold text-stone-950">{product.name}</h3>
        <p className="text-sm leading-7 text-stone-600">{product.shortDescription}</p>
        <p className="text-sm font-semibold text-amber-800">Ver producto</p>
      </div>
    </Link>
  );
}
